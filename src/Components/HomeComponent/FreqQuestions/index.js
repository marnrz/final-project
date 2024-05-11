import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { BsPlus } from "react-icons/bs";
import { FaMinus } from "react-icons/fa";
import Style from "./style";

export default function FreqQuestions() {
  const questionItems = [
    {
      id: uuidv4(),
      question: "What is MaryMovie?",
      answer:
        "MaryMovie is the best video streaming service for quality, thoughtful entertainment. Find movies, documentaries, foreign films, classic cinema, independent films and educational videos that inspire, enrich and entertain. We partner with public libraries and universities to bring you an ad-free experience that can be enjoyed on your TV, mobile phone, tablets and online.",
    },
    {
      id: uuidv4(),
      question: "How is MaryMovie free for me?",
      answer:
        "Just as your library buys books to add to their collection for you to borrow, your library offers a variety of digital resources too - Kanopy is one of their more popular digital resources. Kanopy does not charge you because the public library or university covers all associated costs, allowing you to watch for free with no ads.",
    },
    {
      id: uuidv4(),
      question: "Why do I need a library card or university login to sign up?",
      answer:
        "MaryMovie is only available through libraries, so you need to be a member of a participating library to start watching Kanopy.If you are a member of a participating public library, you can start watching by signing up with a valid public library card number and PIN/password.If you are a currently registered student or faculty member of a participating college university, you can start watching by signing up with a valid university login.",
    },
    {
      id: uuidv4(),
      question: "How do I know if my library or university offers MaryMovie?",
      answer:
        "For public libraries, check to see if your library has made MaryMovie available here. Type in the name of your library, or enter your zip code to display nearby libraries that have made MaryMovie available.",
    },
    {
      id: uuidv4(),
      question: "How do I get started?",
      answer:
        "Getting started is easy! Click here to find your library and enter your library card information or university login when prompted. Follow the simple instructions to create your MaryMovie account using your email address or Google login and then start watching.",
    },
    {
      id: uuidv4(),
      question: "What is MaryMovie Kids?",
      answer:
        "MaryMovie Kids is our collection of movies and shows for kids available in public libraries only. Your public library offers unlimited plays in Kanopy Kids, so your kids are free to explore enriching, educational and entertaining films and TV series. Click here to check out Kanopy Kids!",
    },
  ];
  const [showAnswer, setShowAnswer] = useState(
    Array(questionItems.length).fill(false)
  );
  function toggleAnswer(index) {
    setShowAnswer((prevAnswer) => {
      const newAnswer = [...prevAnswer];
      newAnswer[index] = !newAnswer[index];
      return newAnswer;
    });
  }
  function renderQuestion() {
    return questionItems.map(({ question, answer }, index) => {
      return (
        <li key={index}>
          <div className="box-question flex align-item space-between">
            <h2
              onClick={() => {
                toggleAnswer(index);
              }}
            >
              {question}
            </h2>
            {showAnswer[index] ? (
              <div
                className="minus"
                onClick={() => {
                  toggleAnswer(index);
                }}
              >
                <FaMinus />
              </div>
            ) : (
              <div
                className="plus"
                onClick={() => {
                  toggleAnswer(index);
                }}
              >
                <BsPlus />
              </div>
            )}
          </div>
          <div className="text">{showAnswer[index] && <p>{answer}</p>}</div>
        </li>
      );
    });
  }
  return (
    <Style>
      <div className="landing-faq">
        <div className="container">
          {" "}
          <div className="faq-container">
            <h1 className=" title mb-7 center">Frequently Asked Questions</h1>
            <ul>{renderQuestion()}</ul>
          </div>
        </div>
      </div>
    </Style>
  );
}
