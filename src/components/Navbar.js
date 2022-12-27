import { Tab } from '@headlessui/react'
import { useState, useRef } from 'react';
import { combineClasses } from './util';
import { HiBars3 } from "react-icons/hi2";

const Navbar = (props) => {
    const { items, selectedTab, mobile } = props;
    const [ navBarOpen, setNavBarOpen ] = useState(false);
    const tabRef = useRef();

    const tabClasses = 'h-12 text-sm font-medium leading-5 text-slate-700 focus:outline-1';
    const tabUnselected = combineClasses(tabClasses, 'hover:bg-slate-200 hover:text-slate-900');
    const tabSelected = combineClasses(tabClasses, 'outline-none bg-slate-700 text-white shadow');

    const itemsObj = {}; // map of tabID to tab index. used for setting active tab during scroll
    items.forEach((tab, i) => itemsObj[tab.id] = i);

    // scrolls to the selected content and closes the navbar menu if its open
    const handleTabClick = (id) => {
        if (mobile && navBarOpen) setNavBarOpen(false);
        const y = document.getElementById(id).offsetTop;
        window.scrollTo({
            top: y,
            behavior: 'smooth'
        })
    }

    // the top property is animated to slide the nav bar in and out of view on mobile.
    const animatedSlideDown = {
        top: mobile ?
            ( navBarOpen ? 0 : tabRef.current ?
                -tabRef.current.offsetHeight : "-1000px" ) : 0
    }
    const navTabs =
        (<Tab.Group vertical
            ref={tabRef}
            className="relative w-full flex flex-col bg-slate-100 transition-all duration-500 sm:transition-none"
            style={animatedSlideDown}
            selectedIndex={itemsObj[selectedTab]}>
            <Tab.List>
            { items.map((tab) =>
                <Tab
                    key={tab.id}
                    className={({selected}) => selected ? tabSelected : tabUnselected}
                    onClick={() => handleTabClick(tab.id)}
                    >
                        { tab.icon ? <tab.icon className='absolute ml-4' size={tab.iconSize ? tab.iconSize : 20}/> : null }
                        {tab.text}
                </Tab>
            )}
            </Tab.List>
        </Tab.Group>);

    // no need for the header of the navbar if the it's not mobile
    if (!mobile)
        return navTabs;
    else
        return (
            <div className='absolute w-full h-12'>
                <div className='relative z-10 h-12 px-3 bg-slate-100 flex flex-row justify-between items-center'>
                    <h1 className='text-2xl text-slate-700'>Sachin's Website</h1>
                    <HiBars3 className='text-slate-700' size={30} onClick={() => setNavBarOpen(!navBarOpen)}/>
                </div>
                { navTabs }
            </div>
        )
}

export default Navbar;