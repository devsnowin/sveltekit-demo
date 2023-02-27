// See https://kit.svelte.dev/docs/types#app

import type pocketbaseEs from 'pocketbase';
import type { Admin, Record } from 'pocketbase';

// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    interface Locals {
      pb: pocketbaseEs;
      user: Record | Admin | null;
    }
    // interface PageData {}
    // interface Platform {}
  }
}

export {};
