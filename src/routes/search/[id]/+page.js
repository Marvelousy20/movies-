export async function load(loadEvent) {
  const { fetch, params } = loadEvent;

  const url = `https://api.themoviedb.org/3/search/movie?query=${params.id}&include_adult=false&language=en-US&page=1`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_BEARING}`,
    },
  };
  try {
    const res = await fetch(url, options);

    const data = await res.json();
    const searchedMovies = data.results;

    if (data) {
      return { searchedMovies };
    }
  } catch (error) {
    console.error(error);
  }
}
