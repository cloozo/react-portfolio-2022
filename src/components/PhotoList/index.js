import React, { useState } from "react";
import Modal from "../Modal";

const PhotoList = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState();

  const [photos] = useState([
    // {
    //   name: "Grocery aisle",
    //   category: "commercial",
    //   description:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    // },
    // {
    //   name: "Grocery booth",
    //   category: "commercial",
    //   description:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    // },
    // {
    //   name: "Building exterior",
    //   category: "commercial",
    //   description:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    // },
    // {
    //   name: "Restaurant table",
    //   category: "commercial",
    //   description:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    // },
    // {
    //   name: "Cafe interior",
    //   category: "commercial",
    //   description:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    // },
    {
      name: "Chef Bartender",
      category: "portfolio",

      description: "Chef Bartender",
    },
    {
      name: "Coding Quizz Challenge",
      category: "portfolio",
      description: "Coding Quizz Challenge",
    },
    {
      name: "Work Day Scheduler",
      category: "portfolio",
      description: "Work Day Scheduler",
    },
    {
      name: "Code Refactor",
      category: "portfolio",
      description: "Code Refacto",
    },
    {
      name: "Password Generator",
      category: "portfolio",
      description: "Password Generator",
    },
    {
      name: "Weather Dashboard",
      category: "portfolio",
      description: "Weather Dashboard",
    },
    // {
    //   name: "Resume1",
    //   category: "food1",
    //   description:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    // },
    // {
    //   name: "Resume2",
    //   category: "food1",
    //   description:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    // },
    // {
    //   name: "Resume3",
    //   category: "food1",
    //   description:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    // },
    // {
    //   name: "Resume4",
    //   category: "food1",
    //   description:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    // },
    // {
    //   name: "Resume1",
    //   category: "food1",
    //   description:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    // },
    // {
    //   name: "Green river",
    //   category: "landscape",
    //   description:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    // },
    // {
    //   name: "Docks",
    //   category: "landscape",
    //   description:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    // },
    // {
    //   name: "Panoramic village by sea",
    //   category: "landscape",
    //   description:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    // },
    // {
    //   name: "Domestic landscape",
    //   category: "landscape",
    //   description:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    // },
    // {
    //   name: "Park bench",
    //   category: "landscape",
    //   description:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    // },
  ]);

  const currentPhotos = photos.filter((photo) => photo.category === category);

  const toggleModal = (image, i) => {
    setCurrentPhoto({ ...image, index: i });
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {isModalOpen && (
        <Modal onClose={toggleModal} currentPhoto={currentPhoto} />
      )}

      <div className="flex-row">
        <div className="my-2">
          <hr></hr>
          Portfolio links:
          <p>
            <a
              data-testid="link"
              href="https://alysnyder.github.io/group-1-project/"
            >
              Chef Bartender |
            </a>
            <a
              data-testid="link"
              href="https://user-images.githubusercontent.com/84163696/140164832-ef11db62-7afa-4c08-a42a-6d3da20df354.png"
            >
              Weather Dashboard |
            </a>
            <a
              data-testid="link"
              href="https://cloozo.github.io/quiz-challenge-javascript-page/"
            >
              Coding Quizz Challenge |
            </a>

            <a
              data-testid="link"
              href="https://cloozo.github.io/calendar-challenge-javascript-app/"
            >
              WorkDay Scheduler |
            </a>

            <a
              data-testid="link"
              href="https://cloozo.github.io/password-generator-web-app"
            >
              Password Generator |
            </a>
            <a
              data-testid="link"
              href="https://cloozo.github.io/code-refactor-horiseon/"
            >
              Code Refactor
            </a>
          </p>
        </div>
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../../assets/small/${category}/${i}.png`).default}
            alt={image.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(image, i)}
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoList;
