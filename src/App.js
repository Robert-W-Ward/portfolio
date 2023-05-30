import React from 'react';
import "./App.scss";
import Header from './components/Header/HeaderComponent.js'
import About from './components/About/AboutComponent.js'
import Projects from './components/Projects/ProjectsComponent.js'
import Experience from './components/Experience/ExperiencesComponent.js'
// import Education from './components/Education/EducationComponent.js'
// import Skills from './components/Skills/SkillsComponent.js'
// import Contact from './components/Contact/ContactComponent.js'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Projects />
        <Experience />
      </main>
      <footer>
        <p>&copy; 2023 Robert Ward II</p>
      </footer>
    </div>
  );
}

export default App;
