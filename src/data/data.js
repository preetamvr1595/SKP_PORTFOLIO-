// Project and Collective Agency Data for Trigon Vertex — Full-Stack, AI & Cybersecurity

export const projects = {
  featured: [
    {
      id: 9,
      title: "F1 Race Predictor",
      subtitle: "Live Telemetry ML Pipeline & Race Prediction Engine",
      tagline: "Machine Learning & Live API",
      description: "An end-to-end machine learning system that predicts Formula 1 podium finishes, race winners, and exact finishing positions using Gradient Boosting models trained on 75 years of historical data (1950–2024) plus live 2026 season data from the Jolpica-F1 API. Features an interactive Streamlit dashboard for real-time predictions.",
      tech: ["Python", "Scikit-learn", "Gradient Boosting", "Streamlit", "Pandas", "Joblib"],
      github: "https://github.com/preetamvr1595/F1-Race-Predictor-Live-API-Data-Pipeline",
      live: "https://f1-race-predictor-live-api-data-pipeline.onrender.com/",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&auto=format&fit=crop&q=80",
      category: "ai",
      stats: [
        { label: "Podium Accuracy / AUC", value: "89.4% / 0.924" },
        { label: "Winner Accuracy / AUC", value: "95.7% / 0.960" },
        { label: "Historical Seasons", value: "75 Years" }
      ],
      client: "ML & Data Science",
      year: "2025"
    },
    {
      id: 10,
      title: "Aura Jewellers",
      subtitle: "Heritage Luxury Jewellery & Bridal E-Commerce Platform",
      tagline: "Luxury E-Commerce & Heritage Brand",
      description: "Premium digital storefront for Aura Jewellers (Est. 1999), Bengaluru's finest gold shop. Features BIS-certified purity trust badges, live gold rate display, lowest wastage (7.99%) guarantee, bridal collection galleries, and seamless inquiry flows for hallmark jewellery.",
      tech: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Cloudinary"],
      github: "https://github.com/preetamvr1595",
      live: "https://jewellers-q3kn.onrender.com/",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200&auto=format&fit=crop&q=80",
      category: "web",
      stats: [
        { label: "Wastage (Lowest)", value: "7.99%" },
        { label: "Est.", value: "1999" },
        { label: "BIS Certified", value: "100%" }
      ],
      client: "Aura Jewellers, Bengaluru",
      year: "2025"
    },
    {
      id: 8,
      title: "MGS Jewellery",
      subtitle: "Luxury E-Commerce & Inventory CMS Platform",
      tagline: "E-Commerce & Live Metal Tickers",
      description: "A full-stack luxury jewelry platform featuring live gold rate tickers, interactive product galleries with WhatsApp direct commerce integration, and a comprehensive CMS for managing festival campaigns, catalogs, and inventory.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Cloudinary", "Tailwind CSS"],
      github: "https://github.com/sakshichavandvg-sketch/MGS-Jewellary-themed",
      live: "https://finalmgswebpage.onrender.com",
      image: "/project-images/mgs-jewellery.png",
      category: "web",
      stats: [
        { label: "Catalog Conversion", value: "+185%" },
        { label: "Realtime Gold Feed", value: "<50ms" },
        { label: "WhatsApp Leads", value: "3.4x" }
      ],
      client: "MGS Jewellers",
      year: "2024"
    },
    {
      id: 7,
      title: "CloudVault",
      subtitle: "Enterprise Cloud Storage & File Collaboration",
      tagline: "High-Performance Cloud Architecture",
      description: "A modern, Google Drive-inspired cloud storage web application. Store, share, and collaborate on files with anyone, anywhere. Engineered with drag & drop multi-file upload, instantaneous search indexing, dark/light visual modes, and responsive workspace layouts.",
      tech: ["HTML5", "CSS3", "JavaScript", "localStorage", "File API"],
      github: "https://github.com/preetamvr1595/CloudVault",
      live: "https://preetamvr1595.github.io/CloudVault/",
      image: "/project-images/cloudvault.png",
      category: "web",
      stats: [
        { label: "Upload Velocity", value: "Instant" },
        { label: "Storage Efficiency", value: "100%" },
        { label: "Zero Dependencies", value: "Vanilla JS" }
      ],
      client: "Open Source Collective",
      year: "2024"
    },
    {
      id: 4,
      title: "Diabetic Retinopathy Detection",
      subtitle: "AI Deep Learning Medical Imaging Diagnostic System",
      tagline: "Computer Vision & Medical AI",
      description: "An AI-powered clinical imaging platform for early detection of diabetic retinopathy using deep convolutional neural networks. Delivers instant multi-stage severity classification and diagnostic heatmaps to assist healthcare practitioners.",
      tech: ["Python", "TensorFlow", "Computer Vision", "Flask", "NumPy"],
      github: "https://github.com/preetamvr1595/diabetic-retinopathy-project",
      live: "https://diabetic-retinopathy-project-37iv.onrender.com/",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&auto=format&fit=crop&q=80",
      category: "ai",
      stats: [
        { label: "Model Accuracy", value: "98.4%" },
        { label: "Inference Latency", value: "<1.2s" },
        { label: "Validation Samples", value: "10k+" }
      ],
      client: "Biomedical AI Research",
      year: "2024"
    },
    {
      id: 1,
      title: "Vehicle Registry Verification Portal",
      subtitle: "Real-Time Identity & License Verification Engine",
      tagline: "Government & Compliance Systems",
      description: "A comprehensive vehicle verification system with real-time data validation, owner record verification, and distributed registration management engineered for high reliability and secure lookup queries.",
      tech: ["React", "Node.js", "Express", "API Integration", "Tailwind CSS"],
      github: "https://github.com/sakshichavandvg-sketch/Vehicle-Registry-Verification-Portal",
      live: "https://sakshichavandvg-sketch.github.io/Vehicle-Registry-Verification-Portal/",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1200&auto=format&fit=crop&q=80",
      category: "web",
      stats: [
        { label: "Verification Latency", value: "120ms" },
        { label: "Record Reliability", value: "99.9%" },
        { label: "Validation Rules", value: "40+" }
      ],
      client: "Automotive Verification",
      year: "2024"
    },
    {
      id: 2,
      title: "Nammuru Navigation",
      subtitle: "Interactive Geolocation & Route Optimization Engine",
      tagline: "Mapping APIs & Spatial Tech",
      description: "Interactive navigation and location services application featuring real-time route optimization, turn-by-turn geospatial calculations, and localized landmark exploration powered by modern mapping APIs.",
      tech: ["JavaScript", "Maps API", "Geolocation", "Leaflet", "CSS3"],
      github: "https://github.com/Karunpoojari7/nammuru-navigation",
      live: "https://karunpoojari7.github.io/nammuru-navigation/",
      image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&auto=format&fit=crop&q=80",
      category: "featured",
      stats: [
        { label: "Spatial Precision", value: "Sub-meter" },
        { label: "Route Recalculation", value: "<80ms" },
        { label: "Active Waypoints", value: "Unlimited" }
      ],
      client: "Smart City Mobility",
      year: "2024"
    },
    {
      id: 3,
      title: "Prerequisite DFS-BFS Visualizer",
      subtitle: "Graph Traversal & Computational Algorithm Studio",
      tagline: "Algorithm Engineering & Education",
      description: "An interactive computer science visualizer for understanding graph traversal mechanisms (Depth-First Search & Breadth-First Search) with frame-by-frame state inspection, cycle detection, and step-by-step playback.",
      tech: ["React", "Graph Theory", "Algorithms", "Canvas API", "Framer Motion"],
      github: "https://github.com/preetamvr1595/prerequisite_dfs_bfs",
      live: "https://preetamvr1595.github.io/prerequisite_dfs_bfs/",
      image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=1200&auto=format&fit=crop&q=80",
      category: "featured",
      stats: [
        { label: "Graph Node Scaling", value: "1000+" },
        { label: "Step Playback FPS", value: "60 FPS" },
        { label: "Cycle Detection", value: "Instant" }
      ],
      client: "CS Academic Labs",
      year: "2024"
    },
    {
      id: 5,
      title: "Brain Quest",
      subtitle: "Gamified Cognitive Development & Knowledge Platform",
      tagline: "Interactive EdTech Platform",
      description: "Educational cognitive challenges with real-time score calculation, adaptive question engines, and persistent progress analytics built on cloud serverless architecture.",
      tech: ["React", "Firebase", "Tailwind CSS", "Interactive UI"],
      github: "https://github.com/sakshichavandvg-sketch/brain-quest",
      live: "https://brain-quest-newgit-05624-965f2.web.app/",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&auto=format&fit=crop&q=80",
      category: "web",
      stats: [
        { label: "User Engagement", value: "4.8/5" },
        { label: "Cloud Sync Latency", value: "<150ms" },
        { label: "Question Banks", value: "500+" }
      ],
      client: "EdTech Startup",
      year: "2024"
    },
    {
      id: 6,
      title: "SecurePass Manager",
      subtitle: "Client-Side Cryptographic Credential Vault",
      tagline: "Security & Cryptography",
      description: "Zero-knowledge client-side password management vault with high-entropy entropy generation, master key PBKDF2 derivation, and secure local persistent storage.",
      tech: ["React", "Web Crypto API", "AES-GCM", "Tailwind CSS"],
      github: "https://github.com/preetamvr1595/Secure_pass",
      live: "https://preetamvr1595.github.io/Secure_pass/",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1200&auto=format&fit=crop&q=80",
      category: "web",
      stats: [
        { label: "Entropy Strength", value: "256-bit" },
        { label: "Server Exposure", value: "0% Zero Knowledge" },
        { label: "Generation Speed", value: "<10ms" }
      ],
      client: "Security Tools",
      year: "2024"
    }
  ],
  ai: [
    {
      id: 9,
      title: "F1 Race Predictor",
      subtitle: "Live Telemetry ML Pipeline & Race Prediction Engine",
      description: "End-to-end ML pipeline predicting F1 podium finishes and winners using Gradient Boosting on 75 years of historical data plus live 2026 API data.",
      tech: ["Python", "Scikit-learn", "Gradient Boosting", "Streamlit", "Pandas"],
      github: "https://github.com/preetamvr1595/F1-Race-Predictor-Live-API-Data-Pipeline",
      live: "https://f1-race-predictor-live-api-data-pipeline.onrender.com/",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&auto=format&fit=crop&q=80",
      category: "ai",
      stats: [
        { label: "Winner Accuracy", value: "95.7%" },
        { label: "Podium AUC", value: "0.924" }
      ]
    },
    {
      id: 4,
      title: "Diabetic Retinopathy Detection",
      subtitle: "AI Deep Learning Medical Imaging Diagnostic System",
      description: "AI-powered medical imaging system for early detection of diabetic retinopathy using deep learning convolutional neural networks.",
      tech: ["Python", "TensorFlow", "Computer Vision", "Flask"],
      github: "https://github.com/preetamvr1595/diabetic-retinopathy-project",
      live: "https://diabetic-retinopathy-project-37iv.onrender.com/",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&auto=format&fit=crop&q=80",
      category: "ai",
      stats: [
        { label: "Model Accuracy", value: "98.4%" },
        { label: "Inference Latency", value: "<1.2s" }
      ]
    }
  ],
  web: [
    {
      id: 10,
      title: "Aura Jewellers",
      subtitle: "Heritage Luxury Jewellery & Bridal E-Commerce Platform",
      description: "Premium digital storefront for Aura Jewellers (Est. 1999). Features BIS-certified purity trust badges, live gold rate display, lowest wastage guarantee, and bridal collection galleries.",
      tech: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Cloudinary"],
      github: "https://github.com/preetamvr1595",
      live: "https://jewellers-q3kn.onrender.com/",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200&auto=format&fit=crop&q=80",
      category: "web",
      stats: [
        { label: "Wastage Rate", value: "7.99%" },
        { label: "BIS Certified", value: "100%" }
      ]
    },
    {
      id: 8,
      title: "MGS Jewellery",
      subtitle: "Luxury E-Commerce & Inventory CMS Platform",
      description: "A full-stack luxury jewelry platform featuring live gold rate tickers, interactive product galleries with WhatsApp integration, and a comprehensive CMS.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Cloudinary", "Tailwind CSS"],
      github: "https://github.com/sakshichavandvg-sketch/MGS-Jewellary-themed",
      live: "https://finalmgswebpage.onrender.com",
      image: "/project-images/mgs-jewellery.png",
      category: "web",
      stats: [
        { label: "Catalog Conversion", value: "+185%" },
        { label: "WhatsApp Leads", value: "3.4x" }
      ]
    },
    {
      id: 7,
      title: "CloudVault",
      subtitle: "Enterprise Cloud Storage & File Collaboration",
      description: "A modern cloud storage web application with drag & drop upload, instantaneous search indexing, and dark/light modes.",
      tech: ["HTML5", "CSS3", "JavaScript", "localStorage"],
      github: "https://github.com/preetamvr1595/CloudVault",
      live: "https://preetamvr1595.github.io/CloudVault/",
      image: "/project-images/cloudvault.png",
      category: "web",
      stats: [
        { label: "Upload Velocity", value: "Instant" },
        { label: "Zero Dependencies", value: "Vanilla JS" }
      ]
    },
    {
      id: 1,
      title: "Vehicle Registry Verification Portal",
      subtitle: "Real-Time Identity & License Verification Engine",
      description: "Vehicle verification system with real-time data validation and registration management.",
      tech: ["React", "Node.js", "API Integration"],
      github: "https://github.com/sakshichavandvg-sketch/Vehicle-Registry-Verification-Portal",
      live: "https://sakshichavandvg-sketch.github.io/Vehicle-Registry-Verification-Portal/",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1200&auto=format&fit=crop&q=80",
      category: "web",
      stats: [
        { label: "Verification Latency", value: "120ms" }
      ]
    },
    {
      id: 6,
      title: "SecurePass Manager",
      subtitle: "Client-Side Cryptographic Credential Vault",
      description: "Secure password management solution with client-side encryption and zero-knowledge storage.",
      tech: ["React", "Web Crypto API", "Security"],
      github: "https://github.com/preetamvr1595/Secure_pass",
      live: "https://preetamvr1595.github.io/Secure_pass/",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1200&auto=format&fit=crop&q=80",
      category: "web",
      stats: [
        { label: "Entropy Strength", value: "256-bit" }
      ]
    }
  ]
}

