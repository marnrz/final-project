import ActorsSection from "../../Components/ActorsSection";
import KidsSection from "../../Components/KidsSection";
import PrimaryLayout from "../../Components/Layouts/PrimaryLayout";
import MovieLibrary from "../../Components/MovieLibrary";
import MovieSection from "../../Components/MovieSection";
import Hero from "../../Components/Hero";

export default function HomePage () {
    return (
        <PrimaryLayout position="absolute">
            <Hero/>
            <MovieLibrary/>
            <MovieSection/>
            <KidsSection/>
            <ActorsSection/>
        </PrimaryLayout>
    )
}