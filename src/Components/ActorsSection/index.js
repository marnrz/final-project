import { Button } from "antd";
import { Astyle } from "./style";

export default function ActorsSection() {
    return(
        <Astyle className="actors-section space-section">
            <div className="container">
                <div className=" actors flex">
                    <div className="col-6 picture">
                        <img src="https://www.plex.tv/wp-content/uploads/2023/03/discover-credits-1024x918.png" alt=""/>
                    </div>
                    <div className="col-6 text pl-4">
                        <h2 className="mb-4">And that’s just (film)facts.</h2>
                        <p className="white mb-3">See what films and shows your favorite actors are in (and add them to your Watchlist) without ever leaving Plex! With Discover Credits, it’s all united into a single page, including which of their titles are available in your personal media libraries, on demand, or elsewhere via Discover.</p>
                        <Button type="primary" size= "large" shape="default"> Search The Stars</Button>
                    </div>
                </div>
            </div>    
        </Astyle>
    )
}