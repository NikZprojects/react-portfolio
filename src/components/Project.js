const Project = () => (
  <div className="split">
    <div className="half">
      <img
        src={process.env.PUBLIC_URL + "/img/reacthabittracker.jpg"}
        alt="React habit tracker"
      />
    </div>
    <div className="half">
      <h2>React Habit Tracker</h2>
      <p>
        A habit tracker built with the ability to save data thanks to Google
        authentication, an Express API, and a MongoDB database.
      </p>
      <div className="split">
        <a
          href="https://github.com/NikZprojects/React-Habit-Tracker"
          className="button"
          target="_blank"
        >
          Github
        </a>
        <a
          href="https://www.nikzprojects.com/React_Habit_Tracker"
          className="button"
          target="_blank"
        >
          Link
        </a>
      </div>
    </div>
  </div>
);

export default Project;
