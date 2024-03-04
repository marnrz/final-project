import styled from "styled-components";
import { colorPallet } from "../../Themes";

export const Style = styled.div`
.hero {
    position: relative;
    height:70vh;
    min-height:400px;
    background-image: url(https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/d82b1cce-cfaa-4bcc-9dd7-c1535c7b08de/IR-en-20240205-popsignuptwoweeks-perspective_alpha_website_large.jpg);
    background-size: cover;
    &: before {
        position:absolute;
        content:"";
        top:0;
        left:0;
        width:100%;
        height:100%;
        background: rgba(0, 0, 0, 0.5);
    }
    .hero-content{
        height:100%;
        h1{
            color : ${colorPallet.textColor};
            font-size: 2rem;
        }
        .search-box {
            Input {
            font-family: "PT Sans", sans-serif;
            font-weight: 400;
            font-style: normal;
            border-radius: 20px;
            }
            button {
                border-radius: 20px;
                position: absolute;
                top: 0;
                left: -89px;
                width: 90px;
            }
        }   
    }
}
`
export default Style