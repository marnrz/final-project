import { Button } from "antd";
import Style from "./style";
import { Img } from "../../../Themes";
import { Link } from "react-router-dom";

export default function CastsSection() {
  return (
    <Style>
      <div className="cast-section">
        <div className="container">
          <div className="cast-container flex space-between align-item">
            <div className="col-6 picture">
              <Img
                src="https://www.plex.tv/wp-content/uploads/2023/03/discover-credits-1024x918.png"
                alt=""
              />
            </div>
            <div className="col-6 text pl-4">
              <h2 className="mb-4">And that’s just (film)facts.</h2>
              <p className="mb-7">
                See what films and shows your favorite actors are in (and add
                them to your Watchlist) without ever leaving Plex! With Discover
                Credits, it’s all united into a single page, including which of
                their titles are available in your personal media libraries, on
                demand, or elsewhere via Discover.
              </p>
              <Link to="/movie">
                <Button
                  className="btn"
                  type="primary"
                  size="large"
                  shape="default"
                >
                  {" "}
                  Search The Stars
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Style>
  );
}
