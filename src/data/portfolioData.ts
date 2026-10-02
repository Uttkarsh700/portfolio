import { ContactInfo, ExperienceItem, SkillCategory, EducationItem, AiMlTrainingInfo } from '../types';

export const contactInfo: ContactInfo = {
  name: "Glenn Ronald Margolis",
  title: "Senior Java Developer & Enterprise Software Architect",
  address: "2831 Claudette Ave., Dallas, Texas 75211",
  email: "margol1962@yahoo.com",
  phone: "214-334-0546",
  linkedin: "https://www.linkedin.com/in/glenn-margolis-b253a95/",
  portfolioUrl: "https://glennmargolis-portfolio.ai.studio",
  objective: "Seeking a senior Programming / Software Engineering position with a progressive company that will utilize technical skills and training to impact company growth and profits.",
  qualifications: [
    "Highly motivated, results-driven software engineer with project management skills involving development projects with defined specifications and demanding deadlines.",
    "Decisive communicator and problem solver skilled at interfacing with cross-functional team members, architects, and end users.",
    "Mission-oriented self-starter able to analyze complex business domain facts and develop high-performance logical architectures.",
    "25+ years of extensive enterprise experience spanning Java 8 through OpenJDK 21, Spring Boot microservices, high-volume transaction routing, and enterprise database integrations.",
    "Currently pursuing advanced training and practical specialization in Data Science, Machine Learning, and Enterprise AI integration."
  ]
};

export const aiMlTrainingData: AiMlTrainingInfo = {
  title: "Professional Specialization: Data Science & AI / Machine Learning",
  status: "In Progress / Active Training",
  description: "Actively expanding 25+ years of enterprise software engineering mastery into modern Data Science and Applied Artificial Intelligence. Focusing on production-ready machine learning pipelines, predictive modeling, and seamlessly interfacing enterprise Java microservices with AI inference engines.",
  focusAreas: [
    {
      name: "Data Science & Statistical Analysis",
      description: "Exploratory data analysis, mathematical feature engineering, hypothesis testing, and high-dimensional data preparation.",
      tools: ["Python", "NumPy", "Pandas", "Matplotlib", "Seaborn", "Jupyter"]
    },
    {
      name: "Machine Learning Foundations & Algorithms",
      description: "Supervised and unsupervised learning, regression, classification, random forests, clustering, model evaluation, and cross-validation.",
      tools: ["Scikit-Learn", "XGBoost", "Statistical Modeling", "Model Optimization"]
    },
    {
      name: "Deep Learning & Neural Networks",
      description: "Deep neural network architectures, representation learning, loss optimization, backpropagation, and tensor computations.",
      tools: ["PyTorch", "TensorFlow / Keras", "Neural Architecture"]
    },
    {
      name: "Generative AI & LLM Systems Integration",
      description: "Prompt engineering, retrieval-augmented generation (RAG), vector embeddings, and building RESTful Java middleware for AI agents.",
      tools: ["LLM APIs", "Vector Databases", "LangChain / LlamaIndex concepts", "Java-AI Interoperability"]
    }
  ],
  enterpriseApplications: [
    "Integrating predictive AI models into high-volume financial microservices (e.g. Citibank fraud detection and Zelle transaction scoring).",
    "Automating log anomaly detection and system telemetry utilizing ML pipelines over Elasticsearch & RabbitMQ.",
    "Enhancing retail & POS inventory forecasting through time-series data modeling.",
    "Modernizing legacy database schemas and business rule engines with AI-assisted code parsing."
  ]
};

