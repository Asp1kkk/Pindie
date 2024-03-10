import { endPoints } from "./config";

export const getData = async (url) => {
	try {
		const res = await fetch(url);
		if (!res.ok) {
			return;
		}
		const data = await res.json();
		return data;
	} catch (error) {
		console.error(error);
		return;
	}
};

export const getGameById = async (id) => {
	const data = await getData(`${endPoints.games}/${id}`);
	return normalizeGame(data);
};

export const getGamesByCategory = async (category) => {
	const data = await getData(`${endPoints.games}?categories.name=${category}`);
	return data.map((item) => normalizeGame(item));
};

const normalizeGame = (game) => {
	return game
		? {
				...game,
				author: game.developer,
				heading: game.title,
				users: game.users_permissions_users,
				category: game.categoies,
				src: game.image,
			}
		: null;
};