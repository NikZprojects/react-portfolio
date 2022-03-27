import Project from "./Project";

const projects = [
  {
    name: "C-Suite Comp",
    description:
      "Currently in Development. Collected executive compensation data for over 10,000 executives. Developed an interactive bar graph that breaks down compensation types and a line graph to show change in compensation since 2018. Developed filters for industry, sector, and more. Developed on a team with one other developer at OptimaTrain.",
    imgsrc: "static/img/c-suite.png",
    link: "https://csuitecomp.com",
    year: 2022,
  },
  {
    name: "Joes Pub",
    description:
      "Side project developed for my friend Joe. Provides a slide-show of his home bar’s history, an interactive menu, and a responsive search bar to search the cocktails he created and posted to Instagram by using the Instagram Basic Display API.",
    imgsrc: "static/img/joes-pub.png",
    github: "https://github.com/NikZprojects/joes-pub-website",
    link: "https://www.joespub.xyz",
  },
  {
    name: "Z-Score Off-Shore",
    description:
      "Single page website devloped to promote a consulting company. Designed the site from wireframe to final product with an animated logo and a contact form. Developed at OptimaTrain as a solo developer.",
    imgsrc: "static/img/z-score.png",
    link: "https://www.zscoreoffshore.com",
    year: 2021,
  },
  {
    name: "Pay Gap",
    description:
      "Collected CEO and median compensation data for over 3,000 companies. Table and graphs demonstrate the pay-gap between CEO and median compensation. Developed on a team with one other developer at OptimaTrain.",
    imgsrc: "static/img/pay-gap_dark.png",
    link: "https://pay-gap.com",
  },
  {
    name: "React Habit Tracker",
    description:
      "A full-stack React application with the ability to log in with Google oAuth, and save data with an Express API and MongoDB database.",
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
    {projects.map((p, i) => {
      return (
        <div key={i}>
          {p?.year ? (
            <h2 className="year">
              <span>{p?.year}</span>
            </h2>
          ) : null}
          <Project
            className="project"
            key={i}
            name={p.name}
            description={p.description}
            imgsrc={p.imgsrc}
            github={p?.github}
            link={p.link}
          />
        </div>
      );
    })}
  </div>
);

export default Projects;
