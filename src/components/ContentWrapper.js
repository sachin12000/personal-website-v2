import { useEffect, useRef } from "react";
import { combineClasses } from "./util";

const ContentWrapper = (props) => {
    const { id, flexDirection, justifyContentCenter, alignItemsCenter, children, setVisibility } = props;

    // used for setting the correct navbar option when scrolling
    const wrapperRef = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(([ entry ]) => { if (entry.isIntersecting) setVisibility(id) }, {
            threshold: 0.5
        });
        if (wrapperRef.current) observer.observe(wrapperRef.current)
        return  () => { if (wrapperRef.current) observer.disconnect() }
    }, [wrapperRef.current]);

    let flexParams = [];
    if (flexDirection === 'col') {
        flexParams.push('flex-col');
    } else if (flexDirection === 'row') {
        flexParams.push('flex-row');
    }
    if (justifyContentCenter) {
        flexParams.push('justify-center');
    }
    if (alignItemsCenter) {
        flexParams.push('items-center');
    }

    let classNames = "min-h-screen py-10 sm:p-0 sm:ml-24 md:ml-32 lg:ml-64 bg-slate-700";
    if (flexParams.length > 0) {
        classNames = combineClasses(classNames, ...flexParams, 'flex');
    }
    return (
        <section id={id} ref={wrapperRef} className={classNames}>
            {children}
        </section>
    );
}

export default ContentWrapper;