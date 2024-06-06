function StartBtn({ type, fluid }) {
	// text-${textcolor} bg-${bgcolor} hover:bg-${hoverbg} hover:text-${bgcolor}
	// console.log(textcolor, hoverbg, bgcolor);

	// text-${textcolor}
	const classToApply =
		type == "primary"
			? "text-black bg-yellow-450 hover:bg-black hover:text-yellow-450"
			: "text-white bg-black hover:bg-yellow-450 hover:text-black";

	const fluidWidth = fluid == true ? "" : "w-32";
	return (
		<div
			className={`cursor-pointer  text-lg text-center font-medium rounded border border-black px-2 py-1 font-sans duration-300
			 ${classToApply} ${fluidWidth}`}
		>
			Get Started
		</div>
	);
}

export default StartBtn;
