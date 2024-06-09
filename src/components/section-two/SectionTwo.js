import React from "react";
import StartBtn from "../StartBtn";
import Image from "next/image";
import Thumbnail from "./Thumbnail";

function SectionTwo() {
	return (
		<div
			id="product"
			className="grid px-6 py-8 sm:px-14 sm:py-28 sm:flex md:px-20 md:py-28 lg:py-24 lg:px-36 md:justify-between"
		>
			<div className="grid gap-7 sm:gap-7 md:gap-11 items-center sm:w-2/4 md:w-2/3 lg:w-2/4">
				<div className="text-2xl pt-4 sm:pt-0 font-mono sm:text-3xl md:text-4xl tracking-normal sm:leading-snug">
					Communicate. Collaborate. Create.
				</div>
				<div className="sm:text-lg font-light sm:w-2/4 md:w-2/3">
					Atrox provides an effective and powerful way to manage your projects
				</div>
				<div>
					<StartBtn />
				</div>
				<div className="grid grid-cols-2 sm:flex gap-5 sm:gap-7 md:gap-8 lg:gap-12 pt-6">
					<Thumbnail source="/lock.svg" name="Speed &" name2="Security" />
					<Thumbnail
						source="/scale.svg"
						name="Flexibility &"
						name2="Scalability"
					/>
					<Thumbnail source="/collab.svg" name="Better" name2="Collaboration" />
				</div>
			</div>

			<div className="order-first sm:order-2 w-80 h-80 sm:w-80 md:w-96 md:h-auto lg:w-9/12 lg:h-96 relative">
				<Image src="/isha.svg" fill={true} alt="" />
			</div>
		</div>
	);
}

export default SectionTwo;
