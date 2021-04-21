import { useRef } from "react";

const About = () => {
  const titleRef = useRef();
  return (
    <div>
      <h1 ref={titleRef}>About</h1>
      <div className="textblock center">
        <p>
          I started programming in late 2019 as a way to diversify my current
          skillset. It didn't take long before I found a passion for building
          things online.
        </p>
        <p>
          I first built a simple Flask website to share some of my Python
          scripts online. From that experience, I was able to design and build a
          food blog with Django at CookwithChemistry.com.
        </p>
        <p>
          Since then, I have been focused mainly on JavaScript and built a
          single page React app to search through a friend's Instagram page in
          early 2021. Most recently, I designed and built a habit tracker with
          the MERN stack (MongoDB, Express, React, Node). This was designed as a
          way to track my own habits and share how I do so with others.
        </p>
      </div>
    </div>
  );
};

export default About;
