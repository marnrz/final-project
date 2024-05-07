import styled from "styled-components";
import { colorPallet, defaultCSS } from "../../Themes";

export const Astyle = styled.div`
  margin: ${defaultCSS.spaceSection};
  .background {
    position: relative;
    height: 50vh;
    min-height: 300px;
    width: 100%;
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
    .background-content {
      height: 100%;
      top: 120px;
      h1 {
        color: ${colorPallet.textColor};
      }
      .text-content {
        padding: 50px;
        background: #fff;
        p {
          font-size: 1.4rem;
          line-height: 22px;
        }
      }
    }
  }
`;
