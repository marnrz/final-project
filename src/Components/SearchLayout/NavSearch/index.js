import { Link, createSearchParams, useSearchParams } from "react-router-dom";
import Style from "./style";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import ImageBasic from "../../../Utils/imageBase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilm,
  faHeadphones,
  faUsersRectangle,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { colorPallet } from "../../../Themes";

export default function NavSearch() {
  const menuItems = [
    {
      title: "Contact",
      icon: faHeadphones,
      link: "/contact-us",
    },
    {
      title: "Genres",
      icon: faUsersRectangle,
      link: "/genre/:name",
    },
    {
      title: "Series",
      icon: faFilm,
      link: "/movie",
    },
    {
      title: "Movies",
      icon: faVideo,
      link: "/movie",
    },
  ];

  function renderMenuItems() {
    return menuItems.map((item, index) => {
      return (
        <li key={index}>
          <Link to={item.link}>
            <span className="icon">
              <FontAwesomeIcon icon={item.icon} />
            </span>
            <h5>{item.title}</h5>
          </Link>
        </li>
      );
    });
  }
  return (
    <Style>
      <div className="navBar relative z-2">
        <div className="wrapper">
          <div className="nav-wrapper absolute flex">
            <div className="menu">
              <ul className="flex">{renderMenuItems()}</ul>
            </div>
            <Link to="/search">
              <Input
                className="input"
                placeholder="Search"
                prefix={
                  <SearchOutlined
                    style={{ color: `${colorPallet.primaryColor}` }}
                  />
                }
              />
            </Link>
          </div>
        </div>
      </div>
    </Style>
  );
}
