import { Link } from "react-router-dom";
import Hstyle from "./style";
import { Button} from 'antd';
import { Img } from "../../../../Themes";

export default function Header ({po}) {
    return (
        <Hstyle>
            <div className="header z-2 {po=='absolute' ? 'absolute' :''}">
                <div className="container-full">
                    <div className="header-container flex space-between align-item">
                        <div className="logo">
                            <Link to="/"><Img src="/assets/images/logo.svg" alt=""/></Link>
                        </div>
                        <div className="sign">
                            <Button type="primary" size= "middle">Sign In</Button>
                        </div>
                    </div>
                </div>
            </div>
        </Hstyle>
    )
}