import { MsStyle } from "./style";
import { Button } from "antd";

const tabsItem =[ {
    icon : "/assets/images/tvtabs.svg",
    name : "TV",
},
{
    icon : "/assets/images/mobiletabs.svg",
    name : "Phone, Tablet & Mobile",
},
{
    icon : "/assets/images/laptoptabs.svg",
    name : "Desktop & Laptop",
},]
function renderFarm() {
    return tabsItem.map((item,index)=>{
        return (
            <button  key={index}>
                <img src={item.icon}/>
                <h5>{item.name}</h5>
            </button>
        )
    })  
}

export default function MovieSection() {
    return(
        <MsStyle>
            <h2>Stream on all your favorite devices,any time, anywhere</h2>
            <div className="tabs">
                <div className="deviceTabs flex">
                    {renderFarm()}
                </div>
            </div>
            <p>Start watching the latest movies any time, anywhere</p>
            <Button type="primary" size= "large" shape="default" className="flex"> GET STARTED</Button>
        </MsStyle>
    )
}