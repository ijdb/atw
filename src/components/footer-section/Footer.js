import React from "react";
import MediaIcon from "./MediaIcon";

function Footer() {
	return (
		<footer
			id="contact"
			className="grid px-6 py-8 sm:grid-cols-2 bg-yellow-450 sm:py-24 sm:px-24"
		>
			<div className="grid gap-4 sm:gap-5">
				<div className="font-bold text-xl sm:text-3xl font-mono">
					Atrox Technology
				</div>
				<div className="text-xl sm:text-2xl">Contact</div>
				<div className="font-light text-sm tracking-tight">
					519, JMD Megapolis
					<br /> Gurugram, Haryana
					<br /> +91 99999-99999
					<br />
					hello@atrox.io
				</div>
			</div>
			<div className="flex mt-9 gap-5 sm:justify-end sm:items-end">
				<MediaIcon image="/linkedin.svg" />
				<MediaIcon image="/tweet.svg" />
				<MediaIcon image="/fb.svg" />
			</div>
		</footer>
	);
}

export default Footer;
