/**
 * Om Shinde — Portfolio Data Store
 * Grounded in authentic achievements, real project stories, and clear fresher positioning.
 */

export const personalInfo = {
  name: "Om Shinde",
  initials: "OS",
  badge: "B.Tech CSE · Class of 2026",
  role: "Software Developer",
  positioning: "B.Tech CSE Graduate · Software Developer · Backend Systems, ML & Web Applications",
  headline: "I build backend systems, ML pipelines & web software that solve real problems.",
  shortBio: "I'm Om Shinde, a Computer Science graduate focused on building robust Python backends, production machine learning pipelines, and responsive, high-performance web applications.",
  location: "India (Vapi / Nashik)",
  relocationStatus: "Open to Relocation & Remote",
  availabilityStatus: "Available for Software Development Roles",
  email: "omshinde3156@gmail.com",
  github: "https://github.com/omshinde3156/",
  linkedin: "https://linkedin.com/in/om-shinde",
  
  about: {
    introParagraph1: "I'm a Computer Science graduate from Sandip University, graduating in June 2026. Raised in Haria Park, Vapi (Gujarat), I developed an early fascination with mathematics and how code can automate everyday manual effort. Over the course of my degree, I focused on turning ideas into robust, production-ready software.",
    introParagraph2: "My technical expertise spans Python backend engineering (FastAPI), modern web frontends (React), and practical AI systems (Hybrid RAG, Computer Vision & Psychometrics). Across 4 industry internships, I have delivered cloud microservices on Google Cloud, accelerated computer vision inference streams, and built Shiro.ai—an adaptive cognitive assessment platform.",
    facts: [
      { label: "Education", value: "B.Tech in Computer Science & Engineering (2022–2026), Sandip University, Nashik" },
      { label: "Schooling", value: "Shri L.G. Haria School, Haria Park, Vapi (2008–2022)" },
      { label: "Location", value: "Vapi (Gujarat) & Nashik (Maharashtra) · Open to Relocation" },
      { label: "Core Stack", value: "Python, FastAPI, React, PostgreSQL, Docker, Google Cloud, Git" }
    ],
    humanElements: {
      currentlyExploring: "Distributed systems architecture, TypeScript & developer tooling",
      outsideCode: "Reading engineering blogs, open-source repositories, photography & chess"
    }
  }
};

