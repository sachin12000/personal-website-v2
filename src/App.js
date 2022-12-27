import ContentWrapper from './components/ContentWrapper';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import { useState } from 'react';
import Footer from './components/Footer';
import useScreenMediaQuery from './useScreenMediaQuery';

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
  }
];

export default function MyTabs() {
  const [ visibleSection, setVisibleSection ] = useState(tabData[0].id);
  const [ isMobile, setIsMobile ] = useState();

  useScreenMediaQuery("(min-width: 640px)", (matched) => setIsMobile(!matched))
  return (
    <div className='w-full text-slate-100'>
      <nav className="fixed top-0 left-0 z-10 w-screen sm:w-40 lg:w-44 xl:w-64 2xl:w-72 sm:h-screen">
        <Navbar mobile={isMobile} items={tabData} selectedTab={visibleSection} />
      </nav>
      <ContentWrapper id="home" setVisibility={setVisibleSection} justifyContentCenter alignItemsCenter mobile={isMobile}>
        <Home/>
      </ContentWrapper>
      <ContentWrapper id="aboutme" setVisibility={setVisibleSection} justifyContentCenter alignItemsCenter mobile={isMobile}>
        <AboutMe/>
      </ContentWrapper>
      <ContentWrapper id="skills" setVisibility={setVisibleSection} mobile={isMobile}>
        <Skills/>
      </ContentWrapper>
      <ContentWrapper id="projects" setVisibility={setVisibleSection} justifyContentCenter alignItemsCenter mobile={isMobile}>
        <Projects/>
      </ContentWrapper>
      <ContentWrapper id="contactme" setVisibility={setVisibleSection} justifyContentCenter alignItemsCenter mobile={isMobile}>
        <ContactMe/>
      </ContentWrapper>
      <Footer/>
    </div>
  )
}