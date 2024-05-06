import { Button, Input } from "antd";
import SecondaryLayout from "../../Components/Layouts/SecondaryLayout";
import Cstyle from "./style";

const inputItems = [
  {
    title: "Where should we direct you?",
    rightLabel: "Please Choose",
    leftLabel: "",
    star: "",
  },
  {
    title: "Name",
    rightLabel: "First",
    leftLabel: "Last",
    star: "*",
  },
  {
    title: "Company",
    label: "Phone",
    rightLabel: "",
    leftLabel: "",
    star: "",
  },
  {
    title: "Email",
    rightLabel: "",
    leftLabel: "",
    star: "*",
  },
  {
    title: "Message",
    rightLabel: "What's Your Issues...",
    leftLabel: "",
    star: "*",
  },
];

const inputForm = () => {
  return inputItems.map((item, index) => {
    return (
      <div key={index}>
        <div className="title flex">
          <h3 className="mt-2 mb-1">{item.title}</h3>
          <span className=" star mt-2">{item.star}</span>
        </div>
        <div className="input-box">
          <Input placeholder={item.rightLabel} />
        </div>
      </div>
    );
  });
};
export default function ContactUs() {
  return (
    <Cstyle>
      <SecondaryLayout>
        <div className="background">
          <div className="background-content flex column justify-center align-item relative z-2">
            <h1 className="col-8 center mb-7">Get in Touch</h1>
            <div className="col-8 grid-box flex">
              <div className="col-8 personal-info">
                <h3 className="mb-2">Let’s get in touch.</h3>
                <p>
                  When it comes to questions about billing, your Plex Pass
                  subscription, and more, we’re all ears. Simply select your
                  type of inquiry below and we’ll let the appropriate folks
                  know.
                </p>
                <div className="form">{inputForm()}</div>
              </div>
              <div className="col-4 support-links">
                <div className="quick-links">
                  <h3 className="mb-2">quick links</h3>
                  <ul>
                    <li>
                      <a href="#">Forgot your password?</a>
                    </li>
                    <li>
                      <a href="#">Update account information</a>
                    </li>
                    <li>
                      <a href="#">Upgrade to Plex Pass</a>
                    </li>
                    <li>
                      <a href="#">Find help in the forums</a>
                    </li>
                  </ul>
                </div>
                <div className="Support mt-3">
                  <h3 className="mb-2">Technical Support</h3>
                  <p className="mb-4">
                    We’re unable to offer technical support by email. For help
                    with issues you may be experiencing, we have a detailed
                    support library, answers to common questions, friendly
                    forums, and more.
                  </p>
                  <Button type="primary" size="small" className="mb-2 center">
                    Explore Resources
                  </Button>
                  <Button type="primary" size="small">
                    Press & Partners Contact
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SecondaryLayout>
    </Cstyle>
  );
}
