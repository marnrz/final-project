import { useState } from "react";
import Style from "./style";
import { Button } from "antd";
import Tabs, { Tab, TabList, TabPanel } from "@atlaskit/tabs";

export default function MovieSection() {
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
      title: "Watch MaryMovie on the go",
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
      title: "Stream MaryMovie to your laptop or computer",
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
  // function renderFarm() {
  //   return tabsItem.map((item, index) => {
  //     return (
  //       <li key={index} className="device-tabs">
  //         <div className="tab-logo flex">
  //             <img src={item.logoI} alt="" />
  // {
  //   <img src={item.logoII} alt="" />
  //                <img src={item.logoIII} alt="" />
  //              <img src={item.logoIV} alt="" />
  //              <img src={item.logoV} alt="" />
  //              <img src={item.logoVI} alt="" />
  //           </div>
  //         </li>)
  //           )}
  return (
    <Style>
      <div>
        <h2 className="mb-7 center">
          Stream on all your favorite devices,any time, anywhere
        </h2>
        <div className="wrapper">
          <Tabs
            className="device-content"
            defaultTab="one"
            onChange={(tabId) => console.log(tabId)}
            id="default"
          >
            <TabList className="tab-list flex space-between">
              <Tab tabFor="one" className="device-tab">
                <img src="/assets/images/tvtabs.svg" />
                <p>Tv</p>
              </Tab>
              <Tab tabFor="two" className="device-tab">
                <img src="/assets/images/mobiletabs.svg" />
                <p>Phone, Tablet & Mobile</p>
              </Tab>
              <Tab tabFor="three" className="device-tab">
                <img src="/assets/images/laptoptabs.svg" />
                <p>Desktop & Laptop</p>
              </Tab>
            </TabList>
            <TabPanel tabId="one" className="device-show flex column">
              <h2>Enjoy on your TV</h2>
              <img
                className="device-pic"
                src="https://www.kanopy.com/kui-assets/img/device-tv.df3fcfc.png"
              />
            </TabPanel>
            <TabPanel tabId="two" className="device-show flex column">
              <h2>Watch MaryMovie on the go</h2>
              <img
                className="device-pic"
                src="https://www.kanopy.com/kui-assets/img/device-tablet-phone.978a2cf.png"
              />
            </TabPanel>
            <TabPanel tabId="three" className="device-show flex column">
              <h2>Stream MaryMovie to your laptop or computer</h2>
              <img
                className="device-pic"
                src="https://www.kanopy.com/kui-assets/img/device-laptop.c43f488.png"
              />
            </TabPanel>
          </Tabs>
          <ul className="tab-logo flex">{/* {tabsItem.map()} */}</ul>
          {/* <div className="tabs">{renderFarm()}</div> */}
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
