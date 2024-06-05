import Link from "next/link";
import NavLink from "./NavLink";
import StartBtn from "../StartBtn";
export default function Navbar() {
	return (
		<div className="flex py-6 justify-between">
			<div>
				<div className="font-bold text-lg">Atrox Technology</div>
				<div>Communicate. Collaborate. Create</div>
			</div>
			<div className="flex gap-6">
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
				<StartBtn />
			</div>
		</div>
	);
}
