// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "All my publications and preprints are listed below and can also be found in my CV HAL.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-software",
          title: "Software",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/software/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-students",
          title: "Students",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/students/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "Materials for some courses I taught.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "post-coupling-for-point-processes",
        
          title: "Coupling for point processes",
        
        description: "introduction to two methods used to represent and couple point processes",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/ppcoupling/";
          
        },
      },{id: "post-makie-introduction-and-snippets",
        
          title: "Makie - introduction and snippets",
        
        description: "an introduction to Makie.jl and a snippet that generates useful canvas",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/makie/";
          
        },
      },{id: "post-popularization-of-science-youtube-channels",
        
          title: "Popularization of science - Youtube channels",
        
        description: "a selective list of english and french youtube channels dealing with popularization of science",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/youtube/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-don-t-miss-stochastic-geometry-days-2025-in-grenoble",
          title: 'Don’t miss Stochastic Geometry Days 2025 in Grenoble!',
          description: "",
          section: "News",},{id: "news-until-further-notice-i-am-on-sabbatical-leave",
          title: 'Until further notice, I am on sabbatical leave.',
          description: "",
          section: "News",},{id: "news-my-hdr-manuscript-is-completed-and-available-here",
          title: 'My HDR manuscript is completed and available here!',
          description: "",
          section: "News",},{id: "news-our-paper-has-been-accepted-for-publication-in-annals-of-statistics",
          title: 'Our paper has been accepted for publication in Annals of Statistics!',
          description: "",
          section: "News",},{id: "news-i-defended-my-hdr-the-slides-are-on-this-repo",
          title: 'I defended my HDR! The slides are on this repo.',
          description: "",
          section: "News",},{id: "projects-anr-chamane",
          title: 'ANR ChaMaNe',
          description: "Mathematical Challenges in Neurosciences (2020-2025) PI: Delphine Salort",
          section: "Projects",handler: () => {
              window.location.href = "/projects/research/anr_chamane/";
            },},{id: "projects-stepp-meteo",
          title: 'STePP-Meteo',
          description: "Spatio-temporal point processes for meteorological data (2022-2025) PI: Jean-François Coeurjolly",
          section: "Projects",handler: () => {
              window.location.href = "/projects/research/stepp_meteo/";
            },},{id: "teaching-modélisation-proba-stat",
          title: 'Modélisation Proba-Stat',
          description: "M2 Agreg",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/agreg/";
            },},{id: "teaching-julia-tutorial",
          title: 'Julia tutorial',
          description: "Github repo with introduction and tips for Julia",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/julia_tutorial/";
            },},{id: "teaching-probabilités-avancées",
          title: 'Probabilités avancées',
          description: "M2 - Maths appliquées",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/m2proba/";
            },},{id: "teaching-tse-events-analysis",
          title: 'TSE events analysis',
          description: "MSc in Industrial and Applied Mathematics",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/msiam_tse/";
            },},{id: "teaching-processus-stochastiques",
          title: 'Processus stochastiques',
          description: "M1 Maths générales",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/procstoc/";
            },},{id: "teaching-statistique",
          title: 'Statistique',
          description: "L2 BIO - Plateforme CHAMILO",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/sta301/";
            },},{
        id: 'social-arxiv',
        title: 'arXiv',
        section: 'Socials',
        handler: () => {
          window.open("https://arxiv.org/a/chevallier_j_1.html", "_blank");
        },
      },{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/cv_fr.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6A%75%6C%69%65%6E.%63%68%65%76%61%6C%6C%69%65%72%31@%75%6E%69%76-%67%72%65%6E%6F%62%6C%65-%61%6C%70%65%73.%66%72", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/jucheval", "_blank");
        },
      },{
        id: 'social-hal',
        title: 'HAL',
        section: 'Socials',
        handler: () => {
          window.open("https://cv.hal.science/julien-chevallier", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/julien-chevallier-37221a388", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Julien-Chevallier-2/", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=PLia_KwAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
