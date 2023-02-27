<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;

  const { user } = data;
</script>

<div class="w-full min-h-screen">
  <h1>Home Page</h1>
  <p>Logged in as {user?.name}</p>
  <a class="btn btn-primary" href="/register">Sign Up</a>
  <a class="btn btn-primary" href="/login">Sign In</a>
</div>
