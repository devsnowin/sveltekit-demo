import type { Handle } from '@sveltejs/kit';
import PocketBase from 'pocketbase';

export const handle: Handle = async ({ event, resolve }) => {
  console.log('Here 👉🏼 src/hooks.server.ts :', '🤓');

  event.locals.pb = new PocketBase('http://127.0.0.1:8090');
  event.locals.pb.authStore.loadFromCookie(
    event.request.headers.get('cookie') || ''
  );

  try {
    // get an up-to-date auth store state by verifying and refreshing the loaded auth model (if any)
    if (event.locals.pb.authStore.isValid) {
      event.locals.user = event.locals.pb.authStore.model;
      await event.locals.pb.collection('users').authRefresh();
    }
  } catch (_) {
    // clear the auth store on failed refresh
    event.locals.pb.authStore.clear();
  }

  const response = await resolve(event);

  // send back the default 'pb_auth' cookie to the client with the latest store state
  response.headers.append(
    'set-cookie',
    event.locals.pb.authStore.exportToCookie()
  );

  return response;
};
