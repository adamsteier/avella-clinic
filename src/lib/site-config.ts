/**
 * All clinic details live here so real information can be swapped in
 * one place. Every value marked PLACEHOLDER is invented and must be
 * replaced before launch.
 */

export const site = {
  name: "Avella Medical Clinic",
  tagline: "Compassionate Care. Healthier Together.",
  motto: "Your Health. Our Priority.",
  phone: "(604) 555-0182", // PLACEHOLDER
  phoneHref: "tel:+16045550182", // PLACEHOLDER
  email: "info@avellamedical.ca", // PLACEHOLDER
  address: {
    suite: "Suite 602",
    street: "1188 Grandview Avenue", // PLACEHOLDER
    city: "Vancouver, BC V6E 2K3", // PLACEHOLDER
  },
  hours: [
    { days: "Monday – Friday", hours: "9:00 am – 5:00 pm" },
    { days: "Saturday", hours: "10:00 am – 2:00 pm" },
    { days: "Sunday & Holidays", hours: "Closed" },
  ],
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Our Doctors", href: "/doctors" },
  { label: "Videos", href: "/videos" },
  { label: "Contact Us", href: "/contact" },
];

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  offerings: string[];
  image: string;
  imageAlt: string;
};

export const services: Service[] = [
  {
    slug: "family-medicine",
    title: "Family Medicine",
    short: "Ongoing, whole-person care for every member of your family.",
    description:
      "Our family physicians care for patients at every stage of life, from newborn checkups to chronic disease management. We take the time to know you, so your care is always in context.",
    offerings: [
      "Annual physicals and routine checkups",
      "Chronic condition management",
      "Prescription renewals",
      "Lab requisitions and imaging orders",
      "Specialist referrals",
    ],
    image: "/images/service-family-medicine.png",
    imageAlt:
      "A family physician talking with parents and their two children in an exam room",
  },
  {
    slug: "seniors-health",
    title: "Senior's Health",
    short: "Attentive, respectful care that supports healthy aging.",
    description:
      "We help older adults stay independent and well with proactive monitoring, medication reviews, and unhurried appointments designed around their needs.",
    offerings: [
      "Comprehensive geriatric assessments",
      "Medication reviews and management",
      "Mobility, memory, and fall-risk screening",
      "Vaccinations and preventive checkups",
      "Care coordination with specialists",
    ],
    image: "/images/service-seniors-health.png",
    imageAlt:
      "A doctor holding the hand of a smiling senior patient during a consultation",
  },
  {
    slug: "preventive-care",
    title: "Preventive Care",
    short: "Catch concerns early and keep your health on track.",
    description:
      "Prevention is the heart of good medicine. Our screening programs and lifestyle guidance are designed to find problems before they start and keep you feeling your best.",
    offerings: [
      "Health screenings and risk assessments",
      "Blood pressure, cholesterol, and diabetes checks",
      "Immunizations and travel vaccines",
      "Lifestyle, nutrition, and sleep counselling",
      "Smoking cessation support",
    ],
    image: "/images/service-preventive-care.png",
    imageAlt:
      "A doctor measuring a patient's blood pressure during a routine screening",
  },
  {
    slug: "womens-health",
    title: "Women's Health",
    short: "Confidential, comprehensive care through every life stage.",
    description:
      "From routine gynecological care to contraception and menopause support, our physicians provide judgment-free care in a private, comfortable setting.",
    offerings: [
      "Gynecological examinations and Pap tests",
      "Contraception counselling, IUD insertion",
      "Prenatal and postnatal support",
      "Menopause management",
      "Breast health and STI screening",
    ],
    image: "/images/service-womens-health.png",
    imageAlt:
      "A female physician reviewing results on a tablet with a woman patient",
  },
  {
    slug: "childrens-health",
    title: "Children's Health",
    short: "Gentle, thorough care that helps little ones thrive.",
    description:
      "We make visits easy for kids and reassuring for parents, covering everything from well-baby visits and immunizations to school physicals and everyday illnesses.",
    offerings: [
      "Well-baby and well-child visits",
      "Childhood immunizations",
      "Growth and development monitoring",
      "School and sports physicals",
      "Same-day sick visits",
    ],
    image: "/images/service-childrens-health.png",
    imageAlt:
      "A pediatrician examining a laughing child while their mother watches",
  },
];

export type Doctor = {
  name: string;
  credentials: string;
  focus: string;
  bio: string;
};

// PLACEHOLDER physicians — replace with the real care team.
export const doctors: Doctor[] = [
  {
    name: "Dr. Maya Chen",
    credentials: "MD, CCFP",
    focus: "Family Medicine",
    bio: "Dr. Chen has practiced comprehensive family medicine for over a decade and believes lasting health starts with truly listening to patients.",
  },
  {
    name: "Dr. James Whitfield",
    credentials: "MD, FRCPC",
    focus: "Internal & Senior's Health",
    bio: "Dr. Whitfield focuses on healthy aging and complex chronic care, helping older adults stay active and independent.",
  },
  {
    name: "Dr. Sofia Rossi",
    credentials: "MD, CCFP",
    focus: "Women's Health",
    bio: "Dr. Rossi provides warm, confidential women's health care, from routine screening to contraception and menopause support.",
  },
  {
    name: "Dr. Daniel Okafor",
    credentials: "MD, FAAP",
    focus: "Children's Health",
    bio: "Dr. Okafor has a gift for putting young patients at ease and partners closely with parents at every stage of childhood.",
  },
];
