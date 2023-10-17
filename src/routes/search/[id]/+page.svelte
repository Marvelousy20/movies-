<script>
  import MovieItem from "../../../components/MovieItem.svelte";
  export let data;
</script>

<div class="popular-movies grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-5">
  {#each data.searchedMovies as movie (movie.id)}
    <MovieItem {movie} />
  {/each}
</div>
