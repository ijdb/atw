import React from "react";
import StartBtn from "../StartBtn";
import Image from "next/image";

function SectionSix() {
	return (
		<div className="grid gap-10 pt-28 px-24 justify-center text-center bg-pink-100">
			<div className="text-4xl tracking-tight font-mono leading-snug">
				Get Ready to Maximize Your Productivity
				<br /> With Our Workflow Solutions
			</div>
			<div className="justify-self-center">
				<StartBtn />
			</div>
			<div className="min-w-full h-96 relative">
				<Image src="/paint.svg" alt="" fill={true} />
			</div>
		</div>
	);
}

export default SectionSix;
