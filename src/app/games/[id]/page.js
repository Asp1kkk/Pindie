"use client";

import { getGameById } from "@/src/api/api-utils";
import GameNotFound from "/src/components/GameNotFound/GameNotFound.jsx";
import Game from "/src/components/GamePage/Game.jsx";
import { useEffect, useState } from "react";

const GamePage = ({ params: { id } }) => {
	const [game, setGame] = useState(null);
	useEffect(() => {
		try {
			(async () => {
				const data = await getGameById(id);
				setGame(data);
			})();
		} catch (error) {
			console.error(error);
		}
	}, []);
	return <main className="main-inner">{game ? <Game data={game} /> : <GameNotFound />}</main>;
};

export default GamePage;
