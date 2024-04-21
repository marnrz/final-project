import { Link } from "react-router-dom";
import Hstyle from "./style";
import { Button} from 'antd';

const menuItems = [
    {
        title:"Movies",
        icon:"<i classname='fa-regular fa-video'></i>",
        link:"#",
    },
    {
        title:"Series",
        icon:"<i classname='fa-regular fa-film'></i>",
        link:"#",
    },
    {
        title:"Artists",
        icon:"<i classname='fa-regular fa-users-rectangle'></i>",
        link:"#",
    },{
        title:"Contact",
        icon:"<i classname='fa-regular fa-headphones'></i>",
        link:"/contact-us",
    },
]
function renderFarm(){
    return menuItems.map((item, index)=>{
        return(
            <li key={index}>
                <link to={item.link}>
                    <i classname='fa-regular fa-headphones'></i>
                    <h5>{item.title}</h5>
                </link>
            </li>
        )
    })
}
export default function Header ({po}) {
    return (
        <Hstyle>
            <div className="header z-2">
                <div className="container-full">
                    <div className="header-container flex space-between align-item">
                        <div className="logo">
                            <Link to="/"><img src="/assets/images/logo.svg" alt=""/></Link>
                        </div>
                        <div className="sign">
                            <Button type="primary" size= "middle">Sign In</Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="navBar">
                <div className="container-full">
                    <div className="nav-container">
                        <div className="menu">
                            <ul>{renderFarm}</ul>
                        </div>
                        <input/>
                    </div>
                </div>
            </div>
        </Hstyle>
    )
}