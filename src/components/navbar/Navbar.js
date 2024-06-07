import Link from "next/link";
import NavLink from "./NavLink";
import StartBtn from "../StartBtn";
export default function Navbar() {
	return (
		<div className="flex py-9 px-24 justify-between items-center">
			<div>
				<div className="font-bold text-lg">Atrox Technology</div>
				<div className="font-light">Communicate. Collaborate. Create</div>
			</div>
			<div className="flex gap-8 items-center">
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
