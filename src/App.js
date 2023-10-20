import "./assets/css/App.css";
import { useState, useRef } from "react";
import RadioButton from "./components/ui-radio.jsx";
import ProductCC from "./components/product--main.jsx";
import { questions } from "./database/questions-array.js";
import LeftArrow from "./components/left-arrow.jsx";
import products from "./database/plants.json";

function App() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));

  function handleResetQuiz() {
    setStep(0);
    setAnswers([...answers.fill(null)]);
  }

  function QuizUi() {
    if (step < answers.length) {
      return (
        <div className="quiz-ui">
          <div id="q-container" className="contentwidth box-shadow pt-4 pr-4 pb-4 pl-4">
            <QuestionPanel />
          </div>
          <StepsIdicator value={step} />
        </div>
      );
    } else
      return (
        <div className="quiz-ui">
          <div
            id="results-container"
            className="contentwidth box-shadow pt-4 pr-4 pb-4 pl-4"
          >
            <CalculateAnswers />
          </div>
        </div>
      );
  }

  function CalculateAnswers() {
    // dodgy way of doing things :(
    const mappedAnswers = {
      light_requirements: answers[0],
      care_level: answers[1],
      cause_alergies: answers[2],
      space_requirement: answers[3],
      fragrant: answers[4],

      sensitive_to_alkaline_water: answers[5],
      pet_friendly: answers[6],
    };
    const filteredProducts = products.plants.filter((val, i) => {
      if (
        mappedAnswers.space_requirement <= val.space_requirement &&
        mappedAnswers.light_requirements >= val.light_requirements &&
        mappedAnswers.care_level >= val.care_level &&
        mappedAnswers.cause_alergies >= val.cause_alergies &&
        mappedAnswers.fragrant >= val.fragrant &&
        mappedAnswers.sensitive_to_alkaline_water <= val.sensitive_to_alkaline_water &&
        mappedAnswers.pet_friendly >= val.pet_friendly
      ) {
        return true;
      }
    });
    if (filteredProducts.length) {
      return (
        <div className="prod-results">
          <h4 className="heading-md ta-center mb-3"> Here are your recommended plants</h4>
          <div className="prod-grid">
            {filteredProducts.map((prod) => (
              <ProductCC data={prod} className={"border-radius-2 prod-pod"} />
            ))}
          </div>
        </div>
      );
    } else
      return (
        <div className="noresults">
          <h4 className="heading-md ta-center mb-3">
            Uh oh, we couldn't find products matching your options. Click the button to
            start over.
          </h4>
          <div className="ta-center ">
            <button className="button-main" onClick={handleResetQuiz}>
              Start Over
            </button>
          </div>
        </div>
      );
  }

  function StepsIdicator({ value }) {
    return (
      <ul className="step-indicator-wrap mt-3 mb-5">
        {answers.map((e, i) => (
          <li
            key={"step-" + i}
            className={`step-indicator ${value === i ? "active" : ""}`}
          ></li>
        ))}
      </ul>
    );
  }
  function QuestionPanel() {
    function submitHandler(e) {
      // Prevent the form from submitting
      e.preventDefault();
      // Store the data to pull easily
      const data = new FormData(e.target);
      // Store the answer selected
      answers[step] = parseInt(data.get("answer"));

      // Set the state
      setAnswers([...answers]);
      if (step < answers.length) {
        setStep(step + 1);
      }

      console.log(answers);
    }
    function prevBtnHandler(e) {
      // Go a step back and
      const previousStep = step - 1;
      if (step > 0) {
        setStep(previousStep);
      }
    }

    return (
      <form onSubmit={submitHandler} className="form-ctr">
        <MultipleChoiceQuestion question={questions[step]} />
        <div id="form-btn-ctr">
          <button
            disabled={step > 0 ? false : true}
            id="prev-btn"
            className="noselect nextprev-arrows"
            onClick={prevBtnHandler}
            type="button"
          >
            <LeftArrow id="prev-btn-icon" className="arrow-icon" color="#000" />
            Previous step
          </button>
          <button id="next-btn" type="submit" className="nextprev-arrows">
            Next step
            <LeftArrow id="next-btn-icon" className="arrow-icon" color="#000" />
          </button>
        </div>
      </form>
    );

    function MultipleChoiceQuestion({ question }) {
      return (
        <div>
          <h4 id="question-title" className="heading-md ta-center mb-3">
            {question.question}
          </h4>
          <div className="radioOptions-wrap">
            {question.options.map((e, i) => {
              return (
                <RadioButton
                  preSelected={answers[step] === i ? true : false}
                  key={i}
                  name="answer"
                  label={e}
                  value={i}
                  required={true}
                />
              );
            })}
          </div>
        </div>
      );
    }
  }

  return (
    <section>
      <header>
        <h1
          id="title-main"
          className="heading-font contentwidthhalf heading-xxxl mb-4 ta-center"
        >
          Let's find the perfect <em className="green">green</em> companion for your
          space!
        </h1>
      </header>
      <QuizUi />
    </section>
  );
}

export default App;
