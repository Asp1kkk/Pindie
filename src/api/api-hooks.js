import { useState, useEffect } from "react";
import { getGamesByCategory } from "./api-utils";

export const useGetDataByCategory = (category) => {
	const [data, setData] = useState(null);
	useEffect(() => {
		(async () => {
			const data = await getGamesByCategory(category);
			setData(data);
		})();
	}, []);
	return data;
};
