const Project = ({ name, description, imgsrc, github, link }) => (
  <div className="split">
    <div className="half">
      <img src={process.env.PUBLIC_URL + imgsrc} alt={name} />
    </div>
    <div className="half">
      <h2>{name}</h2>
      <p>{description}</p>
      <div className="split">
        <a href={github} className="button" target="_blank" rel="noreferrer">
          Github
        </a>
        <a href={link} className="button" target="_blank" rel="noreferrer">
          Link
        </a>
      </div>
    </div>
  </div>
);

export default Project;
