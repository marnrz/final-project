import styled from "styled-components";
import { colorPallet } from "../../Themes";


export const Style = styled.div `
h2{
    color: ${colorPallet.textColor}
}
ul{
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    li{
        img {
            width: 100px;
            height:auto;
        }
        p {
            color : ${colorPallet.textColor}
        }
    }
}
`