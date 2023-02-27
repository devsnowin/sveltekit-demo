<script lang="ts">
  export let data: any;
  const { movies } = data;
</script>

<div class="w-full min-h-screen">
  <h1 class="font-bold text-xl text-left my-4">Movies</h1>
  <ul>
    {#each movies as movie}
      <li class="my-8">
        <h4 class="font-bold">{movie.title}</h4>
        <p>{movie.overview}</p>
      </li>
    {/each}
  </ul>
</div>
