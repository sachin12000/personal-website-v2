/**
 * Fixed container that covers up the whole screen except for the navbar
 */

const FixedContainer = ({ children, className, onClick = () => { } }) =>
    <div
        className={`fixed top-0 left-0 min-h-screen pb-14 sm:pl-40 lg:pl-44 xl:pl-64 2xl:pl-72 ${className ? className : ''}`}
        onClick={onClick}
    >
        {children}
    </div>;

export default FixedContainer;