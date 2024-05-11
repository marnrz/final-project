import styled from "styled-components";
import { colorPallet, defaultCSS } from "../../../Themes";

export const Style = styled.div`
  padding: ${defaultCSS.spaceRow};
  .hero {
    height: 60vh;
    min-height: 400px;
    background-size: cover;
    &:before {
      position: absolute;
      content: "";
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.7);
    }
    .hero-container-full {
      display: flex;
      gap: 40px;
      .poster-box {
        width: 200px;
        height: auto;
      }
      .movie-informations {
        .title {
          font-size: ${defaultCSS.fontsizeH2};
        }
        span {
          font-size: ${defaultCSS.fontsizeP};
          color: ${colorPallet.textColor};
        }
        .movie-meta {
          gap: 13px;
        }
        .icon {
          gap: 10px;
          .icon-play {
            background-color: orange;
            padding: 4px 10px;
            border-radius: 12px;
            color: #000;
            gap: 5px;
            cursor: pointer;
          }
          .bookmark {
            cursor: pointer;
            font-size: 20px;
          }
        }
        .overview {
          font-size: 15px;
          width: 450px;
          height: auto;
          line-height: 1.5;
        }
      }
    }
  }
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${colorPallet.textColor};
  }
`;
export default Style;
