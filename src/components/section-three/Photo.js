import React from "react";
import Image from "next/image";

function Photo({ source, title, desc }) {
	return (
		<div className="grid gap-5 sm:gap-2 md:w-3/12">
			<div className="h-48 w-40 sm:w-52 sm:h-60 md:h-80 relative border-2 border-black rounded-md overflow-hidden">
				<Image src={source} alt="animated" fill={true} />
			</div>
			<div className="grid gap-3 md:grid-rows-2">
				<div className="text-xl w-4/5 font-semibold leading-normal tracking-wide sm:pt-3.5">
					{title}
				</div>
				<div className="font-light text-sm leading-normal tracking-wide">
					{desc}
				</div>
			</div>
		</div>
	);
}

export default Photo;
