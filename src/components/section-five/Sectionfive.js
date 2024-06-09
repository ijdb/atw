import React from "react";

import Card from "./Card";

function Sectionfive() {
	return (
		<div
			id="testimonial"
			className="grid px-6 py-8 gap-10 sm:px-14 sm:py-20 sm:gap-14 md:gap-20 md:py-28 md:px-24"
		>
			<div className="text-2xl w-8/12 sm:text-3xl md:text-4xl tracking-normal font-mono leading-snug">
				What Our Clients Say
			</div>
			<div className="grid gap-10 sm:gap-3 sm:flex md:gap-14">
				<Card />
				<Card />
				<Card />
			</div>
		</div>
	);
}

export default Sectionfive;
