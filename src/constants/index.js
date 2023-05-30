import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    reactjs,
    unity,
    tailwind,
    flutter,
    aws,
    java,
    flask,
    express,
    firebase,
    postgres,
    tensorflow,
    git,
    figma,
    docker,
    stevens,
    equilend,
    fidelity,
    threejs,
    begreen,
    dodgeai,
    dodgeskill,
    smcompress,
    snake,
    stockvote,
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
        id: "technologies",
        title: "Technologies",
    },
    {
        id: "projects",
        title: "Projects",
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
        title: "Flutter Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Cybersecurity Analyst",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML",
        icon: html,
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
        name: "Unity",
        icon: unity,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Express JS",
        icon: express,
    },
    {
        name: "Firebase",
        icon: firebase,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "Git",
        icon: git,
    },
    {
        name: "Figma",
        icon: figma,
    },
    {
        name: "PostgreSQL",
        icon: postgres,
    },
    {
        name: "Docker",
        icon: docker,
    },
    {
        name: "Tensorflow",
        icon: tensorflow,
    },
    {
        name: "Flutter",
        icon: flutter,
    },
    {
        name: "AWS",
        icon: aws,
    },
    {
        name: "Java",
        icon: java,
    },
    {
        name: "Flask",
        icon: flask,
    },
];

const experiences = [
    {
        title: "Full Stack Developer",
        company_name: "Stevens Student Managed Investment Fund",
        icon: stevens,
        iconBg: "#383E56",
        date: "January 2022 - May 2022",
        points: [
            "Developed a full-stack dashboard using React, Flask, Postgres, and Dash for the Student Managed Investment Fund at Stevens Institute of Technology.",
            "Implemented risk calculations, current holdings, weekly performance, and transaction history features.",
            "Collaborated with fund managers to gather requirements and deliver a user-friendly interface.",
            "Ensured system reliability through testing, debugging, and adhering to best practices.",
        ],
    },
    {
        title: "Backend Developer Intern",
        company_name: "EquiLend Holdings",
        icon: equilend,
        iconBg: "#E6DEDD",
        date: "June 2022 - August 2022",
        points: [
            "Developed a simulation tool for EquiLend Holdings, replicating 24 hours of borrowing activity and improving error prevention, benchmark testing, and scalability assessment.",
            "Designed and implemented a log analyzing tool, monitoring over 100 million daily logs to identify and address issues promptly.",
            "Utilized Java, SQL, Spring Boot, Git, WebLogic, and Oracle DB in the development and implementation of projects, ensuring efficient and reliable backend functionality.",
            "Collaborated with cross-functional teams to gather requirements, design system architecture, and deliver high-quality backend solutions.",
        ],
    },
    {
        title: "Algorithm Trading Analyst",
        company_name: "Stevens Student Managed Investment Fund",
        icon: stevens,
        iconBg: "#383E56",
        date: "Jan 2023 - December 2023",
        points: [
            "Developed and implemented a robust Continuous Mean Reversion algorithm trading strategy for the Student Managed Investment Fund at Stevens Institute of Technology.",
            "Conducted thorough research and analysis to identify optimal trading opportunities and enhance the fund's performance.",
            "Utilized quantitative analysis techniques and statistical models to identify market inefficiencies and generate profitable trades.",
            "Collaborated with the investment team to backtest and refine the algorithm, ensuring its effectiveness and alignment with the fund's objectives.",
        ],
    },
    {
        title: "Mobile Developer Intern",
        company_name: "Fidelity Investments",
        icon: fidelity,
        iconBg: "#E6DEDD",
        date: "June 2023 - August 2024",
        points: [
            "Upcoming mobile development internship at Fidelity Investments, where I will contribute to mobile app development projects under the guidance of industry professionals.",
        ],
    },
];

const projects = [
    {
        name: "Dodge AI",
        description:
            "A real-time web application where a machine learning model navigates and evades enemies on an HTML canvas, providing an engaging and interactive experience.",
        tags: [
            {
                name: "python",
                color: "blue-text-gradient",
            },
            {
                name: "typescript",
                color: "green-text-gradient",
            },
            {
                name: "html",
                color: "pink-text-gradient",
            },
        ],
        image: dodgeai,
        link: "https://dodgeai.vercel.app/",
    },
    {
        name: "StockVote",
        description:
            "A dynamic web application that combines the features of Stocktwits and Stack Overflow, enabling users to create, interact with, and vote on stock price predictions through posts.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "tailwindcss",
                color: "green-text-gradient",
            },
            {
                name: "flask",
                color: "pink-text-gradient",
            },
        ],
        image: stockvote,
        link: "https://stockvote.herokuapp.com/",
    },
    {
        name: "Dodge Skill",
        description:
            "An engaging iOS app that tests players' skills as they navigate through levels, dodge enemies, and strive for high scores.",
        tags: [
            {
                name: "unity",
                color: "blue-text-gradient",
            },
            {
                name: "c-sharp",
                color: "green-text-gradient",
            },
        ],
        image: dodgeskill,
        link: "https://apps.apple.com/us/app/dodge-skill/id1608951490",
    },
    {
        name: "Social Media Compress",
        description:
            "An iOS app that generates a single QR code for users to share all their social media profiles, enabling others to choose which platforms to connect on.",
        tags: [
            {
                name: "swift",
                color: "blue-text-gradient",
            },
        ],
        image: smcompress,
        link: "https://apps.apple.com/us/app/sm-compress/id1604088649",
    },
    {
        name: "Snake",
        description:
            "A captivating browser game that offers a unique twist on the classic snake game, incorporating 360-degree movement, special powers, obstacles, and a timed gameplay experience.",
        tags: [
            {
                name: "html",
                color: "blue-text-gradient",
            },
            {
                name: "css",
                color: "green-text-gradient",
            },
            {
                name: "javascript",
                color: "pink-text-gradient",
            },
        ],
        image: snake,
        link: "https://joykhera.github.io/snake/",
    },
    {
        name: "Be Green",
        description:
            "A website that encourages users to actively participate in solving environmental issues and fostering a greener planet by presenting daily challenges and providing a chat where users can share their achievements and eco-friendly actions with the community.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "firebase",
                color: "green-text-gradient",
            },
            {
                name: "tailwindcss",
                color: "pink-text-gradient",
            },
        ],
        image: begreen,
        link: "https://be-green.vercel.app/",
    },
];

export { services, technologies, experiences, projects };