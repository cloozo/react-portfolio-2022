import React, { useState } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import coverImage from "../src/assets/cover/jon1.jpg";
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
          <h1>
            {/* <hr></hr> */}
            <h3>Just a few words about me </h3>
          </h1>
          <p>
            <br></br>I am a web developer based in Miami, FL; I am a current
            University of Miami Coding Booting student. In my spare time, I
            write code because I enjoy it a lot. My most recent project is one
            that I built for a start-up company using various in demand
            tehnologies like React.
          </p>
          <p>
            I am quite proficient with HTML, CSS, Javascript, JQuery, MongoDb,
            Mongoose, Mysql, NoSql, React and more. I am a very creative web
            developer that can take any design from simple concept to an actual
            full fledged-webpage. My skills include but are not limited to
            coding websites and web applications by building and optimizing
            secure web sites for evolving business need.
          </p>
        </div>
      ),
    },

    { name: "portfolio", description: "Here are samples of my work" },

    {
      name: "resume",
      description: (
        <div className="my-2">
          {/* <hr></hr> */}
          <p>
            Jonacin Pierre-Louis Miami, FL, 33161 (743) 500-0000
            <hr></hr>
            youcansendmejunkmail@ygmail.com{" "}
          </p>
          EDUCATIONAL QUALIFICATION
          <p>
            Full Stack Web Developer, University of Miami Coding Bootcamp Miami,
            Florida August 2021- Feb 2022
          </p>
          <p>
            Master’s in Business Administration, Florida International
            University, Miami, Florida August 2009-March 2011
          </p>
          <p>
            Bachelor's Degree in Studio Art Graphic/Web Design, Florida State
            University, Tallahassee, Florida July 2003{" "}
          </p>
          PROFESSIONAL EXPERIENCE
          <p>
            America’s GOP 2005 - 2010 Free Lance web design • Charged to create
            and maintained the website using ColdFusion, Adobe Photoshop,
            Fireworks, and Dreamweaver, for the company and to make sure that
            the website was running with no technical difficulties and that all
            the codes were running flawless. • Developed graphics that
            effectively communicate the ideas being promoted by the company’s
            Web site.
          </p>
          <p>
            Econocaribe 2003 – 2005 RPG Programmer Tested and debugged programs
            as well as prepared run sheets for routine programs. Part of my
            daily responsibilities was to do coding from flow charts and
            assisted in determining the causes of computer or program
            malfunctions and verified program logic by preparing tests data for
            trial runs. • Provided status reports that give a detailed
            description of the projects and indicated time devoted to each task
            of the project.
          </p>
          <p>CERTIFICATION </p>
          Completed the ASNA “UP AND RUNNING WITH AVR for .NET” Seminar, July
          2004 Barry University Full Stack Web Development, Miami, FL -
          University Of Miami February 2022
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
            <About></About>
            <section className="my-5">
              <img
                src={coverImage}
                className="my-2"
                style={{ width: "20%" }}
                alt="cover"
              />
            </section>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
    </div>
  );
}

export default App;
