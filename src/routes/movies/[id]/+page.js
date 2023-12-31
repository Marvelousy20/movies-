import { PUBLIC_BEARING } from "$env/static/public";

export async function load(loadEvent) {
  const { fetch, params } = loadEvent;

  const url = `https://api.themoviedb.org/3/movie/${params.id}?language=en-US`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${PUBLIC_BEARING}`,
    },
  };
  try {
    const res = await fetch(url, options);

    const data = await res.json();

    if (data) {
      return data;
    }
  } catch (error) {
    console.error(error);
  }
}
