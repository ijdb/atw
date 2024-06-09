import React from "react";
import StartBtn from "../StartBtn";
import Image from "next/image";
import Thumbnail from "./Thumbnail";

function SectionTwo() {
	return (
		<div id="product" className="grid px-6 py-8 sm:flex sm:py-32 sm:px-24">
			<div className="grid gap-7 sm:gap-11 items-center sm:w-2/3">
				<div className="text-2xl pt-4 sm:pt-0 font-mono sm:text-4xl tracking-normal sm:leading-snug">
					Communicate. Collaborate. Create.
				</div>
				<div className="sm:text-lg font-light sm:w-2/3">
					Atrox provides an effective and powerful way to manage your projects
				</div>
				<div>
					<StartBtn />
				</div>
				<div className="grid grid-cols-2 sm:flex gap-5 sm:gap-12 pt-6">
					<Thumbnail source="/lock.svg" name="Speed &" name2="Security" />
					<Thumbnail
						source="/scale.svg"
						name="Flexibility &"
						name2="Scalability"
					/>
					<Thumbnail source="/collab.svg" name="Better" name2="Collaboration" />
				</div>
			</div>

			<div className="order-first sm:order-2 w-80 h-80 sm:w-3/5 relative z-10">
				<Image src="/isha.svg" fill={true} alt="" />
			</div>
		</div>
	);
}

export default SectionTwo;
