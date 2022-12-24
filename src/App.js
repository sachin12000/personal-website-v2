import ContentWrapper from './components/ContentWrapper';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import { useState } from 'react';
import Footer from './components/Footer';

export default function MyTabs() {
  const tabData = [{
    id: 'home',
    text: 'Home'
  }, {
    id: 'aboutme',
    text: 'About Me'
  }, {
    id: 'skills',
    text: 'Skills'
  }, {
    id: 'projects',
    text: 'Projects'
  }, {
    id: 'contactme',
    text: 'Contact Me'
  }];

  const [ visibleSection, setVisibleSection ] = useState(tabData[0].id);

  return (
    <div className='w-full text-slate-100'>
      <nav className="fixed top-0 left-0 z-10 h-screen w-1 sm:w-24 md:w-32 lg:w-64 bg-slate-100">
        <Navbar items={tabData} selectedTab={visibleSection} />
      </nav>
      <ContentWrapper id="home" setVisibility={setVisibleSection} justifyContentCenter alignItemsCenter>
        <Home/>
      </ContentWrapper>
      <ContentWrapper id="aboutme" setVisibility={setVisibleSection} justifyContentCenter alignItemsCenter>
        <AboutMe/>
      </ContentWrapper>
      <ContentWrapper id="skills" setVisibility={setVisibleSection}>
        <Skills/>
      </ContentWrapper>
      <ContentWrapper id="projects" setVisibility={setVisibleSection} justifyContentCenter alignItemsCenter>
        <Projects/>
      </ContentWrapper>
      <ContentWrapper id="contactme" setVisibility={setVisibleSection} justifyContentCenter alignItemsCenter>
        <ContactMe/>
      </ContentWrapper>
      <Footer/>
    </div>
  )
}