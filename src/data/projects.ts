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
    slug: "soc-homelab-wazuh-siem",
    title: "SOC Home Lab — Wazuh SIEM",
    description:
      "Un lab Blue Team realistico con Wazuh 4.9 come SIEM, regole di detection custom mappate su MITRE ATT&CK e telemetria Sysmon da VM Windows e Linux.",
    fullDescription:
      "Perché l'ho costruito:\nVolevo lavorare in un SOC ma le soluzioni SIEM enterprise costano migliaia di euro. Ho preso Wazuh — open source — e ho costruito tutto da zero: ambiente di lab, VM, regole di detection custom e simulazioni di attacco reali. Volevo capire come funziona davvero un SIEM dall'interno, non solo studiarlo in teoria.\n\nCosa voglio dimostrare:\nChe anche senza esperienza professionale in un SOC sono in grado di costruire e gestire un ambiente di detection realistico in autonomia — dalla configurazione del SIEM alla scrittura di regole custom fino al triage degli alert. Questo progetto collega il lavoro teorico della mia tesi sull'IDS basato su ML con la pratica operativa reale.\n\nCosa ho imparato:\n• Configurare e gestire un SIEM reale (Wazuh) da zero\n• Come gli attacchi si manifestano concretamente negli alert — log, eventi Sysmon, regole di detection\n• Scrivere regole XML custom mappate su MITRE ATT&CK\n• La differenza tra rilevare un attacco in teoria (ML) e farlo con regole deterministiche su un SIEM\n• Triage degli alert: identificare i veri positivi, raccogliere il contesto, documentare i risultati\n• Telemetria endpoint con Sysmon (Event ID: process create, connessioni di rete, registry)\n• Automatizzare il provisioning di una VM Windows (Agent + Sysmon, zero click)\n• Simulato e documentato casi studio reali: SSH Brute Force (T1110.001), Ransomware con Shadow Copy Deletion (T1490), Mimikatz e LSASS Credential Dumping (T1003.001) — osservando gli alert live sul dashboard Wazuh",
    technologies: [
      "Wazuh SIEM",
      "Docker",
      "Sysmon",
      "MITRE ATT&CK",
      "Windows 10",
      "Ubuntu",
      "Atomic Red Team",
      "Detection Engineering",
      "Blue Team",
    ],
    imageUrl: "/images/projects/soc-homelab.png",
    githubUrl: "https://github.com/sblaker/soc-homelab",
  },
  {
    slug: "ids-oriented-to-detect-zero-day-attacks",
    title: "IDS per il Rilevamento di Attacchi Zero-Day",
    description:
      "Il mio progetto di tesi: un IDS basato su Machine Learning e Deep Learning per rilevare minacce sconosciute e attacchi zero-day.",
    fullDescription:
      "Perché l'ho costruito:\nGli attacchi zero-day sono tra le minacce più pericolose perché sconosciute ai sistemi di sicurezza tradizionali basati su firme. Ho sviluppato questo progetto come tesi magistrale per esplorare un approccio diverso: usare tecniche di Machine Learning e Deep Learning per rilevare comportamenti anomali nel traffico di rete, senza dipendere da pattern conosciuti.\n\nCosa voglio dimostrare:\nChe è possibile costruire un sistema di detection intelligente capace di identificare minacce mai viste prima, analizzando il comportamento del traffico di rete in tempo reale. Il progetto nasce dalla consapevolezza che i sistemi IDS tradizionali falliscono proprio davanti agli attacchi più sofisticati.\n\nCosa ho imparato:\n• Applicare algoritmi di ML e DL (XGBoost, reti neurali) a dataset di traffico di rete reali\n• Costruire pipeline di analisi su grandi volumi di dati (Big Data)\n• Valutare le performance di un sistema di detection: precision, recall, false positive rate\n• La complessità di rilevare attacchi zero-day rispetto ad attacchi noti\n• Come la scelta delle feature influenza drasticamente la qualità del rilevamento",
    technologies: [
      "Python",
      "Machine Learning",
      "Deep Learning",
      "Cybersecurity",
      "XGBoost",
      "Big Data",
      "Network Security",
    ],
    imageUrl: "/images/projects/ids.png",
    githubUrl: undefined,
  },
  {
    slug: "esp32-iot-digital-frame",
    title: "ESP32 IoT Digital Frame",
    description:
      "Un display intelligente basato su ESP32 che scarica ogni giorno l'immagine astronomica della NASA (APOD) e la sovrappone ai dati meteo in tempo reale.",
    fullDescription:
      "Perché l'ho costruito:\nVolevo sperimentare con l'IoT e capire come integrare API esterne su un microcontrollore con risorse limitate. Il progetto nasce dalla curiosità di trasformare un piccolo display TFT in qualcosa di utile e visivamente interessante, senza cloud né abbonamenti.\n\nCosa voglio dimostrare:\nChe so lavorare con hardware embedded e API REST, gestendo i vincoli di memoria e connettività tipici dei dispositivi IoT. Il progetto richiede di coordinare più sorgenti di dati (NASA + OpenWeatherMap) e di aggiornare il display in modo autonomo ogni 24 ore.\n\nCosa ho imparato:\n• Programmazione embedded in C++ con Arduino/ESP32\n• Integrazione di API REST su microcontrollore (NASA APOD, OpenWeatherMap)\n• Gestione della memoria e dei timer software su dispositivi con risorse limitate\n• Rendering di immagini e overlay di dati su display TFT\n• Come strutturare codice IoT che gira in autonomia senza intervento umano",
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
    githubUrl: undefined,
    liveDemoUrl: undefined,
  },
  {
    slug: "cyberchallenge-it-ctf",
    title: "CyberChallenge.IT CTF",
    description:
      "Partecipazione al principale programma italiano di formazione in cybersecurity, con gara nazionale Capture The Flag.",
    fullDescription:
      "Perché l'ho fatto:\nVolevo testare le mie competenze in cybersecurity in un contesto competitivo e strutturato, confrontandomi con altri studenti da tutta Italia. CyberChallenge.IT è il programma di riferimento in Italia per chi vuole entrare nel mondo della sicurezza informatica.\n\nCosa voglio dimostrare:\nChe ho una base solida nelle discipline pratiche della cybersecurity — non solo la teoria, ma la capacità di applicarla sotto pressione e in team, su challenge reali di attacco e difesa.\n\nCosa ho imparato:\n• Analisi di vulnerabilità e sfruttamento di falle web (XSS, SQLi, LFI...)\n• Reverse engineering di binari\n• Crittografia applicata: attacchi a cifrari deboli, analisi di protocolli\n• Problem solving rapido in contesti CTF con time pressure\n• Collaborazione in team su challenge multi-categoria",
    technologies: [
      "CTF",
      "Reverse Engineering",
      "Web Security",
      "Cryptography",
      "Linux",
      "Teamwork",
    ],
    imageUrl: "/images/projects/cyberchallenge.jpeg",
    githubUrl: undefined,
    liveDemoUrl: "https://www.cyberchallenge.it/",
  },
];
