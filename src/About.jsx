import React from "react";
import "./App.css";
import cool from "./about.jpg";

const About = () => {
  return (
    <div style={{ marginLeft: 10 }}>
      <h1> About Page </h1>
      <br />
      <h3>
        Hi there Noobies!! <br />
        <br />
        This is just a place I have put all my training modules I have done for
        React. <br />I wanted one place where I could go and look at examples of
        how to do different things. <br />
        Please feel free to go check the code out at my GitHub.
        <br />
        <br />
        You can find the code at{" "}
        <a href="https://github.com/LegoWalker/waynesworld">
          "https://github.com/LegoWalker/waynesworld"
        </a>
        <br />
        <br />
        Help yourself :)
        <br />
        <br />
        Cheers
        <br />
        Wayne
        <br />
        <br />
        <img src={cool}></img>
        <br />
        <br />
        ***************************************************************************
        <br />
        Reminder to self!
        <br />
        To deploy the site, simply type "<b>npm run deploy</b>" in the terminal
        once you have committed your changes <br />
      </h3>
    </div>
  );
};

export default About;
