import styled from "styled-components";
import { colorPallet, defaultCSS } from "../../../Themes";

export const Style = styled.div`
  padding: ${defaultCSS.spaceSection};
  margin-top: 100px;
  .library {
    .library-container {
      width: ${defaultCSS.fullWidth};
      max-width: 1300px;
      margin: auto;
      .library-content {
        span {
          color: rgba(229, 9, 20, 1);
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.6px;
          text-transform: uppercase;
        }
        h1 {
          color: ${colorPallet.textColor};
          font-size: 4.3rem;
          letter-spacing: -0.5px;
        }
        p {
          color: ${colorPallet.textColor};
          margin: 0 auto;
          font-size: 1.6rem;
          line-height: ${defaultCSS.lineHeight};
        }
      }
      .library-grid {
        .library-item {
          button {
            background: transparent;
            border: none;
            .library-item-wrapper {
              &:before {
                position: absolute;
                content: "";
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.5);
              }
              &:hover {
                // border: 4px solid hsla(0,0%,100%,0);
                // border-radius: 16px;
                // padding: 4px;
              }
              .overlay {
                top: 25px;
                left: 25px;
                text-transform: capitalize;
                color: ${colorPallet.textColor};
              }
            }
          }
        }
      }
      Button {
        border-radius: ${defaultCSS.borderRadius};
        text-transform: uppercase;
      }
    }
  }
`;
export default Style;
