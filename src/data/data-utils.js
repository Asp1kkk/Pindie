import { cards } from "./data.js";

export const getGames = (category) => {
	return cards.filter((game) => game.category.find((item) => item.name === category));
};

export const getGame = (id) => {
	return cards.find((game) => game.id == id);
};

const getData = async (url) => {
	try {
		const res = await fetch(url);
		if (!res.ok) {
			throw new Error("Ошибка получения данных");
		}
		const data = await res.json();
		return data;
	} catch (error) {
		console.error(error);
	}
};
