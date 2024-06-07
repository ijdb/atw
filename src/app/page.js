import Copyright from "@/components/Copyright";
import YellowClip from "@/components/clips/YellowClip";
import Footer from "@/components/footer-section/Footer";
import Navbar from "@/components/navbar/Navbar";
import Sectionfive from "@/components/section-five/Sectionfive";
import SectionFour from "@/components/section-four/SectionFour";
import SectionOne from "@/components/section-one/SectionOne";
import SectionSix from "@/components/section-six/SectionSix";
import SectionThree from "@/components/section-three/SectionThree";
import SectionTwo from "@/components/section-two/SectionTwo";

export default function Home() {
	return (
		<div className="border-t-8 border-black">
			<Navbar />
			<YellowClip />
			<SectionOne />
			{/* <YellowClip inverted /> */}
			<SectionTwo />
			<SectionThree />
			<SectionFour />
			<Sectionfive />
			<SectionSix />
			<Footer />
			<Copyright />
		</div>
	);
}
