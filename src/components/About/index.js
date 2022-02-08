import React from "react";
import coverImage from "../../assets/cover/cover-image.jpg";
function About() {
  return (
    <section className="my-5">
      <h1 id="about">Who am I?</h1>
      <img
        src={coverImage}
        className="my-2"
        style={{ width: "100%" }}
        alt="cover"
      />
      <div className="my-2">
        <p>
          I am a web developer based on Miami, FL. In my spare time, I write
          code because I enjoy it a lot. My most recent project is one that I
          built for a start-up company. You can find me on LinkedIn , Twitter,
          Facebook , and Instagram.
        </p>
        <p>
          I am very proficient and familiar with HTML, CSS, Javascript, and
          other related languages. I am a very creative web developer that can
          take any design from simple concept to an actual full fledged-webpage.
          My skills include but are not limited to coding websites and web
          applications by building and optimizing secure web sites for evolving
          business need.
        </p>
      </div>
    </section>
  );
}

export default About;
