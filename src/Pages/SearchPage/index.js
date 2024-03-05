import {Input } from "antd";
import PrimaryLayout from "../../Components/Layouts/PrimaryLayout";
import Style from "./style";
import { useState } from "react";
import api from "../../Utils/api";
import { SearchOutlined} from '@ant-design/icons';
// import { useSearchParams, createSearchParams } from "react-router-dom";

export default function SearchPage() {
    const [data, setData] = useState({data:[]});
    // const [SearchParams, setSearchParams] = useSearchParams;
    const[loading, setLoading] = useState(false);
    const onType = async(event)=>{
        console.log(event.target.value);
        try {
            setLoading(true);
            const response = await api.get("movies", {
                params: {
                    q: event.target.value,
                }
            });
            // setSearchParams(createSearchParams({
            //     q: event.target.value,
            // }))
            setData(response.data);
            setLoading(false);
        } catch (error) {
            setLoading(false);
        }
    }

    return(
        <Style>
            <PrimaryLayout position="absolute">
            <div className="hero">
                <div className="hero-content flex justify-center align-item relative z-2 ">
                    <div className="col-8">
                        <h1 className="mb-7 center"> Millions of movies, TV shows and people to discover. Explore now.</h1>
                        <div className=" search-box flex relative">
                            <Input placeholder="Search for a movie, tv show, person......" size="large" onChange={onType}  prefix={<SearchOutlined/>}/>
                            {/* <Search placeholder="Search for a movie, tv show, person......" size="large" onChange={onType}/> */}
                        </div>
                    </div>
                </div>
            </div>
            </PrimaryLayout>
        </Style>
    )
}