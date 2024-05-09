import styled from "styled-components";
import { colorPallet, defaultCSS } from "../../../Themes";

export const Style = styled.div`
  .up-comming {
    .title {
      font-size: ${defaultCSS.fontsizeH2};
    }
    .list {
      gap: 80px;
      li {
        .poster {
          &::before {
            position: absolute;
            width: 100%;
            height: 100%;
            content: "";
            top: 0;
            left: 0;
            background-color: rgba(0, 0, 0, 0.5);
            opacity: 0;
          }
          &:hover {
            &::before {
              opacity: 1;
            }
            .icon {
              opacity: 1;
            }
            border: 1px solid ${colorPallet.primaryColor};
          }
          width: 240px;
          height: 140px;
          border: 1px solid #fff;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .icon {
            width: 30px;
            height: 30px;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            opacity: 0;
            .play-icon {
              font-size: 3rem;
              width: 100%;
              height: 100%;
            }
          }
        }
      }
    }
    h2,
    h3,
    p,
    span {
      color: ${colorPallet.textColor};
    }
  }
`;
export default Style;
