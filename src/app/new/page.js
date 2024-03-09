import { getGamesByCategory } from "@/src/api/api-utils";
import CardList from "/src/components/CardList/CardList";

const New = async () => {
	const newCards = await getGamesByCategory("new");
	return (
		<main className="main-inner">
			<CardList data={newCards} id="new" title="Новинки" />
		</main>
	);
};

export default New;
