<script>
  export let movie;
  import MovieCard from "./MovieCard.svelte";
</script>

<MovieCard>
  <a href={"/movies/" + movie.id}>
    <img
      src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
      alt={movie.title}
    />
  </a>

  <div class="discription">
    <h2 class="font-semibold">{movie.title}</h2>
    <p class="text-sm">{movie.release_date}</p>
  </div>
</MovieCard>

<style>
  img {
    width: 100%;
    object-fit: cover;
    border-radius: 1rem;
    margin-bottom: 1rem;
  }
</style>
