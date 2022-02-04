import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav() {
  /* const categories = [
    {
      name: "commercial",
      description:
        "Photos of grocery stores, food trucks, and other commercial projects",
    },
    { name: "portraits", description: "Portraits of people in my life" },
    { name: "food", description: "Delicious delicacies" },
    {
      name: "landscape",
      description: "Fields, farmhouses, waterfalls, and the beauty of nature",
    },
  ]; */

  const handleClick = () => {
    console.log("click handled");
  };

  return (
    <header data-testid="header" className="flex-row px-1">
      <h2>
        <a href="/">
          <span role="img" aria-label="camera">
            {" "}
            📸
          </span>{" "}
          JONACIN PIERRE-LOUIS PORTFOLIO!
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a href="#about" onClick={() => handleClick()}>
              About me
            </a>
          </li>

          <li className="mx-2">
            <a href="#portfolio" onClick={() => handleClick()}>
              Porfolio
            </a>
          </li>
          <li className="mx-2">
            <a href="#resume" onClick={() => handleClick()}>
              Resume
            </a>
          </li>
          <li className="mx-2">
            <a href="#contact" onClick={() => handleClick()}>
              Contact2
            </a>
          </li>

          {/* {categories.map((category) => (
            <li className="mx-1" key={category.name}>
              <span
                onClick={() => {
                  handleClick();
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))} */}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
