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
        content: 'Anos de experiência profissional',
      },
      {
        title: 'ESL',
        content: 'Inglês avançado',
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
    content: `Sou Desenvolvedor Frontend, baseado em São Paulo, com mais de 5 anos de experiência construindo features de ponta a ponta em React, Next.js, TypeScript e testes E2E.<br /><br />
      Atualmente estou na Exactaworks, responsável por páginas e fluxos de benefícios voltados a parceiros (Caixa, Globoplay, Lavitan), da arquitetura ao deploy. Antes disso, passei quase quatro anos na Wellhub (antiga Gympass) junto ao time de Business Acquisition, construindo o site público (unlogged) e o fluxo de SMB, componentes reutilizáveis, testes automatizados e integrações com Salesforce, Hubspot, Segment e Amplitude.<br /><br />
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
          institution: 'Exactaworks',
          location_time: 'São Paulo, SP, Brasil, 2025 - 2026',
          current: false,
          qualification: 'Desenvolvedor Frontend',
          specialization: 'Alocado no Cliente Familhão - Time de Parcerias',
          description:
            'Entrega ponta a ponta de páginas e fluxos voltados a parceiros (Caixa, Globoplay, Lavitan) em React/Next.js, da arquitetura ao deploy. Refatorações, integrações REST/GraphQL, CI/CD no Azure DevOps e uso de Claude Code para documentação, performance e SEO.',
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
          location_time: 'São Paulo, SP, Brasil, 2021 - 2025',
          qualification: 'Desenvolvedor Frontend',
          specialization: 'B2B Acquisition Team',
          description:
            'Fluxos de aquisição de ponta a ponta em ambiente de alto crescimento, com testes A/B (Optimizely), arquiteturas de componentes escaláveis e integrações de analytics. Foco em performance, acessibilidade e suítes E2E (Cypress, Playwright).',
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
          location_time: 'São Paulo, SP, Brasil, 2018 - 2021',
          qualification: 'Suporte Técnico',
          specialization: 'IPC Tech Team',
          description:
            'Suporte ao sistema de telefonia IPC para grandes clientes financeiros (Itaú, Deutsche Bank, BTG, Santander), incluindo infraestrutura, configuração e manutenção.',
          stack: [' IPC Unigy System', 'IPC IQMAX Turret', 'Redes', 'VoIP'],
        },
      ],
    },
    academic: {
      title: 'Acadêmico',
      journey: [
        {
          institution: 'Rocketseat',
          location_time: 'São Paulo, SP, Brasil, 2025',
          qualification: 'Dev com IA',
          specialization: 'Claude Code, Codex & Cursor',
          description:
            'Programa intensivo sobre construção de software com agentes de IA, cobrindo o editor Cursor com IA integrada, Codex para arquitetura de aplicações e execução automatizada, e configuração de Model Context Protocol (MCP) com skills customizadas. Explorou o Claude Code para análise de codebase, execução de comandos, correção de bugs e entrega de features preservando contexto de IA, além de entrega ponta a ponta orquestrada por IA com ShadCN, Turso, Cloudflare e BetterAuth.',
          stack: ['Claude Code', 'Codex', 'Cursor', 'MCP'],
        },
        {
          institution: 'Rocketseat',
          location_time: 'São Paulo, SP, Brasil, 2020',
          qualification: 'GoStack Bootcamp',
          specialization: 'React, React Native and Node',
          description:
            'Formação intensiva em desenvolvimento web e mobile, construindo aplicações completas do frontend ao backend.',
          stack: ['React', 'React Native', 'Node.js', 'TypeScript'],
        },
        {
          institution: 'FMU - Centro Universitário',
          location_time: 'São Paulo, SP, Brasil, 2016 - 2019',
          qualification: 'CST',
          specialization: 'Análise e Desenvolvimento de Sistemas',
          description:
            'Graduação com base sólida em lógica de programação, banco de dados, engenharia de software e desenvolvimento de sistemas.',
          stack: ['Java', 'SQL', 'POO', 'Engenharia de Software'],
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
        tags: ['React', 'Next.js', 'TypeScript', 'A/B Testing', 'Salesforce'],
      },
      {
        title: 'Wellhub – Website Público (Unlogged)',
        description: `Desenvolvimento e manutenção do site público da empresa, com foco em performance, reutilização de componentes e integrações com plataformas de CRM e Analytics.`,
        img: {
          key: 'wellhub_website',
          alt: 'Projeto 2 - Wellhub Website Público (Unlogged)',
        },
        variant: 'inverted',
        tags: ['React', 'Next.js', 'TypeScript', 'Storybook', 'Segment'],
      },
      {
        title: 'Website Portfólio',
        description: `Design e desenvolvimento do meu portfólio pessoal utilizando React, Vite, TailwindCSS e Zustand, demonstrando minha experiência em frontend e implementação de interfaces.`,
        img: {
          key: 'portifolio',
          alt: 'Projeto 3 - Portfolio Website',
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
        title: 'Jogo de Investigação – Brackeys Game Jam',
        description: `Um jogo de investigação em pixel art e primeira pessoa feito em Godot 4 (GDScript) para a Brackeys Game Jam em apenas uma semana. Vindo do frontend e com pouca experiência em GDScript e game dev, uni meu conhecimento de arquitetura de software ao Claude como par de programação com IA para aprender a engine rapidamente, desenhar sistemas limpos baseados em autoloads (cena, configurações, áudio, event bus, estado de jogo) e entregar mecânicas de point & click e drag & drop em um prazo curto.`,
        img: {
          key: 'brackeys_game_jam',
          alt: 'Projeto 4 - Jogo de Investigação (Brackeys Game Jam)',
        },
        variant: 'inverted',
        tags: ['Godot 4', 'GDScript', 'Claude', 'Game Jam', 'Pixel Art'],
        links: [
          {
            label: 'Jogar',
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
        description: `Entrega ponta a ponta das páginas de produto e fluxos de benefício voltados ao parceiro Familhão, cliente da consultoria Exactaworks. Desenvolvimento de interfaces responsivas e acessíveis em React/Next.js que simplificam a lógica complexa do parceiro em fluxos intuitivos, com responsabilidade sobre integração de APIs REST, otimização de performance e deploy.`,
        img: {
          key: 'familhao',
          alt: 'Projeto 5 - Exactaworks Familhão',
        },
        tags: ['React', 'Next.js', 'TypeScript', 'Acessibilidade', 'REST API'],
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
        href: 'https://www.linkedin.com/in/lucasfernandessouzabr',
      },
    ],
    copyright: '© 2026 Lucas Fernandes Souza. Todos os direitos reservados.',
  },
}
