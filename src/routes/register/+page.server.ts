import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
  register: async ({ locals, request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries([...formData]);

    console.log('User Data: ', data);

    try {
      // TODO: check if the user is exists
      const newUser = await locals.pb.collection('users').create(data);

      const { token, user } = await locals.pb
        .collection('users')
        .authWithPassword(newUser.email, newUser.password);

      // "logout" the last authenticated account
      locals.pb.authStore.clear();
    } catch (e) {
      const error = e as Error;
      console.log('Error: ', error);
      return {
        success: false,
        message: error.message,
      };
    }

    throw redirect(303, '/login');
  },
};
