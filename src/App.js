import React from "react";
import Nav from "./components/Nav";
import About from "./components/About ";
import Portfolio from "./components/Portfolio";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <About> </About>
        <Portfolio> </Portfolio>
        <Gallery> </Gallery>
        <Contact> </Contact>
        <Resume> </Resume>
      </main>
    </div>
  );
}

export default App;
