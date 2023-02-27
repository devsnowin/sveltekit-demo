import { redirect, type ServerLoad } from '@sveltejs/kit';

export const load: ServerLoad = ({ locals }) => {
  if (!locals.pb.authStore.isValid) {
    throw redirect(303, '/login');
  }
};
