<script lang="ts">
  import type { Admin, Record } from 'pocketbase';

  export let user: Record | Admin | null;
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<!-- svelte-ignore a11y-missing-attribute -->
<!-- svelte-ignore a11y-label-has-associated-control -->
<div class="navbar bg-base-100">
  <div class="flex-1">
    <a class="btn btn-ghost normal-case text-xl" href="/">Sveltekit Demo</a>
  </div>
  <div class="flex-none">
    <ul class="menu menu-horizontal px-1">
      <li><a href="/shop" data-sveltekit-preload-data="hover">Shop</a></li>
      <li><a href="/movies" data-sveltekit-preload-data="hover">Movies</a></li>
    </ul>
    {#if user}
      <div class="dropdown dropdown-end">
        <label tabindex="0" class="btn btn-ghost btn-circle avatar">
          <div class="w-10 rounded-full">
            <img src="https://devsnow.in/me.png" />
          </div>
        </label>
        <ul
          tabindex="0"
          class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 border-2 border-primary rounded-box w-52"
        >
          <li>
            <a class="justify-between">
              {user?.name}
            </a>
          </li>
          <li><a>Settings</a></li>
          <form action="/logout" method="post">
            <button class="w-full btn btn-primary">Logout</button>
          </form>
        </ul>
      </div>
    {/if}
  </div>
</div>
