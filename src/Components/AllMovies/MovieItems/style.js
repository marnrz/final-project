import styled from "styled-components";
import { colorPallet, defaultCSS } from "../../../Themes";

export const Style = styled.div`
  .movie-item {
    margin: ${defaultCSS.spaceRow};
    .title {
      font-size: ${defaultCSS.fontsizeH2};
    }
    .list {
      gap: ${defaultCSS.gap};
      li {
        .no-pic {
          width: 120px;
          height: 180px;
          border: 1px solid ${colorPallet.primaryColor};
          background-color: rgba(255, 255, 255, 0.8);
          .icon-place {
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            .icon {
              color: ${colorPallet.primaryColor};
              font-size: medium;
            }
          }
        }
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
          width: 120px;
          height: auto;
          border: 1px solid #fff;
          .vote-color {
            background: ${colorPallet.backgroundColor};
            bottom: -10px;
            left: 5px;
            width: 30px;
            height: 30px;
            text-align: center;
            align-content: center;
            border-radius: 15px;
            border: 1px solid ${colorPallet.primaryColor};
          }
          strong.green {
            color: #42f5b6;
          }
          strong.orange {
            color: #f5bf42;
          }
          strong.red {
            color: ${colorPallet.primaryColor};
          }
          strong.black {
            color: #000;
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
