import styled from "styled-components";
import { colorPallet, defaultCSS } from "../../Themes";

export const Style = styled.div`
  padding: ${defaultCSS.spaceSection};
  .single-movie {
    .movie-info {
    }
    .casts {
      .title {
        color: ${colorPallet.textColor};
      }
      .list {
        .poster-box {
          width: 100px;
          height: auto;
          .poster {
          }
          .name {
            color: ${colorPallet.textColor};
          }
          .character {
            color: ${colorPallet.textColor};
          }
        }
      }
    }
    .images {
      .list {
        gap: 10px;
        .title {
          color: ${colorPallet.textColor};
        }
        .poster {
          width: 240px;
          height: 140px;
          border: 1px solid #fff;
        }
      }
    }
    .movie {
      .title {
        color: ${colorPallet.textColor};
      }
      .list {
        gap: 20px;
        .movie-box {
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
            }
            border: 1px solid ${colorPallet.primaryColor};
          }
          width: 120px;
          height: auto;
          border: 1px solid #fff;
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
              color: #fff;
            }
          }
        }
        .name {
          color: ${colorPallet.textColor};
        }
      }
    }
  }
`;
export default Style;
