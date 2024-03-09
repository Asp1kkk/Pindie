import { getGamesByCategory } from "@/src/api/api-utils";
import CardList from "/src/components/CardList/CardList";

const New = async () => {
	const shooterCards = await getGamesByCategory("shooter");
	return (
		<main className="main-inner">
			<CardList data={shooterCards} id="shooter" title="Шутеры" />
		</main>
	);
};

export default New;
