import "./contact.css";

function Contact() {
  return (
    <>
      <section>
        <div id="container">
          <h1>&bull; Contact Us &bull;</h1>

          <form
            action="https://formspree.io/f/xrgrgzqg"
            method="POST"
            enctype="multipart/form-data"
            id="contact_form">
            <div className="name">
              <label htmlFor="name"></label>
              <input
                type="text"
                placeholder="My name is"
                name="name"
                id="name_input"
                required
              />
            </div>
            <div className="email">
              <label htmlFor="email"></label>
              <input
                type="email"
                placeholder="My e-mail is"
                name="email"
                id="email_input"
                required
              />
            </div>
            <div className="telephone">
              <label htmlFor="name"></label>
              <input
                type="tel"
                placeholder="My number is"
                name="telephone"
                id="telephone_input"
                required
              />
            </div>
            <div className="subject">
              <label htmlFor="subject"></label>
              <input
                placeholder="Subject line"
                type="text"
                name="subject"
                id="subject"
              />
            </div>
            <div className="message">
              <label htmlFor="message"></label>
              <textarea
                name="message"
                placeholder="I'd like to chat about"
                id="message_input"
                cols="30"
                rows="5"
                required
              />
            </div>
            <div className="submit">
              <input type="submit" value="Send Message" id="form_button" />
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
