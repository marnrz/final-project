import styled from "styled-components";
import { colorPallet, defaultCSS } from "../../../Themes";

export const Style = styled.div`
  .hero {
    position: relative;
    height: 90vh;
    min-height: 600px;
    background-image: url(https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/d82b1cce-cfaa-4bcc-9dd7-c1535c7b08de/IR-en-20240205-popsignuptwoweeks-perspective_alpha_website_large.jpg);
    background-size: cover;
    &:before {
      position: absolute;
      content: "";
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.8);
    }
    .hero-content {
      height: 100%;
      .col-8 {
        h1 {
          color: ${colorPallet.textColor};
          font-size: 4.3rem;
        }
        .btn {
          text-transform: capitalize;
          border-radius: ${defaultCSS.borderRadius};
          font-weight: 600;
          padding: 16px 40px;
          height: auto;
        }
      }
      .box {
        bottom: -57px;
        left: 50%;
        width: 95%;
        min-height: 115px;
        transform: translateX(-50%);
        background: radial-gradient(
          51.39% 511.66% at 47.68% -217.91%,
          #ff9900 0%,
          #e50914 17.27%,
          #0e1b4f 79.44%,
          #000413 100%
        );
        .flex-box {
          gap: 5px;
          img {
            width: 80px;
            height: auto;
            padding-top: inherit;
          }
          .content {
            h4 {
              font-size: 16px;
              color: ${colorPallet.textColor};
              line-height: 1.5;
              margin-top: 10px;
            }
            p {
              font-size: 14px;
              color: ${colorPallet.textColor};
              line-height: 2;
            }
            .learn-more {
              display: flex;
              gap: 5px;
              align-items: center;
              .text-learn-more {
                font-size: 12px;
                color: rgba(68, 142, 244, 1);
              }
              .icon {
                color: rgba(68, 142, 244, 1);
              }
            }
          }
        }
      }
    }
    .flex-box {
      padding: 10px;
    }
  }
`;
export default Style;
