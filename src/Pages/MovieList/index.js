import { Fragment } from "react";
import SecondaryLayout from "../../Components/Layouts/SecondaryLayout";
import MovieItem from "../../Components/MovieItem";

export default function MovieList() {
    return(
        <Fragment>
            <SecondaryLayout>
                <MovieItem/>
            </SecondaryLayout>
        </Fragment>
    )
}