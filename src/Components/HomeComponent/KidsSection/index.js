import { Img } from "../../../Themes";
import Style from "./style";

export default function KidsSection() {
  return (
    <Style>
      <div className="container">
        <div className="cache flex space-between align-item">
          <div className="col-6 text">
            <h2 className="mb-4">Create profiles for kids</h2>
            <p>
              Send kids on adventures with their favorite characters in a space
              made just for them—free with your membership.
            </p>
          </div>
          <div className="col-6 picture">
            <Img src="/assets/images/kids section.png" alt="" />
          </div>
        </div>
      </div>
    </Style>
  );
}
