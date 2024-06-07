import Image from "next/image";
import React from "react";

function Footer() {
	return (
		<footer id="contact" className="grid grid-cols-2 bg-yellow-450 py-24 px-24">
			<div className="grid gap-5">
				<div className="font-bold text-3xl font-mono">Atrox Technology</div>
				<div className="text-2xl">Contact</div>
				<div className="font-light text-sm tracking-tight">
					519, JMD Megapolis
					<br /> Gurugram, Haryana
					<br /> +91 99999-99999
					<br />
					hello@atrox.io
				</div>
			</div>
			<div className="flex gap-5 justify-end items-end">
				<button class="h-7 w-7 font-semibold rounded relative">
					<Image src="/linkedin.svg" fill={true} />
				</button>
				<button class="h-7 w-7 font-semibold rounded relative">
					<Image src="/tweet.svg" fill={true} />
				</button>
				<button class="h-7 w-7 font-semibold rounded relative">
					<Image src="/fb.svg" fill={true} />
				</button>
			</div>
		</footer>
	);
}

export default Footer;
