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
        label: 'Minhas Habilidades & Experiências',
      },
      {
        id: 'journeys',
        label: 'Jornadas Profissionais & Acadêmicas',
      },
      {
        id: 'faq',
        label: 'Perguntas',
      },
    ],
    mode_switch: {
      dark: 'Moon',
    },
    countries: {
      us: {
        src: '/images/country/us/flag.webp',
        alt: 'Bandeira dos Estados Unidos',
        label: 'Inglês',
      },
      br: {
        src: '/images/country/br/flag.webp',
        alt: 'Bandeira do Brasil',
        label: 'Português',
      },
    },
  },
  hero: {
    id: 'hero',
    ready_online: {
      avatar: {
        src: '/images/commons/about_me.webp',
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
      src: '/images/commons/about_me.webp',
      alt: 'Retrato de Lucas Fernandes Souza',
    },
    title: 'Um Pouco Sobre Mim',
    content: `Sou Desenvolvedor Front-End com mais de 3 anos de experiência,
              especializado em React e Next.js. Lorem Ipsum é um texto fictício
              da indústria tipográfica e de impressão desde os anos 1500, quando
              um impressor desconhecido embaralhou os tipos para fazer um livro
              de modelos. <br /> <br /> Sobreviveu não apenas a cinco séculos,
              mas também à transição para a editoração eletrônica, permanecendo
              essencialmente inalterado. Foi popularizado nos anos 1960 com o
              lançamento das folhas de Letraset contendo trechos de Lorem Ipsum,
              e mais recentemente com softwares de editoração como Aldus PageMaker
              incluindo versões do Lorem Ipsum. <br /> <br /> Ao contrário do que
              se acredita, Lorem Ipsum não é apenas texto aleatório. Tem raízes
              em um trecho da literatura clássica em latim de 45 a.C., com mais
              de 2000 anos de idade.`,
  },
  expertises: {
    id: 'expertises',
    title: 'Minhas Habilidades & Especialidades',
    description: `Sobreviveu não apenas a cinco séculos, mas também à transição para
                  a editoração eletrônica, permanecendo essencialmente inalterado. Foi
                  popularizado nos anos 1960 com o lançamento das folhas de Letraset
                  contendo trechos de Lorem Ipsum, e mais recentemente com softwares
                  de editoração como Aldus PageMaker incluindo versões do Lorem Ipsum.`,
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
    title: 'Minhas Jornadas',
    description: `Sobreviveu não apenas a cinco séculos, mas também à transição para
                  a editoração eletrônica, permanecendo essencialmente inalterado. Foi
                  popularizado nos anos 1960 com o lançamento das folhas de Letraset
                  contendo trechos de Lorem Ipsum, e mais recentemente com softwares
                  de editoração como Aldus PageMaker incluindo versões do Lorem Ipsum.`,
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
    title: 'Algumas Perguntas Sobre Mim',
    questions: [
      {
        question:
          'Lorem Ipsum é simplesmente um texto fictício da indústria tipográfica e de impressão.',
        answer: 'Sim. Segue o padrão de design WAI-ARIA.',
      },
      {
        question:
          'Lorem Ipsum é simplesmente um texto fictício da indústria tipográfica e de impressão.',
        answer: 'Sim. Segue o padrão de design WAI-ARIA.',
      },
      {
        question:
          'Lorem Ipsum é simplesmente um texto fictício da indústria tipográfica e de impressão.',
        answer: 'Sim. Segue o padrão de design WAI-ARIA.',
      },
      {
        question:
          'Lorem Ipsum é simplesmente um texto fictício da indústria tipográfica e de impressão.',
        answer: 'Sim. Segue o padrão de design WAI-ARIA.',
      },
      {
        question:
          'Lorem Ipsum é simplesmente um texto fictício da indústria tipográfica e de impressão.',
        answer: 'Sim. Segue o padrão de design WAI-ARIA.',
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
        label: 'Minhas Habilidades & Experiências',
      },
      {
        id: 'journeys',
        label: 'Jornadas Profissionais & Acadêmicas',
      },
      {
        id: 'faq',
        label: 'Perguntas',
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
