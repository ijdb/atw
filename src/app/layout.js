import "./globals.css";

export const metadata = {
	title: "Atrox Technology",
	description: "Atrox Technology",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
