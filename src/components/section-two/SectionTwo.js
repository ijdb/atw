import React from "react";
import StartBtn from "../StartBtn";
import Image from "next/image";
import Thumbnail from "./Thumbnail";

function SectionTwo() {
	return (
		<div className="grid gap-11 items-center py-32 px-24 w-2/3">
			<div className="text-4xl tracking-normal font-mono leading-snug">
				Communicate. Collaborate. Create.
			</div>
			<div className="text-lg font-light w-2/3">
				Atrox provides an effective and powerful way to manage your projects
			</div>
			<div>
				<StartBtn />
			</div>
			<div className="flex gap-12">
				<Thumbnail source="/lock.svg" name="Speed &" name2="Security" />
				<Thumbnail
					source="/scale.svg"
					name="Flexibility &"
					name2="Scalability"
				/>
				<Thumbnail source="/collab.svg" name="Better" name2="Collaboration" />
			</div>
		</div>
	);
}

export default SectionTwo;
