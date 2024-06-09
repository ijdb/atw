import Link from "next/link";
import NavLink from "./NavLink";
import StartBtn from "../StartBtn";
export default function Navbar() {
	return (
		<div className="flex px-6 py-4 sm:px-14 sm:py-7 md:py-9 md:px-24 justify-between items-center">
			<div>
				<div className="font-bold tracking-tight sm:tracking-normal text-lg font-mono">
					Atrox Technology
				</div>
				<div className="text-sm tracking-tight font-light">
					Communicate. Collaborate. Create
				</div>
			</div>
			<div className="hidden md:flex gap-8 items-center">
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
		</div>
	);
}
