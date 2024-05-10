import styled from "styled-components";
import { colorPallet, defaultCSS } from "../../../Themes";

export const Style = styled.div`
  padding: ${defaultCSS.spaceSection};
  border-top: 2px solid #232323;
  background-color: #000;
  .cache {
    gap: ${defaultCSS.gap};
    .text {
      color: ${colorPallet.textColor};
      h2 {
        font-size: 3rem;
        letter-spacing: -0.5px;
      }
      p {
        font-size: 1.6rem;
        line-height: ${defaultCSS.lineHeight};
      }
    }
  }
`;
export default Style;
