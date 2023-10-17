const url = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMjE5YzBlNzZiNDNjNmM0ZmVlZmZhNDY2NzBkMTgxNSIsInN1YiI6IjY1MmM1ZTI0MzU4ZGE3NWI1YTJlMWVmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pVAPI3W6W-yk9x3PK9bNu3d_QX3Bms11L64B3OFdr7E",
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
