import { Tab } from '@headlessui/react'
import { combineClasses } from './util';

const Navbar = (props) => {
    const { items, selectedTab } = props;

    const tabClasses = 'py-3 text-sm font-medium leading-5 text-slate-700 focus:outline-1';
    const tabUnselected = combineClasses(tabClasses, 'text-blue-100 hover:bg-slate-200 hover:text-slate-900');
    const tabSelected = combineClasses(tabClasses, 'outline-none bg-slate-700 text-white shadow');

    const itemsObj = {}; // map of tabID to tab index. used for setting active tab during scroll
    items.forEach((tab, i) => itemsObj[tab.id] = i);

    const scroll = (id) => {
        const y = document.getElementById(id).offsetTop;
        window.scrollTo({
            top: y,
            behavior: 'smooth'
        })
    }

    return (
        <Tab.Group vertical className="w-full h-full flex flex-col" selectedIndex={itemsObj[selectedTab]}>
            <Tab.List>
            { items.map((tab) =>
                <Tab
                    key={tab.id}
                    className={({selected}) => selected ? tabSelected : tabUnselected}
                    onClick={() => scroll(tab.id)}
                    >
                        {tab.text}
                </Tab>
            )}
            </Tab.List>
        </Tab.Group>
    );
}

export default Navbar;