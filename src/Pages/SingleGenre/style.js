import styled from "styled-components";
import { colorPallet, defaultCSS } from "../../Themes";

export const Style = styled.div`
  .list {
    gap: ${defaultCSS.gap};
    .poster-box {
      &::before {
        position: absolute;
        width: 100%;
        height: 100%;
        content: "";
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.5);
        opacity: 0;
      }
      &:hover {
        &::before {
          opacity: 1;
        }
        .icon {
          opacity: 1;
          color: #fff;
        }
        border: 1px solid ${colorPallet.primaryColor};
      }
      width: 120px;
      height: auto;
      .poster {
        width: 100%;
        height: auto;
      }
      .icon {
        width: 30px;
        height: 30px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        opacity: 0;
        .play-icon {
          font-size: 3rem;
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  h3,
  p {
    color: white;
  }
`;
export default Style;
