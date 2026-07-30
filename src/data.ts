import { Speciality } from './types';

export const SPECIALITIES: Speciality[] = [
  {
    id: "general",
    title: "General Dentistry / Checkup",
    subtitle: "Consultation & Pain Relief",
    description: "General dental checkup, routine consultation, teeth cleaning, or immediate evaluation for toothache and discomfort.",
    detailedDescription: "Our General Dentistry & Consultation service provides thorough oral health evaluations, routine checkups, professional cleaning, and immediate diagnostic care for toothaches, sensitivities, or acute pain.",
    iconName: "Stethoscope",
    benefits: [
      "Comprehensive oral health & cavity evaluation",
      "Immediate diagnostic assessment for tooth pain",
      "Gentle professional cleaning & tartar removal",
      "Personalized preventive oral care roadmap"
    ],
    processSteps: [
      {
        title: "Clinical Oral Examination",
        desc: "Detailed visual and diagnostic checkup of teeth, gums, and soft tissues."
      },
      {
        title: "Symptom & Pain Analysis",
        desc: "Evaluation of specific areas of pain, sensitivity, or discomfort."
      },
      {
        title: "Tailored Care Plan",
        desc: "Transparent discussion of findings with recommended treatment options."
      }
    ],
    duration: "30 - 45 mins",
    recovery: "No downtime required."
  },
  {
    id: "smile-designing",
    title: "Smile Designing & Aesthetic Dentistry",
    subtitle: "Harmonious Aesthetics",
    description: "Custom smile transformations tailored to your facial proportions, combining micro-aesthetics, digital smile previews, and artistic precision.",
    detailedDescription: "Smile designing combines art and dental science to create balanced, natural-looking smile transformations. Using advanced facial mapping, digital smile analysis, and conservative aesthetic procedures, Dr. Anto Ashmi crafts custom smiles that enhance your natural facial features while preserving healthy tooth structure.",
    iconName: "Sparkles",
    benefits: [
      "Personalized digital smile mockups prior to treatment",
      "Completely custom shade matching to facial skin tones",
      "Minimally invasive, enamel-preserving techniques",
      "Boosts personal confidence and facial symmetry"
    ],
    processSteps: [
      {
        title: "Facial Harmony Mapping",
        desc: "We analyze your facial contours, lip curves, and skin tone to sketch a natural, balanced dental symmetry."
      },
      {
        title: "Digital Mockup Preview",
        desc: "A non-invasive preview allows you to visualize and refine your new smile before any treatment begins."
      },
      {
        title: "Precision Execution",
        desc: "Artistic bonding and shaping crafted with meticulous micro-aesthetic detail."
      }
    ],
    duration: "1 - 3 personalized sessions",
    recovery: "Immediate visual transformation with minor adaptation."
  },
  {
    id: "teeth-whitening",
    title: "Teeth Whitening",
    subtitle: "Radiant Luminosity",
    description: "Professional, enamel-safe teeth whitening solutions that safely lift years of deep discoloration and stubborn stains.",
    detailedDescription: "Our professional teeth whitening treatments remove deep intrinsic and surface stains caused by tea, coffee, smoking, and natural aging. Using light-activated, enamel-safe whitening gels with built-in desensitizing agents, we deliver noticeably brighter smiles without triggering lingering sensitivity.",
    iconName: "Sun",
    benefits: [
      "Up to 6-8 shades brighter in a single comfortable visit",
      "Enamel-safe formulas that protect sensitive nerves",
      "Long-lasting results with custom maintenance guidance",
      "Uniform, spot-free whitening across all teeth"
    ],
    processSteps: [
      {
        title: "Gum Protection Barrier",
        desc: "Application of a protective soft shield over your gums to ensure complete safety."
      },
      {
        title: "Light-Activated Gel",
        desc: "Specialized enamel-safe whitening gel activated to break down deep discoloration."
      },
      {
        title: "Fluoride Fortification",
        desc: "Soothing mineral rinse applied post-whitening to protect and strengthen enamel."
      }
    ],
    duration: "45 - 60 minutes",
    recovery: "Immediate results. Refrain from dark beverages for 48 hours."
  },
  {
    id: "dental-implants",
    title: "Dental Implants",
    subtitle: "Permanent Restoration",
    description: "Lifelong tooth replacement solutions anchored with medical-grade titanium roots that feel, bite, and look like natural teeth.",
    detailedDescription: "Dental implants are the gold standard for replacing missing teeth. Acting as an artificial tooth root integrated into the jawbone, an implant prevents bone loss, maintains natural facial contours, and provides an unbreakable foundation for custom porcelain crowns.",
    iconName: "Layers",
    benefits: [
      "Preserves surrounding jawbone density and facial structure",
      "Restores 100% natural chewing strength and comfort",
      "No grinding down of adjacent healthy teeth",
      "Designed for lifetime permanence with proper oral hygiene"
    ],
    processSteps: [
      {
        title: "Guided 3D Imaging",
        desc: "Advanced CBCT scans map bone density and locate nerves with sub-millimeter precision."
      },
      {
        title: "Gentle Anchor Placement",
        desc: "Titanium anchor placed into the bone under mild local anesthesia for total comfort."
      },
      {
        title: "Bespoke Crown Loading",
        desc: "Custom-milled porcelain crown secured once the root anchor successfully integrates."
      }
    ],
    duration: "1 - 2 hours per placement stage",
    recovery: "Mild tenderness for 2-3 days; complete integration over 3-4 months."
  },
  {
    id: "clear-aligners",
    title: "Clear Aligners",
    subtitle: "Discreet Orthodontics",
    description: "Invisible, removable clear trays engineered to straighten misaligned or crowded teeth comfortably without metal braces.",
    detailedDescription: "Clear aligner therapy offers a modern, virtually invisible alternative to traditional braces. Custom 3D-printed aligner trays gently shift teeth into optimal alignment step-by-step. Because the aligners are completely removable, you can enjoy all your favorite foods and maintain flawless brushing and flossing routines.",
    iconName: "Compass",
    benefits: [
      "Virtually invisible medical-grade transparent material",
      "Fully removable for hassle-free meals and easy brushing",
      "Predictable digital progress modeling before starting",
      "No sharp wires, bracket emergencies, or food restrictions"
    ],
    processSteps: [
      {
        title: "3D Digital Scan",
        desc: "Quick, optical scan generating millions of data points to model your dental arch."
      },
      {
        title: "Virtual Journey Plan",
        desc: "Custom step-by-step movement sequencing mapped on computer software."
      },
      {
        title: "Custom Trays Handout",
        desc: "Receive your sequence of clear aligners to wear daily and swap every 1-2 weeks."
      }
    ],
    duration: "Brief check-ups every 4-6 weeks",
    recovery: "Mild pressure for 24 hours after putting in new aligner trays."
  },
  {
    id: "root-canal",
    title: "Root Canal Treatment",
    subtitle: "Tooth Preservation",
    description: "Pain-relieving endodontic therapy that thoroughly cleans infected tooth pulp and saves your natural tooth from extraction.",
    detailedDescription: "Modern root canal treatment is a gentle, pain-free procedure designed to rescue severely damaged or infected teeth. Using computerized micro-rotary instruments and high-grade biocompatible seals, Dr. Anto removes infected nerve tissue, eliminates pain, and restores the structural integrity of your tooth.",
    iconName: "Activity",
    benefits: [
      "Immediate and complete relief from deep throbbing pain",
      "Saves your natural tooth and avoids complex extractions",
      "Prevents infection from spreading into the jawbone",
      "Restores normal bite pressure and chewing function"
    ],
    processSteps: [
      {
        title: "Total Comfort Isolation",
        desc: "Sterile field setup with gentle computerized local anesthesia."
      },
      {
        title: "Micro-Rotary Cleansing",
        desc: "Flexible titanium micro-instruments clean and disinfect the intricate canals."
      },
      {
        title: "Biocompatible Seal",
        desc: "Canals filled and hermetically sealed to prevent re-entry of bacteria."
      }
    ],
    duration: "45 - 90 minutes (often single-visit)",
    recovery: "Mild bite sensitivity for 2-4 days, easily managed."
  },
  {
    id: "tooth-coloured-fillings",
    title: "Tooth-Coloured Fillings",
    subtitle: "Seamless Restorations",
    description: "Biocompatible composite resin restorations that seamlessly match your natural enamel color while sealing cavities.",
    detailedDescription: "Gone are the days of dark silver amalgams. Tooth-coloured composite fillings bond directly to natural tooth enamel, recreating the exact shade, translucency, and anatomy of your original tooth. They effectively repair cavities, minor chips, and wear lines while strengthening the remaining tooth structure.",
    iconName: "ShieldCheck",
    benefits: [
      "100% color-matched to your natural tooth shade",
      "Strong chemical bond reinforces the remaining enamel",
      "Mercury-free, highly biocompatible resin materials",
      "Prevents further decay and thermal conduction sensitivity"
    ],
    processSteps: [
      {
        title: "Gentle Decay Removal",
        desc: "Removal of affected enamel under high-magnification precision."
      },
      {
        title: "Layered Composite Sculpting",
        desc: "Applying tooth-shaded resin layer-by-layer to match original anatomy."
      },
      {
        title: "High-Gloss Polish",
        desc: "Polishing to achieve a silky smooth texture identical to real enamel."
      }
    ],
    duration: "30 - 45 minutes",
    recovery: "Immediate. Normal eating as soon as numbness fades."
  },
  {
    id: "crowns-bridges",
    title: "Crowns & Bridges",
    subtitle: "Structural Protection",
    description: "Custom-milled ceramic crowns and fixed bridges designed to reinforce weakened teeth and restore missing spaces seamlessly.",
    detailedDescription: "Dental crowns act as protective covers for weakened, fractured, or root-canal-treated teeth, while bridges bridge the gap left by missing teeth. Utilizing high-translucency zirconia and E-max ceramics, our restorations deliver outstanding strength and natural aesthetics.",
    iconName: "Crown",
    benefits: [
      "Protects brittle or heavily filled teeth from fracturing",
      "Fills empty tooth gaps to prevent surrounding teeth from shifting",
      "High-translucency materials match surrounding teeth perfectly",
      "Long-lasting durability and stain resistance"
    ],
    processSteps: [
      {
        title: "Digital Impression",
        desc: "3D optical scan of the tooth for exact sub-millimeter lab fabrication."
      },
      {
        title: "Temporary Protection",
        desc: "Comfortable provisional crown fitted while your custom ceramic is crafted."
      },
      {
        title: "Permanent Luting",
        desc: "Final custom crown securely bonded and bite-balanced."
      }
    ],
    duration: "2 brief visits (35-45 minutes each)",
    recovery: "Immediate. Minor gum adaptation for 24-48 hours."
  },
  {
    id: "veneers",
    title: "Veneers",
    subtitle: "Flawless Enamel Facings",
    description: "Ultra-thin, custom ceramic or composite shells bonded to the front surface of teeth to correct discoloration, gaps, and chips.",
    detailedDescription: "Porcelain and composite veneers are the ultimate solution for permanent cosmetic refinement. Designed to sit seamlessly on the front of your teeth, veneers can instantly lengthen worn teeth, close gaps, correct subtle misalignments, and cover stubborn enamel imperfections.",
    iconName: "Gem",
    benefits: [
      "Instantly masks deep stains, chips, and irregular shapes",
      "Requires minimal to no enamel removal",
      "Highly resistant to coffee, tea, and tobacco staining",
      "Smooth, glass-like texture feels entirely natural to the tongue"
    ],
    processSteps: [
      {
        title: "Aesthetic Blueprint",
        desc: "Collaborative design defining shade, shape, and smile goals."
      },
      {
        title: "Micro-Preparation",
        desc: "Ultra-conservative surface preparation keeping 95%+ enamel intact."
      },
      {
        title: "Precision Bonding",
        desc: "Permanent luting of thin ceramic shells with light-cure resin."
      }
    ],
    duration: "1.5 - 2 hours for placement",
    recovery: "Immediate visual transformation; minor speech adjustment for 1-2 days."
  },
  {
    id: "pediatric-dentistry",
    title: "Pediatric Dentistry",
    subtitle: "Gentle Care for Kids",
    description: "Friendly, patient, and stress-free dental care tailored specifically to infants, children, and teenagers.",
    detailedDescription: "Early positive dental experiences lay the groundwork for a lifetime of healthy habits. Our pediatric care focuses on preventative treatments, fluorides, pit & fissure sealants, habit counseling, and gentle restorations in a cheerful, reassuring environment designed to put young patients at complete ease.",
    iconName: "Smile",
    benefits: [
      "Warm, non-intimidating approach tailored for young minds",
      "Painless fissure sealants to shield developing molars",
      "Early interception of jaw alignment and bite habits",
      "Fun oral hygiene education for parents and children"
    ],
    processSteps: [
      {
        title: "Fun Acclimatization",
        desc: "Introducing the child to the dental chair in a relaxed, friendly way."
      },
      {
        title: "Gentle Preventive Care",
        desc: "Cleaning, fluoride application, or painless fissure sealants as needed."
      },
      {
        title: "Parent Guidance",
        desc: "Practical advice on nutrition, brushing, and thumb-sucking habits."
      }
    ],
    duration: "30 - 45 minutes",
    recovery: "Immediate return to play and normal routines."
  },
  {
    id: "tooth-jewellery",
    title: "Tooth Jewellery",
    subtitle: "Subtle Sparkle",
    description: "Safe, non-invasive placement of genuine crystals or dental gems on enamel to add a unique sparkle to your smile.",
    detailedDescription: "Express your individuality with dental jewelry. Using dental-grade adhesives, a sparkling crystal or gem is bonded safely onto the surface of your enamel without drilling or hurting the tooth structure. It is completely safe, reversible, and easy to maintain.",
    iconName: "Star",
    benefits: [
      "Zero drilling or damage to natural tooth enamel",
      "100% painless and fast 15-minute application",
      "100% reversible whenever you choose to remove it",
      "Biocompatible crystals that do not irritate lips or gums"
    ],
    processSteps: [
      {
        title: "Tooth Surface Prep",
        desc: "Cleaning and conditioning the chosen enamel spot."
      },
      {
        title: "Jewel Bonding",
        desc: "Placing the crystal with dental-grade resin and light curing."
      },
      {
        title: "Polishing Check",
        desc: "Ensuring smooth edges for total lip and tongue comfort."
      }
    ],
    duration: "15 - 20 minutes",
    recovery: "Immediate. Eat and smile normally right away."
  },
  {
    id: "gum-care-scaling",
    title: "Gum Care & Scaling",
    subtitle: "Periodontal Health",
    description: "Deep ultrasonic scaling, root planing, and therapeutic gum care to eliminate calculus, bad breath, and bleeding gums.",
    detailedDescription: "Healthy gums are the foundation of healthy teeth. Our gentle ultrasonic scaling and deep periodontal therapy clean beneath the gumline, removing calcified tartar, toxins, and bacterial plaque responsible for gingivitis, bleeding, and bad breath.",
    iconName: "Droplet",
    benefits: [
      "Stops bleeding gums and resolves bad breath at the source",
      "Protects supporting jawbone from chronic periodontitis",
      "Ultra-gentle ultrasonic tips minimize vibration and discomfort",
      "Leaves teeth feeling smooth, clean, and refreshed"
    ],
    processSteps: [
      {
        title: "Ultrasonic Cleaning",
        desc: "Gentle soundwave vibrations lift hardened tartar without scraping."
      },
      {
        title: "Subgingival Irrigation",
        desc: "Therapeutic antimicrobial rinse cleans periodontal pockets."
      },
      {
        title: "Enamel Buffing",
        desc: "Polishing teeth with smooth paste to reduce future plaque stickiness."
      }
    ],
    duration: "30 - 45 minutes",
    recovery: "Immediate. Mild gum sensitivity for 24 hours if deep scaling is done."
  },
  {
    id: "tooth-extractions-surgery",
    title: "Tooth Extractions & Minor Oral Surgery",
    subtitle: "Gentle Surgical Procedures",
    description: "Safe, painless extractions for damaged teeth, impacted wisdom teeth, and minor surgical procedures using gentle techniques.",
    detailedDescription: "When a tooth is severely broken, unsalvageable, or impacted (like wisdom teeth causing pressure), gentle surgical extraction is performed under effective local anesthesia. Dr. Anto focuses on minimally traumatic extractions that preserve bone structure for easy healing or future implant placement.",
    iconName: "Scissors",
    benefits: [
      "Painless procedure performed with modern local anesthetics",
      "Minimally traumatic techniques that preserve surrounding jawbone",
      "Relieves severe pressure caused by impacted wisdom teeth",
      "Clear post-procedure care instructions and follow-up support"
    ],
    processSteps: [
      {
        title: "Local Anesthesia",
        desc: "Complete numbing of the target area to ensure absolute comfort."
      },
      {
        title: "Minimally Invasive Removal",
        desc: "Gentle pressure techniques preserving adjacent bone."
      },
      {
        title: "Surgical Aftercare",
        desc: "Placement of protective gauze and clear ice-pack/diet instructions."
      }
    ],
    duration: "30 - 60 minutes",
    recovery: "Initial healing in 3-5 days. Soft diet for 48 hours."
  },
  {
    id: "dentures-rehabilitation",
    title: "Dentures & Full Mouth Rehabilitation",
    subtitle: "Complete Smile Renewal",
    description: "Custom-fitted partial or full dentures and comprehensive oral rehabilitation to restore chewing function, speech, and facial youthfulness.",
    detailedDescription: "Full mouth rehabilitation addresses complex dental needs involving multiple missing, severely worn, or broken teeth. Through customized full or partial dentures—or implant-supported overdentures—we rebuild your bite alignment, speech clarity, and full chewing comfort.",
    iconName: "HeartPulse",
    benefits: [
      "Restores youthful lip support and facial profile aesthetics",
      "Custom-molded for snug, stable, and comfortable fit",
      "Significantly improves chewing efficiency and speech articulation",
      "Flexible, durable materials tailored to your individual mouth shape"
    ],
    processSteps: [
      {
        title: "Anatomical Impression",
        desc: "Taking detailed jaw recordings to map your natural bite."
      },
      {
        title: "Try-In Session",
        desc: "Testing tooth size, shade, and bite position before final curing."
      },
      {
        title: "Final Delivery & Fitting",
        desc: "Securing the denture and adjusting pressure points for comfort."
      }
    ],
    duration: "3 - 4 comfortable fitting sessions",
    recovery: "Gradual adaptation over 1-2 weeks for eating and speaking."
  },
  {
    id: "preventive-family-care",
    title: "Preventive & Family Dental Care",
    subtitle: "Holistic Family Protection",
    description: "Comprehensive dental health check-ups, routine exams, fluoride treatments, and oral hygiene education for every member of your family.",
    detailedDescription: "Preventive dental care is the smartest investment in lifelong health. By scheduling biannual family dental check-ups, early decay screening, oral cancer evaluations, and remineralization treatments, we keep your family's smiles healthy and cavity-free for years to come.",
    iconName: "Heart",
    benefits: [
      "Catches minor dental issues early before they become painful",
      "Strengthens enamel against acidic foods and decay",
      "Customized oral care plans for all age groups",
      "Comprehensive advice on diet, brushing, and habit control"
    ],
    processSteps: [
      {
        title: "Comprehensive Examination",
        desc: "Detailed visual and optical check of teeth, gums, and soft tissues."
      },
      {
        title: "Enamel Remineralization",
        desc: "Application of calcium, phosphate, and fluoride varnishes."
      },
      {
        title: "Personalized Care Plan",
        desc: "Custom brushing and dietary advice tailored to each family member."
      }
    ],
    duration: "30 - 45 minutes",
    recovery: "Immediate return to normal activities."
  }
];

