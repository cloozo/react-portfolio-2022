import React from "react";
import coverImage from "../../Assets/contact.png";
function Contact() {
  return (
    <section className="my-5">
      <h1 id="contact">Contact me</h1>
      <img
        src={coverImage}
        className="my-2"
        style={{ width: "100%" }}
        alt="cover"
      />
    </section>
  );
}
export default Contact;
