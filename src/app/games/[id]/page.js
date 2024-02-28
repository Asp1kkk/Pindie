import GameNotFound from "/src/components/GameNotFound/GameNotFound.jsx";
import Game from "/src/components/GamePage/Game";
import { getGame } from "/src/data/data-utils";

const GamePage = ({ params: { id } }) => {
	const game = getGame(id);
	return <main className="main-inner">{game ? <Game data={game} /> : <GameNotFound />}</main>;
};

export default GamePage;
