"use client";

import { Preloader } from "@/src/components/Preloader/Preloader";
import CardList from "/src/components/CardList/CardList";
import { useGetDataByCategory } from "@/src/api/api-hooks";

const Shooter = () => {
	const shooterCards = useGetDataByCategory("shooter");
	return (
		<main className="main-inner">
			{shooterCards ? <CardList data={shooterCards} id="shooter" title="Шутеры" /> : <Preloader />}
		</main>
	);
};

export default Shooter;
