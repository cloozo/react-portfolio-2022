import React from "react";
import coverImage from "../../Assets/resume.jpeg";
function Resume() {
  return (
    <section className="my-5">
      <h1 id="resume">My Resume</h1>
      <img
        src={coverImage}
        className="my-2"
        style={{ width: "100%" }}
        alt="cover"
      />
    </section>
  );
}
export default Resume;
