import { getGamesByCategory } from "@/src/api/api-utils";
import CardList from "/src/components/CardList/CardList";

const New = async () => {
	const tdsCards = await getGamesByCategory("TDS");
	return (
		<main className="main-inner">
			<CardList data={tdsCards} id="TDS" title="TDS" />
		</main>
	);
};

export default New;
