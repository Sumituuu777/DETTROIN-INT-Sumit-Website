import AluminiMini from "../components/AluminiMini";
import AwardsSection from "../components/AwardsSection";
import Hero from "../components/Hero/Hero";
import MissionSection from "../components/MissionSection";
import WelcomeSection from "../components/WelcomeSection/WelcomeSection";

export default function Home() {
  return (
    <>
    <Hero/>
    <WelcomeSection/>
    <AwardsSection/>
    <MissionSection/>
    <AluminiMini/>
    </>
  );
}