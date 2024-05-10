import styled from "styled-components";
import { colorPallet, defaultCSS } from "../../../Themes";

export const Style = styled.div`
  .hero {
    position: relative;
    height: 70vh;
    min-height: 400px;
    background-image: url(https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/d82b1cce-cfaa-4bcc-9dd7-c1535c7b08de/IR-en-20240205-popsignuptwoweeks-perspective_alpha_website_large.jpg);
    background-size: cover;
    &:before {
      position: absolute;
      content: "";
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
    }
    .hero-content {
      height: 100%;
      h1 {
        color: ${colorPallet.textColor};
        font-size: 3rem;
      }
      .search-box {
        input {
          font-family: "PT Sans", sans-serif;
          font-weight: 400;
          font-style: normal;
          border-radius: ${defaultCSS.borderRadius};
          height: 40px;
          width: 100%;
          padding: 10px;
          bottom: 80%;
          top: 80%;
          outline: none;
          color: ${colorPallet.primaryColor};
          font-style: italic;
          &::placeholder {
            color: ${colorPallet.primaryColor};
            font-style: italic;
            font-family: "PT Sans", sans-serif;
            font-weight: 400;
          }
          &:focus {
            border: 2px solid red;
          }
        }
        button {
          right: 0;
          height: 40px;
          border-radius: ${defaultCSS.borderRadius};
          font-size: 13px;
          /* background: linear-gradient(
            45deg,
            ${colorPallet.primaryColor},
            #c0c0c0
          ); */
          cursor: pointer;
        }
      }
    }
  }
  .result {
    margin: ${defaultCSS.spaceRow};
    .text-result {
      color: ${colorPallet.textColor};
      font-size: ${defaultCSS.fontsizeH2};
    }
    .result-list {
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
          img {
            width: 100%;
            height: auto;
          }
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
