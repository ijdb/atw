import YellowClip from "@/components/clips/YellowClip";
import Navbar from "@/components/navbar/Navbar";
import SectionOne from "@/components/section-one/SectionOne";
import Image from "next/image";

export default function Home() {
	return (
		<div className="border-t-8 border-black">
			<Navbar />
			<YellowClip />
			<SectionOne />
			<YellowClip inverted />
		</div>
	);
}
