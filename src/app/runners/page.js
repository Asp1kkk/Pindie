"use client";

import { Preloader } from "@/src/components/Preloader/Preloader";
import CardList from "/src/components/CardList/CardList";
import { useGetDataByCategory } from "@/src/api/api-hooks";

const Runner = () => {
	const runnerCards = useGetDataByCategory("runner");
	return (
		<main className="main-inner">
			{runnerCards ? <CardList data={runnerCards} id="runner" title="Ранеры" /> : <Preloader />}
		</main>
	);
};

export default Runner;
