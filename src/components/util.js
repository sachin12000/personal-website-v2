/**
 * Combines css class name strings togetherand returns a a string containing all class names
 * Taken from Tailwind docs
 * @param  {...String} classes
 *
 */
export const combineClasses = (...classes) => {
    return classes.filter(Boolean).join(' ')
}