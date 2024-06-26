import styled from "styled-components";
import { defaultCSS } from "../../../../Themes";

export const Style = styled.div`
  height: 60px;
  .header {
    position: absolute;
    top: 0;
    left: 0;
    padding: 15px 20px;
    width: ${defaultCSS.fullWidth};
    z-index: 9;
    .logo {
      Link {
        cursor: pointer;
        img {
          font-size: 20px;
        }
      }
    }
    .sign {
      Button {
        border-radius: ${defaultCSS.borderRadius};
      }
    }
  }
`;
export default Style;
