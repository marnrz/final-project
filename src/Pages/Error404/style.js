import styled from "styled-components";
import { colorPallet, defaultCSS } from "../../Themes";

export const Style = styled.div`
.error{
    position: relative;
    height:100vh;
    min-height:600px;
    background-image: url(https://assets.nflxext.com/ffe/siteui/pages/errors/bg-lost-in-space.png);
    background-size: cover;
    &: before {
        position:absolute;
        content:"";
        top:0;
        left:0;
        width:100%;
        height:100%;
        background: rgba(0, 0, 0, 0.1)
    }
    .error-page-content {
        height: 100%;
        h1 {
            font-size: ${defaultCSS.fontsizeH1};
            color: ${colorPallet.textColor};
        }
        p {
            font-size: ${defaultCSS.fontsizeP};
            color: ${colorPallet.textColor};
            text-shadow: 0 1px 2px rgba(0,0,0,.57);
        }
        Button {
            border-radius: ${defaultCSS.borderRadius};
            padding: 0 35px;
            &: hover {
                background-color: rgba(255, 255, 255, 0.75);
            }
        }
        .error-code { 
            color: ${colorPallet.textColor};
            font-size: 35px;
            span {
                border-left: 2px solid #e50914;
            }
        }
    }
}

`