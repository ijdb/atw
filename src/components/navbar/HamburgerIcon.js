import React from "react";

function HamburgerIcon({ click, effect }) {
	return (
		<div className="group grid justify-items-center gap-2 mr-2" onClick={click}>
			<span
				class={`${
					effect && "rotate-45 translate-y-2.5"
				} h-0.5 w-8 rounded-full bg-black transition duration-400 ease-in-out `}
			></span>
			<span
				class={`${
					effect && "scale-x-0"
				} h-0.5 w-8 rounded-full bg-black transition duration-400 ease-in-out`}
			></span>
			<span
				class={`${
					effect && "-rotate-45 -translate-y-2.5"
				} h-0.5 w-8 rounded-full bg-black transition duration-400 ease-in-out `}
			></span>
		</div>
	);
}

export default HamburgerIcon;
