import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import dummyText from "./DummyText";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Section
          title="About Me"
          subtitle={dummyText}
          dark={true}
          id="section1"
        />
        <Section
          title="Skills"
          subtitle={dummyText}
          dark={false}
          id="section2"
        />
        <Section
          title="Projects"
          subtitle={dummyText}
          dark={true}
          id="section3"
        />
        <Section
          title="Contact Me"
          subtitle={dummyText}
          dark={false}
          id="section4"
        />
      </div>
    );
  }
}

export default App;