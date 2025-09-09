export default {
  header: {
    logo: 'GitPullRequest',
    nav: [
      {
        id: 'about_me',
        label: 'Sobre mim',
      },
      {
        id: 'expertises',
        label: 'Habilidades',
      },
      {
        id: 'journeys',
        label: 'Jornadas',
      },
      {
        id: 'projects',
        label: 'Projetos',
      },
      {
        id: 'curiosities',
        label: 'Curiosidades',
      },
    ],
    countries: {
      us: {
        key: 'us',
        alt: 'Bandeira dos Estados Unidos',
        label: 'Inglês',
      },
      br: {
        key: 'br',
        alt: 'Bandeira do Brasil',
        label: 'Português',
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
      label: 'Pronto para codar',
    },
    title:
      'Desenvolvedor web com sólida experiência em JavaScript, especializado em React e Next.js. Focado na entrega de soluções digitais confiáveis e de alta qualidade.',
    buttons: {
      scroll_down: {
        label: 'Veja mais',
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
        content: 'Anos de experiência profissional',
      },
      {
        title: 'ESL',
        content: 'Inglês como segundo idioma',
      },
      {
        title: 'Qualidade',
        content: 'Entrega de código com qualidade',
      },
      {
        icon: 'Heart',
        content: 'Apaixonado por desenvolvimento web',
      },
    ],
  },
  about_me: {
    id: 'about_me',
    img: {
      key: 'about_me',
      alt: 'Retrato de Lucas Fernandes Souza',
    },
    title: 'Um Pouco Sobre Mim',
    content: `Sou Desenvolvedor Frontend, baseado em São Paulo, especializado em React, Next.js, TypeScript e testes E2E.<br /><br />  
      Nos últimos anos, atuei na Wellhub (antiga Gympass) junto ao time de Business Acquisition, contribuindo para o site público (unlogged) e o fluxo de SMB, desenvolvendo componentes reutilizáveis, implementando testes automatizados e integrando plataformas como Salesforce, Hubspot, Segment e Amplitude.<br /><br /> 
      Meu trabalho diário envolve colaboração com equipes internacionais, aplicação de metodologias ágeis e alinhamento das soluções técnicas com os objetivos de negócio.`,
  },
  expertises: {
    id: 'expertises',
    title: 'Minhas Habilidades & Especialidades',
    description: `Experiência prática com tecnologias modernas de frontend, com foco em performance, escalabilidade e experiência do usuário`,
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
    title: 'Minhas Jornadas',
    description: `Jornada profissional que abrange suporte técnico e desenvolvimento frontend, com experiência em sistemas de grande escala, tecnologias web modernas e colaboração internacional.`,
    professional: {
      title: 'Profissional',
      journey: [
        {
          institution: 'Wellhub',
          location_time: 'São Paulo, SP, Brasil, 2021 - 2025',
          qualification: 'Desenvolvedor Frontend',
          specialization: 'B2B Acquisition Team',
        },
        {
          institution: 'Wittel Comunicações LTDA',
          location_time: 'São Paulo, SP, Brasil, 2018 - 2021',
          qualification: 'Suporte Técnico',
          specialization: 'IPC Tech Team',
        },
      ],
    },
    academic: {
      title: 'Acadêmico',
      journey: [
        {
          institution: 'Rocketseat',
          location_time: 'São Paulo, SP, Brasil, 2021 - 2025',
          qualification: 'Fullstack',
          specialization: 'React, React Native and Node',
        },
        {
          institution: 'FMU - Centro Universitário',
          location_time: 'São Paulo, SP, Brasil, 2016 - 2019',
          qualification: 'CST',
          specialization: 'Análise e Desenvolvimento de Sistemas',
        },
      ],
    },
  },
  projects: {
    id: 'projects',
    title: 'Projetos em que trabalhei',
    description: `Uma vitrine de projetos profissionais e pessoais, destacando experiência em desenvolvimento frontend escalável, integrações de sistemas e práticas modernas.`,
    items: [
      {
        title: 'Wellhub – SMB Flow',
        description: `Atuação no fluxo de aquisição SMB, implementando experimentação (A/B testing), feature flags e integrações estratégicas com Salesforce, Hubspot, Segment e Amplitude.`,
        img: {
          key: 'wellhub_smb_flow',
          alt: 'Projeto 1 - Wellhub SMB Flow',
        },
      },
      {
        title: 'Wellhub – Website Público (Unlogged)',
        description: `Desenvolvimento e manutenção do site público da empresa, com foco em performance, reutilização de componentes e integrações com plataformas de CRM e Analytics.`,
        img: {
          key: 'wellhub_website',
          alt: 'Projeto 2 - Wellhub Website Público (Unlogged)',
        },
        variant: 'inverted',
      },
      {
        title: 'Website Portfólio',
        description: `Design e desenvolvimento do meu portfólio pessoal utilizando React, Vite, TailwindCSS e Zustand, demonstrando minha experiência em frontend e implementação de interfaces.`,
        img: {
          key: 'portifolio',
          alt: 'Projeto 3 - Portfolio Website',
        },
      },
    ],
  },
  curiosities: {
    id: 'curiosities',
    title: 'Curiosidades Sobre Mim',
    description: `Além da tecnologia, sou apaixonado por dança, viagens e games. Essas paixões me inspiram a trazer criatividade, exploração e resolução de problemas para minha jornada como desenvolvedor.`,
    items: [
      {
        title: 'Dance Student',
        description: `Cresci envolvido com a cultura R&B e Hip Hop, e estudo e pratico dança Hip Hop como hobby. A dança e a música me trazem propósito, equilíbrio e criatividade além da tecnologia.`,
        image: {
          key: 'dance_student',
          alt: 'Dance Student',
        },
      },
      {
        title: 'Gamer',
        description: `Desde criança sou apaixonado por games e tecnologia, e essa paixão me levou a escolher o desenvolvimento como profissão. Os jogos despertaram minha curiosidade por computadores, sistemas e inovação.`,
        image: {
          key: 'gamer',
          alt: 'Gaming Setup',
        },
      },
      {
        title: 'Travel Lover',
        description: `Gosto muito de explorar novas culturas e histórias. Viajar pela Europa me deu a oportunidade de aprender e me adaptar a diferentes perspectivas, algo que considero inspirador.`,
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
        label: 'Sobre mim',
      },
      {
        id: 'expertises',
        label: 'Habilidades',
      },
      {
        id: 'journeys',
        label: 'Jornadas',
      },
      {
        id: 'projects',
        label: 'Projetos',
      },
      {
        id: 'curiosities',
        label: 'Curiosidades',
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
    copyright: '© 2025 Lucas Fernandes Souza. Todos os direitos reservados.',
  },
}
