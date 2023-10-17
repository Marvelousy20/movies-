<script>
  import MovieItem from "./MovieItem.svelte";
  export let data;
</script>

<div>
  <h3>Popular Movies</h3>
  <div class="popular-movies grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-5">
    {#each data.movies as movie (movie.id)}
      <MovieItem {movie} />
    {/each}
  </div>
</div>

<style>
  h3 {
    padding: 0 1rem;
    font-weight: 500;
  }
</style>
