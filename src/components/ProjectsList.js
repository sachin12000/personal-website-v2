import github from '../assets/icons/github-mark-white.svg';

import * as images from './ProjectsListImageImports';

const projectsList = [
    {
        id: "1",
        title: "TimeGuru Calendar",
        description: "An app that allows the its users to manage their events in a hassle free manner. Built with React, MUI, Typescript and Firebase.",
        ...images.timeguru_images,
        buttons: [
            {
                id: '0',
                text: 'Github Repo',
                url: 'https://github.com/sachin12000/calendar-app',
                icon: github,
                alt: 'github'
            },
            {
                id: '1',
                text: 'Visit TimeGuru',
                url: 'https://calendar-app-85893.web.app/',
            }
        ]
    },
    {
        id: "2",
        title: "Personal Website",
        description: "The website you see here! Mobile friendly, responsive and stylish UI built with React and TailwindCSS. Make sure to fully explore this site \u{1F603}",
        ...images.personal_website_images,
        buttons: [
            {
                id: '0',
                text: 'Github Repo',
                url: 'https://github.com/sachin12000/personal-website-v2',
                icon: github,
                alt: 'github'
            }
        ]
    },
    {
        id: "3",
        title: "Personal Website version 1",
        description: "Older version of my personal website. Responsive UI built with Bootstrap and jQuery.",
        ...images.personal_website_v1_images,
        buttons: [
            {
                id: '0',
                text: 'Github Repo',
                url: 'https://github.com/sachin12000/personal-website',
                icon: github,
                alt: 'github'
            },
            {
                id: '1',
                text: 'Visit website',
                url: 'https://forgingahead-17f20.firebaseapp.com/',
            }
        ]
    },
];

export default projectsList;