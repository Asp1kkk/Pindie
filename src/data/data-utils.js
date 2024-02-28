import { cards } from "./data.js";

export const getGames = (category) => {
	return cards.filter((game) => game.category.find((item) => item.name === category));
};

export const getGame = (id) => {
	return cards.find((game) => game.id == id);
};
