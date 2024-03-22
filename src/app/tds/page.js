"use client";

import { Preloader } from "@/src/components/Preloader/Preloader";
import CardList from "/src/components/CardList/CardList";
import { useGetDataByCategory } from "@/src/api/api-hooks";

const Tds = () => {
	const tdsCards = useGetDataByCategory("TDS");
	return (
		<main className="main-inner">
			{tdsCards ? <CardList data={tdsCards} id="TDS" title="TDS" /> : <Preloader />}
		</main>
	);
};

export default Tds;
