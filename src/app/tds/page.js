import CardList from "/src/components/CardList/CardList";
import { getGames } from "/src/data/data-utils";

const New = () => {
	const tdsCards = getGames("TDS");
	return (
		<main className="main-inner">
			<CardList data={tdsCards} id="TDS" title="TDS" />
		</main>
	);
};

export default New;
