import Project from "./Project";

const projects = [
  {
    name: "C-Suite Comp",
    description: "About C-Suite",
    imgsrc: "static/img/CsuiteLogo.png",
    link: "https://csuitecomp.com",
  },
  {
    name: "Z-Score Off-Shore",
    description: "About Z-Score.",
    imgsrc: "static/img/Z-Score Square Logo.png",
    link: "https://www.zscoreoffshore.com",
  },
  {
    name: "Pay Gap",
    description: "About Pay-Gap.",
    imgsrc: "static/img/Pay-Gap Logo.png",
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
  {
    name: "Instagram Search Bar",
    description:
      "A single page React app search bar built to search through a friend's Instagram recipes. Node backend makes calls to the Instagram Basic Display API to keep everything up-to-date.",
    imgsrc: "static/img/instagram.jpg",
    github: "https://github.com/NikZprojects/Instagram-Search-Bar",
    link: "https://instagram.nikzprojects.com/",
  },
  {
    name: "Food Blog Website",
    description:
      "A full-stack Django website built to share my recipes. A responsive website that uses Bootstrap to style and scale the elements on the page.",
    imgsrc: "static/img/cookwithchemistry-2.jpg",
    github: "https://github.com/NikZprojects/Food-Blog-Django",
    link: "https://www.cookwithchemistry.com",
  },
];

const Projects = () => (
  <div>
    <h1>Projects</h1>
    {projects.map((p) => {
      return (
        <Project
          className="project"
          key={p.name}
          name={p.name}
          description={p.description}
          imgsrc={p.imgsrc}
          github={p?.github}
          link={p.link}
        />
      );
    })}
  </div>
);

export default Projects;
