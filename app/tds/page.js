import CardList from "../components/CardList/CardList";
import { getGames } from "../data/data-utils";

const New = () => {
	const tdsCards = getGames("TDS");
	return (
		<main className="main-inner">
			<CardList data={tdsCards} id="TDS" title="TDS" />
		</main>
	);
};

export default New;
