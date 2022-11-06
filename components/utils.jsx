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
  email: "innocentmasuki@meniscus.co",
  medias: [
    {
      title: "Twitter",
      link: "https://twitter.com/MasukiInnocent",
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
    title: "home",
    path: "/",
  },
  {
    title: "about",
    path: "/about",
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
    title: "New Age Animations",
    banners: [
      {
        url: "https://innocentmasuki.github.io/portfolio-assets/images/banners/naa/new_age_animations.png",
        alt: "New age animation website banner",
      },
    ],
    url: "https://newageanimations.com/",
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    title: "Mr Raha",
    banners: [
      {
        url: "https://innocentmasuki.github.io/portfolio-assets/images/banners/mrraha/mr_raha.png",
        alt: "Mr raha website banner",
      },
    ],
    url: "https://mrraha.co.tz/",
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    title: "Meniscus Techonologies",
    banners: [],
    url: "https://meniscus.co/",
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
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