// Team Members — Order: Sakshi → Karun → Preetham
export const teamMembers = [
  {
    id: 2,
    name: "Sakshi Chavan",
    role: "Cybersecurity Engineer & Full-Stack Developer",
    specialty: "Network Security, Ethical Hacking & Secure Web Architecture",
    bio: "Specializing in penetration testing, network security protocols, secure web application development, and cryptographic systems. Building resilient architectures that combine performance with enterprise-grade security.",
    github: "https://github.com/sakshichavandvg-sketch",
    email: "Sakshichavandvg@gmail.com",
    skills: ["Cybersecurity", "Ethical Hacking", "Network Security", "React", "Node.js", "MongoDB", "Cryptography"],
    badge: "Cybersecurity",
    avatarBg: "#dcd3f7",
    social: {
      github: "https://github.com/sakshichavandvg-sketch",
      linkedin: "#",
      portfolio: "https://github.com/sakshichavandvg-sketch"
    }
  },
  {
    id: 3,
    name: "Karun Poojari",
    role: "Cybersecurity Engineer & Web Systems Developer",
    specialty: "Security Auditing, Penetration Testing & Geospatial APIs",
    bio: "Combining deep expertise in cybersecurity with modern JavaScript architectures. Expert in vulnerability assessment, secure API design, geospatial mapping engines, and building resilient distributed web experiences.",
    github: "https://github.com/Karunpoojari7",
    email: "karunpoojari7@gmail.com",
    skills: ["Cybersecurity", "Penetration Testing", "JavaScript", "React", "Maps API", "RESTful APIs", "Security Auditing"],
    badge: "Cybersecurity",
    avatarBg: "#d2e7f5",
    social: {
      github: "https://github.com/Karunpoojari7",
      linkedin: "#",
      portfolio: "https://github.com/Karunpoojari7"
    }
  },
  {
    id: 1,
    name: "Preetham V R",
    role: "ML & AI Agent Developer",
    specialty: "Machine Learning, AI Agents & Deep Learning Systems",
    bio: "Building next-generation ML pipelines, autonomous AI agents, and deep learning systems. Specializing in gradient boosting models, computer vision, LLM-powered agents, and end-to-end data science platforms from live API ingestion to real-time prediction dashboards.",
    github: "https://github.com/preetamvr1595",
    email: "preetamvr962002@gmail.com",
    skills: ["Python", "ML Agents", "TensorFlow", "Scikit-learn", "Streamlit", "Computer Vision", "Flask"],
    badge: "ML & AI Agent Dev",
    avatarBg: "#fffa56",
    social: {
      github: "https://github.com/preetamvr1595",
      linkedin: "https://www.linkedin.com/in/preetham-v-r/",
      portfolio: "https://github.com/preetamvr1595"
    }
  }
]

