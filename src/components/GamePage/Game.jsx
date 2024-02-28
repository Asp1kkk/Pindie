"use client";

import { useRouter } from "next/navigation";
import Styles from "./Game.module.css";

const Game = ({ data: { link, heading, author, description, users } }) => {
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
						<span className={Styles["about__accent"]}>{users.length}</span>
					</p>
					<button onClick={handleClick} className={`button ${Styles["about__vote-button"]}`}>
						Голосовать
					</button>
				</div>
			</section>
		</>
	);
};

export default Game;