export const experiences: ExperienceItem[] = [
  {
    id: "tcs",
    company: "Tata Consultancy Services (TCS)",
    location: "Irving, Texas",
    role: "Senior Java Developer",
    employmentType: "Contractor",
    period: "09/2016 – Present",
    isCurrent: true,
    industry: "FinTech & Banking",
    summary: "Provide critical development and production support in a multi-tier Windows microservices architecture ranging from Java 1.8 through OpenJDK 21. Develop new Java services, analyze architectural requirements, and implement Configuration as Code.",
    highlights: [
      "Engineered React UI-Java interface layers for multiple enterprise Java applications within the Citibank framework.",
      "Served as key Java Analyst on Citibank's initial nationwide Zelle System rollout, ensuring reliable transaction handshakes.",
      "Acted as lead analyst and developer for flagship Citi and Marriott microservice applications utilizing Java 8 through 21, Spring Boot, Oracle 10/11g, SQL, and JUnit.",
      "Restructured Marriott High Performance Payment (HPP) Application Routing utilizing Apache Camel components including Rest, HTTP, and Undertow.",
      "Produced comprehensive new HPP load testing protocols using the Gatling scenario tool to validate ultra-high throughput.",
      "Updated and standardized HPP service infrastructure utilizing Java Configuration as Code.",
      "Attained expert mastery in core operational toolchains including ServiceNow Management, RLM, Gatling, and Jenkins CI/CD."
    ],
    technologies: ["Java 8 - 21", "Spring Boot", "React Interface", "Citibank Framework", "Zelle", "Apache Camel", "Undertow", "Oracle 11g", "Gatling", "Jenkins", "RLM", "ServiceNow"]
  },
  {
    id: "southern-glazers",
    company: "Southern Glazer's",
    location: "Addison, Texas",
    role: "Senior Java Developer",
    employmentType: "Contractor",
    period: "04/2016 – 09/2016",
    industry: "Enterprise & Systems",
    summary: "Provided specialized support and engineering in a Windows MuleSoft integration environment (Java 1.7), analyzing upgrade requirements for enterprise logistics.",
    highlights: [
      "Acted as analyst and lead developer for enterprise MuleSoft applications, executing complex version upgrade from Mule 3.5 to 3.8.",
      "Deeply integrated Java business logic, Mule flows, and SAP backend enterprise services.",
      "Engineered rigorous JUnit automated test suites for the Vistaar pricing and revenue management application."
    ],
    technologies: ["Java 1.7", "MuleSoft 3.8", "SAP", "Mule ESB", "JUnit", "Windows Server"]
  },
  {
    id: "tmx-finance",
    company: "TMX Finance",
    location: "Carrollton, Texas",
    role: "Senior Production Support Analyst",
    employmentType: "Contractor & Full-Time Employee",
    period: "07/2015 – 03/2016",
    industry: "FinTech & Banking",
    summary: "Delivered high-tier production support and code analysis in a mission-critical Windows POS environment (Java 1.6).",
    highlights: [
      "Analyzed complex Java codebase and Oracle Database bottlenecks to deliver swift customer solutions for loan transactions.",
      "Provided 24/7 tier-3 production support for the flagship TLX financial application utilizing Java, Oracle 11g, and optimized SQL.",
      "Conducted deep code audits for TLX system defects utilizing Eclipse and SourceTree version control."
    ],
    technologies: ["Java 1.6", "Oracle 11g", "SQL Optimization", "POS Systems", "Eclipse", "SourceTree"]
  },
  {
    id: "siriusxm",
    company: "SiriusXM",
    location: "Irving, Texas",
    role: "Senior Java Developer",
    employmentType: "Full-Time",
    period: "02/2013 – 07/2015",
    industry: "Media & Telecom",
    summary: "Provided architecture, development, and operational support in a Windows POS & Telematics environment (Java 1.7), authoring custom Maven build plugins and distributed tracing systems.",
    highlights: [
      "Built enterprise System Trace Logging applications leveraging Windows Installer, Java, MongoDB, ElasticSearch, and RabbitMQ message queues.",
      "Architected and deployed custom Maven Build Plugins for the Application Specification Repository utilizing Maven 2, Java, RabbitMQ, Spring, and Oracle.",
      "Served as central Build Facilitator for the Application Specification Repository using Maven 2, Jenkins, and Oracle.",
      "Engineered developer and production support for the Payment Web Service (PWS) handling secure credit card authorizations through Paymentech via Java, SoapUI, and low-level Java ServerSockets.",
      "Maintained and enhanced the Vehicle Specification Repository (vehicle telemetry and metadata storage) utilizing Java 7/8, Maven, JBoss 6.4, Oracle 10i, JPA/Hibernate, Spring, and RESTful Services."
    ],
    technologies: ["Java 7/8", "Elasticsearch", "MongoDB", "RabbitMQ", "Spring", "JBoss 6.4", "JPA/Hibernate", "Paymentech", "RESTful APIs", "Maven", "Jenkins"]
  },
  {
    id: "cgi",
    company: "CGI",
    location: "Addison, Texas",
    role: "Java Contractor",
    employmentType: "Contractor",
    period: "08/2012 – 02/2013",
    industry: "Enterprise & Systems",
    summary: "Delivered rapid prototyping and production development in a Windows environment (Java 1.7), modernizing legacy Lotus Notes platforms.",
    highlights: [
      "Engineered full-stack features and production support for the Workpay payroll application utilizing Java Swing, HTML, SQL, and Oracle.",
      "Designed and architected the strategic conversion of the Department of Transportation (DOT) application to a modern Java platform utilizing Struts2, Java, SQL, and IBM DB2."
    ],
    technologies: ["Java 1.7", "Java Swing", "Struts2", "Oracle", "IBM DB2", "HTML", "SQL"]
  },
  {
    id: "teksystems",
    company: "TekSystems",
    location: "Irving, Texas",
    role: "Java Contractor",
    employmentType: "Contractor",
    period: "05/2012 – 08/2012",
    industry: "Enterprise & Systems",
    summary: "Provided core Java web and XML processing development in a Windows POS environment (Java 1.6) to meet stringent business requirements.",
    highlights: [
      "Developed high-throughput web service functionality utilizing Java, SQL, Struts2, and XML bindings.",
      "Implemented clean JAXB object-XML serialization schemas for robust inter-system data interchange."
    ],
    technologies: ["Java 1.6", "Struts2", "JAXB", "XML", "SQL", "POS Environment"]
  },
  {
    id: "zale-corp",
    company: "Zale Corporation",
    location: "Irving, Texas",
    role: "Senior Java Developer",
    employmentType: "Contractor",
    period: "04/2011 – 05/2012",
    industry: "Retail & POS",
    summary: "Led production support and core development for retail jewelry store Point-of-Sale systems in a Windows environment (Java 1.5).",
    highlights: [
      "Designed and implemented critical new XStore POS system functionality to achieve strict Payment Card Industry (PCI) compliance standards.",
      "Crafted performant SQL routines and repaired legacy defects for nationwide retail store deployments.",
      "Authored unit test suites and comprehensive test cases for multi-store deployment scenarios."
    ],
    technologies: ["Java 1.5", "XStore POS", "PCI Compliance", "Microsoft SQL Server", "XML", "JUnit"]
  },
  {
    id: "dal-tile",
    company: "Dal-Tile",
    location: "Dallas, Texas",
    role: "System Specialist",
    employmentType: "Full-Time",
    period: "09/2007 – 04/2011",
    industry: "Enterprise & Systems",
    summary: "Provided end-to-end production support and system development in a WebLogic / Oracle environment for the mission-critical OASIS enterprise system.",
    highlights: [
      "Developed and optimized WebLogic Integration (WLI) Java workflows and Oracle SQL scripts.",
      "Engineered customized OASIS application reports utilizing Visual Studio Reporting Services, SQL, and Oracle.",
      "Determined and automated an in-house UNIX printing architecture utilizing optimized UNIX shell scripts.",
      "Designed and implemented high-volume Lexmark forms overlay process using Java, XML Parsing, UNIX scripts, and Oracle."
    ],
    technologies: ["WebLogic WLI", "Java", "Oracle", "Visual Studio Reporting", "UNIX Scripting", "XML Parsing", "Ant"]
  },
  {
    id: "xo-communications",
    company: "XO Communications",
    location: "Plano, Texas",
    role: "Software Engineer IV & Consultant",
    employmentType: "Full-Time & Consultant",
    period: "04/2005 – 09/2007",
    industry: "Media & Telecom",
    summary: "Served as Technical Lead, Senior Developer, and Production Support across high-capacity telecommunications order entry systems in a J2EE / JBoss environment.",
    highlights: [
      "Served as technical lead across Allegiance Order Entry systems (COE, ACT, MACD-OI, DocServer, Insite) utilizing Java, Struts, WebSphere, JBoss, JSP, SQL, Jasper Reporting, and EJB.",
      "Architected cross-platform Web Services connecting Allegiance order flows to .Net and Oracle databases.",
      "Created and maintained Application Data Collector services using Java, EJB, UNIX shell scripts, and Oracle."
    ],
    technologies: ["Java J2EE", "JBoss", "WebSphere", "EJB", "Struts", "JSP", ".Net Web Services", "Jasper Reports", "Oracle", "UNIX"]
  },
  {
    id: "sprint",
    company: "Sprint",
    location: "Irving, Texas",
    role: "Software Engineer III & II",
    employmentType: "Full-Time",
    period: "10/1999 – 04/2005",
    industry: "Media & Telecom",
    summary: "Provided diverse systems engineering and project management including analysis, architecture, coding, maintenance, debugging, and warranty for major telecom billing and federal systems.",
    highlights: [
      "Developed key functionality for the MySam project utilizing Java, Dynamic HTML, EJB, XML, COBOL, Natural, WebLogic, JSP, and JavaScript.",
      "Key developer on the federal FTS2001 TMID modifications project utilizing VisualAge for Java, XML, SQL, Oracle, WebLogic, OMNIS, and UNIX.",
      "Engineered core Facilities Management mainframe modules utilizing COBOL, DB2, VSAM, and JCL.",
      "Created high-volume AXIS and CLIN billing solutions utilizing SQL, ASP, and UNIX shell scripts.",
      "Built and maintained the high-throughput Invoice Processing System utilizing COBOL, DB2, embedded SQL, and JCL."
    ],
    technologies: ["Java", "WebLogic", "COBOL / COBOL II", "DB2", "VSAM", "JCL", "Natural", "EJB", "SQL", "UNIX", "OMNIS"]
  },
  {
    id: "chubb",
    company: "Chubb Computer Services",
    location: "Dallas, Texas",
    role: "Software Engineer I (Training & Project Deployment)",
    employmentType: "Full-Time",
    period: "10/1998 – 10/1999",
    industry: "Enterprise & Systems",
    summary: "Completed rigorous enterprise software engineering training and deployed on high-stakes Y2K remediation teams.",
    highlights: [
      "Served on the CIS-Y2K team, analyzing, testing, debugging, and documenting mission-critical enterprise systems.",
      "Performed remediation in COBOL, Natural, DB2, CICS, Xpediter, and Natural Debugger."
    ],
    technologies: ["COBOL", "Natural", "DB2", "CICS", "Xpediter", "Y2K Remediation"]
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Modern & Enterprise Java",
    description: "25+ years continuous development from early JDK through Java 17 and OpenJDK 21",
    iconName: "Code",
    skills: [
      "Java 8 through OpenJDK 21",
      "Spring & Spring Boot",
      "Microservices Architecture",
      "Apache Camel (Rest, HTTP, Undertow)",
      "RESTful API & SOAP Services",
      "JPA / Hibernate ORM",
      "JUnit & Automated Testing",
      "Java Certified Programmer",
      "Configuration as Code",
      "Java ServerSocket / Network I/O"
    ]
  },
  {
    title: "AI, ML & Data Science (Active Specialization)",
    description: "Ongoing rigorous coursework and applied enterprise machine learning models",
    iconName: "BrainCircuit",
    skills: [
      "Python Data Science Stack",
      "NumPy & Pandas",
      "Scikit-Learn Machine Learning",
      "PyTorch & TensorFlow Foundations",
      "Exploratory Data Analysis (EDA)",
      "Statistical Hypothesis Testing",
      "Generative AI & LLM Integration",
      "Vector Embeddings & RAG Architectures",
      "AI Microservice Middleware",
      "Time-Series & Anomaly Detection"
    ]
  },
  {
    title: "Databases & Data Stores",
    description: "Relational, NoSQL, In-Memory, and Big Data storage solutions",
    iconName: "Database",
    skills: [
      "Oracle (10g, 11g, SQL Developer)",
      "Microsoft SQL Server",
      "Elasticsearch",
      "MongoDB",
      "IBM DB2",
      "ADABAS",
      "Sybase",
      "VSAM Datasets",
      "SAP Backend Integration",
      "SQL Query Optimization"
    ]
  },
  {
    title: "DevOps, Messaging & Integration Tools",
    description: "Build automation, performance testing, message brokering, and CI/CD pipelines",
    iconName: "Cpu",
    skills: [
      "Jenkins CI/CD",
      "Maven (Custom Build Plugins)",
      "RabbitMQ Message Broker",
      "Gatling Scenario Load Testing",
      "MuleSoft ESB 3.8",
      "ServiceNow Management",
      "RLM Deployment Engine",
      "Eclipse & IntelliJ",
      "Git / SourceTree",
      "SoapUI & Postman"
    ]
  },
  {
    title: "Enterprise Core & Mainframe Systems",
    description: "Deep foundation in mission-critical banking and telecommunications legacy systems",
    iconName: "Server",
    skills: [
      "COBOL / COBOL II",
      "Natural & ADABAS",
      "JCL (Job Control Language)",
      "CICS Transaction Server",
      "BEA WebLogic / WLI",
      "IBM WebSphere",
      "JBoss 6.4 / WildFly",
      "Xpediter & File-Aid",
      "UNIX Shell Scripting",
      "Linux / AIX / OS/2"
    ]
  },
  {
    title: "Web Technologies & Interfaces",
    description: "Modern UI interfaces, reporting services, and legacy web architectures",
    iconName: "Globe",
    skills: [
      "React UI - Java Integration",
      "JavaScript & Modern Web APIs",
      "Visual Studio Reporting Services",
      "JasperReports",
      "JavaServer Pages (JSP)",
      "Dynamic HTML & CSS",
      "XML, XSD, DTD & JAXB",
      "Swing Desktop GUI",
      "Visual Basic & ASP",
      ".Net Web Services"
    ]
  }
];

