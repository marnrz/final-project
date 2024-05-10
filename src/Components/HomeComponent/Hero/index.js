import { Link } from "react-router-dom";
import Sstyle from "./style";
import { Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default function Hero() {
  return (
    <Sstyle>
      <div className="hero">
        <div className="hero-content flex justify-center align-item column z-2 relative">
          <div className="col-8 center">
            <h1 className="mb-7">Unlimited movies, TV shows, and more</h1>
            <Link to="/movie">
              <Button className="btn" type="primary" size="large">
                {" "}
                get started
              </Button>
            </Link>
          </div>
          <div className="box absolute">
            <div className="flex-box flex justify-center align-item">
              <img src="/assets/images/popcorn.svg" alt="" />
              <div className="content">
                <h4>The MaryMovie you love for just $39.99.</h4>
                <p>Get the Standard with ads plan.</p>
                <Link to="/sign-up" className="learn-more">
                  <span className="text-learn-more">Learn More</span>
                  <span className="icon">
                    <FontAwesomeIcon icon={faAngleRight} />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Sstyle>
  );
}
