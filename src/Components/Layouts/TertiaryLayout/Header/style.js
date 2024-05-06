import styled from "styled-components";
import { colorPallet, defaultCSS } from "../../../../Themes";

export const Hstyle = styled.div`
  position: relative;
  .navBar {
    background-color: rgba(34, 34, 34, 0.9);
    height: 86px;
    width: ${defaultCSS.fullWidth};
    top: 60px;

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
              cursor: pointer;
              h5 {
                color: ${colorPallet.primaryColor};
                font-size: 1.5rem;
              }
            }
          }
        }
      }
    }
  }
`;
export default Hstyle;
