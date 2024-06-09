import React from "react";
import StartBtn from "../StartBtn";
import Image from "next/image";
import Thumbnail from "./Thumbnail";

function SectionTwo() {
	return (
		<div
			id="product"
			className="grid px-6 py-8 sm:px-14 sm:py-28 sm:flex md:py-32 md:px-24"
		>
			<div className="grid gap-7 sm:gap-7 md:gap-11 items-center sm:w-2/4 md:w-2/3">
				<div className="text-2xl pt-4 sm:pt-0 font-mono sm:text-3xl md:text-4xl tracking-normal sm:leading-snug">
					Communicate. Collaborate. Create.
				</div>
				<div className="sm:text-lg font-light sm:w-2/4 md:w-2/3">
					Atrox provides an effective and powerful way to manage your projects
				</div>
				<div classname="sm:w-1/4">
					<StartBtn fluid="true" />
				</div>
				<div className="grid grid-cols-2 sm:flex gap-5 sm:gap-7 md:gap-12 pt-6">
					<Thumbnail source="/lock.svg" name="Speed &" name2="Security" />
					<Thumbnail
						source="/scale.svg"
						name="Flexibility &"
						name2="Scalability"
					/>
					<Thumbnail source="/collab.svg" name="Better" name2="Collaboration" />
				</div>
			</div>

			<div className="order-first sm:order-2 w-80 h-80 sm:w-80 md:w-3/5 relative z-10">
				<Image src="/isha.svg" fill={true} alt="" />
			</div>
		</div>
	);
}

export default SectionTwo;
