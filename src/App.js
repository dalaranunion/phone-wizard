import "./App.css";
import { useState, useRef } from "react";
import RadioButton from "./components/ui-radio.jsx";

function App() {
  return (
    <div className="contentwidthhalf">
      <section id="q-container" className="pt-4 pr-4 pb-4 pl-4 border-radius-3">
        <header>
          <h1 className="heading-font heading-xxxl ta-center mb-3">Find my plant</h1>
          <p>
            Welcome to our Plant Care Quiz! Choosing the perfect plant for your home
            is a breeze with our personalized recommendations. Answer a few simple
            questions to discover the ideal plant that fits your lifestyle and
            preferences
          </p>
          <p>Let's find the perfect green companion for your space!</p>
          <input
            type="text"
            name="myinput"
            defaultValue=""
            size="25"
            placeholder="Test"
          />
          <RadioButton value="4" label="LOL" name="lolen" />
          <textarea>sadasdasd</textarea>
          <select>
            <option>LOL</option>
            <option>leeel</option>
          </select>
        </header>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      </section>
    </div>
  );
}

export default App;
