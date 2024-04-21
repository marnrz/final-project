import {useEffect, useState } from "react";
import api, { key }  from "../../Utils/api";
import { Tstyle } from "./style";
import ImageBasic from "../../Utils/imageBase";
import { Button } from "antd";

export default function Trending({title, type}){
    const[moviesData, setMoviesData]= useState([]);
    const[loading, setLoading]= useState(false);
    
    useEffect(()=>{
        getApi("day");
    },[])
    async function getApi(time_window){
        try{
            setLoading(true);
            const response = await api.get(
                `trending/all/${time_window}`, {
                    params: {
                        api_key : key.apiKey,
                    }
                    });
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
                <li className="col-2" key={id}>
                   <img src = {`${ImageBasic.wUrl}${poster_path}`} alt={title}/>
                   <h2>{title}</h2>
                   <p>{release_date}</p>
                </li>
            )
        })
    }

    return(
        <Tstyle>
            <h2>{title}</h2>
            <span>
                <Button type="primary" size="small" onClick={()=>{getApi("day")}}>Day</Button>
                <Button type="default" size="small" onClick={()=>{getApi("week")}}>week</Button>
            </span>
            <h3>{type}</h3>
            {loading ? <p>please waite...</p> : <ul>{renderFarm()}</ul>}
        </Tstyle>
    )
}