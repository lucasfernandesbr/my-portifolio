export default {
  header: {
    logo: 'GitPullRequest',
    nav: [
      {
        id: 'about_me',
        label: 'About me',
      },
      {
        id: 'expertises',
        label: 'Skills',
      },
      {
        id: 'journeys',
        label: 'Journeys',
      },
      {
        id: 'projects',
        label: 'Projects',
      },
      {
        id: 'curiosities',
        label: 'Curiosities',
      },
    ],
    mode_switch: {
      dark: 'Moon',
    },
    countries: {
      us: {
        src: '/my-portifolio/images/country/us/flag.webp',
        alt: 'United States flag',
        label: 'English',
      },
      br: {
        src: '/my-portifolio/images/country/br/flag.webp',
        alt: 'Brazil flag',
        label: 'Portuguese',
      },
    },
  },
  hero: {
    id: 'hero',
    ready_online: {
      avatar: {
        src: '/my-portifolio/images/commons/ready_online.webp',
        alt: 'Portrait of Lucas Fernandes Souza',
      },
      label: 'Ready to code',
    },
    title:
      'Web developer with solid experienced in JavaScript, specializing in React and Next.js. Focused on delivering reliable and high-quality digital solutions.',
    buttons: {
      scroll_down: {
        label: 'Scroll Down',
        icon: 'ArrowDown',
        href: 'introduction',
      },
      socials: [
        {
          icon: 'Github',
          href: 'https://github.com/lucasfernandesbr',
        },
        {
          icon: 'Linkedin',
          href: 'https://www.linkedin.com/in/lucas-fernandes-souza-539264149',
        },
      ],
    },
  },
  introduction: {
    id: 'introduction',
    cards: [
      {
        title: '3+',
        content: 'Years of work experience',
      },
      {
        title: 'ESL',
        content: 'English as second language',
      },
      {
        title: 'Quality',
        content: 'Deliver code with quality',
      },
      {
        icon: 'Heart',
        content: 'Passionate in web development',
      },
    ],
  },
  about_me: {
    id: 'about_me',
    img: {
      src: '/my-portifolio/images/commons/about_me.webp',
      alt: 'Portrait of Lucas Fernandes Souza',
    },
    title: 'A Bit About Me',
    content: `i’m a Front-End Developer with over 3 years of experience,
              specializing in React and Next.js. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. <br /> <br /> It has survived not only five
              centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s
              with the release of Letraset sheets containing Lorem Ipsum
              passages, and more recently with desktop publishing software like
              Aldus PageMaker including versions of Lorem Ipsum. <br /> <br />
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old.`,
  },
  expertises: {
    id: 'expertises',
    title: 'My Skills & Expertises',
    description: `It has survived not only five centuries, but also the leap into
                  electronic typesetting, remaining essentially unchanged. It was
                  popularised in the 1960s with the release of Letraset sheets
                  containing Lorem Ipsum passages.`,
    techs: [
      {
        src: '/my-portifolio/images/commons/techs/javascript.svg',
        alt: 'JavaScript',
      },
      {
        src: '/my-portifolio/images/commons/techs/typescript.svg',
        alt: 'TypeScript',
      },
      {
        src: '/my-portifolio/images/commons/techs/react.svg',
        alt: 'React',
      },
      {
        src: '/my-portifolio/images/commons/techs/nextjs.svg',
        alt: 'Next.js',
      },
      {
        src: '/my-portifolio/images/commons/techs/nodejs.svg',
        alt: 'Node.js',
      },
      {
        src: '/my-portifolio/images/commons/techs/tailwind.svg',
        alt: 'Tailwind CSS',
      },
      {
        src: '/my-portifolio/images/commons/techs/storybook.svg',
        alt: 'Storybook',
      },
      {
        src: '/my-portifolio/images/commons/techs/jest.svg',
        alt: 'Jest',
      },
      {
        src: '/my-portifolio/images/commons/techs/cypress.svg',
        alt: 'Cypress',
      },
      {
        src: '/my-portifolio/images/commons/techs/playwright.svg',
        alt: 'Playwright',
      },
    ],
  },
  journeys: {
    id: 'journeys',
    title: 'My Journeys',
    description: `It has survived not only five centuries, but also the leap into
                  electronic typesetting, remaining essentially unchanged. It was
                  popularised in the 1960s with the release of Letraset sheets
                  containing Lorem Ipsum passages, and more recently with desktop
                  publishing software like Aldus PageMaker including versions of Lorem
                  Ipsum.`,
    professional: {
      title: 'Professional',
      journey: [
        {
          institution: 'Wellhub',
          location_time: 'São Paulo, SP, Brazil, 2021 - 2025',
          qualification: 'Frontend Developer',
          specialization: 'B2B Acquisition Team',
        },
        {
          institution: 'Wittel Comunicações LTDA',
          location_time: 'São Paulo, SP, Brazil, 2018 - 2021',
          qualification: 'Technical Support',
          specialization: 'IPC Tech Team',
        },
      ],
    },
    academic: {
      title: 'Academic',
      journey: [
        {
          institution: 'Rocketseat',
          location_time: 'São Paulo, SP, Brazil, 2021 - 2025',
          qualification: 'GoStack',
          specialization: 'React, React Native and Node',
        },
        {
          institution: 'FMU - Centro Universitário',
          location_time: 'São Paulo, SP, Brazil, 2016 - 2019',
          qualification: 'Degree',
          specialization: 'Systems Analysis and Development',
        },
      ],
    },
  },
  projects: {
    title: 'A Few Projects That I’ve Worked',
    description: `i’m a Front-End Developer with over 3 years of experience,
                  specializing in React and Next.js. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s.`,
    items: [
      {
        title: 'Project 1',
        description: `i’m a Front-End Developer with over 3 years of experience,
                      specializing in React and Next.js. Lorem Ipsum has been the
                      industry's standard dummy text ever since the 1500s.`,
        image: {
          src: '',
          alt: '',
        },
      },
      {
        title: 'Project 2',
        description: `i’m a Front-End Developer with over 3 years of experience,
                      specializing in React and Next.js. Lorem Ipsum has been the
                      industry's standard dummy text ever since the 1500s.`,
        image: {
          src: '',
          alt: '',
        },
        variant: 'inverted',
      },
      {
        title: 'Project 3',
        description: `i’m a Front-End Developer with over 3 years of experience,
                      specializing in React and Next.js. Lorem Ipsum has been the
                      industry's standard dummy text ever since the 1500s.`,
        image: {
          src: '',
          alt: '',
        },
      },
    ],
  },
  footer: {
    id: 'footer',
    nav: [
      {
        id: 'hero',
        label: 'Hero',
      },
      {
        id: 'about_me',
        label: 'About me',
      },
      {
        id: 'expertises',
        label: 'Skills',
      },
      {
        id: 'journeys',
        label: 'Journeys',
      },
      {
        id: 'projects',
        label: 'Projects',
      },
      {
        id: 'curiosities',
        label: 'Curiosities',
      },
    ],
    socials: [
      {
        icon: 'Github',
        href: 'https://github.com/lucasfernandesbr',
      },
      {
        icon: 'Linkedin',
        href: 'https://www.linkedin.com/in/lucas-fernandes-souza-539264149',
      },
    ],
    copyright: '© 2025 Lucas Fernandes Souza. All rights reserved.',
  },
}
