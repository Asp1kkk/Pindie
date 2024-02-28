import CardList from "/src/components/CardList/CardList";
import { getGames } from "/src/data/data-utils";

const New = () => {
	const runnerCards = getGames("runner");
	return (
		<main className="main-inner">
			<CardList data={runnerCards} id="runner" title="Ранеры" />
		</main>
	);
};

export default New;
