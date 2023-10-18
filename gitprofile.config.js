// gitprofile.config.js

const config = {
  github: {
    username: 'irgendwasmitfelix', // Your GitHub org/user name. (Required)
    sortBy: 'updated', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'felix-helleckes-758529202/',
    twitter: 'irgendwasmitfelix',
    //mastodon: 'arifszn@mastodon.social',
    //facebook: '',
    instagram: 'irgendwasmitfelix',
    youtube: 'irgendwasmitfelix', // example: 'pewdiepie'
    //dribbble: '',
    //behance: '',
    //medium: 'arifszn',
    //dev: 'arifszn',
    //stackoverflow: '', // example: '1/jeff-atwood'
    //skype: '',
    //telegram: '',
    website: 'irgendwasmitfelix.github.io',
    //phone: '',
    email: 'f.helleckes@proton.me',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1lgacTN0f1dQsYgJG96Lg2RB_BlD5dllz/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'JavaScript',
    'Python',
    'Webdriver.io',
    'locust.io',
    'kubernetes',
    'Postman',
    'MySQL',
    'Git',
    'Docker',
    'Jira / Xray Testmanagement / Automation',
    'Testrail'
  ],
  experiences: [
    {
      company: 'Peek & Cloppenburg (Fashion Digital)',
      position: 'Associate-Manager:Quality Assurance',
      from: 'Dez 2021',
      to: 'Oct 2023',
      companyLink: 'https://www.peek-cloppenburg.de/',
    },
    {
      company: 'Grandcentrix',
      position: 'QA-Tester',
      from: 'Feb 2018',
      to: 'Feb 2021',
      companyLink: 'https://grandcentrix.net/de/',
    },
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: 'Hönne Berufskolleg Menden',
      degree: 'Fachabitur & Schulische Ausbildung',
      from: '2015',
      to: '2019',
    },
    // {
    //   institution: 'Institution Name',
    //   degree: 'Degree',
    //   from: '2012',
    //   to: '2014',
    // },
  ],

  // To hide the `My Projects` section, keep it empty.
  // externalProjects: [
  //   {
  //     title: 'Project Name',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
  //     imageUrl: 'https://via.placeholder.com/250x250',
  //     link: 'https://example.com',
  //   },
  //   {
  //     title: 'Project Name',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
  //     imageUrl: 'https://via.placeholder.com/250x250',
  //     link: 'https://example.com',
  //   },
  // ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: 'Florian H.', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'wireframe',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      //'light',
      //'dark',
      // 'cupcake',
      // 'bumblebee',
      // 'emerald',
      // 'corporate',
      // 'synthwave',
      // 'retro',
      // 'cyberpunk',
      // 'valentine',
      // 'halloween',
      // 'garden',
      // 'forest',
      // 'aqua',
      // 'lofi',
      // 'pastel',
      // 'fantasy',
      // 'wireframe',
      'black',
      // 'luxury',
      // 'dracula',
      // 'cmyk',
      // 'autumn',
      //'business',
      //'acid',
      //'lemonade',
      //'night',
      'coffee',
      //'winter',
      //'procyon',
    ],

    // Custom theme
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
};

export default config;
