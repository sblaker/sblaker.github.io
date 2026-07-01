// src/data/projects.ts

export type ProjectSection = {
  title: string;
  content: string | string[];
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  sections: ProjectSection[];
  technologies: string[];
  imageUrl: string;
  githubUrl?: string;
  liveDemoUrl?: string;
};

export const myProjects: Project[] = [
  {
    slug: "soc-homelab-wazuh-siem",
    title: "SOC Home Lab",
    description:
      "Un lab Blue Team realistico con Wazuh 4.9 come SIEM, regole di detection custom mappate su MITRE ATT&CK e telemetria Sysmon da VM Windows e Linux.",
    sections: [
      {
        title: "Perché l'ho costruito",
        content:
          "Volevo lavorare in un SOC ma le soluzioni SIEM enterprise costano migliaia di euro. Ho preso Wazuh (open source) e ho costruito tutto da zero: ambiente di lab, VM, regole di detection custom e simulazioni di attacco reali. Volevo capire come funziona davvero un SIEM dall'interno, non solo studiarlo in teoria.",
      },
      {
        title: "Cosa voglio dimostrare",
        content:
          "Che anche senza esperienza professionale in un SOC sono in grado di costruire e gestire un ambiente di detection realistico in autonomia, dalla configurazione del SIEM alla scrittura di regole custom fino al triage degli alert. Questo progetto collega il lavoro teorico della mia tesi sull'IDS basato su ML con la pratica operativa reale.",
      },
      {
        title: "Cosa ho imparato",
        content: [
          "Configurare e gestire un SIEM reale (Wazuh) da zero",
          "Come gli attacchi si manifestano concretamente negli alert: log, eventi Sysmon, regole di detection",
          "Scrivere regole XML custom mappate su MITRE ATT&CK",
          "La differenza tra rilevare un attacco in teoria (ML) e farlo con regole deterministiche su un SIEM",
          "Triage degli alert: identificare i veri positivi, raccogliere il contesto, documentare i risultati",
          "Telemetria endpoint con Sysmon (Event ID: process create, connessioni di rete, registry)",
          "Automatizzare il provisioning di una VM Windows (Agent + Sysmon, zero click)",
          "Simulato e documentato casi studio reali: SSH Brute Force (T1110.001), Ransomware con Shadow Copy Deletion (T1490), Mimikatz e LSASS Credential Dumping (T1003.001), osservando gli alert live sul dashboard Wazuh",
        ],
      },
    ],
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
    sections: [
      {
        title: "Perché l'ho costruito",
        content:
          "Gli attacchi zero-day sono tra le minacce più pericolose perché sconosciute ai sistemi di sicurezza tradizionali basati su firme. Ho sviluppato questo progetto come tesi magistrale per esplorare un approccio diverso: usare tecniche di Machine Learning e Deep Learning per rilevare comportamenti anomali nel traffico di rete, senza dipendere da pattern conosciuti.",
      },
      {
        title: "Cosa voglio dimostrare",
        content:
          "Che è possibile costruire un sistema di detection intelligente capace di identificare minacce mai viste prima, analizzando il comportamento del traffico di rete in tempo reale. Il progetto nasce dalla consapevolezza che i sistemi IDS tradizionali falliscono proprio davanti agli attacchi più sofisticati.",
      },
      {
        title: "Cosa ho imparato",
        content: [
          "Applicare algoritmi di ML e DL (XGBoost, reti neurali) a dataset di traffico di rete reali",
          "Costruire pipeline di analisi su grandi volumi di dati (Big Data)",
          "Valutare le performance di un sistema di detection: precision, recall, false positive rate",
          "La complessità di rilevare attacchi zero-day rispetto ad attacchi noti",
          "Come la scelta delle feature influenza drasticamente la qualità del rilevamento",
        ],
      },
    ],
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
    sections: [
      {
        title: "Perché l'ho costruito",
        content:
          "Volevo sperimentare con l'IoT e capire come integrare API esterne su un microcontrollore con risorse limitate. Il progetto nasce dalla curiosità di trasformare un piccolo display TFT in qualcosa di utile e visivamente interessante, senza cloud né abbonamenti.",
      },
      {
        title: "Cosa voglio dimostrare",
        content:
          "Che so lavorare con hardware embedded e API REST, gestendo i vincoli di memoria e connettività tipici dei dispositivi IoT. Il progetto richiede di coordinare più sorgenti di dati (NASA + OpenWeatherMap) e di aggiornare il display in modo autonomo ogni 24 ore.",
      },
      {
        title: "Cosa ho imparato",
        content: [
          "Programmazione embedded in C++ con Arduino/ESP32",
          "Integrazione di API REST su microcontrollore (NASA APOD, OpenWeatherMap)",
          "Gestione della memoria e dei timer software su dispositivi con risorse limitate",
          "Rendering di immagini e overlay di dati su display TFT",
          "Come strutturare codice IoT che gira in autonomia senza intervento umano",
        ],
      },
    ],
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
    sections: [
      {
        title: "Perché l'ho fatto",
        content:
          "Volevo testare le mie competenze in cybersecurity in un contesto competitivo e strutturato, confrontandomi con altri studenti da tutta Italia. CyberChallenge.IT è il programma di riferimento in Italia per chi vuole entrare nel mondo della sicurezza informatica.",
      },
      {
        title: "Cosa voglio dimostrare",
        content:
          "Che ho una base solida nelle discipline pratiche della cybersecurity: non solo la teoria, ma la capacità di applicarla sotto pressione e in team, su challenge reali di attacco e difesa.",
      },
      {
        title: "Cosa ho imparato",
        content: [
          "Analisi di vulnerabilità e sfruttamento di falle web (XSS, SQLi, LFI...)",
          "Reverse engineering di binari",
          "Crittografia applicata: attacchi a cifrari deboli, analisi di protocolli",
          "Problem solving rapido in contesti CTF con time pressure",
          "Collaborazione in team su challenge multi-categoria",
        ],
      },
    ],
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
