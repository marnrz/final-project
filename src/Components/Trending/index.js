import {useEffect, useState } from "react";
import api from "../../Utils/api";
import { Img } from "../../Themes";
import { Tstyle } from "./style";

export default function Trending({title}){
    const[trendingData, setTrendingData]= useState({result:[]});
    const[loading, setLoading]= useState(false);
    useEffect(()=>{
        getApi();
    },[])
    function renderFarm(){
        return trendingData.result.map(({backdrop_path, name, first_air_date})=>{
            return(
                <li >
                    <Img src={backdrop_path} alt={name}/>
                    <h2>{name}</h2>
                    <p>{first_air_date}</p>
                </li>
            )
        })
    }
    async function getApi(){
        try{
            setLoading(true);
            const response = await api.get(
                `movie/popular`
            );
            setTrendingData(response.result);
            setLoading(false)
        }catch(e){
            setLoading(false)
        }
    }
    
    return(
        <Tstyle>
            <h2>{title}</h2>
            {loading ? <p>please waite...</p> : <ul>{renderFarm()}</ul>}
        </Tstyle>
    )
}