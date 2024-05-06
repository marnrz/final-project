import styled from "styled-components";
import { colorPallet, defaultCSS } from "../../../../Themes";

export const Fstyle = styled.div`
  margin: ${defaultCSS.footerSection};
  display: flex;
  align-items: center;
  justify-content: space-between;
  .left {
    .contact {
      justify-content: flex-start;
      gap: 10px;
      margin-left: 40px;
      li {
        margin-top: 50px;
        a {
          padding: 5px;
          color: ${colorPallet.textColor};
          text-transform: uppercase;
          letter-spacing: 0.8px;
          font-weight: bold;
          font-size: 1.4rem;
        }
      }
    }
    span {
      color: ${colorPallet.textColor};
      font-size: 1.4rem;
      font-weight: 500;
      gap: 3px;
      margin: 15px 0 0 40px;
      ul {
        li {
          a {
            color: #fff;
            font-size: 1.4rem;
            padding: 3px;
            img {
              padding-right: 2px;
            }
          }
        }
      }
    }
  }
  .right {
    .social-media {
      justify-content: end;
      gap: 30px;
      margin: 30px 50px 0 0;
      li {
        a {
          img {
          }
        }
      }
    }
    span {
      margin: 10px 50px 0 0;
      gap: 15px;
      color: #9b9b9b;
      .legal {
        gap: 15px;
        li {
          a {
            color: #9b9b9b;
          }
        }
      }
    }
  }
`;
export default Fstyle;
