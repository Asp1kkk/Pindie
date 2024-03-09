import { getGamesByCategory } from "@/src/api/api-utils";
import CardList from "/src/components/CardList/CardList";

const New = async () => {
	const popularCards = await getGamesByCategory("popular");
	return (
		<main className="main-inner">
			<CardList data={popularCards} id="popular" title="Популярные" />
		</main>
	);
};

export default New;
