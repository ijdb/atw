import React from "react";
import Image from "next/image";

function MediaIcon({ image }) {
	return (
		<button class="h-6 w-6 sm:h-7 sm:w-7 font-semibold rounded relative">
			<Image src={image} fill={true} />
		</button>
	);
}

export default MediaIcon;
