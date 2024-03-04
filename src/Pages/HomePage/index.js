import PrimaryLayout from "../../Components/Layouts/PrimaryLayout";
import MovieLibrary from "../../Components/MovieLibrary";
import MovieSection from "../../Components/MovieSection";
import Hero from "../../Components/Hero";
import KidsSection from "../../Components/KidsSection";
import CastsSection from "../../Components/CastsSection";

export default function HomePage () {
    return (
        <PrimaryLayout position="absolute">
            <Hero/>
            <MovieLibrary/>
            <MovieSection/>
            <KidsSection/>
            <CastsSection/>
        </PrimaryLayout>
    )
}