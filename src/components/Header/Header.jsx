"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Styles from "./Header.module.css";

import { headerNavigationContents } from "@/src/data/data";
import Overlay from "../Overlay/Overlay";
import Popup from "../Popup/Popup";
import AuthForm from "../AuthForm/AuthForm";

const Header = () => {
	const [popupIsOpened, setPopupIsOpened] = useState(false);
	const pathname = usePathname();

	const handlePopup = (e) => {
		e.stopPropagation();
		setPopupIsOpened((prev) => !prev);
	};
	return (
		<header className={Styles.header}>
			{pathname === "/" ? (
				<img className={`${Styles.logo} ${Styles.logo__image}`} src="/images/logo.svg" alt="Логотип Pindie" />
			) : (
				<Link href="/" className={Styles.logo}>
					<img className={Styles.logo__image} src="/images/logo.svg" alt="Логотип Pindie" />
				</Link>
			)}
			<nav className={Styles.menu}>
				<ul className={Styles.menu__list}>
					{headerNavigationContents.map(({ title, path }) => (
						<li key={title} className={Styles.menu__item}>
							<Link
								href={path}
								className={`${pathname === path && Styles["menu__link_active"]} ${Styles.menu__link}`}
							>
								{title}
							</Link>
						</li>
					))}
				</ul>
				<div className={Styles.auth}>
					<button onClick={handlePopup} className={Styles.auth__button}>
						Войти
					</button>
				</div>
			</nav>
			{popupIsOpened && (
				<Overlay handlePopup={handlePopup}>
					<Popup handlePopup={handlePopup}>
						<AuthForm></AuthForm>
					</Popup>
				</Overlay>
			)}
		</header>
	);
};

export default Header;