export const featuredProjects = [
  {
    id: "shiro-ai",
    number: "01",
    title: "Shiro.ai — Adaptive Cognitive Assessment & Hybrid RAG Engine",
    tagline: "Fusing psychometric mastery modeling (BKT/CAT) with low-latency Hybrid RAG retrieval.",
    problem: "Standard educational quizzes are rigid and uniform—failing to adjust difficulty to individual student comprehension. Meanwhile, naive RAG chatbots frequently hallucinate and lack transparent performance telemetry.",
    solution: "Engineered a full-stack platform pairing Bayesian Knowledge Tracing (BKT) and Computerized Adaptive Testing (CAT) with a two-stage Hybrid RAG retrieval pipeline (ChromaDB + BM25) and automated hallucination scoring.",
    whatIBuilt: "Architected the backend with FastAPI and ChromaDB vector indexing, designed a real-time mastery tracking algorithm, and built a clean React cockpit displaying latency, faithfulness metrics, and dynamic question serving.",
    role: "Full-Stack Architecture & Systems Engineering",
    tech: ["Python", "FastAPI", "React 18", "ChromaDB", "BM25", "Redis", "Docker", "PostgreSQL"],
    metrics: [
      { label: "Context Precision", value: "94.2%" },
      { label: "Faithfulness Rate", value: "96.8%" },
      { label: "p95 Retrieval Latency", value: "174ms" }
    ],
    githubUrl: "https://github.com/omshinde3156/",
    liveUrl: "https://github.com/omshinde3156/",
    hasCaseStudy: true,
    caseStudy: {
      overview: "Shiro.ai was created as an ambitious capstone project to investigate how algorithms can personalize testing in real time while maintaining strict groundedness against verified reference materials.",
      problemDetail: "Students often coordinate preparation through fragmented notes and static multiple-choice questions. If a student understands a concept immediately, they waste time on trivial questions; if they struggle, generic explanations lead to cognitive overload. Furthermore, standard LLM-based quiz bots invent plausible-sounding false answers.",
      approach: "1. Developed a Psychometric Engine using Item Response Theory (IRT) to evaluate latent proficiency (θ) and Bayesian Knowledge Tracing (BKT) to update mastery transitions upon every response.\n2. Built a two-stage Hybrid Retrieval pipeline: dense embeddings via ChromaDB combined with sparse BM25 lexical search, reranked by a cross-encoder to eliminate retrieval noise.\n3. Designed an Observability Telemetry Cockpit tracking RAG Triad scores (Relevance, Groundedness, Faithfulness).",
      architecture: [
        { title: "Frontend Layer", desc: "React 18, Vite, CSS design tokens, dynamic proficiency charts and adaptive quiz runner." },
        { title: "API & Ingestion", desc: "FastAPI asynchronous service, Pydantic data schemas, JWT session management, background task dispatching." },
        { title: "Retrieval & Vector Cache", desc: "ChromaDB vector store + BM25 ranking, backed by Redis caching to prevent redundant query embedding." },
        { title: "Observability", desc: "Automated benchmarking telemetry evaluating context precision, recall, and hallucination suppression." }
      ],
      challenges: "High latency during two-stage dense + sparse reranking, which initially pushed query response times above 600ms. Solved by introducing Redis caching for frequent semantic subqueries and vectorizing candidate pools, bringing p95 latency down to 174ms.",
      whatILearned: "Deepened practical intuition for vector database indexing trade-offs, probabilistic state models, and writing maintainable asynchronous backend code under strict latency constraints."
    }
  },
  {
    id: "gcp-genai-pipeline",
    number: "02",
    title: "Enterprise GenAI Knowledge Orchestrator",
    tagline: "Cloud-native document intelligence and semantic search on Google Cloud Platform.",
    problem: "Enterprise documentation across diverse PDFs and docs created fragmented silos, requiring staff to spend hours manually searching for technical specifications.",
    solution: "Built a cloud-native pipeline using Google Cloud Vertex AI embeddings and vector indexing to orchestrate document chunking, automated semantic search, and contextual response generation.",
    whatIBuilt: "Constructed the ingestion microservice with FastAPI on Google Cloud Run, integrated vector search endpoints, and implemented an automated evaluation harness to verify answer precision against source docs.",
    role: "Cloud & Backend Intern (SmartBridge)",
    tech: ["Python", "Google Cloud Platform", "Vertex AI", "FastAPI", "Docker", "Cloud Run"],
    metrics: [
      { label: "Cycle Time Reduction", value: "-20%" },
      { label: "Answer Accuracy", value: ">92%" }
    ],
    githubUrl: "https://github.com/omshinde3156/",
    liveUrl: "https://github.com/omshinde3156/",
    hasCaseStudy: false
  },
  {
    id: "cv-telemetry-engine",
    number: "03",
    title: "Real-Time Computer Vision Inference Engine",
    tagline: "High-performance video stream processing pipeline with optimized vectorized operations.",
    problem: "Processing high-framerate camera streams on edge hardware frequently suffered from frame-dropping, memory leaks, and CPU-to-GPU memory transfer bottlenecks.",
    solution: "Engineered an image processing pipeline utilizing OpenCV, PyTorch models, and vectorized NumPy array operations exposed via an asynchronous REST API.",
    whatIBuilt: "Implemented multi-threaded frame acquisition, optimized image tensor pre-processing, and benchmarked inference latency across varying video resolutions.",
    role: "ML / CV Intern (Coincent)",
    tech: ["Python", "OpenCV", "PyTorch", "NumPy", "REST API", "Docker"],
    metrics: [
      { label: "Processing Framerate", value: "30+ FPS" },
      { label: "Inference Latency", value: "<40ms" }
    ],
    githubUrl: "https://github.com/omshinde3156/",
    liveUrl: "https://github.com/omshinde3156/",
    hasCaseStudy: false
  }
];

export const otherBuilds = [
  {
    title: "Scalable Distributed API & Persistence Layer",
    description: "Production-ready backend architecture built with FastAPI, PostgreSQL relational modeling, Redis caching, and connection pooling. Containerized with Docker.",
    highlight: "Containerized deployment engineered for 2,500+ simulated req/s with zero dropped connections.",
    tech: ["FastAPI", "PostgreSQL", "SQLAlchemy", "Redis", "Docker"],
    githubUrl: "https://github.com/omshinde3156/"
  },
  {
    title: "NASA Space Apps: Planetary Telemetry Visualizer",
    description: "Interactive visualization dashboard parsing satellite telemetry datasets into accessible planetary maps, built for the NASA International Space Apps Challenge.",
    highlight: "Recognized with NASA Galactic Problem Solver global hackathon credential.",
    tech: ["React", "JavaScript", "NASA APIs", "CSS Tokens"],
    githubUrl: "https://github.com/omshinde3156/"
  }
];

