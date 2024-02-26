import styled from "styled-components";
import { defaultCSS } from "../../Themes";

export const MlStyle = styled.div`
padding-top:70px;
.library-content {
    span{
        color: rgba(229, 9, 20, 1);
        font-size: 12px;
        font-weight: 500;
        line-height: 1;
        letter-spacing: 0.6px;
        text-transform: uppercase;
    }
    h2 {
        font-size: 46px;
        font-weight: 600;
        line-height: 1.25;
        letter-spacing: -0.5px;
        margin:16px 0 10px 0;
    }
    p {
        margin:0 auto;
        padding-top:16px;
        font-size: 16px;
        font-weight: 400;
        line-height: 1.36;
        letter-spacing: 0;
    }
}
.library-grid {
    .library-item {
        button {
            background:transparent;
            border:none;
            .library-item-wrapper {
                &:before {
                    position:absolute;
                    content:"";
                    top:0;
                    left:0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.5);
                }
                &:hover{
                    // border: 4px solid hsla(0,0%,100%,0);
                    // border-radius: 16px;
                    // padding: 4px;
                }
                img {
                    width:100%;
                    height:auto;
                }
                .overlay {
                    top:25px;
                    left:25px;
                    span {
                        text-transform: capitalize;
                    }
                    h3 {
                        text-transform: capitalize;
                    }
                }
            }
        }
    }

}
.button-box {
    Button {
        border-radius : ${defaultCSS.borderRadius};
        text-transform: uppercase;
        font-size:16px;
        padding: 5px 10px;
    }
}
`
export default MlStyle