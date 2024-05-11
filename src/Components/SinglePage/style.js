import styled from "styled-components";
import { colorPallet, defaultCSS } from "../../Themes";

export const Style = styled.div`
  .single-movie {
    .movie-info {
    }
    .casts {
      .title {
        color: ${colorPallet.textColor};
      }
      .list {
        li {
          .cast-box {
            padding: 0 12px;
            width: 100px;
            height: auto;
            .poster-box {
              border: 1px solid;
              .poster {
                border-radius: 50%;
                width: 100%;
                height: 100%;
              }
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
    }
    .images {
      .title {
        color: ${colorPallet.textColor};
      }
      .list {
        gap: 10px;

        .gallery {
          width: 240px;
          height: 140px;
          border: 1px solid #fff;
        }
      }
    }
    .movie {
      margin: 70px 0;
      .title {
        color: ${colorPallet.textColor};
      }
      .list {
        gap: 20px;
        li {
          .no-pic {
            width: 120px;
            height: 180px;
            border: 1px solid ${colorPallet.primaryColor};
            background-color: rgba(255, 255, 255, 0.8);
            .icon-place {
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              .icon {
                color: ${colorPallet.primaryColor};
                font-size: medium;
              }
            }
          }
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
  }
  .title {
    font-size: 20px;
  }
`;
export default Style;
