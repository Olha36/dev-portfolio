import {
  mobile,
  creator,
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
  starbucks,
  tesla,
  carrent,
  jobit,
  threejs,
  frontend,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React  Developer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML5",
    icon: html,
  },
  {
    name: "CSS3",
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
    name: "Three JS",
    icon: threejs,
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
    title: "React.js Developer",
    company_name: "Solvd",
    icon: starbucks,
    iconBg: "#383E56",
    date: "February 2025 - present",
    points: [
      "Contributing to the development of several web applications, focusing on creating responsive, user-friendly interfaces with React, JavaScript, HTML, and CSS.",
      "Working closely with a cross-functional team to translate requirements into functional, visually appealing features.",
      "Applyingadaptive layout techniques to deliver consistent user experiences across different devices and browsers.",
      "Actively engaged in peer code reviews, sharing insights and suggesting improvements to maintain code quality and best practices.",
    ],
  },
  {
    title: "Frontend mentor",
    company_name: "GoIteens",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Apr 2023 - Aug 2025",
    points: [
      "Guiding teenagers in building practical web development skills using React, JavaScript, TypeScript, HTML, CSS, and Git.",
      "Supporting learners through a combination of exercises and full-scale projects, helping them apply theoretical knowledge to real-world scenarios.",
      "Providing personalized feedback on code quality, debugging, and best practices, while fostering problem-solving skills and a collaborative learning environment.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Рекомендую Ольгу як висококваліфікованого девелопера. Ми співпрацювали над AI/ML проектом, і я залишився задоволений професіоналізмом та вмінням вирішувати завдання. Ольга - це відмінний вибір для вашого проекту.",
    name: "Olexandr Nоnіk",
    designation: "Сhief Product Officer | Product Owner | Project Manager",
    company: "Wise Vision",
    image: "https://randomuser.me/api/portraits/med/men/19.jpg",
  },
];

const projects = [
  {
    name: "Name of the project",
    description: "Description of the project",
    tags: [
      {
        name: "stack",
        color: "blue-text-gradient",
      },
      {
        name: "stack",
        color: "green-text-gradient",
      },
      {
        name: "stack",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "link for the project",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
