import React from "react";
import Circle from "./Circle";
import Image from "next/image";

function Card() {
	return (
		<div className="grid border-2 border-black rounded-2xl w-10/12 lg:w-3/12 sm:w-auto overflow-hidden relative">
			<div className="flex gap-3 pl-4 justify-start items-center h-8 sm:h-9 bg-yellow-450 border-b-2 border-black ">
				<Circle />
				<Circle />
				<Circle />
			</div>
			<div className="p-6 sm:p-4 md:p-6 lg:p-9 text-sm md:text-base font-light sm:font-thin lg:font-light leading-relaxed sm:leading-snug md:leading-normal">
				“I&apos;m a testimonial. Click to edit me and add text that says
				something nice about you and your services. Let your customers review
				you and tell their friends how great you are.”
			</div>
			<div className="justify-self-end self-end sm:self-start px-6 sm:px-2 lg:px-5 sm:text-xs md:text-sm lg:text-base py-6 lg:py-7 font-medium ">
				Deena Levies,
				<br /> Mission Bay
			</div>
			<div className="w-24 h-24 sm:w-16 sm:h-16 lg:w-24 lg:h-24 -left-1 -bottom-1 absolute">
				<Image src="/flower.svg" fill={true} alt="" />
			</div>
		</div>
	);
}

export default Card;
