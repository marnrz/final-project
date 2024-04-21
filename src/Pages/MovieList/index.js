import { Fragment} from "react";
import SecondaryLayout from "../../Components/Layouts/SecondaryLayout";
import MovieTypes from "../../Components/MovieTypes";
import MovieItem from "../../Components/MovieItem";

export default function MovieList() {
    return(
        <Fragment>
            <SecondaryLayout>
                <MovieItem title = "All Movies" overviewTitle = "overview"/>
                <MovieTypes title= "popular"/>
                <MovieTypes title= "popular"/>
                <MovieTypes title= "popular"/>
            </SecondaryLayout>
        </Fragment>
    )
}