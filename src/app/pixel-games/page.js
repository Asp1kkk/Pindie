"use client";

import { Preloader } from "@/src/components/Preloader/Preloader";
import CardList from "/src/components/CardList/CardList";
import { useGetDataByCategory } from "@/src/api/api-hooks";

const Pixel = () => {
	const pixelCards = useGetDataByCategory("pixel");
	return (
		<main className="main-inner">
			{pixelCards ? <CardList data={pixelCards} id="pixel" title="Пиксельные" /> : <Preloader />}
		</main>
	);
};

export default Pixel;
