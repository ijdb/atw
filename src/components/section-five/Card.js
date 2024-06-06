import React from "react";
import Circle from "./Circle";
import Image from "next/image";

function Card() {
	return (
		<div className="grid border-2 border-black rounded-2xl w-auto overflow-hidden relative">
			<div className="flex gap-3 pl-4 justify-start items-center h-9 bg-yellow-450 border-b-2 border-black ">
				<Circle />
				<Circle />
				<Circle />
			</div>
			<div className="p-10 font-light leading-normal">
				“I'm a testimonial. Click to edit me and add text that says something
				nice about you and your services. Let your customers review you and tell
				their friends how great you are.”
			</div>
			<div className="justify-self-end self-end px-6 py-8 font-medium ">
				Deena Levies,
				<br /> Mission Bay
			</div>
			<div className="w-24 h-24 -left-1 -bottom-1 absolute">
				<Image src="/flower.svg" fill={true} alt="" />
			</div>
		</div>
	);
}

export default Card;
