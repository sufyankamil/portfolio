import './App.css';
import React, { Component, Fragment } from 'react';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ProjectCard from './components/ProjectCard';
import Contact from './components/Contact';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import withSplashScreen from './components/Splash';

class App extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <Banner />
        <Skills />
        <Projects />
        <ProjectCard />
        <Contact />
        <Footer />
      </Fragment>
    );
  }
}

export default withSplashScreen(App);