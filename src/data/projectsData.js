export const projectsData = [
  {
    id: "cloudvpn",
    title: "CloudVPN+",
    repoName: "CloudVPN-WorkSpace",
    tagline: "Privacy-first, zero-trust cross-platform VPN client controller & server system.",
    category: "Systems & Networking",
    priority: 1,
    featured: true,
    githubUrl: "https://github.com/roshan-yadav-dev/CloudVPN-WorkSpace",
    liveUrl: null,
    techStack: [
      "Python", "FastAPI", "WireGuard", "Tor Architecture", "Traffic Routing", 
      "Linux Systems", "Flutter", "Docker", "MongoDB"
    ],
    problem: "Traditional VPN solutions often rely on monolithic client architectures that expose low-level security tokens, leak DNS metadata, and lack multi-hop relay fallback.",
    solution: "Built a zero-trust decoupled architecture where a Flutter client controller interfaces strictly via authenticated FastAPI microservices to handle WireGuard state management and Tor circuit routing without direct database or daemon exposure.",
    highlights: [
      "Designed zero-trust client controller layer running on Android and Linux Fedora environments.",
      "Engineered automated WireGuard peer provisioning with key exchange and connection state polling.",
      "Integrated Tor routing circuit orchestration for multi-hop anonymity and secure network isolation.",
      "Containerized microservices using Docker Compose with automated health probes and fallback routing."
    ],
    architecture: [
      { step: "01", name: "Client Layer", desc: "Flutter UI / Controller (Android & Fedora Linux)" },
      { step: "02", name: "API Gateway", desc: "FastAPI REST Server (JWT Auth & Session Validation)" },
      { step: "03", name: "Tunnel Engine", desc: "WireGuard Kernel Interface & UAPI Controller" },
      { step: "04", name: "Tor Relay", desc: "Anonymized Circuit Routing & DNS Leak Prevention" },
      { step: "05", name: "State Storage", desc: "MongoDB Atlas for Encrypted Peer Metadata" }
    ]
  },
  {
    id: "offerjob",
    title: "OfferJob",
    repoName: "OfferJob",
    tagline: "AI-powered recruitment platform featuring NLP semantic job matching and RAG pipelines.",
    category: "AI & Full-Stack",
    priority: 2,
    featured: true,
    githubUrl: "https://github.com/roshan-yadav-dev/OfferJob",
    liveUrl: null,
    techStack: [
      "Node.js", "Express", "Python", "FastAPI", "React", "NLP", 
      "RAG Pipeline", "MongoDB", "Microservices", "JWT Auth"
    ],
    problem: "Legacy applicant tracking systems rely on simple keyword filtering, missing qualified candidates with different phrasing or contextually relevant experience.",
    solution: "Developed a microservices-based recruitment system pairing a Node.js orchestration backend with a stateless Python FastAPI AI service executing RAG and semantic vector similarity scoring.",
    highlights: [
      "Architected dual-service backend: Express.js for business logic/data persistence and FastAPI for AI inference.",
      "Built Retrieval-Augmented Generation (RAG) pipeline to parse resumes and compute context-aware match scores.",
      "Implemented Role-Based Access Control (RBAC) separating Candidate and Recruiter workflow portals.",
      "Designed clean RESTful APIs with resilient cross-service retries and fallback error handling."
    ],
    architecture: [
      { step: "01", name: "Frontend", desc: "React Single-Page Application (Candidate & Recruiter Portals)" },
      { step: "02", name: "Node.js Core", desc: "Express Orchestrator Backend & RBAC Middleware" },
      { step: "03", name: "Database", desc: "MongoDB for Users, Jobs, and Application States" },
      { step: "04", name: "AI Service", desc: "Stateless FastAPI Engine (NLP Embeddings & RAG)" },
      { step: "05", name: "Matching Engine", desc: "Contextual Candidate-to-Job Similarity Scoring" }
    ]
  },
  {
    id: "galleryapp",
    title: "GalleryApp",
    repoName: "GalleryApp",
    tagline: "Production-grade Android media application built with Kotlin, Jetpack Compose, and Clean Architecture.",
    category: "Android Architecture",
    priority: 3,
    featured: true,
    githubUrl: "https://github.com/roshan-yadav-dev/GalleryApp",
    liveUrl: null,
    techStack: [
      "Kotlin", "Jetpack Compose", "Material 3", "Clean Architecture", 
      "MVVM Pattern", "Scoped Storage", "Coroutines", "StateFlow"
    ],
    problem: "Managing high-resolution media grids on Android often leads to UI thread stutter, high memory footprint, and storage permission compliance failures.",
    solution: "Engineered a high-performance gallery app enforcing Clean Architecture (Data, Domain, Presentation) with Kotlin Coroutines and full Android Scoped Storage compliance.",
    highlights: [
      "Built modular architecture isolating business logic in Domain Use Cases from UI Presentation.",
      "Full compliance with Android Scoped Storage standards (MinSDK 26, TargetSDK 35).",
      "Asynchronous image and GIF thumbnail rendering using Jetpack Compose and stateful flows.",
      "Automated CI/CD workflow configured with GitHub Actions for Android builds and linting."
    ],
    architecture: [
      { step: "01", name: "UI Layer", desc: "Jetpack Compose Screens & Material 3 Visual Components" },
      { step: "02", name: "State Layer", desc: "MVVM ViewModel with Kotlin StateFlow & SharedFlow" },
      { step: "03", name: "Domain Layer", desc: "Business Use Cases (Media Operations & Query Filters)" },
      { step: "04", name: "Data Repository", desc: "ContentResolver Adapter with Android Scoped Storage" }
    ]
  },
  {
    id: "api-workspace",
    title: "API Workspace",
    repoName: "API-Workspace",
    tagline: "Full-stack API testing platform with request history, custom headers, and JWT security.",
    category: "API & Backend",
    priority: 4,
    featured: true,
    githubUrl: "https://github.com/roshan-yadav-dev/API-Workspace",
    liveUrl: null,
    techStack: [
      "React", "FastAPI", "Python", "JWT Auth", "REST APIs", 
      "Uvicorn", "JSON Persistence", "CSS Modules"
    ],
    problem: "Developers frequently require a lightweight, zero-bloat platform for executing multi-method API tests with token authentication and history logging.",
    solution: "Created an end-to-end API workspace with React UI and FastAPI backend, allowing developers to execute GET/POST/PUT/PATCH/DELETE requests, inspect responses, and manage auth collections.",
    highlights: [
      "Full HTTP method support with live response code, execution time, and payload size tracking.",
      "Secure JWT user registration, login, and bearer token protection on workspace routes.",
      "Local JSON persistence module for user accounts, collections, and execution history.",
      "Clean modular code structure separating backend routes, models, and service controllers."
    ],
    architecture: [
      { step: "01", name: "Client UI", desc: "React Workspace Dashboard & Request Builder" },
      { step: "02", name: "Auth Layer", desc: "FastAPI JWT Bearer Token Security Middleware" },
      { step: "03", name: "Dispatcher", desc: "Python HTTP Client Proxy & Response Analytics" },
      { step: "04", name: "Storage", desc: "JSON Data Store for Workspaces & History" }
    ]
  },
  {
    id: "smart-expense-tracker",
    title: "Smart Expense Tracker",
    repoName: "Smart-Expense-Tracker",
    tagline: "Flask backend application for daily expense management, category analytics, and CSV exports.",
    category: "Full-Stack & APIs",
    priority: 5,
    featured: true,
    githubUrl: "https://github.com/roshan-yadav-dev/Smart-Expense-Tracker",
    liveUrl: null,
    techStack: [
      "Python", "Flask", "HTML5", "CSS3", "REST APIs", 
      "Data Visualization", "CSV Export"
    ],
    problem: "Manual financial tracking lacks instant category breakdowns and simple data export capabilities for personal budgeting.",
    solution: "Designed a responsive Flask web application that categorizes spending, computes real-time summary statistics via REST endpoints, and exports CSV reports.",
    highlights: [
      "Built Flask API endpoint (/api/category_summary) delivering dynamic JSON analytics.",
      "Implemented automated CSV report generation for instant data downloads.",
      "Created sortable transaction ledger with category filter capabilities.",
      "Responsive lightweight layout optimized for quick mobile and desktop logging."
    ],
    architecture: [
      { step: "01", name: "Web Interface", desc: "HTML5 / CSS3 Dashboard for Data Entry & Viewing" },
      { step: "02", name: "Flask Routes", desc: "App Routing Engine & Request Handlers" },
      { step: "03", name: "Analytics Engine", desc: "Category Aggregations & Summary Calculations" },
      { step: "04", name: "Export Engine", desc: "CSV Generation & Download Handler" }
    ]
  }
];
