import React from "react";
import StartBtn from "../StartBtn";
import Image from "next/image";

function SectionSix() {
	return (
		<div className="grid px-6 gap-10 pt-20 sm:px-14 md:px-20 sm:pt-24 md:pt-28 lg:px-36 justify-center text-center bg-pink-100">
			<div className="text-2xl sm:text-3xl md:text-4xl lg:max-w-4xl sm:tracking-tight font-mono leading-snug">
				Get Ready to Maximize Your Productivity With Our Workflow Solutions
			</div>
			<div className="justify-self-center">
				<StartBtn />
			</div>
			<div className="min-w-full h-60 sm:h-80 md:h-96 relative">
				<Image src="/paint.svg" alt="paint" fill={true} />
			</div>
		</div>
	);
}

export default SectionSix;
