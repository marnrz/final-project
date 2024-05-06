import { Link } from "react-router-dom";
import Hstyle from "./style";
import { Input } from "antd";
import { UserOutlined, SearchOutlined } from "@ant-design/icons";

const menuItems = [
  {
    title: "Contact",
    icon: "fa-regular fa-headphones",
    link: "/contact-us",
  },
  {
    title: "Artists",
    icon: "fa-regular fa-users-rectangle",
    link: "#",
  },
  {
    title: "Series",
    icon: "fa-regular fa-film",
    link: "#",
  },
  {
    title: "Movies",
    icon: "fa-regular fa-video",
    link: "#",
  },
];

function renderFarm() {
  return menuItems.map((item, index) => {
    return (
      <li key={index}>
        <a href={item.link}>
          <h5>{item.title}</h5>
        </a>
      </li>
    );
  });
}
export default function Header() {
  return (
    <Hstyle>
      <div className="navBar relative z-2">
        <div className="wrapper">
          <div className="nav-wrapper absolute flex">
            <div className="menu">
              <ul className="flex">{renderFarm()}</ul>
            </div>
            <Input placeholder="Search" prefix={<SearchOutlined />} />
          </div>
        </div>
      </div>
    </Hstyle>
  );
}
