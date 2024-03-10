import Footer from "/src/components/Footer/Footer.jsx";
import Header from "/src/components/Header/Header.jsx";
import "@/src/styles/global.css";

export const metadata = {
	title: "Pindie",
	description: "Портал инди-игр от студентов Яндекс Практикума",
};

export default function RootLayout({ children }) {
	return (
		<html lang="ru">
			<body>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}