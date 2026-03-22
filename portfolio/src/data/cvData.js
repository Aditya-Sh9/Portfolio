import { Github, Linkedin, Mail, Smartphone, ExternalLink, Calendar, MapPin, Building, GraduationCap, Code2, Globe, Database, Terminal } from "lucide-react";

export const CV_DATA = {
    personal: {
        name: "Aditya Sharma",
        role: "Web Developer",
        email: "adityasharma0442@gmail.com",
        phone: "+91-7851818920",
        objective: "Specializing in modern web development to craft fast, responsive, and visually striking digital experiences. Focused on scalable frontend architectures, flawless UI/UX implementation, and robust backend integrations.",
        socials: [
            { name: "LinkedIn", url: "https://linkedin.com/in/AdityaSharma1060", icon: "Linkedin" },
            { name: "GitHub", url: "https://github.com/Aditya-Sh9", icon: "Github" }
        ]
    },
    skills: [
        { category: "Languages", items: ["C/C++", "JavaScript", "TypeScript"] },
        { category: "Frameworks & Libraries", items: ["ReactJS", "NodeJS", "Express", "HTML", "CSS", "Bootstrap", "TailwindCSS", "PHP"] },
        { category: "Tools & Platforms", items: ["MySQL", "MongoDB", "Git", "GitHub", "Postman", "Vercel"] },
        { category: "Core CS Fundamentals", items: ["DBMS", "OS", "CN", "SQL", "OOPs"] },
        { category: "Soft Skills", items: ["Time Management", "Leadership", "Problem-Solving", "Adaptability", "Quick Learner"] }
    ],
    education: [
        {
            institution: "Lovely Professional University",
            location: "Punjab, India",
            degree: "Bachelor of Technology - Computer Science and Engineering",
            score: "CGPA: 7.61",
            duration: "Aug '23 - Present"
        },
        {
            institution: "Vivekananda Kendra Vidyalaya",
            location: "Bhilwara, Rajasthan",
            degree: "Intermediate",
            score: "Percentage: 73.8%",
            duration: "Jun '21 – Apr '22"
        },
        {
            institution: "Vivekananda Kendra Vidyalaya",
            location: "Bhilwara, Rajasthan",
            degree: "Matriculation",
            score: "Percentage: 78.8%",
            duration: "Jun '19 - Apr '20"
        }
    ],
    projects: [
        {
            title: "Pulse – Task Management Web App",
            date: "Feb '26 – Mar '26",
            image: "/pulse.png",
            github: "https://github.com/Aditya-Sh9/Pulse",
            description: [
                "Developed a full-stack task management platform with role-based access control (Admin, Member) to ensure secure and structured workflow management.",
                "Implemented real-time updates using Socket.io, enabling instant synchronization of tasks across multiple users without page refresh.",
                "Designed an interactive Kanban-style task board with drag-and-drop functionality and multiple views (Board, List, Table, Calendar) for flexible task tracking.",
                "Integrated Firebase authentication, email notifications (Nodemailer), and dynamic UI components for a responsive and seamless user experience."
            ],
            techStack: ["React", "Vite", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Firebase", "Socket.io"]
        },
        {
            title: "Dental Clinic – Practice Management Website",
            date: "Feb '25 – Apr '25",
            image: "/dental.png",
            github: "https://github.com/Aditya-Sh9/Dental-Clinic",
            description: [
                "Engineered a complete clinic management system with modules for patients, appointments, doctors, insurance, claims, recalls, treatment plans, and X-ray record handling.",
                "Built secure authentication, dashboard navigation, and complete CRUD workflows for 20+ data entities via PHP and MySQL.",
                "Added appointment requests, email notifications, form validations, and admin review features to streamline clinic workflow."
            ],
            techStack: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"]
        },
        {
            title: "tripWiz – Hotel Chatbot",
            date: "Jan '25 – Apr '25",
            image: "/tripwiz.png",
            github: "https://github.com/Aditya-Sh9/tripWiz",
            description: [
                "Created a Python-based travel assistant that fetches hotels, attractions, dining options, and local activities using Google Maps & Places API, providing users with quick, accurate, and location-aware travel suggestions.",
                "Integrated real-time weather data, map view, and city-based search handling to generate location-aware travel insights.",
                "Enhanced UX through custom-styled components, voice search integration, and dynamic card-based UI using JavaScript."
            ],
            techStack: ["Python", "JavaScript", "Google APIs", "OpenWeather"]
        },
        {
            title: "Carevo – Job Portal",
            date: "Jan '25 – Feb '25",
            github: "https://github.com/Aditya-Sh9/Carevo",
            description: [
                "Worked on a full-featured MERN-based job portal supporting student & recruiter accounts, role-based login, job search, and personalized application tracking across multiple cities.",
                "Implemented filtering, location-based search, and responsive UI sections covering job listings, user dashboards, team pages, and authentication screens.",
                "Connected the frontend with backend APIs to allow users to browse opportunities, apply for roles, and view their submitted applications smoothly."
            ],
            techStack: ["MongoDB", "ExpressJS", "ReactJS", "NodeJS"]
        }
    ],
    training: [
        {
            title: "Board Infinity – JavaScript",
            date: "Jun '25 – Jul '25",
            description: [
                "Developed a lightweight browser-based music player with essential features including play/pause, next/previous track control, volume adjustment, and seek-bar based audio navigation.",
                "Designed a glowing animated background and dynamic UI elements for a visually engaging experience.",
                "Applied clean UI interactions using JavaScript event handling and optimized DOM updates for smooth playback.",
                "Strengthened core JavaScript skills by building multiple interactive components and gaining hands-on experience with DOM manipulation, event handling, and responsive UI behaviors."
            ],
            techStack: ["HTML", "CSS", "JavaScript"]
        }
    ],
    certificates: [
        { title: "Master Generative AI", issuer: "Udemy", date: "Aug '25" },
        { title: "Java Script Web Development", issuer: "Board Infinity", date: "Jul '25" },
        { title: "Privacy and Security in Online Social Media", issuer: "NPTEL IIIT Hyderabad", date: "Apr '25" }
    ],
    extracurricular: [
        {
            title: "Tech Mentor Volunteer",
            date: "Jul '24",
            description: "Volunteered as a tech mentor, teaching under-privileged children computer skills and introductory coding concepts during a 2-week NGO program."
        },
        {
            title: "NGO Community Development Camp",
            date: "Jun '24",
            description: "Participated in an NGO community development camp supporting women & youth empowerment through creative and skill-building activities."
        }
    ]
};
