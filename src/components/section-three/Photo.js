import React from "react";
import Image from "next/image";

function Photo({ source, title, desc }) {
	return (
		<div className="grid gap-5 sm:gap-2 md:mb-6 lg:mb-0">
			<div className="h-48 w-40 sm:w-52 sm:h-60 md:w-64 md:h-72 lg:h-80 relative border-2 border-black rounded-md overflow-hidden">
				<Image src={source} alt="animated" fill={true} />
			</div>
			<div className="grid gap-3 lg:grid-rows-2">
				<div className="text-xl w-4/5 font-semibold leading-normal tracking-wide sm:pt-3.5">
					{title}
				</div>
				<div className="font-light md:w-11/12 text-sm leading-normal tracking-wide">
					{desc}
				</div>
			</div>
		</div>
	);
}

export default Photo;
