import { ResumeData } from './types';

export const RESUME_DATA: ResumeData = {
  profile: {
    name: "Dahyeon (Rosie) Kim",
    email: "dahyeonkim@alumni.duke.edu",
    phone: "+82-10-3003-5700",
    location: "Seoul, South Korea",
    summary: "Senior Consultant at Deloitte with a strong background in Public Policy and Data Analysis. Proven track record in manufacturing optimization, risk quantification, and post-merger integration. Skilled in bridging business strategies with data-driven insights using SAP, Tableau, and Python. Passionate about research and solving complex problems in the global market.",
    image: "https://picsum.photos/300/300?grayscale" // Placeholder, though user provided one in prompt, using placeholder as requested for code generation
  },
  education: [
    {
      school: "Duke University",
      period: "2016 - 2019",
      location: "Durham, NC",
      degree: "BA in Public Policy and Asian & Middle Eastern Studies (Concentration in Chinese)",
      details: [
        "GPA: 3.79/4.00 (Cum Laude)",
        "Graduation with Distinction in Public Policy",
        "3 times Dean’s List"
      ]
    }
  ],
  experience: [
    {
      role: "Senior Consultant",
      company: "Deloitte",
      period: "2020 - Present",
      location: "Seoul, South Korea",
      projects: [
        {
          title: "Determination of overseas plant location for tobacco manufacturer",
          description: [
            "Performed comparative analysis of target markets, developing a framework that encompasses business & regulatory environments to determine optimal location for tobacco production plant.",
            "Conducted Excel simulations on manufacturing capacity to optimize production, reducing total cost by 18%."
          ]
        },
        {
          title: "Risk quantification of climate change impacts on semiconductor company",
          description: [
            "Published the first Task Force on Climate-Related Financial Disclosures (TCFD) report in Korea.",
            "Quantified risk by creating a matrix that assesses the likelihood and impact of climate change-related risk factors and calculating their potential financial impacts."
          ]
        },
        {
          title: "Post-Merger Integration for cross-borders joint venture",
          description: [
            "Led discussions between battery manufacturer & automotive company.",
            "Developed blueprint to integrate IT and Finance functions for JV."
          ]
        },
        {
          title: "SAP ERP & BI dashboard implementation",
          description: [
            "Selected as the only junior consultant to participate in high-impact $13 million project.",
            "Analyzed & visualized SAP data with TIBCO Spotfire to implement financial performance metrics and build BI dashboard for C-Level executives."
          ]
        }
      ]
    },
    {
      role: "Research Analyst",
      company: "Boston Consulting Group (BCG)",
      period: "2020",
      location: "Seoul, South Korea",
      projects: [
        {
          title: "Electric commercial vehicle sales strategy",
          description: [
            "Analyzed market conditions for electric vehicles entering American, European, & Chinese markets.",
            "Researched restrictions on diesel vehicles, calculated total subsidies, and investigated charging infrastructure availability.",
            "Conducted TCO analysis for diesel, electric, and hydrogen vehicles to determine parity points and optimal entry strategies."
          ]
        }
      ]
    }
  ],
  research: [
    {
      title: "Undergraduate Honors Thesis",
      role: "Student Researcher",
      institution: "Duke University",
      period: "2019",
      location: "Durham, NC",
      advisors: "Professor Kenneth Rogerson, Professor Alison Hagy",
      details: [
        "Title: Factors that Influence the Status of Transnational Technology Corporations in the Chinese Market",
        "Conducted content analysis of Chinese government documents & media coverage.",
        "Identified factors that drove transnational technology corporations to exit the Chinese market through case studies."
      ]
    },
    {
      title: "Undergraduate Research Assistant",
      role: "Research Assistant",
      institution: "Duke University",
      period: "2018 - 2019",
      location: "Durham, NC",
      advisors: "Professor Bruce Jentleson",
      details: [
        "Performed translations & thematic analysis of official Chinese government documents to hypothesize reasons for China’s ascent in the international hierarchy."
      ]
    },
    {
      title: "Independent Researcher",
      role: "Researcher",
      institution: "Duke Kunshan University",
      period: "2018",
      location: "Kunshan, China",
      details: [
        "Interviewed 10+ teachers and policy makers in Beijing.",
        "Conducted comparative analysis of Korean and Chinese government policies aimed at reducing effects of the wealth gap on college entrance examinations."
      ]
    }
  ],
  presentations: [
    "Carbon Credits and Their Financial Impact on Global Companies, Deloitte (2021)",
    "Factors that Influence the Status of Transnational Corporations in the Chinese Market, Duke University (2019)",
    "A Comparative Analysis on the Measures to Reduce Effects of the Wealth Gap for College Entrance Examinations in China and Korea, Duke Kunshan University (2018)"
  ],
  awards: [
    {
      name: "Stanback Fellowship",
      issuer: "Duke University",
      year: "2019",
      location: "Washington, D.C.",
      description: "Awarded $6,000 to partake in project-based policy & research work at non-profit organization."
    },
    {
      name: "Kunshan Innovation Scholarship",
      issuer: "Duke Kunshan University",
      year: "2018",
      location: "Kunshan, China",
      description: "One of two students to be awarded a merit-based full-tuition Innovation Scholarship and stipend to design an independent research project."
    },
    {
      name: "Duke Study in China Scholarship",
      issuer: "Duke University Asian & Pacific Studies Institute",
      year: "2017",
      location: "Beijing, China",
      description: "Awarded $1,000 to participate in Duke Study in China program."
    },
    {
      name: "Korea Public Speaking Champion",
      issuer: "Korea Forensics League",
      year: "2014",
      location: "Seoul, South Korea",
      description: "Won first place overall in four categories: oratory, interpretive reading, debate, & impromptu speech. Qualified for World Individuals in Hong Kong."
    }
  ],
  activities: [
    {
      role: "Marketing Strategist",
      organization: "Duke University Business-Oriented Women",
      period: "2017 - 2019",
      location: "Durham, NC",
      details: [
        "Selected through a competitive application process to join Duke’s premier pre-professional organization.",
        "Developed and executed marketing strategy to determine a more inclusive theme for Spring Business Conference."
      ]
    },
    {
      role: "Teacher",
      organization: "CET Academic Programs - Duke Engage",
      period: "2018",
      location: "Quang Tri, Vietnam",
      details: [
        "Independently designed an 8-week English education curriculum.",
        "Constructed a basketball court for Vietnamese students in a war-affected region through a highly selective service-learning fellowship."
      ]
    },
    {
      role: "Teacher & Volunteer",
      organization: "Church World Service",
      period: "2018",
      location: "Durham, NC",
      details: [
        "Taught English and financial literacy to assist immigrants and refugees transition to the US."
      ]
    }
  ],
  skills: [
    {
      category: "Languages",
      items: "Native proficiency in English and Korean; Fluent in Mandarin Chinese (Certification for HSK 6)"
    },
    {
      category: "Professional Training",
      items: "Certified in SAP S/4 HANA for Financial Accounting & Management Accounting modules"
    },
    {
      category: "Programming",
      items: "Basic R, Python"
    },
    {
      category: "Data Visualization",
      items: "Microsoft Excel, Tableau, TIBCO Spotfire"
    }
  ]
};