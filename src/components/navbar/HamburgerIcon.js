import React from "react";

function HamburgerIcon({ click }) {
	return (
		<div className="group grid justify-items-center gap-2 mr-2" onClick={click}>
			<span class="h-0.5 w-8 rounded-full bg-black transition duration-300 ease-in-out group-hover:rotate-45 group-hover:translate-y-2.5"></span>
			<span class="h-0.5 w-8 rounded-full bg-black group-hover:scale-x-0 transition ease-in-out"></span>
			<span class="h-0.5 w-8 rounded-full bg-black transition duration-300 ease-in-out group-hover:-rotate-45 group-hover:-translate-y-2.5"></span>
		</div>
	);
}

export default HamburgerIcon;
