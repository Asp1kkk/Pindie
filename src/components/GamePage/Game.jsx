"use client";

import { useRouter } from "next/navigation";
import Styles from "./Game.module.css";
import { useEffect, useState } from "react";
import { getJWT, getMe, removeJWT } from "@/src/api/api-utils";

const Game = ({ data: { link, heading, author, description, users } }) => {
	const [isAuthorized, setIsAuthorized] = useState(false);

	useEffect(() => {
		(async () => {
			const jwt = getJWT();
			if (jwt) {
				if (await getMe(jwt)) {
					setIsAuthorized(true);
				} else {
					setIsAuthorized(false);
					removeJWT();
				}
			}
		})();
	}, []);

	const router = useRouter();

	const handleClick = () => {
		router.push("/auth");
	};

	return (
		<>
			<section className={Styles["game"]}>
				<iframe className={Styles["game__iframe"]} src={link} />
			</section>
			<section className={Styles["about"]}>
				<h2 className={Styles["about__title"]}>{heading}</h2>
				<div className={Styles["about__content"]}>
					<p className={Styles["about__description"]}>{description}</p>
					<div className={Styles["about__author"]}>
						<p>
							Автор:
							<span className={Styles["about__accent"]}>{author}</span>
						</p>
					</div>
				</div>
				<div className={Styles["about__vote"]}>
					<p className={Styles["about__vote-amount"]}>
						За игру уже проголосовали:
						<span classNamse={Styles["about__accent"]}>{users.length}</span>
					</p>
					<button
						disabled={!isAuthorized}
						onClick={handleClick}
						className={`button ${Styles["about__vote-button"]}`}
					>
						Голосовать
					</button>
				</div>
			</section>
		</>
	);
};

export default Game;