export const TIME_SLOTS = [
  "09:00 AM",
  "09:45 AM",
  "10:30 AM",
  "11:15 AM",
  "12:00 PM",
  "12:45 PM",
  "01:30 PM",
  "05:00 PM",
  "05:45 PM",
  "06:30 PM",
  "07:15 PM",
  "08:00 PM",
  "08:30 PM"
];

export const SELF_ASSESSMENT_QUESTIONS = [
  {
    id: "q1",
    question: "What is your primary goal or main reason for visiting us today?",
    options: [
      { text: "I want to enhance my smile's shape, alignment, or color.", target: "smile-designing", advice: "Our smile designing and aesthetic dentistry treatments focus on custom micro-aesthetics to create a naturally radiant, balanced smile tailored to you." },
      { text: "I want to remove deep stains and brighten my teeth.", target: "teeth-whitening", advice: "Our professional teeth whitening safely lifts years of deep discoloration in a single comfortable session." },
      { text: "I have a missing tooth that I would like to replace permanently.", target: "dental-implants", advice: "A dental implant is the gold-standard method for replacing a missing tooth with a natural, lifelong anchor." },
      { text: "I want invisible aligners to straighten my teeth without braces.", target: "clear-aligners", advice: "Our clear aligner treatments provide subtle, highly hygienic orthodontics to balance your alignment comfortably." },
      { text: "I am experiencing continuous, deep tooth pain or sensitivity.", target: "root-canal", advice: "Persistent, throbbing pain suggests tooth pulp infection. Root canal therapy provides immediate relief while saving your natural tooth." },
      { text: "I need a routine family dental checkup and preventive care.", target: "preventive-family-care", advice: "Preventive family dental care keeps your teeth fortified and catches micro-issues before they cause discomfort." }
    ]
  },
  {
    id: "q2",
    question: "How would you describe your current level of dental comfort or sensitivity?",
    options: [
      { text: "Everything feels normal; I just want to stay proactive with family dental care.", target: "preventive-family-care", advice: "Proactive care is the best medicine! Regular check-ups keep your teeth shielded and healthy." },
      { text: "I have tartar buildup, bad breath, or bleeding gums when brushing.", target: "gum-care-scaling", advice: "Bleeding gums and buildup resolve quickly with gentle ultrasonic scaling and therapeutic gum care." },
      { text: "I feel persistent, sharp, or throbbing pain in a tooth.", target: "root-canal", advice: "Throbbing pain indicates active dental pulp involvement. A gentle evaluation is highly recommended for immediate relief." },
      { text: "I have a small cavity or chipped tooth edge I want filled neatly.", target: "tooth-coloured-fillings", advice: "Tooth-coloured composite fillings restore your natural enamel color seamlessly while sealing cavities." }
    ]
  }
];

