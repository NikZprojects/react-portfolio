const Contact = () => (
  <div>
    <h1>Contact</h1>
    <form autoComplete="false">
      <input placeholder="Name" />
      <input placeholder="Subject" />
      <input placeholder="Email" />
      <textarea rows="4" cols="50" placeholder="Message" />
      <button>Send Message</button>
    </form>
  </div>
);

export default Contact;
