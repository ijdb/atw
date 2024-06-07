import React from "react";
import StartBtn from "../StartBtn";
import Image from "next/image";
import Thumbnail from "./Thumbnail";

function SectionTwo() {
	return (
		<div id="product" className="flex py-32 px-24">
			<div className="grid gap-11 items-center w-2/3">
				<div className="text-4xl tracking-normal font-mono leading-snug">
					Communicate. Collaborate. Create.
				</div>
				<div className="text-lg font-light w-2/3">
					Atrox provides an effective and powerful way to manage your projects
				</div>
				<div>
					<StartBtn />
				</div>
				<div className="flex gap-12 pt-6">
					<Thumbnail source="/lock.svg" name="Speed &" name2="Security" />
					<Thumbnail
						source="/scale.svg"
						name="Flexibility &"
						name2="Scalability"
					/>
					<Thumbnail source="/collab.svg" name="Better" name2="Collaboration" />
				</div>
			</div>

			<div className="w-3/5 h-auto relative z-10">
				<Image src="/isha.svg" fill={true} alt="" />
			</div>
		</div>
	);
}

export default SectionTwo;
