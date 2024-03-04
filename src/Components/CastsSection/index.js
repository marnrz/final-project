import { Button } from "antd";
import { Astyle } from "./style";
import { Img } from "../../Themes";

export default function CastsSection() {
    return(
        <Astyle>
            <div className="container">
                <div className="cast-container flex space-between align-item">
                    <div className="col-6 picture">
                        <Img src="https://www.plex.tv/wp-content/uploads/2023/03/discover-credits-1024x918.png" alt=""/>
                    </div>
                    <div className="col-6 text pl-4">
                        <h2 className="mb-4">And that’s just (film)facts.</h2>
                        <p className="mb-7">See what films and shows your favorite actors are in (and add them to your Watchlist) without ever leaving Plex! With Discover Credits, it’s all united into a single page, including which of their titles are available in your personal media libraries, on demand, or elsewhere via Discover.</p>
                        <Button type="primary" size= "large" shape="default"> Search The Stars</Button>
                    </div>
                </div>
            </div>    
        </Astyle>
    )
}