import React from "react";
import Photo from "./Photo";
function SectionThree() {
	return (
		<div className="grid gap-4 sm:gap-6 items-center px-6 py-8 sm:py-28 sm:px-24">
			<div className="text-2xl sm:text-4xl tracking-normal font-mono leading-snug">
				What We Offer
			</div>
			<div className="font-light sm:w-2/4 leading-normal text-justify">
				I'm a paragraph. Click here to add your own text and edit me. It’s easy.
				Just click “Edit Text” or double click me to add your own content and
				make changes to the font.
			</div>
			<div className=" grid sm:flex gap-14 sm:gap-5 mt-8 sm:mt-16">
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
