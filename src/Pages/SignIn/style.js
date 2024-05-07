import styled from "styled-components";
import { colorPallet, defaultCSS } from "../../Themes";

export const Style = styled.div`
  .sign-up-box {
    margin: 100px 50px;
    .sign-up-wrapper {
      .logo {
        Link {
          cursor: pointer;
          img {
            font-size: 20px;
          }
        }
      }
      .title-holder {
        width: 100%;
        max-width: 960px;
        text-align: center;
        margin-bottom: 40px;
        height: 2px;
        border-radius: 100%;
        background: ${colorPallet.primaryColor};
        display: flex;
        justify-content: center;
        align-content: center;
        align-items: center;
        .text {
          color: ${colorPallet.textColor};
          font-weight: 700;
          font-size: 200%;
          background: ${colorPallet.backgroundColor};
          padding: 10px;
          border-radius: 50%;
        }
      }
      .input {
        font-family: "PT Sans", sans-serif;
        font-weight: 400;
        font-style: normal;
        height: 40px;
        border-radius: ${defaultCSS.borderRadius};
      }
    }
    .btn {
      display: flex;
      justify-content: center;
      gap: 50px;
      button {
        padding: 0 40px;
      }
    }
  }
`;
export default Style;
