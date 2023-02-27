import { redirect, type ServerLoad } from '@sveltejs/kit';
import type { Actions } from './$types';

export const load: ServerLoad = ({ locals }) => {
  if (locals.pb.authStore.isValid) {
    throw redirect(303, '/');
  }
};

export const actions: Actions = {
  login: async ({ locals, request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries([...formData]);

    console.log('User Data: ', data);

    try {
      // TODO: check if the user is exists
      const { token, record: user } = await locals.pb
        .collection('users')
        .authWithPassword(data.email.toString(), data.password.toString());
    } catch (e) {
      const error = e as Error;
      console.log('Error: ', error);
      return {
        success: false,
        message: error.message,
      };
    }

    throw redirect(303, '/');
  },
};
