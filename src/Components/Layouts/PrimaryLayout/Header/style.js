import styled from "styled-components";
import { defaultCSS } from "../../../../Themes";

export const Hstyle = styled.div`
    .header {
        position:absolute;
        top:0;
        left:0;
        padding:15px 20px;
        .logo {
            img {
                font-size:20px
            }
        }
        .sign {
            Button {
                border-radius: ${defaultCSS.borderRadius}
            }
        }
    }
`
export default Hstyle