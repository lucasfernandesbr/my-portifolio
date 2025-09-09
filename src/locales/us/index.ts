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
    countries: {
      us: {
        key: 'us',
        alt: 'United States flag',
        label: 'English',
      },
      br: {
        key: 'br',
        alt: 'Brazil flag',
        label: 'Portuguese',
      },
    },
  },
  hero: {
    id: 'hero',
    ready_online: {
      avatar: {
        key: 'ready_online',
        alt: 'Portrait of Lucas Fernandes Souza',
      },
      label: 'Ready to code',
    },
    title:
      'Web developer with solid experienced in JavaScript, specializing in React and Next.js. Focused on delivering reliable and high-quality scalable apps.',
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
      key: 'about_me',
      alt: 'Portrait of Lucas Fernandes Souza',
    },
    title: 'A Bit About Me',
    content: `I’m a Frontend Developer based in São Paulo, Brazil, specialized in React, Next.js, TypeScript and E2E testing.<br /><br /> 
      Over the last few years, I’ve worked at Wellhub (formerly Gympass) with the Business Acquisition team, contributing to the unlogged website and the SMB flow, developing reusable components, implementing automated testing, and integrating with platforms like Salesforce, Hubspot, Segment, and Amplitude.<br /><br /> 
      My daily work involves collaborating with international teams, applying Agile methodologies, and ensuring technical solutions align with business goals.`,
  },
  expertises: {
    id: 'expertises',
    title: 'My Skills & Expertises',
    description: `Hands-on experience with modern frontend technologies, focusing on performance, scalability, and user experience.`,
    techs: [
      {
        key: 'javascript',
        alt: 'JavaScript',
      },
      {
        key: 'typescript',
        alt: 'TypeScript',
      },
      {
        key: 'react',
        alt: 'React',
      },
      {
        key: 'nextjs',
        alt: 'Next.js',
      },
      {
        key: 'nodejs',
        alt: 'Node.js',
      },
      {
        key: 'tailwind',
        alt: 'Tailwind CSS',
      },
      {
        key: 'storybook',
        alt: 'Storybook',
      },
      {
        key: 'jest',
        alt: 'Jest',
      },
      {
        key: 'cypress',
        alt: 'Cypress',
      },
      {
        key: 'playwright',
        alt: 'Playwright',
      },
    ],
  },
  journeys: {
    id: 'journeys',
    title: 'My Journeys',
    description: `Professional journey spanning technical support and frontend development, with experience in large-scale systems, modern web technologies, and international collaboration.`,
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
    id: 'projects',
    title: 'A Few Projects That I’ve Worked',
    description: `A showcase of professional and personal projects, highlighting expertise in scalable frontend development, system integrations, and modern practices.`,
    items: [
      {
        title: 'Wellhub – SMB Flow',
        description: `Contribution to the SMB acquisition flow, implementing experimentation (A/B testing), feature flags, and strategic integrations with Salesforce, Hubspot, Segment, and Amplitude.`,
        img: {
          key: 'wellhub_smb_flow',
          alt: 'Project 1 - Wellhub SMB Flow',
        },
      },
      {
        title: 'Wellhub – Unlogged Website',
        description: `Development and maintenance of the company’s public website, focused on performance, component reusability, and integrations with CRM and analytics platforms.`,
        img: {
          key: 'wellhub_website',
          alt: 'Project 2 - Wellhub Unlogged Website',
        },
        variant: 'inverted',
      },
      {
        title: 'Portfolio Website',
        description: `Designed and developed my personal portfolio using React, Vite, TailwindCSS, and Zustand, showcasing my frontend expertise and UI implementation skills.`,
        img: {
          key: 'portifolio',
          alt: 'Project 3 - Portfolio Website',
        },
      },
    ],
  },
  curiosities: {
    id: 'curiosities',
    title: 'Curiosities About Myself',
    description: `Beyond technology, I’m passionate about dance, travel, and gaming. These passions inspire me to bring creativity, exploration, and problem-solving into my journey as a developer.`,
    items: [
      {
        title: 'Dance Student',
        description: `I grew up surrounded by R&B and Hip Hop culture, and I study and practice Hip Hop dance as a hobby. Dance and music give me purpose, balance, and creativity beyond technology.`,
        image: {
          key: 'dance_student',
          alt: 'Dance Student',
        },
      },
      {
        title: 'Gamer',
        description: `I have been passionate about games and technology since childhood, and this passion led me to choose software development as a career. Gaming sparked my curiosity for computers, systems, and innovation.`,
        image: {
          key: 'gamer',
          alt: 'Gaming Setup',
        },
      },
      {
        title: 'Travel Lover',
        description: `I truly enjoy exploring new cultures and histories. Traveling through Europe gave me the chance to learn and adapt to different perspectives, which I find inspiring.`,
        image: {
          key: 'travel',
          alt: 'Travel Lover',
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
