import { Img } from "../../Themes";
import { Kstyle } from "./style";

export default function KidsSection() {
    return(
        <Kstyle>
            <div className="container">
                <div className="cache flex space-between align-item">
                    <div className="col-6 text">
                        <h2 className="mb-4">Create profiles for kids</h2>
                        <p>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</p>
                    </div>
                    <div className="col-6 picture">
                        <Img src="https://occ-0-3467-3466.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABejKYujIIDQciqmGJJ8BtXkYKKTi5jiqexltvN1YmvXYIfX8B9CYwooUSIzOKneblRFthZAFsYLMgKMyNfeHwk16DmEkpIIcb6A3.png?r=f55" alt=""/>
                    </div>
                </div>
            </div>
        </Kstyle>
    )
}