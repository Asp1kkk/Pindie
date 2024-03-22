"use client";

import { useGetDataByCategory } from "@/src/api/api-hooks";
import CardList from "/src/components/CardList/CardList";
import { Preloader } from "@/src/components/Preloader/Preloader";

const New = () => {
	const popularCards = useGetDataByCategory("popular");
	return (
		<main className="main-inner">
			{popularCards ? <CardList data={popularCards} id="popular" title="Популярные" /> : <Preloader />}
		</main>
	);
};

export default New;
