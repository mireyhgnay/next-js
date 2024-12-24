import { API_URL } from '../../../(home)/page';

async function getMovie(id: string) {
  console.log(`Fetching movies: ${Date.now()}`);
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}
async function getVideos(id: string) {
  console.log(`Fetching videos: ${Date.now()}`);
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]); // data fetching 병렬로 진행
  return (
    <>
      <h1>{movie.title}</h1>
    </>
  );
}