// Agency Services (Broworks 4 Pillars)
export const services = [
  {
    number: "01",
    icon: "code",
    title: "Full-Stack Web Development",
    subtitle: "Built for speed, scalability & conversion",
    description: "Custom web applications, SaaS dashboards, and e-commerce platforms built with modern React, Vite, Node.js, and serverless architectures. Engineered with clean maintainable code your team can scale without friction.",
    deliverables: [
      "Custom React / Next.js Web Apps",
      "Robust REST & GraphQL APIs",
      "Dynamic Database Systems (MongoDB / SQL)",
      "Instant 60fps Micro-interactions"
    ],
    tag: "Core Engineering"
  },
  {
    number: "02",
    icon: "brain",
    title: "AI & Machine Learning Solutions",
    subtitle: "Intelligence baked natively into your software",
    description: "Deep learning models, computer vision diagnostic pipelines, and predictive algorithms engineered to solve complex domain problems and unlock automated efficiency.",
    deliverables: [
      "TensorFlow / PyTorch Neural Networks",
      "Computer Vision & Diagnostic Analysis",
      "LLM & AI Search Engine Citations",
      "Low-Latency Model API Endpoints"
    ],
    tag: "Deep Tech"
  },
  {
    number: "03",
    icon: "palette",
    title: "UI/UX & Design Systems",
    subtitle: "Editorial visual excellence that wows users",
    description: "From design system tokens to intuitive user workflows, we build interfaces that pair high-fashion typography, responsive precision, and proven conversion frameworks.",
    deliverables: [
      "Design Systems & Component Libraries",
      "Interactive Wireframing & Prototypes",
      "Conversion Rate Optimization (CRO)",
      "Mobile-First Responsive Layouts"
    ],
    tag: "Visual Design"
  },
  {
    number: "04",
    icon: "zap",
    title: "Performance & Security Audits",
    subtitle: "Zero-bloat architecture & sub-second load times",
    description: "End-to-end security hardening, cryptographic key management, asset bundling, and lighthouse 95+ score optimizations for mission-critical deployments.",
    deliverables: [
      "Client-side Cryptography (AES-256)",
      "Lighthouse 95+ Speed Optimization",
      "Clean SEO & LLM Structure",
      "Automated CI/CD Deployment Pipelines"
    ],
    tag: "Optimization"
  }
]

