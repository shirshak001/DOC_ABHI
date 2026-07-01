import {
  Activity,
  BadgeCheck,
  Brain,
  CalendarCheck,
  CircleDollarSign,
  ClipboardCheck,
  Clock3,
  FileText,
  HeartPulse,
  Hospital,
  Microscope,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Syringe,
  UserRoundCheck,
  Users,
  Video
} from "lucide-react";

export const doctor = {
  name: "Dr. Abhijit Biswas",
  title: "Senior Consultant Physician",
  phone: "+91 98765 43210",
  email: "care@drabhijitbiswas.in",
  address: "Premium Care Clinic, Kolkata, West Bengal",
  hours: "Mon-Sat, 9:00 AM - 7:30 PM",
  emergency: "+91 98765 43000"
};

export const navLinks = [
  ["About", "about"],
  ["Expertise", "expertise"],
  ["Journey", "journey"],
  ["Testimonials", "testimonials"],
  ["Appointment", "appointment"],
  ["Location", "location"]
];

export const expertise = [
  ["General Medicine", Stethoscope],
  ["Internal Medicine", Hospital],
  ["Preventive Healthcare", ShieldCheck],
  ["Diabetes Management", Activity],
  ["Hypertension Care", HeartPulse],
  ["Health Checkups", ClipboardCheck],
  ["Lifestyle Disorders", Sparkles]
];

export const reasons = [
  ["Experienced", BadgeCheck],
  ["Patient Centric", UserRoundCheck],
  ["Evidence Based", Microscope],
  ["Modern Diagnostics", Brain],
  ["Affordable Care", CircleDollarSign],
  ["Compassionate Treatment", HeartPulse],
  ["Fast Appointments", Clock3],
  ["Personal Attention", Users]
];

export const journey = [
  ["Book Appointment", CalendarCheck],
  ["Consultation", Stethoscope],
  ["Diagnosis", Microscope],
  ["Treatment Plan", FileText],
  ["Follow Up", Clock3],
  ["Recovery", HeartPulse]
];

export const stats = [
  ["Years Experience", 20, "+"],
  ["Patients Treated", 5000, "+"],
  ["Patient Satisfaction", 98, "%"],
  ["Health Camps", 100, "+"]
];

export const testimonials = [
  {
    name: "Ananya Sen",
    role: "Patient, Preventive Care",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=220&q=80",
    text: "Dr. Biswas explains every detail calmly and makes care feel precise, respectful, and deeply human."
  },
  {
    name: "Rahul Mukherjee",
    role: "Diabetes Management",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=220&q=80",
    text: "The treatment plan was practical, measurable, and reassuring. I felt guided at every step."
  },
  {
    name: "Madhumita Roy",
    role: "Family Care",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=220&q=80",
    text: "A rare combination of clinical confidence and warmth. The appointment system is effortless."
  }
];

export const faqs = [
  ["How can I book an appointment?", "Use the appointment form, WhatsApp button, or call option. The clinic team confirms the available slot."],
  ["Does Dr. Biswas offer online consultations?", "Yes. The demo booking flow includes in-clinic and online consultation preferences."],
  ["What should I bring for my first visit?", "Please carry previous prescriptions, recent investigations, current medicines, and a short symptom timeline."],
  ["Is emergency support available?", "The emergency button opens a priority contact popup with the clinic's rapid-response number."]
];

export const blogPosts = [
  ["Preventive Checkups After 40", "Simple screening choices that catch silent risks early."],
  ["Managing Sugar Spikes", "Practical habits for steadier glucose through the day."],
  ["Blood Pressure Basics", "When to monitor, what to track, and what numbers mean."]
];

export const healthTips = [
  "Take a 10-minute walk after meals to improve glucose control.",
  "Check blood pressure at the same time daily for reliable trends.",
  "Prioritize sleep quality; it changes metabolic and heart health."
];

export const availability = [
  ["Mon", "09:30", "12:30", "17:00"],
  ["Tue", "10:00", "13:00", "18:30"],
  ["Wed", "09:30", "12:00", "Online"],
  ["Thu", "10:30", "14:00", "18:00"],
  ["Fri", "09:00", "11:30", "17:30"],
  ["Sat", "10:00", "13:30", "16:00"]
];

export const galleryImages = [
  ["Clinic lounge", "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=900&q=80"],
  ["Consultation suite", "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=900&q=80"],
  ["Medical conference", "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=900&q=80"],
  ["Awards showcase", "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80"],
  ["Certificates", "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=900&q=80"],
  ["Care team", "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=900&q=80"]
];

export const doctorStructuredData = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: doctor.name,
  medicalSpecialty: ["Internal Medicine", "General Medicine", "Preventive Medicine"],
  telephone: doctor.phone,
  email: doctor.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Premium Care Clinic",
    addressLocality: "Kolkata",
    addressRegion: "West Bengal",
    addressCountry: "IN"
  },
  openingHours: "Mo-Sa 09:00-19:30",
  url: "https://drabhijitbiswas.in"
};

export { Video, FileText };
