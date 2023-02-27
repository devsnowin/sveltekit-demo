import type { ServerLoad } from '@sveltejs/kit';
import { serializeNonPoJOs } from '../lib/helper';

export const load: ServerLoad = ({ locals }) => {
  if (locals.user) {
    return { user: serializeNonPoJOs(locals.user) };
  }
};
