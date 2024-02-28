import Banner from "/src/components/Banner/Banner.jsx";
import CardList from "/src/components/CardList/CardList.jsx";
import Promo from "/src/components/Promo/Promo.jsx";
import { getGames } from "/src/data/data-utils.js";

const Home = () => {
	const popularCards = getGames("popular");
	const newCards = getGames("new");
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
