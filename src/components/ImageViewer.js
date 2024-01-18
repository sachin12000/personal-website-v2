import { useEffect, useRef, useState } from "react";
import ImageCarousel from "./ImageCarousel";

// smaller than md: thumbnails on top of the image
const ImageViewer = ({ thumbnailData, imageData, selectedImageId: _selectedImageId, className }) => {
    const [thumbnailsOverflow, setThumbnailsOverflow] = useState(false);
    const thumbnailsListRef = useRef();

    useEffect(() => {
        const thumbnails = thumbnailsListRef.current;
        if (thumbnails.clientWidth < thumbnails.scrollWidth) {
            if (!thumbnailsOverflow)
                setThumbnailsOverflow(true);
        }
        else if (thumbnailsOverflow) {
            setThumbnailsOverflow(false);
        }
    }, [thumbnailsOverflow]);

    if (!Array.isArray(thumbnailData))
        throw new Error('thumbnailUrls must be an array');
    if (!Array.isArray(imageData))
        throw new Error('imageUrls must be an array');
    if (thumbnailData.length !== imageData.length)
        throw new Error('imageUrls and imageUrls must the same length');

    const [selectedImageId, setSelectedImageId] = useState(_selectedImageId ?
        _selectedImageId :
        thumbnailData.length > 0 ? thumbnailData[0].id : null
    );

    if (thumbnailData.length === 0)
        return null;  // no image array provided or the image array is empty

    const onImageChange = (imageId) => setSelectedImageId(imageId);

    const imagesList = thumbnailData.map(({ id, image, alt }) => {
        const classes = "flex justify-center items-center shrink-0 aspect-square w-24 md:w-28 lg:w-32 max-w-[8rem] p-1 border border-slate-400 " +
            "rounded-md cursor-pointer transition-all hover:opacity-80" +
            (id === selectedImageId ? ' border-2 border-indigo-400 mx-1 scale-110' : 'hover:mx-1 hover:scale-110');
        return <li
            key={id}
            className={classes}
            onClick={() => setSelectedImageId(id)}
        >
            <img src={image} alt={alt} className="max-h-full max-w-full object-cover" />
        </li>;
    });

    return <div className={`flex flex-col items-start justify-center gap-2 + ${className ? className : ''}`}>
        <ImageCarousel selectedImageId={selectedImageId} imageData={imageData} onPrev={onImageChange} onNext={onImageChange} />
        <ul
            ref={thumbnailsListRef}
            className={`w-full flex ${thumbnailsOverflow ? "justify-start" : "justify-center"}` +
                " items-center bg-slate-900 gap-2 h-[7rem] sm:h-[9.5rem] px-2 overflow-hidden overflow-x-auto scrollbar-thin"}
        >
            {imagesList}

        </ul>
    </div>
}

export default ImageViewer;