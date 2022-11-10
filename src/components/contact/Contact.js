import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useContext, useRef, useState } from "react";
import { ThemeContext } from "../../context";
import emailjs from "emailjs-com";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_q3alwn9",
        "template_8aun808",
        formRef.current,
        "EpTajGY-J62tQcGmk"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset();
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +47 123 45 678
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              portfolio@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              Oslo, Norway
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What's your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{backgroundColor: darkMode && "#1F2937", color: darkMode && "white"}} type="text" placeholder="Name" name="user_name" />
            <input style={{backgroundColor: darkMode && "#1F2937", color: darkMode && "white"}} type="text" placeholder="Subject" name="user_subject" />
            <input style={{backgroundColor: darkMode && "#1F2937", color: darkMode && "white"}} type="text" placeholder="Email" name="user_email" />
            <textarea style={{backgroundColor: darkMode && "#1F2937", color: darkMode && "white"}} rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {done && <p className="c-thanks">Thank you, I'll get back to you shortly!</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;