import Link from "next/link";
import NavLink from "./NavLink";
import StartBtn from "../StartBtn";
export default function Navbar() {
	return (
		<div className="flex py-9 justify-between items-center">
			<div>
				<div className="font-bold text-lg">Atrox Technology</div>
				<div className="font-light">Communicate. Collaborate. Create</div>
			</div>
			<div className="flex gap-8 items-center">
				<Link href="#">
					<NavLink name="Home" />
				</Link>
				<Link href="#">
					<NavLink name="Product" />
				</Link>
				<Link href="#">
					<NavLink name="Testimonials" />
				</Link>
				<Link href="#">
					<NavLink name="Contact" />
				</Link>
				<StartBtn bgcolor="yellow-400" textcolor="black" hoverbg="black" />
			</div>
		</div>
	);
}
