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
    angular,
    git,
    figma,
    docker,
    stevens,
    equilend,
    fidelity,
    threejs,
    roadtrip,
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
        title: "Mobile Developer",
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
    {
        name: "Angular",
        icon: angular,
    },
];

const experiences = [
    {
        title: "Mobile Developer Intern",
        company_name: "Fidelity Investments",
        icon: fidelity,
        iconBg: "#E6DEDD",
        date: "June 2023 - August 2023",
        points: [
            "Worked in a 14-member team to develop goal-setting and advisor-meeting features, impacting over 1 million monthly users on mobile and web platforms.",
            "Played a key role in improving the financial planning experience, focusing on user interface and performance upgrades.",
            "Integrated advanced technologies like Angular, TypeScript, Git, Redux, and REST API to enhance product functionality.",
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
        name: "Roadtrip Planner",
        description:
            "A website that assists users in discovering popular destinations along their travel route, offering tailored suggestions for restaurants, parks, and other attractions based on user preferences and location.",
        tags: [
            {
                name: "svelte",
                color: "blue-text-gradient",
            },
            {
                name: "typescript",
                color: "green-text-gradient",
            },
            {
                name: "tailwindcss",
                color: "pink-text-gradient",
            },
        ],
        image: roadtrip,
        link: "https://roadtrip-drab.vercel.app/",
    },
];

export { services, technologies, experiences, projects };