import AluminiMini from "../components/AluminiMini";
import AwardsSection from "../components/AwardsSection";
import Hero from "../components/Hero/Hero";
import MissionSection from "../components/MissionSection";
import Recents from "../components/Recents";
import WelcomeSection from "../components/WelcomeSection/WelcomeSection";

export default function Home() {
  return (
    <>
    <Hero/>
    <WelcomeSection/>
    <AwardsSection/>
    <MissionSection/>
    <AluminiMini/>
    <hr className="text-gray-300 mt-10"/>
    <Recents/>
    </>
  );
}