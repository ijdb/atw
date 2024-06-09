import React from "react";
import Thumbnail from "../section-two/Thumbnail";
import Image from "next/image";

function SectionFour() {
	return (
		<div className="grid px-6 py-8 sm:px-14 sm:py-16 sm:bg-pink-100 md:grid-cols-2 md:py-28 md:px-24">
			<div className="hidden md:flex relative">
				<Image src="/pattern.svg" fill={true} alt="pattern" />
			</div>
			<div className="grid gap-4 sm:gap-7">
				<div className="text-2xl w-10/12 sm:text-3xl md:text-4xl sm:tracking-normal font-mono sm:leading-snug">
					Built for Creatives, by Creatives
				</div>
				<div className="font-light leading-normal w-10/12 sm:w-11/12">
					I'm a paragraph. Click here to add your own text and edit me. It’s
					easy. Just click “Edit Text” or double click me to add your own
					content and make changes to the font. I’m a great place for you to
					tell a story and let your users know a little more about you.
				</div>
				<div className="grid gap-3 sm:flex sm:gap-12 pt-6">
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
