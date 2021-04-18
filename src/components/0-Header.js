const Header = ({ aboutRef, projectsRef, contactRef }) => {
  const scrollToRef = (reff) => {
    reff.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <header className="App-header">
      <div className="header-block">
        <h3 className="left clickable" onClick={() => scrollToRef(aboutRef)}>
          About
        </h3>
        <h3 className="left clickable" onClick={() => scrollToRef(projectsRef)}>
          Portfolio
        </h3>
        <div></div>
        <h3 className="right clickable" onClick={() => scrollToRef(contactRef)}>
          Contact
        </h3>
      </div>
    </header>
  );
};

export default Header;
