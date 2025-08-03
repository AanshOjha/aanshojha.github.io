// Portfolio data - customize this with your actual information
export const personalInfo = {
  name: "Aansh Ojha",
  title: "Software Developer",
  email: "aanshojha185@gmail.com",
  linkedIn: "https://linkedin.com/in/aansh-ojha",
  github: "https://github.com/AanshOjha",
  website: "https://aanshojha.github.io/portfolio"
};

export const about = {
  summary: "Software developer with expertise in modern web technologies and a strong foundation in computer science. Dedicated to creating efficient, scalable solutions and continuously learning new technologies.",
  highlights: [
    'Proficient in languages like Java and Python for designing and implementing scalable backend systems and APIs.',
    'Experienced with DevOps technologies like Kubernetes and Docker on cloud platforms including AWS and Microsoft Azure.',
    'Developed and integrated Large Language Models (LLMs) to create advanced features like chat widgets and dynamic HTML generation.',
    'Architected full-stack applications using microservices and AWS cloud-native architectures , including a photo management platform and an automated billing system.'
  ]
};

export const experience = [
  {
    title: "AI Backend Developer",
    company: "SmartCard AI",
    location: "Remote",
    duration: "Nov 2024 - May 2025",
    description: [
        "Integrated Large Language Models (LLMs) for advanced features like chat widgets and dynamic HTML generation. Worked closely with cross-functional teams for the development of an intent recognition module.",
        "Designed and implemented robust backend systems in Python, including building and testing APIs for database connections, file management, and API integrations."
    ],
    technologies: ["Flask", "Python", "MySQL", "Gemini"]
  }
];

export const education = [
  {
    degree: "Bachelor of Technology (B.Tech) in Computer Science and Engineering",
    school: "Dr. APJ Abdul Kalam Technical University",
    duration: "2023 - 2027",
    gpa: "8.1"
  }
];

export const skills = {
  "Programming Languages": ["Python", "Java", "C", "JavaScript", "Bash", "SQL"],
  "DevOps Technologies": ["Kubernetes", "Docker", "Git", "CI/CD", "Terraform (learning)"],
  "Cloud Platforms": ["AWS", "Microsoft Azure"],
  "Other": ["Data Structures & Algorithms", "Flask", "MySQL", "OOPs"],
  "Soft Skills": ["Problem Solving", "Team Collaboration", "Communication", "Project Management"]
};

export const projects = [
  {
    title: "PhotoVault: Photo Management Platform",
    description: "PhotoVault is a personal photo album application built with Flask. It enables users to securely store, organize, and manage their photos, providing a simple and intuitive interface for personal photo management.",
    technologies: ["Docker", "Python", "Flask", "MySQL", "HTML", "CSS", "JavaScript"],
    features: [
        "User Authentication: Secure login/logout system for personal accounts.",
        "Photo Upload & Management: Easy photo uploads, organization, and viewing.",
        "Responsive Design: Mobile-friendly UI for seamless access across devices.",
        "Album Organization: Ability to create and manage multiple albums for better photo categorization."
    ],
    github: "https://github.com/AanshOjha/Flask-Login-System",
    demo: "https://photvault.onrender.com",
    image: "/project1.jpg"
  },
  {
    title: "ElectroMeter: Electricity Bill Generator API",
    description: "Electricity Bill Generator API is a backend service built to calculate and manage electricity bills. It provides endpoints for generating bills based on consumption, user details, and tariff rates, enabling integration with other systems or frontends.",
    technologies: ["Java", "Spring Boot", "MySQL", "REST API", "JUnit", "Docker"],
    features: [
        "Automated Bill Calculation:** Computes electricity bills based on user input and usage data.",
        "RESTful API Endpoints:** Provides endpoints for bill generation, retrieval, and management.",
        "User & Consumption Management:** Manages user profiles and tracks electricity usage.",
        "Customizable Tariff Rates:** Supports dynamic tariff/rate configuration for flexible billing."
    ],
    github: "https://github.com/AanshOjha/Electricity-Bill-Generator-API",
    demo: "#", // Placeholder add video in the future
    image: "/project2.jpg"
  }
];

export const certifications = [
  {
    name: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    date: "2023",
    credentialId: "34AE3A90A65864B5",
    image: "static/img/AZ-900.png",
    link: "https://learn.microsoft.com/en-in/users/aanshojha/credentials/34ae3a90a65864b5"
  },
  {
    name: "Docker and Kubernetes: The Complete Guide",
    issuer: "Udemy",
    date: "2024",
    credentialId: "XXXX-XXXX-XXXX-XXXX",
    image: "static/img/Docker.png",
    link: "https://drive.google.com/file/d/1VSRrX2zmDfQW4-D-PSSy-DHIA9uo3ilz/view?usp=sharing"
  }
];
