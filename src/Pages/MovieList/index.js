import { Fragment} from "react";
import SecondaryLayout from "../../Components/Layouts/SecondaryLayout";
import Trending from "../../Components/Trending";

export default function MovieList() {
    return(
        <Fragment>
            <SecondaryLayout>
                <Trending title = "Trending"/>
            </SecondaryLayout>
        </Fragment>
    )
}