import styled from "styled-components";
import { colorPallet } from "../../Themes";


export const Tstyle = styled.div `
    ul{
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
        li {
            img {
        width: 100px;
        height:auto;
        }
    }
    }
    h2, h3,p {
        color : ${colorPallet.textColor}
    }

`