"use client";

import { useGetDataByCategory } from "../api/api-hooks";
import { Preloader } from "../components/Preloader/Preloader";
import Banner from "/src/components/Banner/Banner.jsx";
import CardList from "/src/components/CardList/CardList.jsx";
import Promo from "/src/components/Promo/Promo.jsx";

const Home = () => {
	const popularCards = useGetDataByCategory("popular");
	const newCards = useGetDataByCategory("new");
	return (
		<main className="main">
			<Banner />
			{popularCards ? <CardList data={popularCards} id="popular" title="Популярное" /> : <Preloader />}
			{newCards ? <CardList data={newCards} id="new" title="Новинки" /> : <Preloader />}
			<Promo />
		</main>
	);
};

export default Home;
