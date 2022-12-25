import { aboutMe } from "./strings";

const AboutMe = () => {
    return (
    <div className="w-full flex justify-center pt-3 px-3 sm:px-0 sm:pt-0 bg-semi-transparent">
        <div className="flex flex-col justify-center items-center max-w-md">
            <h1 className="pb-4 text-3xl sm:text-5xl md:font-extralight">About Me</h1>
            { Object.keys(aboutMe).map((key) =>
                <p className="pb-4 text-xl text-center text-stone-200" key={key}>{aboutMe[key]}</p>
            )}
        </div>
    </div>);
}

export default AboutMe;