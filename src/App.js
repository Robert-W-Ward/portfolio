import React from 'react';
import "./App.scss";
import Header from './components/Header/HeaderComponent.js'
import About from './components/About/AboutComponent.js'
import Project from './components/Projects/ProjectsComponent.js'
import Experience from './components/Experience/ExperienceComponent.js'
// import Education from './components/Education/EducationComponent.js'
// import Skills from './components/Skills/SkillsComponent.js'
// import Contact from './components/Contact/ContactComponent.js'

function App() {
  return (
    <div className="App">
    <Header />
      <main>
        <About/>
        <Project/>
        <Experience/>
      </main>
      <footer>
        <p>&copy; 2023 Robert Ward II</p>
      </footer>
    </div>
  );
}

export default App;
