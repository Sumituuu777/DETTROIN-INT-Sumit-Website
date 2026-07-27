import AluminiMini from "../components/Homepage/AluminiMini";
import AwardsSection from "../components/Homepage/AwardsSection";
import Hero from "../components/Homepage/Hero/Hero";
import LatestUpdates from "../components/Homepage/LatestUpdates";
import MissionSection from "../components/Homepage/MissionSection";
import Recents from "../components/Homepage/Recents";
import WelcomeSection from "../components/Homepage/WelcomeSection/WelcomeSection";

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
    <LatestUpdates/>
    </>
  );
}