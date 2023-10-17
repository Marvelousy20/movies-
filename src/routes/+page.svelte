<script>
  import { fly } from "svelte/transition";
  import MoviesList from "../components/MoviesList.svelte";
  import SearchMovies from "../components/SearchMovies.svelte";
  export let data;
</script>

<div in:fly={{ y: 50, duration: 500 }} out:fly={{ duration: 500 }}>
  <SearchMovies />
  <MoviesList {data} />
</div>
