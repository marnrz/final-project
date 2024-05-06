import styled from "styled-components";
import { colorPallet, defaultCSS } from "../../../Themes";

export const Fstyle = styled.div`
  margin: ${defaultCSS.spaceSection};
  .landing-faq {
    h1 {
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
`;
export default Fstyle;
