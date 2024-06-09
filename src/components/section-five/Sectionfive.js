import React from "react";

import Card from "./Card";

function Sectionfive() {
	return (
		<div
			id="testimonial"
			className="grid px-6 py-8 gap-10  sm:gap-20 sm:py-28 sm:px-24"
		>
			<div className="text-2xl w-8/12 sm:text-4xl tracking-normal font-mono leading-snug">
				What Our Clients Say
			</div>
			<div className="grid sm:flex gap-14">
				<Card />
				<Card />
				<Card />
			</div>
		</div>
	);
}

export default Sectionfive;
