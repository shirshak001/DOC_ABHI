"use client";

import emailjs from "@emailjs/browser";
import useEmblaCarousel from "embla-carousel-react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowUp,
  Bot,
  CalendarDays,
  CheckCircle2,
  Download,
  Globe2,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Moon,
  Phone,
  PlayCircle,
  QrCode,
  Send,
  Star,
  Sun,
  X,
  Zap
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import CountUp from "react-countup";
import { Controller, useForm } from "react-hook-form";
import { FaWhatsapp } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  availability,
  blogPosts,
  doctor,
  expertise,
  faqs,
  FileText,
  galleryImages,
  healthTips,
  journey,
  navLinks,
  reasons,
  stats,
  testimonials,
  Video
} from "@/constants/site";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  name: z.string().min(2, "Enter your full name"),
  phone: z.string().min(10, "Enter a valid phone number"),
  email: z.string().email("Enter a valid email"),
  date: z.string().min(1, "Select a preferred date"),
  department: z.string().min(1, "Choose a department"),
  message: z.string().min(8, "Tell us what you need")
});

type AppointmentForm = z.infer<typeof formSchema>;

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 }
};

function SectionTitle({
  eyebrow,
  title,
  children
}: {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7 }}
      className="mx-auto mb-12 max-w-3xl text-center"
    >
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.28em] text-brand-teal">
        {eyebrow}
      </p>
      <h2 className="font-serif text-4xl leading-tight text-brand-ink md:text-6xl dark:text-white">
        {title}
      </h2>
      {children ? <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">{children}</p> : null}
    </motion.div>
  );
}

