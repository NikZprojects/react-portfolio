import Project from "./Project";

const projects = [
  {
    name: "C-Suite Comp",
    description: "About C-Suite",
    imgsrc: "static/img/c-suite.png",
    link: "https://csuitecomp.com",
    year: 2022,
  },
  {
    name: "Joes Pub",
    description: "About Joes Pub",
    imgsrc: "static/img/joes-pub.png",
    github: "https://github.com/NikZprojects/joes-pub-website",
    link: "https://www.joespub.xyz",
  },
  {
    name: "Z-Score Off-Shore",
    description: "About Z-Score.",
    imgsrc: "static/img/z-score.png",
    link: "https://www.zscoreoffshore.com",
    year: 2021,
  },
  {
    name: "Pay Gap",
    description: "About Pay-Gap.",
    imgsrc: "static/img/pay-gap_dark.png",
    link: "https://pay-gap.com",
  },
  {
    name: "React Habit Tracker",
    description:
      "A full-stack React habit tracker app built with the ability to save data thanks to Google authentication, an Express API, and a MongoDB database.",
    imgsrc: "static/img/reacthabittracker.jpg",
    github: "https://github.com/NikZprojects/React-Habit-Tracker",
    link: "/HabitTracker",
  },
  // {
  //   name: "Instagram Search Bar",
  //   description:
  //     "A single page React app search bar built to search through a friend's Instagram recipes. Node backend makes calls to the Instagram Basic Display API to keep everything up-to-date.",
  //   imgsrc: "static/img/instagram.jpg",
  //   github: "https://github.com/NikZprojects/Instagram-Search-Bar",
  //   link: "https://instagram.nikzprojects.com/",
  //   year: 2020,
  // },
  {
    name: "Food Blog Website",
    description:
      "A full-stack Django website built to share my recipes. A responsive website that uses Bootstrap to style and scale the elements on the page.",
    imgsrc: "static/img/cookwithchemistry-2.jpg",
    github: "https://github.com/NikZprojects/Food-Blog-Django",
    link: "https://www.cookwithchemistry.com",
    year: 2020,
  },
];

const Projects = () => (
  <div className="Projects">
    <h1>Projects</h1>
    {projects.map((p) => {
      return (
        <>
          {p?.year ? (
            <h2 className="year">
              <span>{p?.year}</span>
            </h2>
          ) : null}
          <Project
            className="project"
            key={p.name}
            name={p.name}
            description={p.description}
            imgsrc={p.imgsrc}
            github={p?.github}
            link={p.link}
          />
        </>
      );
    })}
  </div>
);

export default Projects;
