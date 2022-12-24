import { Fragment } from "react";
import SkillInfoBox from "./SkillInfoBox";

const Skills = () => {
    const createColoredSpan = (text, color) => <span className={ color }>{text}</span>;
    const skillListCLasses = "pl-6 list-disc text-xl text-stone-200";
    const jsYellowText = createColoredSpan("Javascript", "text-js-yellow");
    const reactTealText = createColoredSpan("React", "text-react-teal");
    const linuxRed = "text-linux-red";
    const hardwareCyan = "text-hardware-cyan";
    return (
        <Fragment>
            <h1 className="text-3xl sm:text-5xl md:font-extralight text-center">Skills</h1>
            <div className="min-h-screen flex flex-row flex-wrap place-content-start justify-center">
                <SkillInfoBox>
                    <h3 className="pb-2 text-3xl sm:text-5xl font-light">Web Development</h3>
                    <ul className={skillListCLasses}>
                        <li>
                            Excellent theoretical and practical understanding of the { jsYellowText } language.
                        </li>
                        <li>
                            Create beautiful front-ends by combining { jsYellowText } with techonologies such as&nbsp;
                            { reactTealText }, { createColoredSpan('tailwindcss', 'text-tailwind-blue') },&nbsp;
                            { createColoredSpan('Bootstrap', 'text-bootstrap-purple') }.
                        </li>
                        <li>
                            Create effiecient and secure back-ends with the use of frameworks such as { createColoredSpan('ExpressJS', 'text-node-green') }.
                        </li>
                    </ul>
                </SkillInfoBox>
                <SkillInfoBox>
                    <h3 className="pb-2 text-3xl sm:text-5xl font-light">Tools & Frameworks</h3>
                    <ul className={skillListCLasses}>
                        <li>
                            Use { createColoredSpan('Webpack', 'text-webpack-teal') } and { createColoredSpan('babel', 'text-js-yellow') } to transpile
                            complex { reactTealText } projects in to browser compatible code.
                        </li>
                        <li>
                            Use { createColoredSpan('ReactNative', 'text-react-teal') } to create cross-platform, efficient and user-friendly mobile apps.
                        </li>
                        <li>
                            Test code using { createColoredSpan('Mocha', 'text-mocha-brown') }.
                        </li>
                        <li>
                            Use { createColoredSpan('Git', 'text-git-red') } to efficiently manage and collaborate on software projects.
                        </li>
                    </ul>
                </SkillInfoBox>
                <SkillInfoBox>
                    <h3 className="pb-2 text-3xl sm:text-5xl font-light">Other related skills</h3>
                    <ul className={skillListCLasses}>
                        <li>
                            Ability to utilize { createColoredSpan("Linux", linuxRed) } based environments.
                        </li>
                        <li>
                            Experience with using the { createColoredSpan("command line", linuxRed) },&nbsp;
                            { createColoredSpan("bash", linuxRed) } and  { createColoredSpan("makefiles", linuxRed) } for
                            software projects.
                        </li>
                        <li>
                            Integrate { createColoredSpan("Raspbery PI", hardwareCyan) } and/or&nbsp;
                            { createColoredSpan("Arduino", hardwareCyan) } in to embedded applications such as { createColoredSpan("IoT", hardwareCyan) }
                            &nbsp;devices.
                        </li>
                        <li>
                            Ability to diagnose problems using tools such as { createColoredSpan("multimeters", hardwareCyan) } and&nbsp;
                            { createColoredSpan("oscilloscopes", hardwareCyan) }.
                        </li>
                    </ul>
                </SkillInfoBox>
            </div>
        </Fragment>
    );
}

export default Skills;