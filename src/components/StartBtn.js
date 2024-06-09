function StartBtn({ type, title = "Get Started", fluid = false }) {
	const classToApply =
		type == "primary"
			? "text-black bg-yellow-450 hover:bg-black hover:text-yellow-450"
			: "text-white bg-black hover:bg-yellow-450 hover:text-black";

	const fluidWidth = fluid == true ? "" : "w-40 max-w-40";
	return (
		<div
			className={`cursor-pointer sm:text-lg text-center font-medium rounded 
				border border-black sm:px-2 py-1 font-mono duration-300 
			 ${classToApply} ${fluidWidth}`}
		>
			{title}
		</div>
	);
}

export default StartBtn;
