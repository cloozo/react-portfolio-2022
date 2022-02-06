import React from "react";
// import { capitalizeFirstLetter } from "../../utils/helpers";

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

  const handleClick = (item) => {
    console.log(item);
    return item;
  };

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="camera">
            {" "}
            📸
          </span>{" "}
          JONACIN!
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="#about" onClick={() => handleClick()}>
              About me
            </a>
          </li>

          <li className="mx-2">
            <a
              data-testid="about"
              href="#portfolio"
              onClick={() => handleClick()}
            >
              Porfolio
            </a>
          </li>
          <li className="mx-2">
            <a
              data-testid="about"
              href="#portfolio"
              onClick={() => handleClick()}
            >
              Gallery
            </a>
          </li>

          <li className="mx-2">
            <a data-testid="about" href="#resume" onClick={() => handleClick()}>
              Resume
            </a>
          </li>
          <li className="mx-2">
            <a
              data-testid="about"
              href="#contact"
              onClick={() => handleClick()}
            >
              Contact
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
