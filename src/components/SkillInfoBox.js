/**
 *
 * Container for the skills information
 */
const SkillInfoBox = (props) => {
    return (
        <div className="max-w-lg my-2 sm:m-4 sm:pb-3 p-2 sm:pt-0 flex flex-col items-center bg-semi-transparent">
            {props.children}
        </div>
    );
}

export default SkillInfoBox;