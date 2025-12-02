import LisaHeadshot from '../assets/images/Headshots/Lisa.png';
export const therapistsData = [

// This file defines the array `therapistsData`, which stores structured data for each therapist.
// It is imported by components like <TherapistsSection /> and <TherapistCard /> to dynamically generate content.

  {
    name: "Lisa Parsons, LCSW",
    slug: "lisa-parsons",
    credentials: "Licensed Clinical Social Worker",
    license: "MS License #9311",
    affiliation: "Member in good standing with the American Association of Christian Counselors",
    photo: LisaHeadshot, 
    psychologyTodayUrl: "https://www.psychologytoday.com/us/therapists/insights-christian-counseling-gulfport-ms/982404",
    contactFormUrl: "", 
    bio: [
      // Multiple paragraph bio for detailed therapist profile
      "My journey toward becoming a therapist began during a personal season of healing from heartbreak, when I discovered a calling from God to walk alongside others through their own challenges. I chose to nurture that calling by earning a Master’s degree in Social Work from Washburn University in Topeka, Kansas.",
      "My early professional experience included working in school social work, followed by a role in community mental health, where I served as both a crisis therapist and a psychotherapist. These experiences allowed me to develop a wide range of clinical skills while deepening my passion for helping others heal.",
      "In 2018, I began subcontracting with Safe Harbor Clinic in Long Beach, Mississippi. There, I refined my areas of focus and earned certifications in treating anxiety disorders, trauma, and providing telehealth services.",
      "In 2023, I opened my own private practice in Gulfport. As a faith-based therapist, I provide evidence-based care rooted in compassion and guided by spiritual values. I continue to pursue ongoing training in trauma and anxiety treatment, offering a safe, grace-filled space for clients to grow and heal."
    ],
    // Intro is a shorter version of the bio for the landing page
    intro: "Lisa is a faith-based therapist specializing in trauma and anxiety, Lisa combines clinical expertise with compassionate, values-driven care. She is passionate about walking alongside clients as they seek healing, peace, and renewed purpose through evidence-based care and spiritual support.",
    specialties: [ // Displayed in SpecialtyCard component
      "Anxiety", 
      "Depression", 
      "Grief & Loss", 
      "Break-up Recovery",
      "Divorce",
      "Trauma",
      "PTSD",
      "Domestic Abuse",
      "Obsessive Compulsive Disorder (OCD)", 
      "Building Boundaries",
      "Faith-Based Counseling",
    ],
    services: [ // Displayed in ServicesCard component
      "Mindfulness-Based Cognitive Therapy (MBCT)",
      "Acceptance and Commitment Therapy (ACT)",
      "Strengths-Based Therapy",
      "Trauma-Focused Therapy",
    ],
    fees: [ // Displayed in FeesInsuranceCard component
      "Standard Session: $200",
      "Sliding scale available for private pay clients",
    ],
    insurance: [ // Displayed in FeesInsuranceCard component
      "Medicare",
      "Tricare",
      "Aetna",
      "Cigna",
      "United Heathcare",
      "Blue Cross Blue Shield",
      "Humana",
      "Wellcare",
      "Ambetter",
      "UMR",
      "Vantage",
      "Molina",
      "Allwell",
      "SAS",
    ]
  }
];