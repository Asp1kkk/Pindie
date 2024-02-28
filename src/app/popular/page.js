import CardList from "/src/components/CardList/CardList";
import { getGames } from "/src/data/data-utils";

const New = () => {
	const popularCards = getGames("popular");
	return (
		<main className="main-inner">
			<CardList data={popularCards} id="popular" title="Популярные" />
		</main>
	);
};

export default New;
