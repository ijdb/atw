function StartBtn({ bgcolor, hoverbg, textcolor }) {
	return (
		<div
			className={`cursor-pointer text-lg font-medium rounded border border-black px-2 py-1 font-sans text-${textcolor} bg-${bgcolor} hover:bg-${hoverbg} hover:text-${bgcolor}`}
		>
			Get Started
		</div>
	);
}

export default StartBtn;
