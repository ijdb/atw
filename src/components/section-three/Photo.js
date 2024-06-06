import React from "react";
import Image from "next/image";

function Photo({ source, title, desc }) {
	return (
		<div className="grid gap-4 w-3/12">
			<div className="h-80 relative border-2 border-black rounded-md overflow-hidden">
				<Image src={source} alt="animated" fill={true} />
			</div>
			<div className="grid grid-rows-2">
				<div className="text-xl w-4/5 font-semibold leading-normal tracking-wide pt-3.5">
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
