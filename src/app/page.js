import { getGamesByCategory } from "../api/api-utils";
import Banner from "/src/components/Banner/Banner.jsx";
import CardList from "/src/components/CardList/CardList.jsx";
import Promo from "/src/components/Promo/Promo.jsx";

const Home = async () => {
	const popularCards = await getGamesByCategory("popular");
	const newCards = await getGamesByCategory("new");
	return (
		<main className="main">
			<Banner />
			<CardList data={popularCards} id="popular" title="Популярное" />
			<CardList data={newCards} id="new" title="Новинки" />
			<Promo />
		</main>
	);
};

export default Home;
