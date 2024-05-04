import styled from "styled-components";
import { colorPallet, defaultCSS } from "../../../Themes";

export const Style = styled.div`
  margin: ${defaultCSS.spaceSection};
  background: url(https://www.kanopy.com/kui-assets/img/Devices-Background-Gradient.46aa1c5.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  min-height: 700px;
  h2 {
    font-size: ${defaultCSS.fontsizeH2};
    color: ${colorPallet.textColor};
    padding-top: 50px;
  }
  .device-tabs {
    .tab-list {
      gap: 200 px;
    }
    .device-show {
      img {
        width: 500px;
        height: auto;
      }
    }
    /* .device-tab {
      background: transparent;
      border-color: transparent;
      padding-bottom: 20px;
      cursor: pointer;
      opacity: 0.3;
      &:hover {
        opacity: 1;
        border-bottom: 3px solid ${colorPallet.primaryColor};
      }
    } */
  }
`;
export default Style;
