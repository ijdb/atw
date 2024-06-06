import React from "react";
import Image from "next/image";

function Thumbnail({ source, name, name2 }) {
	return (
		<div className="flex font-light text-sm gap-2 items-center">
			<div className="flex h-9 w-9 relative">
				<Image src={source} fill={true} alt="thumbnails" />
			</div>
			<div>
				{name} <br />
				{name2}
			</div>
		</div>
	);
}

export default Thumbnail;
