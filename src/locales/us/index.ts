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
        label: 'My Skills & Experiences',
      },
      {
        id: 'journeys',
        label: 'Professional & Academic journeys',
      },
      {
        id: 'faq',
        label: 'FAQ',
      },
    ],
    mode_switch: {
      dark: 'Moon',
    },
    countries: {
      us: {
        src: '/images/country/us/flag.webp',
        alt: 'United States flag',
        label: 'English',
      },
      br: {
        src: '/images/country/br/flag.webp',
        alt: 'Brazil flag',
        label: 'Portuguese',
      },
    },
  },
  hero: {
    id: 'hero',
    ready_online: {
      avatar: {
        src: '/images/commons/ready_online.webp',
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
      src: '/images/commons/about_me.webp',
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
                  containing Lorem Ipsum passages, and more recently with desktop
                  publishing software like Aldus PageMaker including versions of Lorem
                  Ipsum.`,
    techs: [
      {
        src: '/images/commons/techs/javascript.svg',
        alt: 'JavaScript',
      },
      {
        src: '/images/commons/techs/typescript.svg',
        alt: 'TypeScript',
      },
      {
        src: '/images/commons/techs/react.svg',
        alt: 'React',
      },
      {
        src: '/images/commons/techs/nextjs.svg',
        alt: 'Next.js',
      },
      {
        src: '/images/commons/techs/nodejs.svg',
        alt: 'Node.js',
      },
      {
        src: '/images/commons/techs/prisma.svg',
        alt: 'Prisma',
      },
      {
        src: '/images/commons/techs/tailwind.svg',
        alt: 'Tailwind CSS',
      },
      {
        src: '/images/commons/techs/styled-components.svg',
        alt: 'Styled Components',
      },
      {
        src: '/images/commons/techs/storybook.svg',
        alt: 'Storybook',
      },
      {
        src: '/images/commons/techs/jest.svg',
        alt: 'Jest',
      },
      {
        src: '/images/commons/techs/cypress.svg',
        alt: 'Cypress',
      },
      {
        src: '/images/commons/techs/playwright.svg',
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
      icon: 'Briefcase',
      button: {
        label: 'Show Details',
        icon: 'ChevronDown',
      },
      journey: [
        {
          institution: 'Wellhub',
          location_time: 'São Paulo, SP, Brazil, 2021 - 2025',
          qualification: 'Frontend Developer',
        },
        {
          institution: 'Wittel Comunicações LTDA',
          location_time: 'São Paulo, SP, Brazil, 2018 - 2021',
          qualification: 'Technical Support',
        },
      ],
    },
    academic: {
      title: 'Academic',
      icon: 'Award',
      button: {
        label: 'Show Details',
        icon: 'ChevronDown',
      },
      journey: [
        {
          institution: 'Rocketseat',
          location_time: 'São Paulo, SP, Brazil, 2021 - 2025',
          qualification: 'Fullstack - React, React Native and Node',
        },
        {
          institution: 'FMU - Centro Universitário',
          location_time: 'São Paulo, SP, Brazil, 2016 - 2019',
          qualification: 'Degree - Systems analysis and development',
        },
      ],
    },
  },
  faq: {
    id: 'faq',
    title: 'A Few Questions About Me',
    questions: [
      {
        question:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        answer: 'Yes. It adheres to the WAI-ARIA design pattern.',
      },
      {
        question:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        answer: 'Yes. It adheres to the WAI-ARIA design pattern.',
      },
      {
        question:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        answer: 'Yes. It adheres to the WAI-ARIA design pattern.',
      },
      {
        question:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        answer: 'Yes. It adheres to the WAI-ARIA design pattern.',
      },
      {
        question:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        answer: 'Yes. It adheres to the WAI-ARIA design pattern.',
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
        label: 'My Skills & Experiences',
      },
      {
        id: 'journeys',
        label: 'Professional & Academic journeys',
      },
      {
        id: 'faq',
        label: 'FAQ',
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
