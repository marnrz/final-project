import styled from "styled-components";
import { colorPallet, defaultCSS } from "../../../Themes";

export const Hstyle = styled.div`
  position: relative;
  .navBar {
    background-color: rgba(34, 34, 34, 0.9);
    height: 65px;
    width: ${defaultCSS.fullWidth};

    .nav-wrapper {
      top: 27px;
      right: 34px;
      .menu {
        ul {
          justify-content: space-between;
          gap: 30px;
          margin-right: 50px;
          li {
            padding: 5px;
            a {
              display: flex;
              gap: 5px;
              justify-content: center;
              align-items: center;
              direction: rtl;
              cursor: pointer;
              .icon {
                color: ${colorPallet.primaryColor};
                font-size: 15px;
              }
              h5 {
                color: ${colorPallet.primaryColor};
                font-size: 1.5rem;
                font-weight: normal;
              }
            }
          }
        }
      }
      .input {
        font-family: "PT Sans", sans-serif;
        font-weight: 400;
        font-style: normal;
        border-radius: ${defaultCSS.borderRadius};
        background-color: #000;
        border-color: ${colorPallet.primaryColor};
        color: ${colorPallet.primaryColor};
        min-width: 330px;
        &::placeholder {
          color: #898989;
          margin-left: 3px;
        }
      }
    }
  }
`;
export default Hstyle;
