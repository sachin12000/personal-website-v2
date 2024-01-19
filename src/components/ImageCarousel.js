import { useEffect, useState } from 'react';

import { callbackCaller } from './util';

import './styles/ImageCarousel.css';

const arrowGraphic = <span
    className="transition-colors inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-800/30 group-hover:bg-gray-800/60"
>
    <svg className="w-4 h-4 text-slate-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
    </svg>
</span>;

const CarouselImage = ({ image, alt, slideDirection, slideIn, visible }) => {
    let animationClass = "";
    if (visible) {
        if (slideDirection === "left")
            animationClass = slideIn ? "slide-left-in-to-view" : "slide-left-out-of-view";
        else if (slideDirection === 'right')
            animationClass = slideIn ? "slide-right-in-to-view" : "slide-right-out-of-view";
    }

    const classes = `absolute h-full w-full flex justify-center items-center ${visible ? "block" : "hidden"} ${slideIn ? "z-[1]" : ""} ${animationClass}`;

    return <div className={classes} >
        <img
            src={image}
            alt={alt}
            className='max-w-full max-h-full object-cover'
        />
    </div>;
}

const ImageCarousel = ({ imageData, selectedImageId, onClick, onNext: onNextCallback, onPrev: onPrevCallback }) => {
    const maxIndex = imageData.length - 1;

    // stores the indeces of the image that is being displayed and the image that is being slid out of view by the carousel animation
    const [imagesOnDisplay, setImagesOnDisplay] = useState(() => {
        if (selectedImageId) {
            const index = imageData.findIndex(({ id }) => id === selectedImageId);
            if (index !== -1)
                return [index, index];
        }
        return [0, 0];
    });
    const [slideDirection, setSlideDirection] = useState('left');

    // go to the next image in the carousel
    const onNext = (e) => {
        e.stopPropagation();
        if (imageData.length > 2) {
            const [imageOnDisplay] = imagesOnDisplay;
            const newImageOnDisplay = imageOnDisplay === maxIndex ? 0 : imageOnDisplay + 1; // index of the next image
            const newPreviousImage = imageOnDisplay; // index of the previous image that will be slid out of view
            setImagesOnDisplay([newImageOnDisplay, newPreviousImage]);
            setSlideDirection('left');
            callbackCaller(onNextCallback, imageData[newImageOnDisplay].id);
        } else {
            callbackCaller(onNextCallback, imageData[0].id);
        }
    };

    // go to the previous image in the carousel
    const onPrev = (e) => {
        e.stopPropagation();
        if (imageData.length > 2) {
            const [imageOnDisplay] = imagesOnDisplay;
            const newImageOnDisplay = imageOnDisplay === 0 ? maxIndex : imageOnDisplay - 1;
            const newPreviousImage = imageOnDisplay;
            setImagesOnDisplay([newImageOnDisplay, newPreviousImage]);
            setSlideDirection('right');
            callbackCaller(onPrevCallback, imageData[newImageOnDisplay].id);
        } else {
            callbackCaller(onNextCallback, imageData[0].id);
        }
    };

    // display the selected image if a selected image id was provided through props
    useEffect(() => {
        if (!selectedImageId)
            return;

        const indexOfImageOnDsiplay = imagesOnDisplay[0];
        if (selectedImageId === imageData[indexOfImageOnDsiplay].id)
            return;  // selected image id is already on display

        const indexOfSelectedImage = imageData.findIndex(({ id }) => id === selectedImageId);

        if (indexOfSelectedImage === undefined)
            return;  // selected image id not found


        setImagesOnDisplay([indexOfSelectedImage, indexOfImageOnDsiplay]);
        if (indexOfSelectedImage > indexOfImageOnDsiplay) {
            setSlideDirection('left');
        } else {
            setSlideDirection('right');
        }
    }, [selectedImageId, imagesOnDisplay, imageData]);

    const isFirstRender = imagesOnDisplay[0] === imagesOnDisplay[1];
    const images = Array.isArray(imageData) ?
        imageData.map(({ id: imageId, image, alt }, i) => {
            const [indexOfImageOnDisplay, indexOfPreviousImage] = imagesOnDisplay;
            if (i === indexOfImageOnDisplay)
                return isFirstRender ? // do not enable animations if this is the first render
                    <CarouselImage key={imageId} image={image} alt={alt} visible={true} /> :
                    <CarouselImage
                        key={imageId}
                        image={image}
                        alt={alt}
                        visible={true} // do not enable animations if this is the first render
                        slideIn={true}
                        slideDirection={slideDirection}
                    />;
            else if (i === indexOfPreviousImage)
                return <CarouselImage
                    key={imageId}
                    image={image}
                    alt={alt}
                    visible={true}
                    slideIn={false} // indicate slide out
                    slideDirection={slideDirection}
                />;
            else
                return <CarouselImage key={imageId} image={image} alt={alt} />;
        }) : null;

    return <div
        className='relative w-full aspect-[2] flex items-center justify-center overflow-clip'
        onClick={() => callbackCaller(onClick, imageData[imagesOnDisplay[0]].id)}
    >
        <div className={`transition-opacity w-full h-full ${onClick ? 'hover:opacity-80 hover:cursor-pointer' : ''}`}>
            {images}
        </div>
        <button className='z-[2] absolute left-0 ml-2 group' onClick={onPrev}>
            {arrowGraphic}
        </button>
        <button className='z-[2] absolute right-0 mr-2 rotate-180 group' onClick={onNext}>
            {arrowGraphic}
        </button>
    </div>;
}

export default ImageCarousel;