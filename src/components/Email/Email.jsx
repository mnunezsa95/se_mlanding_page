import { useState } from "react";
import { send } from "emailjs-com";
import "./Email.css";

function Email() {
  const [sendOptions, setSendOption] = useState({
    first_name: "",
    last_name: "",
    message: "",
    reply_to: "",
  });

  const onSubmit = (evt) => {
    evt.preventDefault();
    send(
      "service_cm2gxqw",
      "template_03drn25",
      sendOptions,
      "mhe4v6w4zwYssI1F3"
    )
      .then((res) => {
        console.log("SUCCESS!", res.status, res.text);
      })
      .then(() => {
        setSendOption({
          first_name: "",
          last_name: "",
          message: "",
          reply_to: "",
        });
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  const handleChange = (evt) => {
    setSendOption({ ...sendOptions, [evt.target.name]: evt.target.value });
  };

  return (
    <div className="email__wrapper">
      <div className="email__container">
        <form className="email__form" onSubmit={onSubmit}>
          <p className="email__title">Contact Me</p>
          <div className="email__input-container">
            <input
              className="email__input"
              type="text"
              name="first_name"
              placeholder="First name"
              autoFocus
              value={sendOptions.first_name}
              onChange={handleChange}
            />
            <input
              className="email__input"
              type="text"
              name="last_name"
              placeholder="Last name"
              value={sendOptions.last_name}
              onChange={handleChange}
            />
            <textarea
              className="email__input email__input-message"
              id="message-input"
              rows="5"
              cols="5"
              wrap="soft"
              type="text"
              name="message"
              placeholder="Message"
              value={sendOptions.message}
              onChange={handleChange}
            />
            <input
              className="email__input"
              type="text"
              name="reply_to"
              placeholder="Your email"
              inputMode="email"
              value={sendOptions.reply_to}
              onChange={handleChange}
            />
            <button className="email__submit-btn" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Email;
