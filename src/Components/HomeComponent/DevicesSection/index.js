import { useState } from "react";
import Style from "./style";
import { Button } from "antd";

export default function MovieSection() {
  const [click, setClick] = useState({ tabsItem: [0] });
  const tabsItem = [
    {
      title: "Enjoy on your TV",
      image: "https://www.kanopy.com/kui-assets/img/device-tv.df3fcfc.png",
      icon: "/assets/images/tvtabs.svg",
      logoI: "/assets/images/appletv.svg",
      logoII: "/assets/images/Roku.svg",
      logoIII: "/assets/images/chrome.svg",
      logoIV: "/assets/images/androidtv.svg",
      logoV: "/assets/images/fire.svg",
      logoVI: "/assets/images/samsung.svg",
      name: "TV",
    },
    {
      title: "Watch Kanopy on the go",
      image:
        "https://www.kanopy.com/kui-assets/img/device-tablet-phone.978a2cf.png",
      icon: "/assets/images/mobiletabs.svg",
      logoI: "",
      logoII: "/assets/images/iphone.svg",
      logoIII: "/assets/images/ipad.svg",
      logoIV: "/assets/images/android.svg",
      logoV: "/assets/images/firetablet.svg",
      logoVI: "",
      name: "Phone, Tablet & Mobile",
    },
    {
      title: "Stream Kanopy to your laptop or computer",
      image: "https://www.kanopy.com/kui-assets/img/device-laptop.c43f488.png",
      icon: "/assets/images/laptoptabs.svg",
      logoI: "",
      logoII: "",
      logoIII: "",
      logoIV: "",
      logoV: "",
      logoVI: "",
      name: "Desktop & Laptop",
    },
  ];
  function renderFarm() {
    return tabsItem.map((item, index) => {
      return (
        <li key={index} className="device-tabs">
          <button
            className="device-tab"
            onClick={() => {
              setClick(click);
            }}
          >
            <img src={item.icon} alt="" />
            <span className="mt-1">{item.name}</span>
          </button>
          {click && (
            <div className="device-show flex">
              <h2>{item.title}</h2>
              <img className="device-pic" src={item.image} alt="" />
              <div className="tab-logo flex">
                <img src={item.logoI} alt="" />
                <img src={item.logoII} alt="" />
                <img src={item.logoIII} alt="" />
                <img src={item.logoIV} alt="" />
                <img src={item.logoV} alt="" />
                <img src={item.logoVI} alt="" />
              </div>
            </div>
          )}
        </li>
      );
    });
  }
  return (
    <Style>
      <div className="container">
        <div className="movie-container">
          <h2 className="mb-7 center">
            Stream on all your favorite devices,any time, anywhere
          </h2>
          <div className="tabs">{renderFarm()}</div>
          <p>Start watching the latest movies any time, anywhere</p>
          <Button type="primary" size="large" shape="default">
            {" "}
            GET STARTED
          </Button>
        </div>
      </div>
    </Style>
  );
}
