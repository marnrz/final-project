import styled from "styled-components";
import {defaultCSS } from "../../Themes";

export const Astyle = styled.div`
.actors-section {
    .actors {
        text-align: inherit;
        .picture {
            img {
                width:100%;
                height:auto;
            }
        }
        .text {
            h2 {
                font-size:50px;
                color: rgba(229, 9, 20, 1);
    
            }
            p {
                font-size:15px;
            }
            Button {
                border-radius: ${defaultCSS.borderRadius};
            }
        }
    }
}    
`