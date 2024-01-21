import {
  aseprite,
  aws,
  cpp,
  creativeCloud,
  css,
  express,
  figma,
  firebase,
  framerMotion,
  git,
  github,
  html,
  java,
  javascript,
  lua,
  mySql,
  node,
  python,
  react,
  tailwind,
  vue,
} from "./badges";

const experience = [
  {
    title: "Professional Tutor",
    date: "2012 - Present",
    employer: "CT State Tunxis",
    location: "Farmington, CT",
    description:
      "Provided tutoring services for students in the CT State Tunxis community. I spend some of my time working in the Math Lab, where I supervise the lab in general as well as provide assistance to students when called upon in courses including:",
    bullets: [
      "Mentored in computer science and design, covering HTML, CSS, JavaScript, and basics of networking and databases.",
      "Enhanced analytitical and problem-solving abilitities of students through a range of math topics.",
      "Led focused workshops fostering teamwork and collaboration.",
    ],
  },
  {
    title: "Supplemental Instruction (SI) Leader",
    date: "Fall 2023",
    employer: "Arizona State University",
    location: "Remote",
    description:
      "Provided supplemental instruction in SER321: Distributed Software Systems at Arizona State University.",
    bullets: [
      "Delivered supplemental instructition in Distributed Softftware Systems, emphasizing complex networking concepts.",
      "Guided students in client/server architecture, sockets, multitithreading, and locks.",
      "Facilitated pair programming exercises, enhancing interactitive learning and problem-solving skills.",
      "Developed lesson plans and led discussions to promote student engagement in technical topics.",
    ],
  },
];

const education = [
  {
    title: "B.S. Software Engineering",
    date: "2023",
    location: "Arizona State University",
  },
  {
    title: "Certificate in Computer Programming",
    date: "2021",
    location: "CT State Tunxis",
  },
  {
    title: "A.S. Mathematics/Computer Science (Honors)",
    date: "2019",
    location: "CT State Tunxis",
  },
];

const skills = [
  {
    category: "Languages",
    skills: [javascript, java, python, lua, cpp],
  },
  {
    category: "Front-end",
    skills: [html, css, react, vue, tailwind, framerMotion],
  },
  {
    category: "Back-end",
    skills: [node, express, aws, firebase, mySql],
  },
  {
    category: "Version Control",
    skills: [git, github],
  },
  {
    category: "Design",
    skills: [figma, creativeCloud, aseprite],
  },
];

const projects = [
  {
    title: "Field Day: Wildlife Data Management Tool",
    date: "2022",
    bullets: [
      "Led a team of five in developing a Code Quality Policy, improving coding standards and project maintainability.",
      "Designed a user-centric web interface focusing on user experience and data access.",
      "Applied responsive design techniques to ensure the application is accessible on all devices.",
      "Implemented a custom authentication system using Google OAuth and Firebase.",
      "Utilized Framer Motion to create a dynamic and engaging user experience.",
    ],
  },
  {
    title: "Connecticut Community Holiday Toy Drive",
    date: "2023",
    bullets: [
      "Organized annual toy drives for fifive years, raising over $1000 and collectiting 600+ toys.",
      "Developed a React-based SPA to enhance online donatition capabilitities.",
      "Designed a custom logo and branding for the event.",
    ],
  },
];

const cvDetails = {
  name: "Ian Skelskey",
  title: "Software Engineer",
  summary:
    "Software engineer with a BS in Software Engineering at Arizona State University, with a strong foundation in React and a passion for interaction design and accessibility. Eager to contribute to a company whose products and mission align with my values and skillset.",
  contact: {
    phone: "8608305595",
    email: "ianskelskey@gmail.com",
    linkedin: "in/ianskelskey",
    github: "ianskelskey",
  },
  experience: experience,
  projects: projects,
  education: education,
  skills: skills,
};

export default cvDetails;
