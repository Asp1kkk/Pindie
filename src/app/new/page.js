"use client";

import { Preloader } from "@/src/components/Preloader/Preloader";
import CardList from "/src/components/CardList/CardList";
import { useGetDataByCategory } from "@/src/api/api-hooks";

const New = () => {
	const newCards = useGetDataByCategory("new");
	return (
		<main className="main-inner">
			{newCards ? <CardList data={newCards} id="new" title="Новинки" /> : <Preloader />}
		</main>
	);
};

export default New;
