import { Link } from "react-router-dom";

import { Button } from "antd";
import { Img } from "../../../../Themes";
import Style from "./style";

export default function Header({ po }) {
  return (
    <Style>
      <div className="header z-2 {po=='absolute' ? 'absolute' :''}">
        <div className="container-full">
          <div className="header-container flex space-between align-item">
            <div className="logo">
              <Link to="/">
                <Img src="/assets/images/logo.svg" alt="" />
              </Link>
            </div>
            <div className="sign">
              <Link to="/sign-up">
                <Button type="primary" size="middle">
                  Sign In
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Style>
  );
}
