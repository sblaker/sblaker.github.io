// src/data/projects.ts

// Defines the structure for each project object
export type Project = {
  slug: string;
  title: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  imageUrl: string;
  githubUrl?: string;
  liveDemoUrl?: string;
};

// The array containing all your project data
export const myProjects: Project[] = [
  {
    slug: "ids-oriented-to-detect-zero-day-attacks",
    title: "IDS for Zero-Day Attack Detection",
    description:
      "My thesis project on creating an IDS using Machine Learning to detect unknown threats.",
    fullDescription:
      "This project aims to develop an advanced Intrusion Detection System (IDS) capable of identifying zero-day attacks—unknown and uncatalogued threats. Using machine learning and behavioral analysis techniques, the IDS monitors network traffic in real-time to detect anomalies and suspicious patterns. This approach enhances the security of IT infrastructures by anticipating attacker strategies. The system is designed to be scalable and easily integrable into enterprise environments.",
    technologies: [
      "Python",
      "Machine Learning",
      "Cybersecurity",
      "XGBoost",
      "Big Data",
      "Network Security",
    ],
    imageUrl: "/images/projects/ids.png",
    githubUrl: "#", // ACTION: Replace with your actual repo link
  },
  {
    slug: "esp32-iot-digital-frame",
    title: "ESP32 IoT Digital Frame",
    description: "A smart display showing NASA's APOD and live weather data.",
    fullDescription:
      "This project transforms an ESP32 (or ESP8266) and a TFT display into an elegant IoT digital frame. Each day, the device automatically downloads and displays the latest Astronomy Picture of the Day (APOD) from NASA's APIs. After displaying the image, it enriches the view by overlaying real-time weather data for a specific location, like Palermo. The final code uses an always-on software timer to ensure the display remains active and updates automatically every 24 hours.",
    technologies: [
      "ESP32",
      "Arduino",
      "C++",
      "IoT",
      "API Integration",
      "OpenWeatherMap",
      "NASA API",
    ],
    imageUrl: "/images/projects/cyd.jpg",
    githubUrl: "https://github.com/sblaker/sblaker.github.io",
    liveDemoUrl: "https://sblaker.github.io/",
  },
  {
    slug: "cyberchallenge-it-ctf",
    title: "CyberChallenge.IT CTF",
    description:
      "Participation in the national cybersecurity training program and CTF competition.",
    fullDescription:
      "I participated in CyberChallenge.IT, the main Italian cybersecurity training program for students, culminating in a national Capture The Flag (CTF) competition. During the program, I tackled practical security challenges involving vulnerability analysis, cryptography, reverse engineering, and web attacks. This experience improved my technical skills, my ability to collaborate in a team, and allowed me to compete with top talent from across the country.",
    technologies: [
      "CTF",
      "Reverse Engineering",
      "Web Security",
      "Cryptography",
      "Linux",
      "Teamwork",
    ],
    imageUrl: "/images/projects/cyberchallenge.jpeg",
    githubUrl: "#", // Use "#" or undefined if there is no repository
    liveDemoUrl: "https://www.cyberchallenge.it/",
  },
];
