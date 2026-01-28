import {
  backend,
  css,
  figma,
  freelance,
  git,
  goiteens,
  html,
  javascript,
  mobile,
  mongodb,
  reactjs,
  weather,
  solvd,
  tailwind,
  typescript,
  validator,
  web,
  countries,
  quiz
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "UI/UX Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },

  {
    name: "MongoDB",
    icon: mongodb,
  },

  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Solvd",
    icon: solvd,
    iconBg: "#383E56",
    date: "February 2025 - August 2025",
    points: [
      "Participating in a professional mentorship program focused on React.js, Next.js, TypeScript, and MUI.",
      "Completing team-based real-world projects, collaborating on UI development, API integration, and frontend architecture.",
      "Receiving guidance from senior mentors, improving problem-solving, coding standards, and best practices",
      "Delivering functional web applications while working in an agile, collaborative environment.",
    ],
  },
  {
    title: "Freelance Frontend Developer",
    icon: freelance,
    iconBg: "#383E56",
    date: "July 2022 - June 2025",
    points: [
      "Developing React-based landing pages and small JavaScript projects, such as interactive games and business websites",
      "Collaborating with clients to create user-friendly interfaces, ensuring compatibility across various devices and browsers",
      "Collaborating on a team project as part of a diploma work to develop a program for automating thesis quality checks;",
      "Debugging and testing applications to ensure functionality and performance.",
    ],
  },
  {
    title: "Frontend coach",
    company_name: "GoIteens",
    icon: goiteens,
    iconBg: "#E6DEDD",
    date: "April 2023 - August 2025",
    points: [
      "Teaching HTML5, CSS3, JavaScript, React, and Git to teenagers through practical coding exercises and project-based learning.",
      "Developing comprehensive course materials and storing them in an organized GitHub repository for easy access",
      "Guiding students in creating projects such as sticker apps, to-do lists, and search tools using APIs.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I highly recommend Olha as a highly skilled developer. We collaborated on an AI/ML project, and I was impressed by her professionalism and problem-solving abilities. Olha would be an excellent choice for your project.",
    name: "Olexandr Nоnіk",
    position: "Product Owner",
    company: "Wise Vision",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
  },
];

const projects = [
  {
    name: "Weather App",
    description:
      "A full stack weather app provides detailed and dynamic weather information, combining real-time data with a modern, user-friendly interface. Users can view hourly forecasts, weekly weather predictions, and interactive weather charts.",
    tags: [
      {
        name: "next.js",
        color: "coral-text-gradient",
      },
      {
        name: "typescript",
        color: "mint-text-gradient",
      },
      {
        name: "strapi",
        color: "sky-text-gradient",
      },
    ],
    image: weather,
    source_code_link: "https://github.com/Olha36/weather-forecast.git",
    live_demo_link: "https://weather-forecast-two-lovat.vercel.app/",
    isPrivate: true,
  },
  {
    name: "Thesis Validator",
    description:
      "This service validates master's and bachelor's theses in PDF format. It currently offers content checks, bibliography and reference verification, and technical specification assessment, ensuring reliable evaluation to help maintain academic standards.",
    tags: [
      {
        name: "typescript",
        color: "coral-text-gradient",
      },
      {
        name: "javascript",
        color: "mint-text-gradient",
      },
      {
        name: "css",
        color: "sky-text-gradient",
      },
    ],
    image: validator,
    source_code_link: "https://github.com/Olha36/diploma-ui",
    live_demo_link: "https://olha36.github.io/diploma-ui/",
  },
  {
    name: "Countries",
    description:
      "This service provides detailed country information by fetching real-time data from the REST Countries API. It displays flags, capitals, populations, languages, currencies, and regions, offering users a reliable and accessible way to explore global data.",
    tags: [
      {
        name: "typescript",
        color: "coral-text-gradient",
      },
      {
        name: "next.js",
        color: "mint-text-gradient",
      },
      {
        name: "css",
        color: "sky-text-gradient",
      },
    ],
    image: countries,
    source_code_link: "https://github.com/Olha36/countries-project.git",
    live_demo_link: "https://countries-rust-three.vercel.app/",
  },
  {
    name: "Quiz app",
    description:
      "An interactive quiz application with dynamic content managed through Contentful. All quiz data and user results are stored in Contentful, while Algolia is used for fast search and efficient data retrieval.The app provides a smooth and responsive user experience with real-time result handling.",
    tags: [
      {
        name: "typescript",
        color: "coral-text-gradient",
      },
      {
        name: "next.js",
        color: "mint-text-gradient",
      },
      {
        name: "css",
        color: "sky-text-gradient",
      },
    ],
    image: quiz,
    source_code_link: "https://github.com/Olha36/quiz-app.git",
    live_demo_link: "https://quiz-app-two-beta-19.vercel.app/",
  },
];

export { experiences, projects, services, technologies, testimonials };