export const skillsData = [
  {
    category: "Languages",
    skills: ["Python", "JavaScript (ES6+)", "TypeScript", "Java", "SQL", "HTML5 & CSS3"]
  },
  {
    category: "Backend & Systems",
    skills: ["FastAPI", "Node.js", "Express", "RESTful API Design", "Relational Database Modeling", "Pydantic"]
  },
  {
    category: "Frontend",
    skills: ["React 18", "Modern Hooks & Context", "Vite", "Component Architecture", "Responsive Design"]
  },
  {
    category: "Databases & Storage",
    skills: ["PostgreSQL", "MongoDB", "Redis (In-Memory Cache)", "ChromaDB (Vector Store)"]
  },
  {
    category: "Cloud, Tools & Practices",
    skills: ["Git & GitHub Workflows", "Docker & Containerization", "Google Cloud Platform (GCP)", "Linux / Bash", "VS Code", "CI/CD Foundations"]
  }
];

export const internships = [
  {
    role: "Google Cloud Generative AI Intern",
    company: "SmartBridge",
    period: "May 2024 — July 2024",
    type: "Industry Internship",
    points: [
      "Engineered Generative AI workflows and prompt pipelines utilizing Google Cloud Platform and Vertex AI.",
      "Integrated vector embeddings and semantic search to augment answer relevance against technical documentation.",
      "Hands-on development with Cloud Run containerized services and cloud monitoring."
    ]
  },
  {
    role: "Machine Learning & Computer Vision Intern",
    company: "Coincent",
    period: "Jan 2024 — Mar 2024",
    type: "Industry Internship",
    points: [
      "Built real-time image processing and computer vision pipelines in Python utilizing OpenCV and PyTorch.",
      "Optimized dataset preprocessing and feature extraction algorithms, speeding up evaluation pipelines by 20%.",
      "Collaborated on containerized REST inference endpoints for streaming video feeds."
    ]
  },
  {
    role: "IT & Systems Engineering Intern",
    company: "hubergroup",
    period: "2023",
    type: "Industry Internship",
    points: [
      "Assisted enterprise IT infrastructure operations, database maintenance, and network configuration.",
      "Wrote automation scripts for server health checks and routine administrative maintenance.",
      "Direct exposure to enterprise compliance, data security, and hardware/software setup."
    ]
  },
  {
    role: "AI & Cloud Intern",
    company: "Edunet Foundation",
    period: "2023",
    type: "Industry Internship",
    points: [
      "Implemented supervised learning classification pipelines and data visualization workflows.",
      "Explored scalable cloud architecture fundamentals and deployed containerized machine learning demos."
    ]
  }
];

export const educationList = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Sandip University, Nashik",
    period: "2022 — 2026",
    status: "Graduating June 2026",
    details: "Core Coursework: Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems (DBMS), Operating Systems, Computer Networks, and Artificial Intelligence."
  },
  {
    degree: "Primary, Secondary & Senior Secondary Schooling (Class XII)",
    institution: "Shri L.G. Haria School, Haria Park, Vapi (Gujarat)",
    period: "2008 — 2022",
    status: "Completed",
    details: "Formative academic education in Science & Mathematics with strong foundation in problem-solving and computer fundamentals."
  }
];

export const certifications = [
  {
    title: "Google Cloud Arcade Legend (Cohort 2, 2025)",
    issuer: "Google Cloud Skills Boost",
    badge: "Arcade Legend Tier",
    desc: "Achieved the highest Arcade Legend milestone in Cohort 2 (2025), completing dozens of hands-on architecture labs covering Vertex AI, Cloud Run microservices, Kubernetes, and enterprise IAM."
  },
  {
    title: "NASA Space Apps Challenge — Galactic Problem Solver",
    issuer: "NASA International Space Apps",
    badge: "Global Honor",
    desc: "Earned global Galactic Problem Solver recognition for engineering innovative planetary telemetry analysis platforms."
  },
  {
    title: "Generative AI Certified Specialist",
    issuer: "SmartBridge & Google Cloud",
    badge: "Specialist",
    desc: "Comprehensive certification covering Vertex AI, prompt design, foundation models, and vector search integrations."
  },
  {
    title: "Oracle Cloud Infrastructure (OCI) Certified",
    issuer: "Oracle University",
    badge: "Certified",
    desc: "Credentialed in cloud infrastructure fundamentals, compute instances, virtual cloud networks, and storage management."
  }
];
