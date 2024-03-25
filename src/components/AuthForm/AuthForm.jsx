"use client";

import { useEffect, useState, useContext } from "react";
import Styles from "./AuthForm.module.css";
import { AuthContext } from "@/src/context/app-context";
import { authorize, isResponseOk } from "@/src/api/api-utils";

const AUTH_DATA_TEMPLATE = { identifier: "", password: "" };

const AuthForm = ({ handlePopup }) => {
	const { user, login } = useContext(AuthContext);
	const [authData, setAuthData] = useState(AUTH_DATA_TEMPLATE);
	const [message, setMessage] = useState({ status: null, text: null });

	const handleInput = (e) => {
		e.preventDefault();
		setAuthData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const handleReset = () => setAuthData(AUTH_DATA_TEMPLATE);

	const handleSubmit = async (e) => {
		e.preventDefault();

		const userData = await authorize(authData);

		isResponseOk(userData)
			? (login(userData, userData.jwt), setMessage({ status: "success", text: "Вы авторизовались!" }))
			: setMessage({ status: "error", text: "Неверные почта или пароль" });
	};

	useEffect(() => {
		let timer;
		if (user) {
			timer = setTimeout(() => {
				setMessage({ status: null, text: null });
				handlePopup();
			}, 1000);
		}
		return () => clearTimeout(timer);
	}, [user]);

	return (
		<form onReset={handleReset} onSubmit={handleSubmit} className={Styles["form"]}>
			<h2 className={Styles["form__title"]}>Авторизация</h2>
			<div className={Styles["form__fields"]}>
				<label className={Styles["form__field"]}>
					<span className={Styles["form__field-title"]}>Email</span>
					<input
						onInput={handleInput}
						name="identifier"
						value={authData.identifier}
						className={Styles["form__field-input"]}
						type="email"
						placeholder="email here!"
					/>
				</label>
				<label className={Styles["form__field"]}>
					<span className={Styles["form__field-title"]}>Пароль</span>
					<input
						onInput={handleInput}
						name="password"
						value={authData.password}
						className={Styles["form__field-input"]}
						type="password"
						placeholder="password here!"
					/>
				</label>
			</div>
			{message.status && (
				<p className={`${Styles.form__message} ${message.status === "error" && Styles.error}`}>
					{message.text}
				</p>
			)}
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
