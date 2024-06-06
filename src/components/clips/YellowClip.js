import React from "react";
import Image from "next/image";

function YellowClip({ inverted = false }) {
	if (inverted) {
		return (
			<div className="h-20 w-full fill-yellow-450 relative">
				<Image
					src="/waves.svg"
					fill={true}
					alt="Picture of the author"
					style={{ transform: "rotate(180deg)" }}
				/>
			</div>
		);
	}
	return (
		<div className="h-20 w-full fill-yellow-450 relative">
			<Image src="/waves.svg" fill={true} alt="Picture of the author" />
		</div>
	);
}

export default YellowClip;