// Stats & Trust Proof
export const stats = [
  { value: "50+", label: "Projects Shipped", caption: "Production web applications, AI models, and client platforms" },
  { value: "3", label: "Specialized Engineers", caption: "Dedicated full-stack, AI, and systems architects" },
  { value: "100%", label: "Client Satisfaction", caption: "Flawless delivery, on-time milestones & zero downtime" },
  { value: "2+", label: "Years Team Velocity", caption: "Rapid prototyping to production deployment" }
]

// Testimonials
export const testimonials = [
  {
    id: 1,
    quote: "The Trigon Vertex team completely transformed our digital presence. The live gold rate ticker and WhatsApp commerce CMS they built for MGS Jewellery helped us increase inquiries by over 300%. Their attention to detail is world-class.",
    author: "MGS Jewellers Executive Team",
    role: "Retail & Luxury Commerce Client",
    metric: "+340% Inquiries",
    rating: 5
  },
  {
    id: 2,
    quote: "Working with this collective was effortless. They reverse-engineered our requirements, delivered clean, modular code, and integrated machine learning models that process diagnostics in under 2 seconds. Truly top-tier engineers.",
    author: "HealthTech Innovations Founder",
    role: "AI Healthcare Collaborator",
    metric: "98.4% Accuracy",
    rating: 5
  },
  {
    id: 3,
    quote: "Trigon Vertex operates like an elite product engineering squad. From spatial mapping engines to instant cloud vaults, their builds are lightning-fast, beautifully architected, and completely bug-free.",
    author: "SaaS Product Director",
    role: "Enterprise Solutions Partner",
    metric: "100% On-Time Delivery",
    rating: 5
  },
  {
    id: 4,
    quote: "The visual aesthetic paired with bulletproof backend APIs set a new benchmark for what we expected from a development collective. They don't just write code; they solve commercial bottlenecks.",
    author: "Venture-Backed Founder",
    role: "FinTech Platform Client",
    metric: "<50ms API Latency",
    rating: 5
  }
]

