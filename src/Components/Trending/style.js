import styled from "styled-components";
import { colorPallet } from "../../Themes";


export const Tstyle = styled.div `
    img {
        width: 100 px;
        height:auto;
    }
    h2, p, span {
        color : ${colorPallet.textColor}
    }
`