export const educationList: EducationItem[] = [
  {
    institution: "University of Texas at Austin",
    degree: "Doctoral Program in Political Science",
    period: "1987 – 1991",
    details: "Passed Doctoral Comprehensive Examinations (ABD - All But Dissertation). Rigorous training in advanced quantitative analysis, institutional modeling, logic, and methodology.",
    category: "graduate"
  },
  {
    institution: "UT-Southwestern Medical School",
    degree: "Medical Studies",
    period: "1984 – 1985",
    details: "Intensive training in biological sciences, systems physiology, analytical methodology, and scientific problem-solving.",
    category: "medical"
  },
  {
    institution: "University of Texas at Austin",
    degree: "Bachelor of Arts in Political Science",
    period: "Class of 1984",
    details: "Undergraduate degree focusing on public policy, formal political theory, analytical reasoning, and empirical research.",
    category: "undergraduate"
  }
];

export const teachingExperience = [
  {
    role: "Fairhill School Teacher",
    period: "09/1997 – 09/1998",
    location: "Dallas, Texas",
    details: "Specialized educator teaching structured curriculum to students with diverse learning styles."
  },
  {
    role: "Dallas Learning Center Instructor",
    period: "09/1996 – 09/1997",
    location: "Dallas, Texas",
    details: "Delivered customized academic instruction and analytical skill-building programs."
  },
  {
    role: "North Texas Job Corps Math Instructor",
    period: "07/1995 – 12/1995",
    location: "Texas",
    details: "Taught foundational and applied mathematics, preparing adult learners for vocational technical careers."
  },
  {
    role: "Garland High School Chemistry Teacher",
    period: "08/1993 – 08/1994",
    location: "Garland, Texas",
    details: "Instructed high school students in laboratory chemistry, scientific method, and chemical thermodynamics."
  }
];

export const keyAccomplishments = [
  {
    metric: "25+",
    label: "Years Enterprise Experience",
    sublabel: "From mainframe to OpenJDK 21"
  },
  {
    metric: "10+",
    label: "Fortune 500 & Top Tier Clients",
    sublabel: "Citibank, Marriott, Sprint, SiriusXM"
  },
  {
    metric: "100M+",
    label: "Transactions Handled Daily",
    sublabel: "Citibank Zelle & Marriott HPP"
  },
  {
    metric: "Active",
    label: "AI / ML Specialization",
    sublabel: "Data Science, Python & LLMs"
  }
];
