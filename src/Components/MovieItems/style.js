import styled from "styled-components";
import { colorPallet, defaultCSS } from "../../Themes";

export const Mstyle = styled.div`
  .list {
    display: flex;
    flex-wrap: wrap;
    li {
      .movie {
        border-radius: ${defaultCSS.borderRadius};
        margin: 1rem;
        box-shadow: 0.2px 4px 5px rgba(0, 0, 0, 0.1);
        .movie-info {
          padding: 5px;
          h3 {
            color: ${colorPallet.textColor};
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
        .overview {
          color: #000;
          font-size: smaller;
          top: 80px;
          left: 0;
          bottom: 0;
          padding: 1rem;
          max-height: 100%;
          background-color: rgba(255, 255, 255, 0.9);
          transform: translateY(101%);
          transition: transform 0.3s ease-in;
          color: #000;
          opacity: 0;
        }
        &:hover .overview {
          transform: translateY(0);
          opacity: 1;
        }
      }
    }
  }
  h2 {
    color: ${colorPallet.textColor};
  }
`;
