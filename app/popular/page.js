import CardList from "../components/CardList/CardList";
import { getGames } from "../data/data-utils";

const New = () => {
	const popularCards = getGames("popular");
	return (
		<main className="main-inner">
			<CardList data={popularCards} id="popular" title="Популярные" />
		</main>
	);
};

export default New;
