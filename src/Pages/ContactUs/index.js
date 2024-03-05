import { Button } from "antd";
import SecondaryLayout from "../../Components/Layouts/SecondaryLayout";
import Cstyle from "./style";
import get from "lodash/get"

// const quikList = [{
//     title: "quick links",
//     item: "Forgot your password?",
//     link: "#",
// },
// {
//     title: "",
//     item: "Update account information",
//     link: "#",
// },
// {
//     title: "",
//     item: "Upgrade to Plex Pass",
//     link: "#",
// },
// {
//     title: "",
//     item: "Find help in the forums",
//     link: "#",
// },]
// const title = get(item, "title", "")
// function renderFarm() {
//     return quikList.map((item, index)=>{
//         return (
//             <li key={index}>
//                 <h3>{item.title}</h3>
//                 <a target={item.isBlank ? "_blank" : "_self"} href={item.link}>{item.item}</a>
//             </li>
//         )
//     })
// }
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
                                <p>When it comes to questions about billing, your Plex Pass subscription, and more, we’re all ears. Simply select your type of inquiry below and we’ll let the appropriate folks know.</p>
                                <div className="form">input</div>
                            </div>
                            <div className="col-4 support-links">
                                <div className="quick-links">
                                    <h3 className="mb-2">quick links</h3>
                                    <ul>
                                        <li><a href="#">Forgot your password?</a></li>
                                        <li><a href="#">Update account information</a></li>
                                        <li><a href="#">Upgrade to Plex Pass</a></li>
                                        <li><a href="#">Find help in the forums</a></li>
                                    </ul>
                                </div>
                                <div className="Support mt-3">
                                    <h3 className="mb-2">Technical Support</h3>
                                    <p className="mb-4">We’re unable to offer technical support by email. For help with issues you may be experiencing, we have a detailed support library, answers to common questions, friendly forums, and more.</p>
                                    <Button type="primary" size="small" className="mb-2">Explore Resources</Button>
                                    <Button  type="primary" size="small">Press & Partners Contact</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SecondaryLayout>
        </Cstyle>
    )
}