import PrimaryLayout from "../../Components/Layouts/PrimaryLayout";
import MovieLibrary from "../../Components/HomeComponent/MovieLibrary";
import Hero from "../../Components/HomeComponent/Hero";
import KidsSection from "../../Components/HomeComponent/KidsSection";
import CastsSection from "../../Components/HomeComponent/CastsSection";
import DevicesSection from "../../Components/HomeComponent/DevicesSection";

import FreqQuestions from "../../Components/HomeComponent/FreqQuestions";

export default function HomePage() {
  return (
    <PrimaryLayout position="absolute">
      <Hero />
      <MovieLibrary />
      {/* <DevicesSection /> */}
      <KidsSection />
      <CastsSection />
      <FreqQuestions />
    </PrimaryLayout>
  );
}