function useDarkMode() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return [dark, setDark] as const;
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useDarkMode();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/30 bg-white/70 backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/60">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link href="#top" className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-full bg-brand-blue text-lg font-bold text-white shadow-glow">
            AB
          </span>
          <span>
            <span className="block font-serif text-xl font-bold text-brand-ink dark:text-white">
              Dr. Biswas
            </span>
            <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Senior Physician
            </span>
          </span>
        </Link>
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map(([label, id]) => (
            <Link key={id} href={`#${id}`} className="rounded-full px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-brand-blue/10 hover:text-brand-blue dark:text-slate-200">
              {label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            aria-label="Toggle dark mode"
            onClick={() => setDark(!dark)}
            className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white text-brand-ink transition hover:border-brand-blue/30 dark:border-white/10 dark:bg-white/10 dark:text-white"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <Button asChild className="hidden sm:inline-flex">
            <Link href="#appointment"><CalendarDays size={18} /> Book</Link>
          </Button>
          <button
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white text-brand-ink lg:hidden dark:border-white/10 dark:bg-white/10 dark:text-white"
          >
            <Menu size={20} />
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {open ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-slate-950/40 lg:hidden">
            <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} className="ml-auto h-full w-80 bg-white p-6 shadow-luxury dark:bg-slate-950">
              <button aria-label="Close menu" onClick={() => setOpen(false)} className="ml-auto grid h-10 w-10 place-items-center rounded-full bg-slate-100 dark:bg-white/10">
                <X size={18} />
              </button>
              <div className="mt-8 grid gap-3">
                {navLinks.map(([label, id]) => (
                  <Link onClick={() => setOpen(false)} key={id} href={`#${id}`} className="rounded-2xl px-4 py-3 font-semibold text-brand-ink hover:bg-blue-50 dark:text-white dark:hover:bg-white/10">
                    {label}
                  </Link>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 700], [0, 90]);

  return (
    <section id="top" className="relative overflow-hidden bg-medical-gradient px-5 pt-32 lg:px-8 dark:bg-slate-950">
      <div className="absolute inset-0">
        {Array.from({ length: 18 }).map((_, index) => (
          <motion.span
            key={index}
            className="absolute h-1.5 w-1.5 rounded-full bg-brand-teal/40"
            style={{ left: `${8 + (index * 13) % 84}%`, top: `${14 + (index * 19) % 70}%` }}
            animate={{ y: [0, -24, 0], opacity: [0.25, 0.8, 0.25] }}
            transition={{ duration: 4 + index * 0.2, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>
      <div className="relative mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-12 pb-20 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div style={{ y }} className="order-2 lg:order-1">
          <div className="relative mx-auto max-w-xl">
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-tr from-brand-blue/20 via-white to-brand-teal/20 blur-2xl" />
            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9 }} className="glass relative overflow-hidden rounded-[2rem] p-3">
              <Image
                src="/images/dr-abhijit-biswas.png"
                alt="Dr. Abhijit Biswas"
                width={1536}
                height={1024}
                priority
                className="aspect-[4/5] w-full rounded-[1.55rem] object-cover object-[56%_center] lg:aspect-[5/6]"
              />
              <div className="absolute bottom-7 left-7 right-7 rounded-3xl bg-white/78 p-5 shadow-luxury backdrop-blur-xl dark:bg-slate-950/70">
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-teal">Trusted Care</p>
                <p className="mt-1 font-serif text-2xl text-brand-ink dark:text-white">20+ years of clinical excellence</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
        <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.8 }} className="order-1 max-w-3xl lg:order-2">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-blue/15 bg-white/70 px-4 py-2 text-sm font-bold text-brand-blue backdrop-blur dark:bg-white/10">
            <HeartBeatIcon /> Premium patient-first medicine
          </p>
          <h1 className="font-serif text-5xl leading-[1.02] text-brand-ink md:text-7xl lg:text-8xl dark:text-white">
            Dr. Abhijit Biswas
          </h1>
          <p className="mt-6 max-w-2xl font-serif text-3xl leading-tight text-slate-800 md:text-5xl dark:text-slate-100">
            Compassionate Healthcare. Trusted Expertise. Personalized Treatment.
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            Dedicated to delivering world-class patient care through experience,
            compassion, and evidence-based medicine.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild size="lg"><Link href="#appointment"><CalendarDays size={20} /> Book Appointment</Link></Button>
            <Button asChild size="lg" variant="secondary"><a href={`tel:${doctor.phone}`}><Phone size={20} /> Call Now</a></Button>
            <Button asChild size="lg" variant="ghost"><Link href="#expertise">View Services</Link></Button>
          </div>
          <svg viewBox="0 0 520 100" className="mt-10 h-20 w-full max-w-xl" aria-hidden="true">
            <path className="heartbeat" d="M0 55 H90 L112 55 L132 18 L165 82 L195 44 L225 55 H520" fill="none" stroke="#14B8A6" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}

function HeartBeatIcon() {
  return <span className="h-2 w-2 rounded-full bg-brand-teal shadow-glow" />;
}

function About() {
  const items = ["MBBS, MD Internal Medicine", "Advanced chronic disease care", "Research-led preventive protocols", "Affiliations with leading hospitals"];
  return (
    <section id="about" className="px-5 py-24 lg:px-8 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="About Doctor" title="A calm, senior presence for complex health decisions.">
          Dr. Biswas blends clinical discipline with patient education, making each
          consultation clear, measured, and deeply personal.
        </SectionTitle>
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="glass rounded-[2rem] p-8">
            <h3 className="font-serif text-3xl text-brand-ink dark:text-white">Medical philosophy</h3>
            <p className="mt-5 leading-8 text-slate-600 dark:text-slate-300">
              Care begins with listening. Every plan is built around the patient’s
              history, lifestyle, risk profile, and long-term wellbeing, supported
              by modern diagnostics and evidence-based medicine.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {["Achievements", "Certificates", "Research", "Hospital Affiliations"].map((label) => (
                <div key={label} className="rounded-3xl border border-slate-200 bg-white/70 p-5 dark:border-white/10 dark:bg-white/5">
                  <CheckCircle2 className="mb-4 text-brand-teal" />
                  <p className="font-semibold text-brand-ink dark:text-white">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>
          <div className="space-y-4">
            {items.map((item, index) => (
              <motion.div
                key={item}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="glass flex gap-5 rounded-3xl p-6"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-brand-blue text-white">{index + 1}</span>
                <div>
                  <p className="font-serif text-2xl text-brand-ink dark:text-white">{item}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                    Verified credentials and practice systems designed for premium, reliable care.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function IconSections() {
  return (
    <>
      <section id="expertise" className="bg-white px-5 py-24 lg:px-8 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Expertise" title="Precision care for everyday and long-term health." />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {expertise.map(([label, Icon], index) => (
              <motion.div key={label as string} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: index * 0.04 }} whileHover={{ y: -8 }} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6 transition hover:border-brand-blue/30 hover:shadow-luxury dark:border-white/10 dark:bg-white/5">
                <Icon className="mb-7 h-9 w-9 text-brand-blue" />
                <h3 className="font-serif text-2xl text-brand-ink dark:text-white">{label as string}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="px-5 py-24 lg:px-8 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Why Choose" title="Everything a premium medical relationship should feel like." />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map(([label, Icon]) => (
              <motion.div key={label as string} whileHover={{ scale: 1.03 }} className="glass rounded-3xl p-6">
                <Icon className="mb-4 h-8 w-8 text-brand-teal" />
                <p className="font-semibold text-brand-ink dark:text-white">{label as string}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function JourneyAndStats() {
  return (
    <section id="journey" className="bg-slate-950 px-5 py-24 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Patient Journey" title="A seamless path from concern to recovery." />
        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
          {journey.map(([label, Icon], index) => (
            <motion.div key={label as string} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} className="relative rounded-3xl border border-white/10 bg-white/5 p-6">
              <Icon className="mb-6 text-brand-teal" />
              <p className="font-serif text-xl">{label as string}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(([label, value, suffix]) => (
            <div key={label as string} className="rounded-[1.6rem] border border-white/10 bg-white/5 p-8 text-center">
              <p className="font-serif text-5xl"><CountUp end={value as number} enableScrollSpy scrollSpyOnce />{suffix as string}</p>
              <p className="mt-3 text-slate-300">{label as string}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" });
  return (
    <section id="testimonials" className="px-5 py-24 lg:px-8 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Testimonials" title="Quiet confidence, reflected by patients." />
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-5">
            {testimonials.map((item) => (
              <div key={item.name} className="min-w-0 flex-[0_0_88%] sm:flex-[0_0_48%] lg:flex-[0_0_32%]">
                <div className="glass h-full rounded-[2rem] p-7">
                  <div className="flex items-center gap-4">
                    <Image src={item.image} alt={item.name} width={64} height={64} className="h-16 w-16 rounded-full object-cover" />
                    <div>
                      <p className="font-bold text-brand-ink dark:text-white">{item.name}</p>
                      <p className="text-sm text-slate-500">{item.role}</p>
                    </div>
                  </div>
                  <div className="mt-6 flex text-amber-400">{Array.from({ length: 5 }).map((_, i) => <Star key={i} size={18} fill="currentColor" />)}</div>
                  <p className="mt-5 leading-8 text-slate-600 dark:text-slate-300">"{item.text}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function GalleryAndExtras() {
  return (
    <section className="bg-white px-5 py-24 lg:px-8 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Gallery" title="A polished digital practice presence." />
        <div className="masonry">
          {galleryImages.map(([label, src], index) => (
            <motion.button key={src} whileHover={{ scale: 0.985 }} className="mb-4 w-full overflow-hidden rounded-[1.5rem] text-left shadow-luxury">
              <Image src={src} alt={label} width={900} height={index % 2 ? 1100 : 720} className="w-full object-cover" />
              <span className="block bg-white p-4 font-semibold text-brand-ink dark:bg-slate-950 dark:text-white">{label}</span>
            </motion.button>
          ))}
        </div>
        <div className="mt-16 grid gap-5 lg:grid-cols-4">
          {[
            ["AI appointment assistant", Bot],
            ["Video consultation", Video],
            ["Prescription portal", FileText],
            ["Booking QR card", QrCode]
          ].map(([label, Icon]) => (
            <div key={label as string} className="rounded-3xl border border-slate-200 p-6 dark:border-white/10">
              <Icon className="mb-5 text-brand-blue" />
              <p className="font-semibold text-brand-ink dark:text-white">{label as string}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Appointment() {
  const [sent, setSent] = useState(false);
  const { register, handleSubmit, control, formState: { errors, isSubmitting }, reset } = useForm<AppointmentForm>({
    resolver: zodResolver(formSchema),
    defaultValues: { department: "General Medicine" }
  });

  async function onSubmit(values: AppointmentForm) {
    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (serviceId && templateId && publicKey) {
        await emailjs.send(serviceId, templateId, values, publicKey);
      } else {
        console.warn("EmailJS credentials not configured");
      }
    } catch (error) {
      console.error("Email send failed:", error);
      await new Promise((resolve) => setTimeout(resolve, 600));
    }
    setSent(true);
    reset();
  }

  return (
    <section id="appointment" className="px-5 py-24 lg:px-8 dark:bg-slate-950">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <SectionTitle eyebrow="Appointment" title="Book a refined, responsive care experience." />
          <div className="glass rounded-[2rem] p-6">
            <p className="mb-5 font-semibold text-brand-ink dark:text-white">Doctor availability</p>
            <div className="grid gap-3">
              {availability.map(([day, ...slots]) => (
                <div key={day} className="flex flex-wrap items-center justify-between gap-2 rounded-2xl bg-white/70 p-3 dark:bg-white/5">
                  <span className="font-bold text-brand-blue">{day}</span>
                  <span className="text-sm text-slate-600 dark:text-slate-300">{slots.join(" / ")}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="glass rounded-[2rem] p-6 md:p-8">
          <div className="grid gap-5 md:grid-cols-2">
            <Field error={errors.name?.message}><Input placeholder="Name" {...register("name")} /></Field>
            <Field error={errors.phone?.message}><Input placeholder="Phone" {...register("phone")} /></Field>
            <Field error={errors.email?.message}><Input placeholder="Email" {...register("email")} /></Field>
            <Field error={errors.date?.message}><Input type="date" {...register("date")} /></Field>
            <Field error={errors.department?.message}>
              <Controller control={control} name="department" render={({ field }) => (
                <select {...field} className="h-12 w-full rounded-2xl border border-slate-200 bg-white/80 px-4 text-sm outline-none focus:border-brand-blue dark:border-white/10 dark:bg-slate-900 dark:text-white">
                  {["General Medicine", "Internal Medicine", "Diabetes Management", "Hypertension", "Online Consultation"].map((option) => <option key={option}>{option}</option>)}
                </select>
              )} />
            </Field>
            <div className="md:col-span-2"><Field error={errors.message?.message}><Textarea placeholder="Message" {...register("message")} /></Field></div>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <Button type="submit" size="lg" disabled={isSubmitting}><Send size={18} /> {isSubmitting ? "Sending..." : "Request Appointment"}</Button>
            <Button type="button" variant="secondary"><Download size={18} /> Download Prescription</Button>
          </div>
          <AnimatePresence>
            {sent ? (
              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="mt-6 rounded-2xl bg-emerald-50 p-4 text-sm font-semibold text-emerald-700">
                Appointment request received. The clinic team will confirm your slot shortly.
              </motion.div>
            ) : null}
          </AnimatePresence>
        </form>
      </div>
    </section>
  );
}

function Field({ children, error }: { children: React.ReactNode; error?: string }) {
  return <label className="block">{children}{error ? <span className="mt-2 block text-xs font-semibold text-rose-500">{error}</span> : null}</label>;
}

function FaqBlogLocation() {
  return (
    <>
      <section className="bg-white px-5 py-24 lg:px-8 dark:bg-slate-900">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div>
            <SectionTitle eyebrow="FAQ" title="Clear answers before your visit." />
            <Accordion type="single" collapsible className="glass rounded-[2rem] px-6">
              {faqs.map(([question, answer], index) => (
                <AccordionItem key={question} value={`item-${index}`} className="border-b border-slate-200 last:border-0 dark:border-white/10">
                  <AccordionTrigger>{question}</AccordionTrigger>
                  <AccordionContent>{answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div>
            <SectionTitle eyebrow="Health Journal" title="SEO-ready care content." />
            <Swiper modules={[Autoplay]} autoplay={{ delay: 2600 }} loop slidesPerView={1} className="rounded-[2rem]">
              {healthTips.map((tip) => (
                <SwiperSlide key={tip}>
                  <div className="glass rounded-[2rem] p-8">
                    <Zap className="mb-8 text-brand-teal" />
                    <p className="font-serif text-3xl text-brand-ink dark:text-white">{tip}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="mt-5 grid gap-4">
              {blogPosts.map(([title, text]) => (
                <article key={title} className="rounded-3xl border border-slate-200 p-5 dark:border-white/10">
                  <h3 className="font-serif text-2xl text-brand-ink dark:text-white">{title}</h3>
                  <p className="mt-2 text-slate-600 dark:text-slate-300">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section id="location" className="px-5 py-24 lg:px-8 dark:bg-slate-950">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <iframe
            title="Clinic location"
            loading="lazy"
            className="min-h-[440px] w-full rounded-[2rem] border-0 shadow-luxury"
            src="https://www.google.com/maps?q=Kolkata%20West%20Bengal&output=embed"
          />
          <div className="glass rounded-[2rem] p-8">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-brand-teal">Location</p>
            <h2 className="mt-4 font-serif text-4xl text-brand-ink dark:text-white">Premium Care Clinic</h2>
            {[
              [MapPin, doctor.address],
              [CalendarDays, doctor.hours],
              [Phone, `Emergency: ${doctor.emergency}`],
              [Globe2, "English + Bengali support"],
              [MessageCircle, "Parking assistance and WhatsApp updates"]
            ].map(([Icon, text]) => (
              <div key={text as string} className="mt-6 flex gap-4">
                <Icon className="shrink-0 text-brand-blue" />
                <p className="text-slate-600 dark:text-slate-300">{text as string}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function FloatingActions() {
  const [emergency, setEmergency] = useState(false);
  return (
    <>
      <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
        <a aria-label="WhatsApp" href="https://wa.me/919876543210" className="grid h-13 w-13 place-items-center rounded-full bg-emerald-500 p-4 text-white shadow-luxury"><FaWhatsapp size={22} /></a>
        <a aria-label="Call" href={`tel:${doctor.phone}`} className="grid h-13 w-13 place-items-center rounded-full bg-brand-blue p-4 text-white shadow-luxury"><Phone size={22} /></a>
        <button aria-label="Emergency" onClick={() => setEmergency(true)} className="grid h-13 w-13 place-items-center rounded-full bg-rose-500 p-4 text-white shadow-luxury"><Zap size={22} /></button>
        <a aria-label="Back to top" href="#top" className="grid h-13 w-13 place-items-center rounded-full bg-slate-950 p-4 text-white shadow-luxury"><ArrowUp size={22} /></a>
      </div>
      <Link href="#appointment" className="fixed bottom-5 left-1/2 z-40 hidden -translate-x-1/2 rounded-full bg-brand-blue px-6 py-3 text-sm font-bold text-white shadow-luxury md:block">
        Floating appointment widget
      </Link>
      <AnimatePresence>
        {emergency ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 grid place-items-center bg-slate-950/50 p-5">
            <motion.div initial={{ scale: 0.94 }} animate={{ scale: 1 }} exit={{ scale: 0.94 }} className="max-w-md rounded-[2rem] bg-white p-8 shadow-luxury dark:bg-slate-950">
              <button
                type="button"
                aria-label="Close emergency dialog"
                title="Close emergency dialog"
                onClick={() => setEmergency(false)}
                className="ml-auto grid h-10 w-10 place-items-center rounded-full bg-slate-100 dark:bg-white/10"
              >
                <X size={18} />
              </button>
              <h3 className="mt-2 font-serif text-4xl text-brand-ink dark:text-white">Emergency Contact</h3>
              <p className="mt-4 text-slate-600 dark:text-slate-300">For urgent care coordination, call the priority clinic line.</p>
              <Button asChild size="lg" className="mt-6 w-full"><a href={`tel:${doctor.emergency}`}><Phone size={18} /> {doctor.emergency}</a></Button>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

function CursorGlow() {
  useEffect(() => {
    const update = (event: MouseEvent) => {
      document.documentElement.style.setProperty("--x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--y", `${event.clientY}px`);
    };
    window.addEventListener("mousemove", update);
    return () => window.removeEventListener("mousemove", update);
  }, []);
  return <div className="cursor-glow hidden lg:block" />;
}

function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 850);
    return () => window.clearTimeout(timer);
  }, []);
  return (
    <AnimatePresence>
      {loading ? (
        <motion.div exit={{ opacity: 0 }} className="fixed inset-0 z-[80] grid place-items-center bg-brand-ink text-white">
          <motion.div animate={{ scale: [1, 1.08, 1] }} transition={{ repeat: Infinity, duration: 1.2 }} className="grid h-24 w-24 place-items-center rounded-full border border-white/20">
            <HeartBeatIcon />
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

function Footer() {
  return (
    <footer className="bg-brand-ink px-5 py-12 text-white lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-4">
        <div>
          <p className="font-serif text-3xl">Dr. Abhijit Biswas</p>
          <p className="mt-3 text-slate-300">Trusted expertise. Personalized treatment.</p>
        </div>
        <div>
          <p className="font-bold">Quick Links</p>
          <div className="mt-4 grid gap-2 text-slate-300">{navLinks.slice(0, 4).map(([label, id]) => <Link key={id} href={`#${id}`}>{label}</Link>)}</div>
        </div>
        <div>
          <p className="font-bold">Contact</p>
          <p className="mt-4 text-slate-300">{doctor.phone}</p>
          <p className="text-slate-300">{doctor.email}</p>
        </div>
        <div>
          <p className="font-bold">Social</p>
          <div className="mt-4 flex gap-3">
            {[Mail, MessageCircle, PlayCircle].map((Icon, index) => <span key={index} className="grid h-11 w-11 place-items-center rounded-full bg-white/10"><Icon size={18} /></span>)}
          </div>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-sm text-slate-400">Copyright © 2026 Dr. Abhijit Biswas. All rights reserved.</p>
    </footer>
  );
}

export function PremiumDoctorSite() {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const assistantMessages = useMemo(() => ["Hello, I can help you find the right slot.", "Would you prefer clinic visit or online consultation?"], []);

  return (
    <main className="min-h-screen bg-brand-mist dark:bg-slate-950">
      <LoadingScreen />
      <CursorGlow />
      <motion.div style={{ scaleX }} className="fixed left-0 top-0 z-[70] h-1 w-full origin-left bg-brand-teal" />
      <Navbar />
      <Hero />
      <About />
      <IconSections />
      <JourneyAndStats />
      <Testimonials />
      <GalleryAndExtras />
      <section className="px-5 py-20 lg:px-8 dark:bg-slate-950">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
          <div className="glass rounded-[2rem] p-8">
            <Bot className="mb-5 text-brand-blue" />
            <h2 className="font-serif text-4xl text-brand-ink dark:text-white">AI-powered appointment assistant</h2>
            <div className="mt-6 space-y-3">
              {assistantMessages.map((message) => <p key={message} className="rounded-2xl bg-white p-4 text-sm text-slate-600 dark:bg-white/10 dark:text-slate-200">{message}</p>)}
            </div>
          </div>
          <div className="glass rounded-[2rem] p-8">
            <QrCode className="mb-5 text-brand-teal" />
            <h2 className="font-serif text-4xl text-brand-ink dark:text-white">Digital visiting card</h2>
            <p className="mt-4 text-slate-600 dark:text-slate-300">Scan-ready appointment identity, WhatsApp access, multilingual support, Google Reviews-ready layout, and online consultation flow.</p>
          </div>
        </div>
      </section>
      <Appointment />
      <FaqBlogLocation />
      <Footer />
      <FloatingActions />
    </main>
  );
}
