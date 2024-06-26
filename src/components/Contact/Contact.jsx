import React from "react";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qtytekt",
        "template_3idqrcs",
        form.current,
        "NiXzNP3N7fklA8vAt"
      )

      e.target.reset()
      
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>Nadeem10Shagulam@gmail.com</h5>
            <a href="mailto:nadeem10shagulam@gmail.com" target="_blank" rel="noreferrer">
              Send a Message
            </a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Message</h4>
            <h5>Nadeem Gulam</h5>
            <a href="https://m.me" target="_blank" rel="noreferrer">
              Send a Message
            </a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>7259382287</h5>
            <a
              href="https://api.whatsapp.com/send?phone+917259382287"
              target="_blank"
            >
              Send a Message
            </a>
          </article>
        </div>
        {/* CONTACT WALA END HOTO YAHA */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
