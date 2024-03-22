"use client";

import { Preloader } from "@/src/components/Preloader/Preloader";
import CardList from "/src/components/CardList/CardList";
import { useGetDataByCategory } from "@/src/api/api-hooks";
import GameNotFound from "@/src/components/GameNotFound/GameNotFound";

const titles = {
	new: "Новинки",
	runner: "Ранеры",
	pixel: "Пиксельные",
	popular: "Популярные",
	shooter: "Шутеры",
	TDS: "TDS",
};

const Category = ({ params: { category } }) => {
	const cards = useGetDataByCategory(category);
	return (
		<main className="main-inner">
			{cards?.length == 0 ? (
				<GameNotFound />
			) : cards ? (
				<CardList data={cards} id={category} title={titles[category]} />
			) : (
				<Preloader />
			)}
		</main>
	);
};

export default Category;
