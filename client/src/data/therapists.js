import LisaHeadshot from '../assets/images/Headshots/Lisa.png';
import AmandaHeadshot from '../assets/images/Headshots/Amanda.png';
export const therapistsData = [

// This file defines the array `therapistsData`, which stores structured data for each therapist.
// It is imported by components like <TherapistsSection /> and <TherapistCard /> to dynamically generate content.

  {
    name: "Lisa Parsons, LCSW",
    slug: "lisa-parsons",
    credentials: "Licensed Professional Counselor",
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
      "Standard Session: $200.",
      " Sliding scale available for private pay clients",
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
  },
  {
    name: "Amanda Whichard, NCC, LPC, LPC/MHSP",
    slug: "amanda-whichard",
    credentials: "Licensed Professional Counselor",
    license: "MS License #3280 · TN License #5462",
    photo: AmandaHeadshot,
    psychologyTodayUrl: "https://www.psychologytoday.com/us/therapists/amanda-whichard-knoxville-tn/965071",
    contactFormUrl: "",
    bio: [
      // Multiple paragraph bio for detailed therapist profile
      "You may be feeling overwhelmed by the constant cycle of anxiety, intrusive thoughts, or the effects of trauma. It can be exhausting when the strategies that once helped no longer work—leaving you feeling stuck, discouraged, or unsure what to do next. But healing is possible. My goal is to provide a safe, supportive space where you can feel truly heard, understood, and empowered to create real change.",
      "I specialize in working with women navigating anxiety, OCD, and trauma-related challenges. My approach blends warmth and clinical skill, drawing from evidence-based practices like Cognitive Behavioral Therapy (CBT/iCBT), Internal Family Systems (IFS), Mindfulness, and EMDR. I tailor our work together based on your needs and goals—and when desired, I welcome faith and spiritual development into the process.",
      "I’m a licensed professional counselor (LPC-MHSP) with a Master of Science in Counselor Education from William Carey University. One of my guiding beliefs is that “it’s never too late to make a change.” That mindset has shaped my own path—from a previous career in business to a long-standing calling to walk alongside others in their healing.",
      "After graduation and beginning my counseling work here along the Gulf Coast, I've spent the past several years practicing in Tennessee. Now, I’m grateful to be back in this community and to have joined Insights Christian Counseling. If you’re ready to move beyond survival mode and toward peace, purpose, and freedom, I invite you to reach out. You don’t have to carry this alone—we can take the next steps together.",
    ],
    // Intro is a shorter version of the bio for the landing page
    intro: "Amanda is a faith-sensitive therapist specializing in anxiety, OCD, and trauma. Amanda strives to create a warm, supportive space where clients feel heard, understood, and empowered to pursue lasting peace and personal growth using evidenced-based treatments.",
    specialties: [ // Displayed in SpecialtyCard component
      "Anxiety", 
      "Depression", 
      "Grief & Loss",
      "Obsessive Compulsive Disorder (OCD)",  
      "Trauma",
      "PTSD",
      "Life Transitions",
      "Women's Issues",
      "Pre-Marital Counseling",
      "Spiritual Concerns",
    ],
    services: [ // Displayed in ServicesCard component
      "Cognitive Behavioral Therapy (CBT)", 
      "Inference Cognitive Behavioral Therapy (ICBT)", 
      "Mindfulness",
      "Solutions Focused",
      "Internal Family Systems (IFS)",
      "Eye Movement Desensitization and Reprocessing (EMDR)",
      "Prepare-Enrich",
    ],
    fees: [ // Displayed in FeesInsuranceCard component
      "Standard Session: $200.", 
      " Sliding scale available for private pay clients",
    ], 
    insurance: [ // Displayed in FeesInsuranceCard component
      "Not currently in network with insurance providers",
      "A superbill can be provided for potential reinbursement through insurance.",
    ]
  }
];