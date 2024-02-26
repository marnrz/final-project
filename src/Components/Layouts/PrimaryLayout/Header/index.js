import Hstyle from "./style";
import { Button} from 'antd';

export default function Header ({po}) {
    return (
        <Hstyle>
            <div className="header w-full z-2 {po=='absolute' ? 'absolute' :''}">
                <div className="container-full">
                    <div className="header-container flex space-between align-item">
                        <div className="logo">
                            <img src="/assets/images/logo.svg" alt=""/>
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