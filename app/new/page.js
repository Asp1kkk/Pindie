import CardList from "../components/CardList/CardList";
import { getGames } from "../data/data-utils";

const New = () => {
	const newCards = getGames("new");
	return (
		<main className="main-inner">
			<CardList data={newCards} id="new" title="Новинки" />
		</main>
	);
};

export default New;
