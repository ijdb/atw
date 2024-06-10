import React from "react";
import Photo from "./Photo";
function SectionThree() {
	return (
		<div className="grid gap-4 sm:gap-6 items-center px-6 py-8 sm:px-14 sm:py-16 md:px-20 md:py-24 lg:py-28 lg:px-36">
			<div className="text-2xl sm:text-3xl md:text-4xl tracking-normal font-mono leading-snug">
				What We Offer
			</div>
			<div className="font-light sm:w-2/4 md:w-3/4 lg:w-2/4 leading-normal text-justify">
				I&apos;m a paragraph. Click here to add your own text and edit me.
				It&apos;s easy. Just click “Edit Text” or double click me to add your
				own content and make changes to the font.
			</div>
			<div className=" grid mt-8 sm:grid-cols-2 sm:justify-self-center lg:flex gap-14 sm:gap-12 md:gap-10 lg:gap-5 lg:mt-12 lg:grid-cols-4">
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
