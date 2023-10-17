const url = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_BEARING}`,
  },
};

export async function load(loadEvent) {
  const { fetch } = loadEvent;

  try {
    const res = await fetch(url, options);

    const data = await res.json();
    const movies = data.results;

    if (data) {
      return {
        movies,
      };
    }
  } catch (error) {
    console.error(error);
  }
}
