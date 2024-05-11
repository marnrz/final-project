import styled from "styled-components";
import { colorPallet, defaultCSS } from "../../../Themes";

export const Style = styled.div`
  padding: ${defaultCSS.spaceSection};
  border-top: 2px solid #232323;
  .cast-container {
    gap: ${defaultCSS.gap};
    .text {
      h2 {
        font-size: 3rem;
        letter-spacing: -0.5px;
        color: rgba(229, 9, 20, 1);
      }
      p {
        font-size: 1.6rem;
        color: ${colorPallet.textColor};
        line-height: ${defaultCSS.lineHeight};
      }
      Button {
        border-radius: ${defaultCSS.borderRadius};
      }
    }
  }
  @media (max-width: 1060px) {
    .container {
      width: 100%;
      .cast-container {
      }
    }
  }
  @media (max-width: 800px) {
    .container {
      width: 100%;
      .cast-container {
        .text {
          p {
            display: none;
          }
        }
      }
    }
  }
  @media (max-width: 600px) {
    .container {
      width: 100%;
      .cast-container {
        .text {
          h2 {
            font-size: 1.7rem;
          }
          p {
            display: none;
          }
          .btn {
            padding: 4px 10px;
          }
        }
      }
    }
  }
`;
export default Style;
