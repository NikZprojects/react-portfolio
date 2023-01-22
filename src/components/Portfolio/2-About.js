import { useRef } from "react";

const About = () => {
  const titleRef = useRef();
  return (
    <div className="about">
      <h1 ref={titleRef}>About</h1>
      <div className="textblock center">
        <p>
          2+ year experienced React.js full-stack developer with data collection
          and processing experience in Python. Comfortable using HTML, CSS, and
          JavaScript to deliver interactive and responsive experiences to
          customers. Passionate about learning new technologies and finding
          creative solutions to technical problems.
        </p>

        <p>
          For the past year I have been developing websites as a Full Stack
          Developer at OptimaTrain. I fully developed{" "}
          <a href="https://zscoreoffshore.com/">Z-Score Off Shore</a>, and
          developed <a href="https://pay-gap.com/">Pay-Gap</a> and{" "}
          <a href="https://csuitecomp.com/">C-Suite Comp</a> on a team with one
          other developer. Over 100,000 datapoints were collected for over 4,000
          companies and 10,000 executives for these projects. Two full-stack
          applications were developed to present this data to shed light on the
          pay gap between CEOs and median employees (
          <a href="https://pay-gap.com/">Pay-Gap</a>) and provide executive
          compensation breakdowns for compensation analysts (
          <a href="https://csuitecomp.com/">C-Suite Comp</a>).
        </p>

        <p>
          Outside of work, I recently developed{" "}
          <a href="https://joespub.xyz/">Joe's Pub</a>, a site designed to share
          a menu, recipes, and search an instagram page. I have also included
          some of my first web projects on this site:{" "}
          <a href="https://cookwithchemistry.com/">Cook With Chemistry</a>, a
          food blog developed with Django in mid-2020 and a{" "}
          <a href="/HabitTracker">Habit Tracker</a> that I developed with React
          in early 2021.
        </p>
      </div>
    </div>
  );
};

export default About;
