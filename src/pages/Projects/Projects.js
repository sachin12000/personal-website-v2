import { useMemo, useState } from 'react';

import Card from '../../components/Card.js';
import ImageViewer from '../../components/ImageViewer.js';
import FixedContainer from '../../components/FixedContainer.js';

import projectsList from './ProjectsList.js';

const Projects = () => {
    const [selectedProjectId, setSelectedProjectId] = useState(null);
    const [selectedImageId, setSelectedImageId] = useState(null);

    const projects = useMemo(() => projectsList.map(({ id, title, description, images, buttons }) => <Card
        key={id}
        className='w-full sm:w-56 md:w-64 lg:w-96 shadow-lg pl-sm:p-0 shadow-gray-800 bg-gray-800'
        title={title}
        description={description}
        imageData={images}
        buttons={buttons}
        onClickImageCarousel={(imageId) => {
            setSelectedImageId(imageId);
            setSelectedProjectId(id);
        }}
    />
    ), []);

    let selectedProjectViewer;
    if (selectedProjectId) {
        const { images, thumbnails } = projectsList.find(({ id }) => id === selectedProjectId);
        if (images && thumbnails)
            selectedProjectViewer = <FixedContainer
                className="w-full z-20 bg-black/60 flex justify-center items-center"
                onClick={(e) => {
                    e.stopPropagation();
                    if (e.currentTarget === e.target)
                        setSelectedProjectId(null)
                }}
            >
                <ImageViewer
                    className="w-full px-4 lg:max-w-[1000px]"
                    thumbnailData={thumbnails}
                    imageData={images}
                    selectedImageId={selectedImageId} />
            </FixedContainer>;
    }

    return <div className='relative w-full min-h-screen px-2'>
        <h1 className='pb-4 text-3xl sm:text-5xl md:font-extralight text-center'>Projects</h1>
        <div className='px-2 flex justify-start flex-wrap gap-4'>
            {projects}
        </div>
        {selectedProjectId ? selectedProjectViewer : null}
    </div >;
}

export default Projects;