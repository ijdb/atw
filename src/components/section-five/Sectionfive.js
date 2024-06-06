import React from "react";

import Card from "./Card";

function Sectionfive() {
	return (
		<div className="grid gap-20 py-28 px-24">
			<div className="text-4xl tracking-normal font-mono leading-snug">
				What Our Clients Say
			</div>
			<div className="flex gap-14">
				<Card />
				<Card />
				<Card />
			</div>
		</div>
	);
}

export default Sectionfive;
