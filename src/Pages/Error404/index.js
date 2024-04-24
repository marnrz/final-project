import { Link } from "react-router-dom";
import SecondaryLayout from "../../Components/Layouts/SecondaryLayout";
import Header from "../../Components/Layouts/SecondaryLayout/Header";
import { Style } from "./style";
import { Button } from "antd";
import { colorPallet } from "../../Themes";

export default function Error404() {
  return (
    <Style>
      <Header />
      <div className="error">
        <div className="error-page-content flex justify-center align-item column z-2 relative">
          <div className="col-8 center">
            <h1 className="mb-4">LOST YOUR WAY?</h1>
            <p className="mb-7">
              Sorry, we can't find that page. You'll find lots to explore on the
              home page.{" "}
            </p>
            <Link to="/">
              <Button size="large">
                {" "}
                <strong>Go Home </strong>
              </Button>
            </Link>
            <div className="error-code mt-4">
              <span className="pl-2">Error Code : </span>
              <strong> 404 </strong>
            </div>
          </div>
        </div>
      </div>
    </Style>
  );
}
