"use client";
import Link from "next/link";
import NavLink from "./NavLink";
import StartBtn from "../StartBtn";
import HamburgerIcon from "./HamburgerIcon";
import { useState } from "react";

export default function Navbar() {
	const [open, setOpen] = useState(false);
	const handleClick = () => {
		setOpen((prev) => !prev);
	};
	return (
		<div className="flex px-6 py-4 sm:px-14 sm:py-7 md:py-9 md:px-20 lg:px-24 justify-between items-center">
			<div>
				<div className="font-bold tracking-tight sm:tracking-normal text-lg font-mono">
					Atrox Technology
				</div>
				<div className="text-sm tracking-tight font-light">
					Communicate. Collaborate. Create
				</div>
			</div>
			<div className="hidden lg:flex md:gap-5 lg:gap-9 items-center">
				<Link href="#">
					<NavLink name="Home" />
				</Link>
				<Link href="#product">
					<NavLink name="Product" />
				</Link>
				<Link href="#testimonial">
					<NavLink name="Testimonials" />
				</Link>
				<Link href="#contact">
					<NavLink name="Contact" />
				</Link>
				<StartBtn type="primary" />
			</div>
			<div className="lg:hidden ">
				<HamburgerIcon click={handleClick} effect={open} />
				{open && (
					<div
						className="absolute grid right-0 z-10 mt-8 w-full origin-top-right 
					rounded-md bg-white ring-1 ring-black ring-opacity-5 
				    focus:outline-none  text-xl divide-y divide-gray-100 shadow-2xl"
					>
						<Link href="#">
							<NavLink name="Home" />
						</Link>
						<Link href="#product">
							<NavLink name="Product" />
						</Link>
						<Link href="#testimonial">
							<NavLink name="Testimonials" />
						</Link>
						<Link href="#contact">
							<NavLink name="Contact" />
						</Link>
					</div>
				)}
			</div>
		</div>
	);
}
