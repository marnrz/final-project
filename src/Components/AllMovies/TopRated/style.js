import styled from "styled-components";
import { colorPallet, defaultCSS } from "../../../Themes";

export const Style = styled.div`
  margin: ${defaultCSS.spaceRow};
  .top-rated {
    .list {
      gap: ${defaultCSS.gap};
      li {
        .content {
          color: ${colorPallet.textColor};
          top: 50%;
          left: 39%;
          transform: translate(-50%, -50%);
        }
        .poster-box {
          width: 300px;
          height: auto;
        }
      }
    }
  }
`;
export default Style;
