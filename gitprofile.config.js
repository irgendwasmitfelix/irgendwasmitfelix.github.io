// gitprofile.config.js

const config = {
  github: {
    username: 'irgendwasmitfelix', // Your GitHub org/user name. (Required)
    sortBy: 'updated', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: ['assessment'], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'felix-helleckes-758529202/',
    //twitter: 'irgendwasmitfelix',
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
    'E2E-Testautomation',
    'Stresstests',
    'Test-Management in Scrum',
    'JavaScript',
    'Python',
    'Webdriver.io',
    'Selenium/Appium',
    'Cypress.io',
    'locust.io',
    'kubernetes',
    'Postman',
    'MySQL',
    'Docker',
    'Jenkins CI/CD',
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
      company: 'Ampada',
      position: 'QA-Engineer',
      from: 'Feb 2021',
      to: 'Aug 2021',
      companyLink: 'https://grandcentrix.net/de/',
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
  Projects: [
    {
      title: 'Migros App',
      description:
        'Migros Genossenschaft is the largest Swiss retailer and one of the 40 largest retailers worldwide. Within the group, almost all relevant retail services are offered. With its restaurants, for example, Migros is one of the largest gastronomy companies in Switzerland. In addition to grocery stores, it also has DIY stores, electronics stores, sporting goods stores and furniture stores under its roof.',
      imageUrl: 'https://grandcentrix.net/references/images/logo-migros.svg',
      link: 'https://grandcentrix.net/de/references/migros/',
    },
    {
      title: 'Leica Camera App',
      description:
        'The first almost 2 years at Grandcentrix I worked on the Leica camera app. I created a test concept for various cameras and a wide portfolio of Android and iOS versions. In addition, I managed the entire test process in Scrum, partly also with external service providers (personnel responsibility).',
      imageUrl: 'https://grandcentrix.net/references/images/logo-leica.svg',
      link: 'https://grandcentrix.net/de/references/leica',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: 'florian.helleckes', // to hide blog section, keep it empty
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
    defaultTheme: 'black',

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
      'light',
      'black',
      'coffee',
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
      // 'luxury',
      // 'dracula',
      // 'cmyk',
      // 'autumn',
      //'business',
      //'acid',
      //'lemonade',
      //'night',
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
      class="text-primary" href="https://react.dev/"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

export default config;
