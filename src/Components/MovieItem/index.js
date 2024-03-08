import { Fragment, useEffect, useState } from "react";
import api from "../../Utils/api";

export default function MovieItem() {
    const[data , setData] = useState ({result:[]});
    const[loading , setLoading] = useState (false);
    useEffect(
        request(),[]
    );
   async function request(){
    setLoading(true);
    try{
        const response= await api.get("discover/movie");
        setData(response.data);
        setLoading(false);
    }catch(e){setLoading(false)};
    }
    function renderFarm(){
        return data.result.map(({backdrop_path, id,title,poster_path })=>{
            return (
                <li key={id}>
                    <img src={`${poster_path}`} alt={title}/>
                    <h3>{title}</h3>
                </li>
            )
        })
    }
    return(
        <Fragment>
            <div>
               <ul>{renderFarm()}</ul>
            </div>
        </Fragment>
    )
}