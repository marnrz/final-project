import {useEffect, useState } from "react";
import api, { apiKey, baseURL } from "../../Utils/api";
import { Tstyle } from "./style";

export default function Trending({title, type}){
    const[moviesData, setMoviesData]= useState([]);
    const[loading, setLoading]= useState(false);
    
    useEffect(()=>{
        getApi("day");
    },[])
    async function getApi(days){
        try{
            setLoading(true);
            const response = await api.get(
                `trending/all/${days}?language=en-US`
            );
            setMoviesData(response.data.results);
            console.log(response)
            setLoading(false)
        }catch(e){
            setLoading(false)
        }
    }
    function renderFarm(){
        return moviesData.map(({id, poster_path, title, release_date})=>{
            return(
                <li key={id}>
                   <img src = {`https://image.tmdb.org/t/p/w500/${poster_path}`}/>
                   <h2>{title}</h2>
                   <p>{release_date}</p>
                </li>
            )
        })
    }
    
    return(
        <Tstyle>
            <h2>{title}</h2>
            <span>{type}</span>
            <button onClick={()=>{getApi("day")}}>Day</button>
            <button onClick={()=>{getApi("week")}}>week</button>
            {loading ? <p>please waite...</p> : <ul>{renderFarm()}</ul>}
        </Tstyle>
    )
}