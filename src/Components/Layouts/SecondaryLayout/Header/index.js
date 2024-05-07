import { Link } from "react-router-dom";
import Hstyle from "./style";
import { Button } from "antd";

export default function Header({ po }) {
  return (
    <Hstyle>
      <div className="header z-2">
        <div className="container-full">
          <div className="header-container flex space-between align-item">
            <div className="logo">
              <Link to="/">
                <img src="/assets/images/logo.svg" alt="" />
              </Link>
            </div>
            <div className="sign">
              <Link to="/sign-up">
                {" "}
                <Button type="primary" size="middle">
                  Sign In
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Hstyle>
  );
}
