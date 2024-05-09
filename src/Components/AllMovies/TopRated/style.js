import styled from "styled-components";
import { defaultCSS } from "../../../Themes";

export const Style = styled.div`
  .top-rated {
    .list {
      gap: ${defaultCSS.gap};
      li {
        .content {
          color: red;
          top: 50%;
          left: 39%;
          transform: translate(-50%, -50%);
        }
        .poster-box {
          width: 250px;
          height: auto;
        }
      }
    }
  }
`;
export default Style;