// Technology Stack Marquee
export const techStack = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Full-Stack" },
  { name: "Python", category: "AI / ML" },
  { name: "TensorFlow", category: "Deep Learning" },
  { name: "Node.js", category: "Backend" },
  { name: "Express", category: "API" },
  { name: "MongoDB", category: "Database" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "Vite", category: "Build Tool" },
  { name: "Cloudinary", category: "Media CDN" },
  { name: "Firebase", category: "Cloud Auth" },
  { name: "Web Crypto", category: "Security" },
  { name: "Maps API", category: "Spatial" },
  { name: "Webflow", category: "CMS & Visuals" }
]

// Broworks-style Framework
export const frameworkSteps = [
  {
    step: "01",
    title: "System Architecture First",
    description: "Before writing a single line of code, we map database schemas, state management logic, SEO structure, and user conversion paths to ensure long-term stability.",
    color: "#fffa56"
  },
  {
    step: "02",
    title: "Rapid High-Fidelity Engineering",
    description: "We build with modular, reusable components using modern frameworks (React, Tailwind, Node, Python), ensuring high visual fidelity and robust type safety.",
    color: "#dcd3f7"
  },
  {
    step: "03",
    title: "Rigorous Auditing & AI Optimization",
    description: "We optimize for Core Web Vitals, sub-second API responses, and structured knowledge schema so search engines and AI agents cite your platform first.",
    color: "#d2e7f5"
  },
  {
    step: "04",
    title: "Deployment & Continuous Evolution",
    description: "We launch with zero downtime, configure automated continuous deployment, and provide a codebase your in-house team can scale effortlessly.",
    color: "#fffa56"
  }
]

