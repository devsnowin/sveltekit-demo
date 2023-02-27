import 'dotenv/config';
import type { PageServerLoad } from './$types';

export const load = (async ({ fetch }) => {
	const fetchMovies = async () => {
		const res = await fetch(
			`https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.MOVIES_DB_API_KEY}`
		);
		const data = await res.json();
		const results = data.results;

		return results;
	};

	return {
		movies: fetchMovies()
	};
}) satisfies PageServerLoad;
