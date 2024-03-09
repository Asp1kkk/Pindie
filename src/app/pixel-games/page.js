import { getGamesByCategory } from "@/src/api/api-utils";
import CardList from "/src/components/CardList/CardList";

const New = async () => {
	const pixelCards = await getGamesByCategory("pixel");
	return (
		<main className="main-inner">
			<CardList data={pixelCards} id="pixel" title="Пиксельные" />
		</main>
	);
};

export default New;
