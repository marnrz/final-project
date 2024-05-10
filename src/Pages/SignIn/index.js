import { Button, Input } from "antd";

import Style from "./style";
import { UserOutlined } from "@ant-design/icons";
import { Img } from "../../Themes";
import { Link } from "react-router-dom";

export default function SignIn() {
  const inputItems = [
    {
      label: "User Name",
    },
    {
      label: "PassWord",
    },
    {
      label: "Re-Password",
    },
    {
      label: "Phone Number",
    },
    {
      label: "Your Email",
    },
  ];
  const renderInputForm = () => {
    return inputItems.map((item, index) => {
      return (
        <li key={index}>
          <div className="input-box mt-4">
            <Input
              className="input"
              placeholder={item.label}
              prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
            />
          </div>
        </li>
      );
    });
  };
  return (
    <Style>
      <div className="sign-up-box">
        <div className="wrapper">
          <div className="sign-up-wrapper">
            <div className="logo">
              <Link to="/">
                <Img src="/assets/images/logo.svg" alt="" />
              </Link>
            </div>
            <div className="title-holder">
              <h2 className="text">Sign Up</h2>
            </div>
            <ul>{renderInputForm()}</ul>
          </div>
          <div className="btn mt-5">
            <Button type="primary" size="large">
              Sign In
            </Button>
            <Button size="large">Sign Up</Button>
          </div>
        </div>
      </div>
    </Style>
  );
}
