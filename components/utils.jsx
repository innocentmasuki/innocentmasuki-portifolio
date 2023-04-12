import {
  DiBootstrap,
  DiDocker,
  DiGit,
  DiLinux,
  DiNodejsSmall,
  DiNginx,
  DiPhotoshop,
  DiReact,
} from "react-icons/di";
import {
  SiXcode,
  SiAndroidstudio,
  SiTailwindcss,
  SiNextdotjs,
} from "react-icons/si";

const baseurl =
  "https://innocentmasuki.github.io/portfolio-assets/images/banners";

const skills = [
  {
    title: "Android Dev",
    icon: <SiAndroidstudio />,
    link: "https://developer.android.com/",
  },
  {
    icon: <SiXcode />,
    link: "https://developer.apple.com/ios/",
    title: "iOS Dev",
  },
  {
    icon: <DiReact />,
    link: "https://reactjs.org/",
    title: "ReactJS",
  },
  {
    icon: <SiNextdotjs />,
    link: "https://nextjs.org/",
    title: "NextJS",
  },
  {
    icon: <DiNodejsSmall />,
    link: "https://nodejs.org/",
    title: "NodeJS",
  },
  {
    icon: <SiTailwindcss />,
    link: "https://tailwindcss.com/",
    title: "TailwindCSS",
  },
  {
    icon: <DiBootstrap />,
    link: "https://getbootstrap.com/",
    title: "Bootstrap",
  },
  {
    icon: <DiLinux />,
    link: "https://www.linux.org/",
    title: "Linux",
  },
  {
    icon: <DiGit />,
    link: "https://git-scm.com/",
    title: "Git",
  },
  {
    icon: <DiDocker />,
    link: "https://www.docker.com/",
    title: "Docker",
  },
  {
    icon: <DiNginx />,
    link: "https://www.nginx.com/",
    title: "Nginx",
  },
  {
    icon: <DiPhotoshop />,
    link: "https://www.adobe.com/products/photoshop.html",
    title: "Photoshop",
  },
];

const mediaData = {
  email: "innocentmasuki99@gmail.com",
  medias: [
    {
      title: "Twitter",
      link: "https://twitter.com/innocentmasuki",
    },
    {
      title: "GitHub",
      link: "https://github.com/innocentmasuki",
    },
    {
      title: "Dribbble",
      link: "https://dribbble.com/innocentmasuki",
    },
  ],
};

const navMenuRoutes = [
  {
    title: "about",
    path: "/about",
  },
  {
    title: "blog",
    path: "/blog",
  },
  {
    title: "works",
    path: "/works",
  },
  {
    title: "contact",
    path: "/contact",
  },
];

const aboutMe = {
  bio: "I am a software developer working productively in dynamic environments. Much interested in mobile and front-end development. Proud team player focused on achieving project objectives with speed and accuracy.",
  hobbies: "video games,movies,drawing,animations",
};

const works = [
  {
    title: "W-Platform",
    banners: [
      {
        url: baseurl + "/wplatform/cover.png",
        alt: "W platform cover",
      },
    ],
    url: "https://wplatform.nl",
    details:
      "A W-Magazine website for **Woonbedrijf**. I collaborated with an amazing team from [Sukuma Pixel](https://sukumapixel.com/). Created with [NextJS](https://nextjs.org/) and [Chakra UI](https://chakra-ui.com/).",
  },
  {
    title: "ProphecyPulse",
    banners: [
      {
        url: baseurl + "/prophecypulse/cover.png",
        alt: "Prophecy Pulse cover",
      },
      {
        url: baseurl + "/prophecypulse/first.png",
        alt: "Prophecy Pulse app banner",
      },
    ],
    url: "https://prophecypulse.web.app",
    details: `The first decentralized prediction market platform directly integrated to [Telegram](https://t.me/prophecypulse_bot)
     made betting as intuitive as writing a message in a chat group - the AI bot will create a wager out of any message sent in a group. Created with [ReactJS](https://reactjs.org/) and [Tailwindcss](https://tailwindcss.com/).`,
  },
  {
    title: "New Age Animations",
    banners: [
      {
        url: baseurl + "/naa/cover.png",
        alt: "New age animation cover",
      },
      {
        url: baseurl + "/naa/first.png",
        alt: "New age animation website banner",
      },
    ],
    url: "https://newageanimations.com/",
    details:
      "Official website for **New Age Animations**, A company creating 3D animations for entertainment 🎬. Created with [ReactJS](https://reactjs.org/), [Tailwindcss](https://tailwindcss.com/) and [ThreeJS](https://threejs.org/) technologies.",
  },
  {
    title: "Mr Raha",
    banners: [
      {
        url: baseurl + "/mrraha/cover.png",
        alt: "Mr. raha cover",
      },
      {
        url: baseurl + "/mrraha/first.png",
        alt: "Mr. raha website banner",
      },
    ],
    url: "https://mrraha.co.tz/",
    details:
      "An official website for **Mr Raha**. A digital chatbot using the Swahili language to provide user with contacts of the service provider(s) of the asked service. Created with [ReactJS](https://reactjs.org/).",
  },
  {
    title: "Meniscus Techonologies",
    banners: [
      {
        url: baseurl + "/meniscus/cover.png",
        alt: "Meniscus cover",
      },
      {
        url: baseurl + "/meniscus/first.png",
        alt: "Meniscus website banner",
      },
    ],
    url: "https://meniscus.co/",
    details:
      "An official website for **Meniscus Techlogies**, A software company based in Tanzania. Created with [ReactJS](https://reactjs.org/).",
  },
  {
    title: "Afyacall",
    banners: [
      {
        url: baseurl + "/afyacall/cover.png",
        alt: "Afyacall cover",
      },
      {
        url: baseurl + "/afyacall/first.png",
        alt: "Afyacall website banner",
      },
    ],
    url: "https://afyacall.co.tz",
    details:
      "An official website for **AfyaCall**. A mobile health service that allows people using any type of mobile phone to speak to the doctor, and gain access to medical services and consultations. Created with [ReactJS](https://reactjs.org/).",
  },
  {
    title: "This Website",
    banners: [
      {
        url: baseurl + "/innocentmasuki/cover.png",
        alt: "innocent masuki portifolio website cover",
      },
      {
        url: baseurl + "/innocentmasuki/first.png",
        alt: "innocent masuki portifolio website banner",
      },
    ],
    url: "https://innocentmasuki.me",
    details:
      "This personal portfolio website. Created with [NextJS](https://nextjs.org/) source codes are available at [GitHub](https://github.com/innocentmasuki/innocentmasuki-portifolio)",
  },
  {
    title: "Kibegi Shop",
    banners: [
      {
        url: baseurl + "/kibegi/cover.png",
        alt: "Kibegi Shop app cover",
      },
      {
        url: baseurl + "/kibegi/first.png",
        alt: "Kibegi Shop app banner",
      },
    ],
    url: null,
    details:
      "Android shopping app created with [Java](https://docs.oracle.com/javase/8/docs/technotes/guides/language/index.html). Source codes are available at [GitHub](https://github.com/meniscusInc/Kibegi)",
  },
];

const data = {
  mediaData,
  navMenuRoutes,
  aboutMe,
  works,
  skills,
};

export default data;
