<script lang="ts">
  import type { Record } from 'pocketbase';
  import type { PageData } from './$types';
  import Header from '../components/Header.svelte';
  import '../app.postcss';

  export let data: PageData;

  const { user } = data;
</script>

<main class="max-w-4xl min-h-screen mx-auto px-8 flex flex-col items-center">
  <Header {user} />
  <slot />
</main>
