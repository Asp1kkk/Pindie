import { getData } from "../data/data-utils";
import { endPoints } from "./config";

export const getGameById = async (id) => {
	const data = await getData(`${endPoints.games}/${id}`);
	return data;
};
