import styled from "styled-components";
import { colorPallet, defaultCSS } from "../../Themes";

export const Style = styled.div`
  margin: ${defaultCSS.spaceRow};
  ul {
    width: 80%;
    margin: 10px auto;
    li {
      .tag {
        color: ${colorPallet.textColor};
        border-radius: ${defaultCSS.borderRadius};
        background-color: ${colorPallet.primaryColor};
        display: inline-block;
        padding: 10px 20px;
        margin: 5px;
        cursor: pointer;
      }
    }
  }
`;
export default Style;
