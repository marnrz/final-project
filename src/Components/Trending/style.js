import styled from "styled-components";
import { colorPallet } from "../../Themes";

export const Tstyle = styled.div`
  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    li {
      .poster {
        img {
          width: 100%;
          height: auto;
        }
        .vote-color {
          background: ${colorPallet.backgroundColor};
          bottom: -10px;
          left: 5px;
          width: 35px;
          height: 35px;
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
      }
    }
  }
  h2,
  h3,
  p,
  span {
    color: ${colorPallet.textColor};
  }
`;
