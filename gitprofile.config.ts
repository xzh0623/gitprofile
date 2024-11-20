// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'xzh0623', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/gitprofile/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 6, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: ['xzh0623/gitprofile','xzh0623/xzh0623','xzh0623/ca2024fhw06','xzh0623/ca2024f','xzh0623/ca2024fhw05'], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['xzh0623/TWB_HearingLoss', 'xzh0623/NLP','BioTechCo/main_project','xzh0623/StonePet-Haven'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
  //   external: {
  //     header: 'My Projects',
  //     // To hide the `External Projects` section, keep it empty.
  //     projects: [
  //       {
  //         title: 'Project Name',
  //         description:
  //           'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
  //         imageUrl:
  //           'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
  //         link: 'https://example.com',
  //       },
  //       {
  //         title: 'Project Name',
  //         description:
  //           'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
  //         imageUrl:
  //           'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
  //         link: 'https://example.com',
  //       },
  //     ],
  //   },
  },
  seo: {
    title: 'Portfolio of Xiang-Zhen Chen',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: '',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: 'xzh_06.23',
    reddit: '',
    threads: 'xzh_06.23',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '陳庠蓁',
    telegram: '',
    website: 'https://xzh0623.github.io/gitprofile/',
    phone: '',
    email: 'ss612270623@gmail.com',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'PHP',
    'MySQL',
    'Python',
    'Git',
    'CSS',
    'Data-Analysis',
    'Machine Learning',
    'Scikit-Learn',
    'Tenserflow'
  ],
  experiences: [
    {
      company: 'Institution of Information Science, Academia Sinica',
      position: 'Summer Intern',
      from: 'July 2024',
      to: 'August 2024',
      companyLink: 'https://www.iis.sinica.edu.tw/zh/index.html',
    },
  ],
  // certifications: [
  //   {
  //     name: 'Lorem ipsum',
  //     body: 'Lorem ipsum dolor sit amet',
  //     year: 'March 2022',
  //     link: 'https://example.com',
  //   },
  // ],
  educations: [
    {
      institution: 'National Taipei University of Technology',
      degree: 'CSIE Bachelor\'s Degree',
      from: '2021',
      to: '2025',
    },
    // {
    //   institution: 'Institution Name',
    //   degree: 'Degree',
    //   from: '2012',
    //   to: '2024',
    // },
  ],
  publications: [
    {
      title: 'Analysis of DNA Methylation Biomarkers through Liquid Biopsies for Early Breast Cancer Detection',
      conferenceName: 'ICS 2024 Conference Proceedings',
      // journalName: 'Journal Name',
      authors: 'Xiang-Zhen Chen, Chia-Yun Ou, Geng-Hong Hsiao, Hui-Wu Zhang, Tun-Wen Pai and Mee-Hoong See',
      // link: 'https://ics2024.conf.nycu.edu.tw/',
      // description:
      //   'According to World Health Organization (WHO) and World Cancer Research Fund International (WCRF International), breast cancer has become the most common cancer globally, significantly impacting women\'s health. This study utilized GDC and GEO public methylation chip datasets from breast cancer patients. Combined with comorbidity data analysis of these patients, critical biomarkers were identified through analyzing differential expression levels of methylation loci, serving as indicators for breast cancer risk assessment. Gene Ontology (GO) functional annotations were applied for hierarchical clustering. Functional similarities between any two genetic loci were evaluated based on their annotated GO terms, enabling the observation of candidate biomarker relationships for diagnosis biomarker selection. Furthermore, by integrating Boruta for feature selection and applying Recursive Feature Elimination (RFE) to evaluate the performance of various machine learning models, the optimal methylation biomarker combinations for breast cancer detection could be identified. The results identified eight important DNA methylation biomarkers, including CMTM5, PDCD1LG2, MIR124-3, NEFM, PTF1A, CX3CL1, PCYT2, and KCNE3 as important biomarker candidates. After functional clustering analysis, these markers exhibited excellent performance with three biomarker combinations for both tissue and liquid samples from breast cancer patients, with average prediction accuracies ranging from 0.91 to 0.93 for tissue samples and from 0.71 to 0.76 for liquid samples. Early observation of methylation differences from the suggested breast cancer biomarkers could prevent tumor formation and reduce the risk of surgical operations by early precision diagnosis and treatment.',
    },
    {
      title: '遞迴特徵刪除技術應用於生物標記篩選及癌症精準診斷之研究',
      conferenceName: '國科會大專生研究計畫',
      // journalName: '',
      authors: 'Xiang-Zhen Chen',
      // link: 'https://example.com',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  // blog: {
  //   source: 'dev', // medium | dev
  //   username: 'xzh0623', // to hide blog section, keep it empty
  //   limit: 1, // How many articles to display. Max is 10.
  // },
  // googleAnalytics: {
  //   id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  // },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
