import "./assets/css/App.css";
import { useState, useRef } from "react";
import RadioButton from "./components/ui-radio.jsx";
import { questions } from "./database/questions-array.js";
import LeftArrow from "./components/left-arrow.jsx";
import products from "./database/plants.json";

console.log(questions);
console.log(products.plants);

function App() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));

  function calculateAnswers() {
    const sun = ["low", "indirect", "direct"];
    const goal = ["air", "flowering", "herb"];
    const answer = {
      test: 0,
    };

    // dodgy way of doing things :(

    const test = [1, 0, 0, 2, 2, 1, 1, 1];
    const mappedAnswers = {
      light_requirements: sun[answers[0]],
      care_level: answers[1],
      cause_alergies: answers[2],
      plant_purpose: , // large space
      plant_purpose: answers[5], // purpose herb/air quality
      fragrant: answers[6],
      sensitive_to_alkaline_water: answers[7],
      pet_friendly: answers[8],
    };

    answers.map((val, i) => {});

    // Extract answers and store to object

    const list = products.plants.filter((entry, iteration) => {
      //  if(entry.light_requirements.includes(''))
    });

    // fragnant?

    // alkaline water?

    // Pet friendly
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
      if (step === answers.length) {
        calculateAnswers();
      } else setStep(step + 1);

      console.log(answers, step);
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
      <div id="q-container" className="contentwidth box-shadow pt-4 pr-4 pb-4 pl-4">
        <QuestionPanel />
      </div>
      <StepsIdicator value={step} />
    </section>
  );
}

export default App;
