import GameNotFound from "@/app/components/GameNotFound/GameNotFound.jsx";
import Game from "@/app/components/GamePage/Game";
import { getGame } from "@/app/data/data-utils";

const GamePage = ({ params: { id } }) => {
	const game = getGame(id);
	return <main className="main-inner">{game ? <Game data={game} /> : <GameNotFound />}</main>;
};

export default GamePage;
