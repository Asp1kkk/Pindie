"use client";

import { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { getJWT, getMe, removeJWT, setJWT } from "../api/api-utils";

export const App = ({ children }) => {
	const [isAuth, setIsAuth] = useState(false);
	const [user, setUser] = useState(null);
	const [token, setToken] = useState("");

	const login = (user, token) => {
		setIsAuth(true);
		setUser(user);
		setToken(token);
		setJWT(token);
	};

	const logout = () => {
		setIsAuth(false);
		setUser(null);
		setToken("");
		removeJWT();
	};

	const checkAuth = async () => {
		const token = getJWT();
		if (token) {
			const me = await getMe(token);
			if (me) {
				login(me, token);
			} else {
				logout();
			}
		}
	};

	useEffect(() => {
		(async () => await checkAuth())();
	}, []);

	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
};