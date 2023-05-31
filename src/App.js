import React from 'react';
import "./App.scss";
import Header from './components/Header/HeaderComponent.js'
import Footer from './components/Footer/FooterComponent.js'
import About from './components/About/AboutComponent.js'
import Projects from './components/Projects/ProjectsComponent.js'
import Experience from './components/Experience/ExperiencesComponent.js'
import Education from './components/Education/EducationComponent.js'
import Contact from './components/Contact/ContactComponent.js'
import PopupTray from "./components/PopupTray/PopupTrayComponent.js";

function App() {
  return (
    <div className="App">
      <Header />
      <PopupTray></PopupTray>
      <main>
        <About />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer/>
    </div>
  );
}

export default App;
