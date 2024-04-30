import styled from "styled-components";
import { colorPallet, defaultCSS } from "../../../Themes";

export const MsStyle = styled.div`
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
  .tabs {
    .device-tabs {
      gap: 150px;
      justify-content: center;
      border-bottom: 1px solid rgba(255, 255, 255, 0.25);
      .device-tab {
        background: transparent;
        border-color: transparent;
        padding-bottom: 20px;
        cursor: pointer;
        opacity: 0.3;
        &:hover {
          opacity: 1;
          border-bottom: 3px solid ${colorPallet.primaryColor};
        }
        .device-show {
          .device-pic {
            width: 500px;
            height: auto;
          }
        }
      }
    }
  }
`;
