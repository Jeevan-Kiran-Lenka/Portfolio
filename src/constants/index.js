import {
  airbnb,
  aws,
  backend,
  creator,
  digylytics,
  docker,
  ethereum,
  git,
  hardhat,
  javascript,
  medblock,
  mobile,
  mongodb,
  nodejs,
  python,
  reactjs,
  redux,
  samsung,
  tailwind,
  tensorflow,
  travelx,
  virtusa,
  web,
} from "../assets"

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
]

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Blogger",
    icon: creator,
  },
]

const technologies = [
  {
    name: "Tensorflow",
    icon: tensorflow,
  },
  {
    name: "Python",
    icon: python,
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
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Ethereum",
    icon: ethereum,
  },
  {
    name: "Hardhat",
    icon: hardhat,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "docker",
    icon: docker,
  },
]

const experiences = [
  {
    title: "Machine Learning Engineer",
    company_name: "Digilytics",
    icon: digylytics,
    iconBg: "#E6DEDD",
    date: "Oct 2020 - Dec 2020",
    points: [
      "OCEX: Worked directly with banks, and Enhanced a text extraction software using Python-Levenshtein, PyTorch trained on AWS Cloud used specifically to extract detailed keywords, dates, names, assets, current balances, etc, from bank statements which decides if a person should get a mortgage loan or not",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Resulted in increase in revenue by 20% and dropped man-handling by 42% by Automating redundant taks using Selenium",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Development Engineer",
    company_name: "Samsung R&D",
    icon: samsung,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Blockchain Engineer",
    company_name: "Virtusa",
    icon: virtusa,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Mar 2022",
    points: [
      "Gained insight into Blockchain Software development as Jatayu Grand Finalist.",
      "Led the team to develop MedBlock - a Dapp for sharing, storing, and accessing EHR using Blockchain.",
      "Used Proof of Stake Policy for Mining the hashes which led Dapp to be 30% fast, and 60% more scalable using Hyperledger for the Final build, and Ganache for testing out Smart Contracts.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
]

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
]

const projects = [
  {
    name: "MedBlock",
    description:
      "This application aims to use blockchain technology for secure storage and retrieval of electronic health records (EHR), with granular access rules. It addresses scalability issues by utilizing off-chain storage, offering a scalable, secure, and reliable blockchain-based EHR solution.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "truffle",
        color: "green-text-gradient",
      },
      {
        name: "Ethereum",
        color: "pink-text-gradient",
      },
    ],
    image: medblock,
    source_code_link: "https://github.com/Jeevan-Kiran-Lenka/Medblock-V1.0.0",
  },
  {
    name: "Airbnb Clone",
    description:
      "Discover unique accommodations and experiences worldwide. Book homes, apartments, and more for your next adventure, all with the convenience of Airbnb.",
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
        name: "next",
        color: "pink-text-gradient",
      },
    ],
    image: airbnb,
    source_code_link: "https://github.com/Jeevan-Kiran-Lenka/Airbnb-demo",
  },
  {
    name: "Travel X",
    description:
      "A Travel Website that offers 360-degree videos showcasing famous monuments across 4 continents. Accessible on mobile, allows you to explore monuments by turning your device. VR headset support enhances the experience alongside Chatbot support for assistance and informative blog posts.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "AWS",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: travelx,
    source_code_link: "https://github.com/Jeevan-Kiran-Lenka/The-TravelX",
  },
]

export { services, technologies, experiences, testimonials, projects }
