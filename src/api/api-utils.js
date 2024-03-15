import { endPoints, BASE_URL } from "./config";

export const getData = async (url) => {
	try {
		const res = await fetch(url);
		if (!res.ok) {
			return;
		}
		const data = await res.json();
		return data;
	} catch (error) {
		return null;
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

export const authorize = async (authData) => {
	try {
		const response = await fetch(endPoints.auth, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(authData),
		});
		if (!response.ok) {
			throw new Error("Ошибка отправки данных :/");
		}
		const data = await response.json();
		return data;
	} catch (error) {
		return null;
	}
};

export const getMe = async (jwt) => {
	try {
		const response = await fetch(endPoints.me, {
			method: "GET",
			headers: { Authorization: `Bearer ${jwt}` },
		});
		if (!response.ok) {
			throw new Error("Ошибка получения данных!");
		}
		return await response.json();
	} catch (error) {
		console.error(error);
		return null;
	}
};

export const setJWT = (jwt) => {
	localStorage.setItem("jwt", jwt);
};

export const getJWT = () => {
	return localStorage.getItem("jwt");
};

export const removeJWT = () => {
	localStorage.removeItem("jwt");
};
