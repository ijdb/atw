import React from "react";

function SectionOne() {
	return (
		<div className="grid px-6 py-8 gap-4 items-center bg-yellow-450 sm:grid-cols-2 sm:px-24 sm:py-36 ">
			<div className="text-2xl w-11/12  sm:text-4xl sm:max-w-md tracking-normal font-mono leading-normal">
				With the Right Software, Great Things Can Happen
			</div>
			<div className="text-sm font-extralight leading-relaxed sm:font-light sm:tracking-wide">
				I'm a paragraph. Click here to add your own text and edit me. It’s easy.
				Just click “Edit Text” or double click me to add your own content and
				make changes to the font. Feel free to drag and drop me anywhere you
				like on your page. I’m a great place for you to tell a story and let
				your users know a little more about you.
			</div>
		</div>
	);
}

export default SectionOne;
