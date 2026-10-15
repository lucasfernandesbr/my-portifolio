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
      'Web developer with solid experience in JavaScript, specializing in React and Next.js. Focused on delivering reliable and high-quality scalable apps.',
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
          href: 'https://www.linkedin.com/in/lucasfernandessouzabr',
        },
      ],
    },
  },
  introduction: {
    id: 'introduction',
    cards: [
      {
        title: '5+',
        content: 'Years of work experience',
      },
      {
        title: 'ESL',
        content: 'Advanced English proficiency',
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
    content: `I’m a Frontend Developer based in São Paulo, Brazil, with 5+ years of experience building end-to-end features in React, Next.js, TypeScript and E2E testing.<br /><br />
      I’m currently at Exactaworks, owning partner-facing product pages and benefit flows (Caixa, Globoplay, Lavitan) from architecture to deployment. Before that, I spent nearly four years at Wellhub (formerly Gympass) on the Business Acquisition team, building the unlogged website and SMB flow, reusable components, automated testing, and integrations with Salesforce, Hubspot, Segment, and Amplitude.<br /><br />
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
          institution: 'Exactaworks',
          location_time: 'São Paulo, SP, Brazil, 2025 - 2026',
          current: false,
          qualification: 'Frontend Developer',
          specialization: 'Allocated at Familhão Client - Partner Team',
          description:
            'End-to-end delivery of partner-facing pages and flows (Caixa, Globoplay, Lavitan) in React/Next.js, from architecture to deploy. Refactors, REST/GraphQL integrations, Azure DevOps CI/CD, and Claude Code for documentation, performance, and SEO.',
          stack: [
            'Claude Code',
            'React',
            'Next.js',
            'Astro',
            'TypeScript',
            'Azure Devops',
            'TailwindCSS',
            'Jest',
            'Vitest',
            'Playwright',
            'Cypress',
          ],
        },
        {
          institution: 'Wellhub',
          location_time: 'São Paulo, SP, Brazil, 2021 - 2025',
          qualification: 'Frontend Developer',
          specialization: 'B2B Acquisition Team',
          description:
            'End-to-end acquisition flows in a high-growth environment, with A/B testing (Optimizely), scalable component architectures, and analytics integrations. Focus on performance, accessibility, and E2E suites (Cypress, Playwright).',
          stack: [
            'React',
            'Next.js',
            'TypeScript',
            'Storybook',
            'Jest',
            'Cypress',
            'Playwright',
            'GraphQL',
            'Jira',
            'Segment',
            'Amplitude',
            'Optimizely',
            'Hubspot',
            'AWS',
            'S3',
            'CloudFront',
            'WAF',
            'S3',
          ],
        },
        {
          institution: 'Wittel Comunicações LTDA',
          location_time: 'São Paulo, SP, Brazil, 2018 - 2021',
          qualification: 'Technical Support',
          specialization: 'IPC Tech Team',
          description:
            'Support for the IPC telephony system for large financial clients (Itaú, Deutsche Bank, BTG, Santander), covering infrastructure, configuration, and maintenance.',
          stack: [' IPC Unigy System', 'IPC IQMAX Turret', 'Redes', 'VoIP'],
        },
      ],
    },
    academic: {
      title: 'Academic',
      journey: [
        {
          institution: 'Rocketseat',
          location_time: 'São Paulo, SP, Brazil, 2025',
          qualification: 'Dev with AI',
          specialization: 'Claude Code, Codex & Cursor',
          description:
            'An intensive program on building software with AI agents, covering the Cursor editor with integrated AI, Codex for application architecture and automated execution, and Model Context Protocol (MCP) configuration with custom skills. Explored Claude Code for codebase analysis, running commands, fixing bugs, and shipping features while preserving AI context, plus end-to-end AI-orchestrated delivery with ShadCN, Turso, Cloudflare, and BetterAuth.',
          stack: ['Claude Code', 'Codex', 'Cursor', 'MCP'],
        },
        {
          institution: 'Rocketseat',
          location_time: 'São Paulo, SP, Brazil, 2020',
          qualification: 'GoStack Bootcamp',
          specialization: 'React, React Native and Node',
          description:
            'An intensive full-stack program focused on the JavaScript ecosystem with Node.js, ReactJS, and React Native. The course covered the entire development cycle from scratch to deployment, using modern tools and practices such as Docker, MongoDB, PostgreSQL, Express, AdonisJS, Sequelize, JWT authentication, organized folder structures, and JavaScript/TypeScript.',
          stack: ['React', 'React Native', 'Node.js', 'TypeScript'],
        },
        {
          institution: 'FMU - Centro Universitário',
          location_time: 'São Paulo, SP, Brazil, 2016 - 2019',
          qualification: 'Degree',
          specialization: 'Systems Analysis and Development',
          description:
            'Degree with a solid foundation in programming logic, databases, software engineering and systems development.',
          stack: ['Java', 'SQL', 'OOP', 'Software Engineering'],
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
        tags: ['React', 'Next.js', 'TypeScript', 'A/B Testing', 'Salesforce'],
      },
      {
        title: 'Wellhub – Unlogged Website',
        description: `Development and maintenance of the company’s public website, focused on performance, component reusability, and integrations with CRM and analytics platforms.`,
        img: {
          key: 'wellhub_website',
          alt: 'Project 2 - Wellhub Unlogged Website',
        },
        variant: 'inverted',
        tags: ['React', 'Next.js', 'TypeScript', 'Storybook', 'Segment'],
      },
      {
        title: 'Portfolio Website',
        description: `Designed and developed my personal portfolio using React, Vite, TailwindCSS, and Zustand, showcasing my frontend expertise and UI implementation skills.`,
        img: {
          key: 'portifolio',
          alt: 'Project 3 - Portfolio Website',
        },
        tags: ['React', 'Vite', 'TypeScript', 'TailwindCSS', 'Zustand'],
        links: [
          {
            label: 'GitHub',
            href: 'https://github.com/lucasfernandesbr/my-portifolio',
          },
        ],
      },
      {
        title: 'Investigation Game – Brackeys Game Jam',
        description: `A first-person, pixel-art investigation game built in Godot 4 (GDScript) for the Brackeys Game Jam in a single week. Coming from a frontend background with little GDScript and game-dev experience, I paired my software architecture knowledge with Claude as an AI pair-programmer to learn the engine fast, design clean autoload-based systems (scene, settings, audio, event bus, game state), and ship point & click and drag & drop mechanics under a tight deadline.`,
        img: {
          key: 'brackeys_game_jam',
          alt: 'Project 4 - Investigation Game (Brackeys Game Jam)',
        },
        variant: 'inverted',
        tags: ['Godot 4', 'GDScript', 'Claude', 'Game Jam', 'Pixel Art'],
        links: [
          {
            label: 'Play',
            href: 'https://ludosouza.itch.io/the-lowes-murder',
          },
          {
            label: 'GitHub',
            href: 'https://github.com/lucasfernandesbr/brackeys-game-jam',
          },
        ],
      },
      {
        title: 'Exactaworks – Familhão',
        description: `End-to-end delivery of the partner-facing product pages and benefit flows for Familhão, a client of Exactaworks consultancy. Built responsive, accessible UI surfaces in React/Next.js that simplify complex partner logic into intuitive workflows, owning REST API integration, performance optimization, and deployment.`,
        img: {
          key: 'familhao',
          alt: 'Project 5 - Exactaworks Familhão',
        },
        tags: [
          'React',
          'Next.js',
          'TypeScript',
          'Claude Code',
          'Azure Devops',
          'Accessibility',
          'REST API',
        ],
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
        href: 'https://www.linkedin.com/in/lucasfernandessouzabr',
      },
    ],
    copyright: '© 2026 Lucas Fernandes Souza. All rights reserved.',
  },
}
