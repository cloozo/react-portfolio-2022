import React, { useState } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Gallery from "./components/Gallery";
import ContactForm from "./components/Contact";

function App() {
  const [categories] = useState([
    // {
    //   name: "commercial",
    //   description:
    //     "Photos of grocery stores, food trucks, and other commercial projects",
    // },
    {
      name: "about me",
      description: (
        <div className="my-2">
          <h1> I am Jonacin</h1>
          <p>
            I am Jonacin and I am web developer based on Miami, FL. In my spare
            time, I write code because I enjoy it a lot. My most recent project
            is one that I built for a start-up company. You can find me on
            LinkedIn , Twitter, Facebook , and Instagram.
          </p>
        </div>
      ),
    },
    { name: "portraits", description: "Portraits of people in my life" },
    {
      name: "resume",
      description: (
        <div className="my-2">
          <p>
            Jonacin Pierre-Louis Miami, FL, 33161 (786) 553 4822
            mybenefitchoiceinc@yahoo.com{" "}
          </p>
          EDUCATIONAL QUALIFICATION
          <p>
            University of Miami Coding Bootcamp, Full Stack Web Developer
            Florida International University, Miami, Florida August 2021- Feb
            2022
          </p>
          <p>
            Master’s in Business Administration Florida International
            University, Miami, Florida August 2009-March 2011
          </p>
          <p>
            Bachelor's Degree in Studio Art Graphic/Web Design Florida State
            University, Tallahassee, Florida July 2003{" "}
          </p>
          PROFESSIONAL EXPERIENCE
          <p>
            America’s GOP 2005 - 2010 Free Lance web design • In charge of
            creating and maintaining the website using ColdFusion, Adobe
            Photoshop, Fireworks, and Dreamweaver, for the company and to make
            sure that the website was running with no technical difficulties and
            that all the codes were running flawless. • Developed graphics that
            effectively communicate the ideas being promoted by the company’s
            Web site.
          </p>
          <p>
            Econocaribe 2003 – 2005 RPG Programmer • Tested and debugged
            programs as well as prepared run sheets for routine programs. Part
            of my daily responsibilities was to do coding from flow charts and
            assisted in determining the causes of computer or program
            malfunctions and verified program logic by preparing tests data for
            trial runs. • Provided status reports that give a detailed
            description of the projects and indicated time devoted to each task
            of the project.
          </p>
          <p>CERTIFICATION </p>
          Completed the ASNA “UP AND RUNNING WITH AVR for .NET” Seminar, July
          2004 Full Stack Web Development, Miami, FL - University Of Miami
          February 2022
        </div>
      ),
    },

    // { name: 'landscape', description: 'Fields, farmhouses, waterfalls, and the beauty of nature' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
            <Gallery currentCategory={currentCategory}></Gallery>
            {/* <About></About> */}
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
    </div>
  );
}

export default App;
