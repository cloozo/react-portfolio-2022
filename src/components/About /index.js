import React from "react";
import coverImage from "../../Assets/cover/about.jpeg";
function About() {
  return (
    <section className="my-5">
      <h1 id="about">My Bio: Who am I?</h1>
      <img
        src={coverImage}
        className="my-2"
        style={{ width: "30%" }}
        alt="cover"
      />
      <div className="my-2">
        <p>
          My name is Jonacin and I am a web developper out of Miami. I have been
          designing web pages for a while and I know I am great at it
        </p>
      </div>
    </section>
  );
}

export default About;
