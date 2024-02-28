import CardList from "../components/CardList/CardList";
import { getGames } from "../data/data-utils";

const New = () => {
	const runnerCards = getGames("runner");
	return (
		<main className="main-inner">
			<CardList data={runnerCards} id="runner" title="Ранеры" />
		</main>
	);
};

export default New;
