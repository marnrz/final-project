import {useEffect, useState } from "react"
import { moviesapi } from "../../Utils/api";
import { Style } from "./style";


export default function Movies({title}){
    const [moviesData, setMoviesData] = useState({data:[],metadata:{
        "current_page": "1",
        "per_page": 1,
        "page_count": 1,
        "total_count": 1
    }});
    const[loading, setLoading]= useState(false);
    useEffect(()=>{
        getApi()
    },[])
    async function getApi(){
        setLoading(true)
        try{
            const response = await moviesapi.get(
                `movies`
            )
            setMoviesData({data:response.data.data})
            setLoading(false)
        }catch(e){
            setLoading(false)
        }
     }
     function renderFarm(){
        return moviesData.data.map(({id,poster,title,year})=>{
            return(
                <li className="col-2" key={id}>
                    <img src={poster} alt={title}/>
                    <h2>{title}</h2>
                    <p>{year}</p>
                </li>
            )
        })
     }
    return(
        <Style>
            <h2>{title}</h2>
            {loading ? "please waite..." : <ul>{renderFarm()}</ul>}
        </Style>
    )
}