// FAQs (Reverse-engineered from Broworks with Trigon Vertex focus)
export const faqs = [
  {
    question: "How is your collective's approach different from a typical agency or solo freelancer?",
    answer: "Most freelancers focus solely on design or isolated coding tasks. We focus on end-to-end software architecture. That means tying frontend responsiveness to scalable backend schemas, AI integration, and commercial conversion paths. You get the speed of a specialized agile team with the polish of an elite design studio."
  },
  {
    question: "What types of applications and projects does your team specialize in?",
    answer: "We specialize in three primary domains: high-performance web applications (React, Vite, Node, MongoDB), deep learning and computer vision systems (Python, TensorFlow, CNNs), and custom interactive digital platforms (e-commerce with live tickers, cloud vaults, algorithm visualizers, and cryptographic security tools)."
  },
  {
    question: "How do you ensure zero downtime, high security, and fast page loads?",
    answer: "We engineer systems with modern best practices: code splitting, lazy loading, asset optimization via CDNs, client-side encryption (Web Crypto API), and strict validation layers. Every project is audited against Lighthouse 95+ performance metrics."
  },
  {
    question: "Can you integrate AI and machine learning models into an existing web stack?",
    answer: "Yes, absolutely. We build standalone Python/Flask/FastAPI microservices hosting deep learning models and connect them seamlessly to React/Node.js frontends via RESTful or WebSocket endpoints with sub-second inference latency."
  },
  {
    question: "What does the collaboration and delivery process look like?",
    answer: "We work in structured sprints with continuous git commits, staging previews, and transparent milestone tracking. Clients have direct access to our 3 core engineers (Preetham, Sakshi, and Karun) with no middle management friction."
  },
  {
    question: "How do we get started or schedule an initial strategy call?",
    answer: "Simply click the 'Schedule Strategy Call' button anywhere on this page or reach out directly to our engineers via email or GitHub. We'll review your technical requirements and prepare an architecture outline within 24 hours."
  }
]