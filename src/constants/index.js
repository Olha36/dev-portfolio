import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  mongodb,
  git,
  figma,
  solvd,
  goiteens,
  shop,
  validator,
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
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
    icon: solvd,
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
      "Teaching HTML5, CSS3, JavaScript, Node.js, React, and Git to teenagers through practical coding exercises and project-based learning.",
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
    designation: "Product Owner",
    company: "Wise Vision",
    image: "hhttps://randomuser.me/api/portraits/men/9.jpg",
  },
];

const projects = [
  {
    name: "Shoes Shop",
    description:
      "An online retail platform offering a seamless, user-friendly way to browse, compare, and purchase footwear. Designed to highlight product variety and simplify shopping, it focuses on convenience, style, and customer satisfaction. ",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "stripe",
        color: "green-text-gradient",
      },
      {
        name: "strapi",
        color: "pink-text-gradient",
      },
    ],
    image: shop,
    source_code_link: "https://shoes-shop-team-3.vercel.app/",
    isPrivate: true,
  },
  {
    name: "Thesis Validator",
    description:
      "This service validates master's and bachelor's theses in PDF format. It currently offers content checks, bibliography and reference verification, and technical specification assessment, ensuring reliable evaluation to help maintain academic standards.",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: validator,
    source_code_link: "https://github.com/Olha36/diploma-ui",
  },
];

export { services, technologies, experiences, testimonials, projects };
