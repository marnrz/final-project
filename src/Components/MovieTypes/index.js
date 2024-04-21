import { Fragment, useEffect, useState } from "react";
import { key } from "../../Utils/api";
import axios from "axios";

export default function MovieTypes({title}){
    const[popular, setPopular] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(()=>{
        getPopularApi()
    }, []);
    async function getPopularApi(){
        const response = await axios. get(
            `${key.baseURL}movie/popular?api_key=${key.apiKey}`
        )
    }
    // function renderPopular(){
    //     return popular.map(()=>{
    //         return (
    //             <li key={}>
    //                 <img src={}/>
    //                 <h2>{}</h2>
    //                 <p>{}</p>
    //             </li>
    //         )
    //     })
    // }
    return(
        <Fragment>
            <h2>{title}</h2>
            <div>
                {/* {loading ? <p>please waite...</p> : <ul>{renderFarm()}</ul>} */}
            </div>
        </Fragment>
    )
}