import { Fragment, useEffect, useState } from "react";
import api, { key} from "../../Utils/api";
import ImageBasic from "../../Utils/imageBase";


export default function MovieItem({title, overviewTitle}) {
    const[movieItem , setMovieItem] = useState([]);
    const[loading , setLoading] = useState(false);
    useEffect(()=>{
        getMovieApi()
    },[])
    async function getMovieApi(){
        try{
        setLoading(true);
        const response = await api.get(`discover/movie`,{
            params : {
                api_key : key.apiKey
            }
        }
            );
        setMovieItem(response.data.results);
        setLoading(false)
        }
        catch(e){
        setLoading(false)
        }
    }
    function rendrFarm(){
        return movieItem.map(({poster_path, title:MovieTitle, id , vote_average, overview})=>{
            return(
                <li key={id}>
                    <img src= {`${ImageBasic.wUrl}${poster_path}`} alt={MovieTitle}/>
                    <div className="movie-info">
                        <h3>{MovieTitle}</h3>
                        <span className="vote-color">{vote_average}</span>
                    </div>
                    <div className="overview">
                        <h3>{overviewTitle}</h3>
                        <p>{overview}</p>
                    </div>
                </li>
            )
        })
    }
    return(
        <Fragment>
            <div>
                <h2>{title}</h2>
                {loading ? <p>please wait...</p> : <ul>{rendrFarm()}</ul>}
            </div>
        </Fragment>
    )
}