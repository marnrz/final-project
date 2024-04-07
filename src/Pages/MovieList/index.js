import { Fragment} from "react";
import SecondaryLayout from "../../Components/Layouts/SecondaryLayout";
import Movies from "../../Components/Movies";
import Trending from "../../Components/Trending";

export default function MovieList() {
    return(
        <Fragment>
            <SecondaryLayout>
                <Movies title = "All Movies"/>
                <Trending title = "Trending" type=" movies"/>
                {/* <Trending  type=" TV shows"/>
                <Trending  type=" people"/> */}
            </SecondaryLayout>
        </Fragment>
    )
}