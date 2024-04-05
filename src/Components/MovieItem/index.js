import { Fragment, useEffect, useState } from "react";
import api, { token } from "../../Utils/api";

export default function MovieItem() {
    const[data , setData] = useState ({result:[]});
    const[loading , setLoading] = useState (false);
    useEffect(()=>{
        request()
    },[]
    );
   async function request(){
    setLoading(true);
    try{
        const response= await api.get("discover/movie", { 
            headers: {
              'Authorization': 'Bearer ' + token
            } 
          });
        setData({result:response.data});
        setLoading(false);
    }catch(e){setLoading(false)};
    }
    function renderFarm(){
        return data.result.map(({backdrop_path, id,title,poster_path })=>{
            return (
                <li key={id}>
                    <img src={`${poster_path}`} alt={title}/>
                    <h3>{title}</h3>
                    <img src={`${backdrop_path}`} alt={title}/>
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