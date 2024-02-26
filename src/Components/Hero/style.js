import styled from "styled-components";
import { colorPallet, defaultCSS } from "../../Themes";

export const Sstyle = styled.div`
    .hero {
        position: relative;
        height:100vh;
        min-height:600px;
        background-image: url(https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/d82b1cce-cfaa-4bcc-9dd7-c1535c7b08de/IR-en-20240205-popsignuptwoweeks-perspective_alpha_website_large.jpg);
        background-size: cover;
        &: before {
            position:absolute;
            content:"";
            top:0;
            left:0;
            width:100%;
            height:100%;
            background: rgba(0, 0, 0, 0.8)
        }
        .hero-content {
            height:100%;
            .col-8 {
                h1 {
                    color : ${colorPallet.textColor};
                    font-size:4.3rem;
                    font-weight:900;
                }
                Button {
                    text-transform: capitalize;
                    border-radius: ${defaultCSS.borderRadius}
                }
            }
            .box {
                bottom:-11%;
                left:50%;
                width:95%;
                min-height:115px;
                transform: translateX(-50%);
                background: radial-gradient(51.39% 511.66% at 47.68% -217.91%, #FF9900 0%, #E50914 17.27%, #0E1B4F 79.44%, #000413 100%);
                .flex-box {
                    gap:5px;
                    img {
                        width:80px;
                        height:auto;
                        padding-top: inherit;
                    }
                    .content {
                        
                        h4 {
                            color : ${colorPallet.textColor};
                            line-height:1.5;
                            margin-top:10px;
                        }
                        p {
                            color : ${colorPallet.textColor};
                            line-height:2;
                        }
                        a {
                          span {
                            color: rgba(68, 142, 244, 1);

                          }  
                          .arrow {

                          }
                        }
                    }
                }
            }
        }
            .flex-box {
                padding:10px;
        }
    }
`
export default Sstyle