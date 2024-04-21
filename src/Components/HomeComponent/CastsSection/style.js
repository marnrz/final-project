import styled from "styled-components";
import {colorPallet, defaultCSS } from "../../../Themes";

export const Astyle = styled.div`
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
                line-height: ${ defaultCSS.lineHeight};
            }
            Button {
                border-radius: ${defaultCSS.borderRadius};
            }
        }
    }
}    
`