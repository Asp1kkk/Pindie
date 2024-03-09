import { getGamesByCategory } from "@/src/api/api-utils";
import CardList from "/src/components/CardList/CardList";

const New = async () => {
	const runnerCards = await getGamesByCategory("runner");
	return (
		<main className="main-inner">
			<CardList data={runnerCards} id="runner" title="Ранеры" />
		</main>
	);
};

export default New;
