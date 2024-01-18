import { useMemo } from 'react';

import ImageCarousel from './ImageCarousel';

const longArrowGraphic = <svg
    className="rtl:rotate-180 w-3.5 h-3.5 ml-2 sm:max-lg:ml-auto"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 14 10"
>
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
</svg>;

const Card = ({ title, description, imageData, buttons, onClickImageCarousel, className = "" }) => {
    const buttonsList = useMemo(() => Array.isArray(buttons) ? buttons.map(({ id, text = '', url = '', icon, alt }) => {
        return <li
            key={id}
            className='h-12'
        >
            <a
                className='inline-flex items-center px-3 h-full w-full rounded-lg transition-colors duration-200 bg-sky-800 hover:bg-slate-600 text-sm font-medium text-white focus:ring-4 focus:outline-none focus:ring-slate-300'
                href={url}
            >
                <img className='mr-2 py-2 object-cover max-h-full' src={icon} alt={alt} />
                {text}
                {longArrowGraphic}
            </a>
        </li>
    }) : null, [buttons]);

    return <div className={"flex flex-col " + className}>
        <ImageCarousel imageData={imageData} onClick={onClickImageCarousel} />
        <div className="p-5 w-full flex flex-col grow">
            <h5 className="mb-2 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 overflow-hidden">{description}</p>
            {
                buttonsList && buttonsList.length > 0 ?
                    <ul className='flex justify-start flex-row mt-auto sm:max-lg:flex-col sm:max-lg:items-stretch gap-2'>
                        {buttonsList}
                    </ul> : null
            }
        </div>
    </div>;
};

export default Card;