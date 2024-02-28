import CardList from "/src/components/CardList/CardList";
import { getGames } from "/src/data/data-utils";

const New = () => {
	const pixelCards = getGames("pixel");
	return (
		<main className="main-inner">
			<CardList data={pixelCards} id="pixel" title="Пиксельные" />
		</main>
	);
};

export default New;
