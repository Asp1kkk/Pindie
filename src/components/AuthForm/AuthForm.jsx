"use client";

import { useState } from "react";
import Styles from "./AuthForm.module.css";

const AuthForm = ({ setAuth, close }) => {
	const [authData, setAuthData] = useState({ identifier: "", password: "" });
	const [userData, setUserData] = useState(null);
	const [message, setMessage] = useState({ status: null, text: null });

	const handleInput = (e, type) => {
		e.preventDefault();
		setAuthData((prev) => ({ ...prev, [type]: e.target.value }));
	};

	return (
		<form className={Styles["form"]}>
			<h2 className={Styles["form__title"]}>Авторизация</h2>
			<div className={Styles["form__fields"]}>
				<label className={Styles["form__field"]}>
					<span className={Styles["form__field-title"]}>Email</span>
					<input
						onInput={(e) => handleInput(e, "identifier")}
						value={authData.identifier}
						className={Styles["form__field-input"]}
						type="email"
						placeholder="email here!"
					/>
				</label>
				<label className={Styles["form__field"]}>
					<span className={Styles["form__field-title"]}>Пароль</span>
					<input
						onInput={(e) => handleInput(e, "password")}
						value={authData.password}
						className={Styles["form__field-input"]}
						type="password"
						placeholder="password here!"
					/>
				</label>
			</div>
			<div className={Styles["form__actions"]}>
				<button className={Styles["form__reset"]} type="reset">
					Очистить
				</button>
				<button type="submit" className={Styles["form__submit"]}>
					Войти
				</button>
			</div>
		</form>
	);
};

export default AuthForm;
