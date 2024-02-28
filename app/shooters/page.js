import CardList from "../components/CardList/CardList";
import { getGames } from "../data/data-utils";

const New = () => {
	const shooterCards = getGames("shooter");
	return (
		<main className="main-inner">
			<CardList data={shooterCards} id="shooter" title="Шутеры" />
		</main>
	);
};

export default New;
