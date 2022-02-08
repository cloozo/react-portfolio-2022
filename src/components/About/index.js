import React from "react";
import coverImage from "../../assets/cover/cover-image.jpg";
function About() {
  return (
    <section className="my-5">
      {/* <h1 id="about">Who am I?</h1>
      <img
        src={coverImage}
        className="my-2"
        style={{ width: "100%" }}
        alt="cover"
      /> */}
      <div className="my-2">
        <hr></hr>
        <h1>Social Media</h1>
        <p>
          <a data-testid="link" href="./">
            LinkedIn{" "}
          </a>
          |{" "}
          <a data-testid="link" href="./">
            Instagram{" "}
          </a>{" "}
          |{" "}
          <a data-testid="link" href="./">
            Facebook{" "}
          </a>{" "}
          |{" "}
          <a data-testid="link" href="./">
            Twitter{" "}
          </a>
        </p>
      </div>

      {/* <a data-testid="link" href="./">
        <span role="img" aria-label="camera"></span>{" "}
        <h2>JONACIN PIERRE-LOUIS!</h2>
      </a> */}
    </section>
  );
}

export default About;
