import React from "react";
import Navbar from "../navbar/Navbar";

function About(props) {
  return (
    <div>
      <Navbar></Navbar>
      <div id="about-container">
        <h1>About You</h1>
        <p>Enter some information about yourself:</p>
        <form>
          <label>
            Name:
            <input type="text" />
          </label>
          <label>
            Age:
            <input type="number" />
          </label>
          <label>
            Bio:
            <textarea />
          </label>
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
}

export default About;
