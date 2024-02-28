import Banner from "./components/Banner/Banner.jsx";
import CardList from "./components/CardList/CardList.jsx";
import Promo from "./components/Promo/Promo.jsx";
import { getGames } from "./data/data-utils.js";

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
