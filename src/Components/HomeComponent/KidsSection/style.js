import styled from "styled-components";
import { colorPallet, defaultCSS } from "../../../Themes";

export const Kstyle = styled.div`
  margin: ${defaultCSS.spaceSection};
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
