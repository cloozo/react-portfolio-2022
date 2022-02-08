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
            I am .,,,a web developer based on Miami, FL. In my spare time, I
            write code because I enjoy it a lot. My most recent project is one
            that I built for a start-up company. You can find me on LinkedIn ,
            Twitter, Facebook , and Instagram.
          </p>
          <p>
            I am very proficient and familiar with HTML, CSS, Javascript, and
            other related languages. I am a very creative web developer that can
            take any design from simple concept to an actual full
            fledged-webpage. My skills include but are not limited to coding
            websites and web applications by building and optimizing secure web
            sites for evolving business need.
          </p>
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
