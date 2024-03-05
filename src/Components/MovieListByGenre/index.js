import { Fragment, useEffect, useState } from "react";

export default function MovielListByGenre(props) {
    const {genre_id,title} = props;
    const[movieData, setMovieData] =  useState({data:[]});
    const [loading, setLoading] = useState(false);
    useEffect(()=> {
        getApi();
    },[])
    function renderFarm(){
        return movieData.data.map(({id,poster,title})=>{
            return (
                <li key={id}>
                    <img src={poster} alt={title}/>
                    <h2>{title}</h2>
                </li>
            )
        })
    }
    async function getApi(){
        try{
            setLoading(true);
            const response = await api.get(
                `genres/${genre_id}/movies`
            );
            setMovieData(response.data);
            setLoading(false);
        }catch(e) {
            setLoading(false);
        }
    }
    return(
        <Fragment>
            <div>
                MovielListByGenre
            </div>
        </Fragment>
    )
}