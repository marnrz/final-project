import styled from "styled-components";
import { colorPallet, defaultCSS } from "../../../Themes";

export const Style = styled.div`
  padding: ${defaultCSS.spaceSection};
  border-top: 2px solid #232323;
  background-color: #000;
  .landing-faq {
    .title {
      color: ${colorPallet.textColor};
      font-size: 4.3rem;
    }
    li {
      border: 1px solid rgba(255, 255, 255, 0.4);
      margin: 10px 0;
      padding: 10px;
    }
    .box-question {
      &:hover {
        cursor: pointer;
      }
      color: ${colorPallet.textColor};
      padding: 10px;
      margin: 5px 0;
      h2 {
        font-size: 28px;
      }
      .plus {
        font-size: 40px;
      }
      .minus {
        font-size: 25px;
      }
    }
    p {
      color: ${colorPallet.textColor};
      padding: 5px;
      line-height: 1.7;
      font-size: 20px;
      font-weight: 500;
    }
  }
  @media (max-width: 1060px) {
    .container {
      width: 100%;
    }
  }
  @media (max-width: 800px) {
    .container {
      width: 100%;
      .title {
        font-size: 2rem;
      }
      li {
        padding: 0 5px;
        .box-question {
          margin: 0;
          h2 {
            font-size: 1.6rem;
          }
          .plus {
            font-size: 2rem;
          }
          .minus {
            font-size: 1.5rem;
          }
        }
        .text {
          p {
            font-size: 1.2rem;
          }
        }
      }
    }
  }
`;
export default Style;
