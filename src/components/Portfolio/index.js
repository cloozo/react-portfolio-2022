import React from "react";
import coverImage from "../../Assets/portfolio.jpeg";
function Portfolio() {
  return (
    <section className="my-5">
      <h1 id="myportfolio">My Portfolio</h1>
      <img
        src={coverImage}
        className="my-2"
        style={{ width: "100%" }}
        alt="cover"
      />
    </section>
  );
}
export default Portfolio;
