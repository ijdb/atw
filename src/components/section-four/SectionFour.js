import React from "react";
import Thumbnail from "../section-two/Thumbnail";
import Image from "next/image";

function SectionFour() {
	return (
		<div className="grid grid-cols-2 py-28 px-24">
			<div className="flex relative">
				<Image src="/pattern.svg" fill={true} alt="pattern" />
			</div>
			<div className="grid gap-7">
				<div className="text-4xl tracking-normal font-mono leading-snug">
					Built for Creatives, by Creatives
				</div>
				<div className="font-light leading-normal w-11/12">
					I'm a paragraph. Click here to add your own text and edit me. It’s
					easy. Just click “Edit Text” or double click me to add your own
					content and make changes to the font. I’m a great place for you to
					tell a story and let your users know a little more about you.
				</div>
				<div className="flex gap-12 pt-6">
					<Thumbnail source="/tool1.svg" name="All-In-One" name2="Toolkit" />
					<Thumbnail
						source="/tool2.svg"
						name="Integrated"
						name2="File Sharing"
					/>
					<Thumbnail source="/tool3.svg" name="Tool Design" name2="Freedom" />
				</div>
			</div>
		</div>
	);
}

export default SectionFour;
