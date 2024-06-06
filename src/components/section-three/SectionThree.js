import React from "react";
import Image from "next/image";
import Photo from "./Photo";
function SectionThree() {
	return (
		<div className="grid gap-6 items-center py-28 px-24">
			<div className="text-4xl tracking-normal font-mono leading-snug">
				What We Offer
			</div>
			<div className="font-light w-2/4 leading-normal text-justify">
				I'm a paragraph. Click here to add your own text and edit me. It’s easy.
				Just click “Edit Text” or double click me to add your own content and
				make changes to the font.
			</div>
			<div className="flex gap-5 mt-16">
				<Photo
					source="/img1.webp"
					title="Workflows That Work"
					desc="I'm a paragraph. Click here to add your own text and edit me. I’m a
					great place for you to tell a story and let your users know a little
					more about you."
				/>
				<Photo
					source="/img2.webp"
					title="All-In-One Solution"
					desc="I'm a paragraph. Click here to add your own text and edit me. I’m a
					great place for you to tell a story and let your users know a little
					more about you."
				/>
				<Photo
					source="/img3.webp"
					title="Comprehensive Customer Support"
					desc="I'm a paragraph. Click here to add your own text and edit me. I’m a
					great place for you to tell a story and let your users know a little
					more about you."
				/>
				<Photo
					source="/img4.webp"
					title="Smart Automation Tools"
					desc="I'm a paragraph. Click here to add your own text and edit me. I’m a
					great place for you to tell a story and let your users know a little
					more about you."
				/>
			</div>
		</div>
	);
}

export default SectionThree;
