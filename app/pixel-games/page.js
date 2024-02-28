import CardList from "../components/CardList/CardList";
import { getGames } from "../data/data-utils";

const New = () => {
	const pixelCards = getGames("pixel");
	return (
		<main className="main-inner">
			<CardList data={pixelCards} id="pixel" title="Пиксельные" />
		</main>
	);
};

export default New;
