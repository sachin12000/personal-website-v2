import tailwindLogo from '../Tailwind_logo.svg';

import reactLogo from '../React_logo.svg';
const Footer = () => {
    return (
        <footer className="fixed bottom-0 w-full flex flex-row justify-center items-center sm:pl-24 md:pl-32 lg:pl-64 bg-semi-transparent">
            <span className='mr-4'>Powered By</span>
            <a href="https://reactjs.org/">
                <img className="h-8 mr-4" src={reactLogo} alt="React logo"/>
            </a>
            <a href="https://tailwindcss.com/">
                <img className="h-10" src={tailwindLogo} alt="TailwindsCSS logo"/>
            </a>
        </footer>
    );
}

export default Footer;