"use client";

import Image from "next/image";
import { useState, type ReactNode } from "react";
import { AnimatePresence, MotionConfig, motion, useMotionValueEvent, useReducedMotion, useScroll, useTransform } from "framer-motion";
import type { MotionValue, Variants } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  CalendarDays,
  Camera,
  Check,
  CheckCircle2,
  ChevronDown,
  CreditCard,
  Database,
  Eye,
  FileText,
  Globe,
  KeyRound,
  Landmark,
  LayoutDashboard,
  LifeBuoy,
  Lock,
  Mail,
  Megaphone,
  Menu,
  MessageCircle,
  Newspaper,
  Palette,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  UserPlus,
  Users,
  X,
} from "lucide-react";
import {
  challengeCards,
  featureGroups,
  flowSteps,
  implementationPhases,
  investmentIncludes,
  maintenanceItems,
  moralesPoints,
  navItems,
  optionalItems,
  platformPanels,
  securityCards,
  solutionHighlights,
} from "@/lib/proposal-data";
import { useMouseParallax } from "@/hooks/use-mouse-parallax";

const iconMap = {
  calendar: CalendarDays,
  chart: BarChart3,
  credit: CreditCard,
  dashboard: LayoutDashboard,
  database: Database,
  globe: Globe,
  instagram: Camera,
  key: KeyRound,
  landmark: Landmark,
  lock: Lock,
  mail: Mail,
  megaphone: Megaphone,
  messages: MessageCircle,
  newspaper: Newspaper,
  palette: Palette,
  rocket: Sparkles,
  shieldAlert: ShieldAlert,
  userPlus: UserPlus,
  users: Users,
};

const viewport = { once: true, margin: "-100px", amount: 0.18 };
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(10px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.72, ease: "easeOut" } },
};
const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.04 } },
};
const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96, y: 22, filter: "blur(10px)" },
  visible: { opacity: 1, scale: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.78, ease: "easeOut" } },
};
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const moralesLogoSrc = `${basePath}/morales-logo.png`;
const sindmedLogoSrc = `${basePath}/sindmed-logo.avif`;

const whatsappNumber = "5511958846541";
const whatsappDisplay = "+55 11 95884-6541";
const whatsappLink = `https://wa.me/${whatsappNumber}`;
const whatsappApprovalLink = `${whatsappLink}?text=Ol%C3%A1%21%20Analisei%20a%20proposta%20do%20site%20institucional%20do%20Sindmed%20ABC%20e%20gostaria%20de%20dar%20sequ%C3%AAncia.`;

function cn(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function IconByName({ name, className }: { name: string; className?: string }) {
  const Icon = iconMap[name as keyof typeof iconMap] ?? Sparkles;
  return <Icon className={className} aria-hidden="true" />;
}

type MouseParallax = ReturnType<typeof useMouseParallax>;

function ParallaxLayer({
  children,
  className,
  rotate = 0,
  strength = 8,
  strengthY,
  x,
  y,
}: {
  children?: ReactNode;
  className?: string;
  rotate?: number;
  strength?: number;
  strengthY?: number;
  x: MotionValue<number>;
  y: MotionValue<number>;
}) {
  const translateX = useTransform(x, [-1, 1], [-strength, strength]);
  const translateY = useTransform(y, [-1, 1], [-(strengthY ?? strength), strengthY ?? strength]);
  const rotateX = useTransform(y, [-1, 1], [rotate, -rotate]);
  const rotateY = useTransform(x, [-1, 1], [-rotate, rotate]);

  return (
    <motion.div
      className={cn("parallax-layer", className)}
      style={{
        x: translateX,
        y: translateY,
        rotateX,
        rotateY,
        transformPerspective: rotate ? 1200 : undefined,
      }}
    >
      {children}
    </motion.div>
  );
}

function SectionParallaxBackground({ parallax, tone = "light" }: { parallax: MouseParallax; tone?: "light" | "dark" }) {
  return (
    <>
      <ParallaxLayer
        x={parallax.x}
        y={parallax.y}
        strength={5}
        strengthY={4}
        className={cn("parallax-section-grid pointer-events-none absolute inset-[-8%] -z-10 opacity-60", tone === "dark" ? "parallax-section-grid-dark" : "parallax-section-grid-light")}
      />
      <ParallaxLayer
        x={parallax.x}
        y={parallax.y}
        strength={10}
        strengthY={7}
        className={cn("pointer-events-none absolute -z-10 h-80 w-80 rounded-full blur-[70px]", tone === "dark" ? "right-[4%] top-[14%] bg-sindmed-lime/14" : "right-[8%] top-[10%] bg-sindmed-blue/10")}
      />
      <ParallaxLayer
        x={parallax.x}
        y={parallax.y}
        strength={-7}
        strengthY={5}
        className={cn("pointer-events-none absolute -z-10 h-64 w-64 rounded-full blur-[68px]", tone === "dark" ? "bottom-[8%] left-[5%] bg-white/8" : "bottom-[10%] left-[4%] bg-sindmed-lime/16")}
      />
    </>
  );
}

function SectionHeader({
  eyebrow,
  title,
  text,
  align = "center",
  light = false,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  align?: "center" | "left";
  light?: boolean;
}) {
  return (
    <motion.div
      className={cn("mx-auto max-w-3xl", align === "left" ? "mx-0 text-left" : "text-center")}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      <span
        className={cn(
          "inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-extrabold uppercase tracking-[0.16em]",
          light
            ? "border-white/20 bg-white/10 text-white/80"
            : "border-sindmed-blue/20 bg-white/70 text-sindmed-navy shadow-[0_12px_30px_rgba(10,22,40,0.05)]",
        )}
      >
        <span className={cn("h-1.5 w-1.5 rounded-full", light ? "bg-sindmed-lime" : "bg-sindmed-blue")} />
        {eyebrow}
      </span>
      <h2 className={cn("mt-5 text-balance text-3xl font-extrabold leading-[1.05] md:text-5xl", light ? "text-white" : "text-sindmed-ink")}>
        {title}
      </h2>
      {text ? <p className={cn("mt-5 text-base leading-8 md:text-lg", light ? "text-white/70" : "text-[#55606f]")}>{text}</p> : null}
    </motion.div>
  );
}

function ButtonLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "light";
}) {
  const external = href.startsWith("http");

  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={cn(
        "group relative inline-flex min-h-12 items-center justify-center gap-2 overflow-hidden rounded-full px-5 text-sm font-extrabold outline-none transition focus-visible:ring-2 focus-visible:ring-sindmed-lime focus-visible:ring-offset-2 focus-visible:ring-offset-sindmed-porcelain md:min-h-14 md:px-6",
        variant === "primary" && "bg-sindmed-graphite text-white shadow-[0_20px_48px_rgba(1,84,215,0.24)] hover:bg-sindmed-navy",
        variant === "secondary" &&
          "border border-sindmed-ink/10 bg-white/70 text-sindmed-graphite shadow-[0_14px_34px_rgba(10,22,40,0.06)] hover:border-sindmed-blue/30 hover:bg-white",
        variant === "light" && "bg-sindmed-lime text-sindmed-graphite shadow-[0_20px_48px_rgba(139,209,76,0.26)] ring-1 ring-white/30 hover:bg-[#9edd63]",
      )}
      whileHover={{ y: -3, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
    >
      <span className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-white/35 to-transparent opacity-0 transition duration-700 group-hover:left-full group-hover:opacity-100" />
      <span className="relative z-10">{children}</span>
      <ArrowRight className="relative z-10 h-4 w-4 transition duration-300 group-hover:translate-x-1" />
    </motion.a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useTransform(scrollYProgress, [0, 1], [0, 1]);
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const next = latest > 0.01;
    setIsScrolled((current) => (current === next ? current : next));
  });

  return (
    <>
      <motion.div className="fixed left-0 top-0 z-[80] h-1 w-full origin-left bg-gradient-to-r from-sindmed-graphite via-sindmed-blue to-sindmed-lime" style={{ scaleX: progress }} />
      <header className="fixed left-1/2 top-4 z-50 w-[min(calc(100%_-_24px),1180px)] -translate-x-1/2">
        <motion.div
          className={cn(
            "glass-panel flex min-h-16 items-center justify-between rounded-full px-3 py-2 transition-all duration-500",
            isScrolled && "border-sindmed-ink/10 bg-white/85 shadow-[0_22px_70px_rgba(10,22,40,0.14)]",
          )}
          animate={{ y: isScrolled ? -2 : 0, scale: isScrolled ? 0.992 : 1 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <a href="#inicio" className="flex min-w-0 items-center gap-3 rounded-full pr-2">
            <span className="grid h-11 shrink-0 place-items-center overflow-hidden rounded-xl border border-sindmed-blue/20 bg-white px-2.5 shadow-[0_12px_34px_rgba(1,84,215,0.18)]">
              <Image src={sindmedLogoSrc} alt="Sindmed ABC" width={356} height={148} className="h-7 w-auto object-contain" priority />
            </span>
            <span className="hidden min-w-0 sm:block">
              <small className="block truncate text-xs font-semibold text-[#6c7789]">Proposta comercial</small>
              <strong className="block truncate text-sm font-extrabold text-sindmed-ink">Site institucional</strong>
            </span>
          </a>

          <nav className="hidden items-center rounded-full border border-sindmed-ink/10 bg-sindmed-porcelain/70 p-1 lg:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="group relative rounded-full px-4 py-2 text-sm font-bold text-[#5a6472] transition hover:bg-white hover:text-sindmed-ink">
                {item.label}
                <span className="absolute inset-x-4 bottom-1 h-px origin-left scale-x-0 bg-sindmed-blue transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a href="#aprovar" className="group relative hidden overflow-hidden rounded-full bg-sindmed-graphite px-5 py-3 text-sm font-bold text-sindmed-lime shadow-[0_16px_34px_rgba(1,84,215,0.22)] ring-1 ring-sindmed-lime/30 transition hover:-translate-y-0.5 hover:bg-sindmed-navy sm:inline-flex">
              <span className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 transition duration-700 group-hover:left-full group-hover:opacity-100" />
              <span className="relative z-10">
              Aprovar proposta
              </span>
            </a>
            <button type="button" className="grid h-11 w-11 place-items-center rounded-full border border-sindmed-ink/10 bg-white text-sindmed-ink lg:hidden" onClick={() => setOpen((value) => !value)} aria-label={open ? "Fechar menu" : "Abrir menu"}>
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </motion.div>

        <AnimatePresence>
          {open ? (
            <motion.nav
              className="glass-panel mt-3 overflow-hidden rounded-2xl p-3 lg:hidden"
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.24, ease: "easeOut" }}
            >
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-bold text-sindmed-graphite transition hover:bg-white" onClick={() => setOpen(false)}>
                  {item.label}
                  <ArrowRight className="h-4 w-4" />
                </a>
              ))}
            </motion.nav>
          ) : null}
        </AnimatePresence>
      </header>
    </>
  );
}

function FloatingBadge({ children, className, delay = 0 }: { children: ReactNode; className: string; delay?: number }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={cn("absolute z-30 hidden items-center gap-2 rounded-full border border-white/70 bg-white/80 px-4 py-3 text-xs font-bold text-sindmed-graphite shadow-[0_20px_50px_rgba(10,22,40,0.12)] backdrop-blur-xl md:flex", className)}
      initial={{ opacity: 0, y: 18 }}
      animate={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: [0, -7, 0], x: [0, 2, 0], rotate: [0, 0.25, 0] }}
      transition={{
        opacity: { duration: 0.5, delay },
        y: { duration: 5.8, repeat: Infinity, ease: "easeInOut", delay },
        x: { duration: 7.2, repeat: Infinity, ease: "easeInOut", delay },
        rotate: { duration: 7.6, repeat: Infinity, ease: "easeInOut", delay },
      }}
    >
      {children}
    </motion.div>
  );
}

function HeroMockup({ parallax }: { parallax: MouseParallax }) {
  return (
    <motion.div className="relative z-10 mx-auto w-full max-w-2xl overflow-visible" initial={{ opacity: 0, y: 32, scale: 0.96, filter: "blur(12px)" }} animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }} transition={{ duration: 0.92, delay: 0.22, ease: "easeOut" }}>
      <FloatingBadge className="left-2 top-8 xl:-left-5" delay={0.3}>
        <Newspaper className="h-4 w-4 text-sindmed-blue" />
        Notícia publicada
      </FloatingBadge>
      <FloatingBadge className="right-2 top-1/3 xl:-right-4" delay={0.8}>
        <UserPlus className="h-4 w-4 text-sindmed-blue" />
        Nova associação recebida
      </FloatingBadge>
      <FloatingBadge className="bottom-14 right-10" delay={1.2}>
        <ShieldAlert className="h-4 w-4 text-sindmed-blue" />
        Denúncia sigilosa
      </FloatingBadge>
      <FloatingBadge className="bottom-36 left-2 xl:-left-3" delay={1.6}>
        <Camera className="h-4 w-4 text-sindmed-blue" />
        Instagram integrado
      </FloatingBadge>

      <ParallaxLayer x={parallax.x} y={parallax.y} strength={4} strengthY={3} rotate={0.45} className="relative z-10">
        <motion.div className="relative overflow-hidden rounded-[1.6rem] border border-white/70 bg-white/70 shadow-[0_38px_110px_rgba(10,22,40,0.18)] backdrop-blur-2xl" whileHover={{ y: -5, rotateY: -0.6, rotateX: 0.4, scale: 1.003 }} transition={{ duration: 0.35 }}>
          <motion.div
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-transparent via-white/35 to-transparent"
            initial={{ x: "-140%" }}
            animate={{ x: "760%" }}
            transition={{ duration: 6.8, repeat: Infinity, repeatDelay: 2.8, ease: "easeInOut" }}
          />
          <div className="flex min-h-12 items-center gap-2 border-b border-sindmed-ink/10 bg-white/60 px-5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#c3ccd9]" />
            <span className="h-2.5 w-2.5 rounded-full bg-sindmed-lime" />
            <span className="h-2.5 w-2.5 rounded-full bg-sindmed-blue" />
            <span className="ml-3 text-xs font-extrabold uppercase tracking-[0.18em] text-[#7b869a]">Site institucional</span>
          </div>

        <div className="grid min-h-[520px] grid-cols-1 md:grid-cols-[84px_1fr]">
          <aside className="hidden bg-sindmed-graphite p-4 md:block">
            <div className="grid h-9 w-full place-items-center overflow-hidden rounded-lg border border-sindmed-lime/30 bg-white/95 px-1 shadow-[0_12px_30px_rgba(0,0,0,0.18)]">
              <Image src={sindmedLogoSrc} alt="Sindmed ABC" width={356} height={148} className="h-6 w-auto max-w-full object-contain" />
            </div>
            <div className="mt-8 space-y-3">
              {[0, 1, 2, 3].map((item) => (
                <span key={item} className={cn("block h-9 rounded-lg bg-white/10", item === 0 && "bg-white text-sindmed-graphite shadow-lg")} />
              ))}
            </div>
          </aside>

          <div className="bg-gradient-to-br from-white via-[#f7fafd] to-sindmed-blue/10 p-5 md:p-7">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#7b869a]">Notícias</p>
                <h3 className="mt-2 max-w-sm text-2xl font-extrabold leading-tight text-sindmed-ink">Campanha salarial 2026 tem nova rodada de negociação</h3>
              </div>
              <span className="w-fit rounded-full border border-sindmed-lime/50 bg-[#f1faea] px-3 py-2 text-xs font-extrabold text-[#3d6b1c]">
                Publicado
              </span>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              {[
                ["Seções", "07"],
                ["Publicações", "Ilimitadas"],
                ["Acesso", "Mobile"],
              ].map(([label, value]) => (
                <motion.div key={label} className="premium-card rounded-2xl border border-sindmed-ink/10 bg-white/70 p-4 shadow-[0_14px_34px_rgba(10,22,40,0.06)]" whileHover={{ y: -3 }}>
                  <span className="text-[0.68rem] font-extrabold uppercase tracking-[0.16em] text-[#7b869a]">{label}</span>
                  <strong className="mt-2 block text-sm font-extrabold text-sindmed-graphite md:text-lg">{value}</strong>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 grid gap-2 sm:grid-cols-4">
              {["Quem Somos", "Notícias", "Benefícios", "Associe-se"].map((step, index) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0.72 }}
                  animate={index === 3 ? { opacity: [0.86, 1, 0.86], scale: [1, 1.025, 1] } : { opacity: 1 }}
                  transition={{ duration: 3.8, repeat: index === 3 ? Infinity : 0, ease: "easeInOut" }}
                  className={cn("rounded-full border px-3 py-3 text-center text-xs font-extrabold", index === 0 && "border-sindmed-blue/30 bg-sindmed-blue/10 text-sindmed-navy", index === 3 && "border-transparent bg-sindmed-navy text-white shadow-glow", index > 0 && index < 3 && "border-sindmed-ink/10 bg-white/70 text-[#7b869a]")}
                >
                  {step}
                </motion.div>
              ))}
            </div>

            <div className="mt-6 grid gap-4 lg:grid-cols-[1.18fr_0.82fr]">
              <div className="rounded-2xl border border-sindmed-ink/10 bg-white/70 p-4 shadow-[0_14px_34px_rgba(10,22,40,0.06)]">
                <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#7b869a]">Últimas publicações</p>
                {[
                  ["Convenção coletiva 2026", "PDF disponível"],
                  ["Benefícios para associados", "Atualizado hoje"],
                ].map(([title, meta]) => (
                  <div key={title} className="mt-4 flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-sindmed-blue/10 text-sindmed-navy">
                      <FileText className="h-5 w-5" />
                    </span>
                    <div>
                      <strong className="block text-sm font-extrabold text-sindmed-ink">{title}</strong>
                      <small className="text-xs font-semibold text-[#6c7789]">{meta}</small>
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl bg-sindmed-graphite p-4 text-white shadow-[0_18px_42px_rgba(10,22,40,0.16)]">
                <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-white/50">Canal de denúncias</p>
                <strong className="mt-3 block text-lg font-extrabold leading-snug">O médico escolhe se identifica.</strong>
                <p className="mt-3 text-sm leading-6 text-white/60">Denúncia anônima ou identificada, direto para o sindicato.</p>
                <div className="mt-5 rounded-xl border border-white/10 bg-white/10 p-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-white/75">
                    <ShieldCheck className="h-4 w-4 text-sindmed-lime" />
                    Sigilo garantido
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </motion.div>
      </ParallaxLayer>
    </motion.div>
  );
}

function HeroSection({ parallax }: { parallax: MouseParallax }) {
  return (
    <section id="inicio" className="relative isolate overflow-hidden px-5 pb-20 pt-32 md:pb-28 md:pt-36">
      <ParallaxLayer x={parallax.x} y={parallax.y} strength={2} strengthY={2} className="premium-noise" />
      <span className="pointer-events-none absolute right-[2%] top-[8%] -z-10 hidden font-display text-[24rem] font-bold leading-none text-sindmed-graphite/[0.035] lg:block">
        S
      </span>
      <ParallaxLayer x={parallax.x} y={parallax.y} strength={4} strengthY={3} className="absolute inset-[-4%] -z-10 bg-[linear-gradient(115deg,rgba(255,255,255,0.96),rgba(245,248,252,0.9)_46%,rgba(139,209,76,0.20))]" />
      <ParallaxLayer x={parallax.x} y={parallax.y} strength={6} strengthY={4} className="absolute right-[-4%] top-[-4%] -z-10 h-[108%] w-[56%] bg-[linear-gradient(135deg,transparent,rgba(1,84,215,0.12))]" />
      <ParallaxLayer x={parallax.x} y={parallax.y} strength={7} strengthY={5} className="pointer-events-none absolute left-[8%] top-[14%] -z-10">
        <motion.div
          className="h-44 w-44 rounded-full bg-sindmed-blue/15 blur-[46px]"
          animate={{ x: [0, 18, 0], y: [0, -14, 0], scale: [1, 1.06, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </ParallaxLayer>
      <ParallaxLayer x={parallax.x} y={parallax.y} strength={-8} strengthY={6} className="pointer-events-none absolute right-[10%] top-[10%] -z-10">
        <motion.div
          className="h-56 w-56 rounded-full bg-sindmed-lime/20 blur-[46px]"
          animate={{ x: [0, -16, 0], y: [0, 18, 0], scale: [1, 1.04, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
      </ParallaxLayer>
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]">
        <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
          <motion.span variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-sindmed-blue/20 bg-white/70 px-3 py-2 text-xs font-extrabold uppercase tracking-[0.16em] text-sindmed-navy shadow-[0_16px_40px_rgba(10,22,40,0.06)]">
            <span className="h-1.5 w-1.5 rounded-full bg-sindmed-blue" />
            Site institucional, associação e canal de denúncias
          </motion.span>
          <motion.h1 variants={fadeUp} className="mt-6 text-balance text-5xl font-extrabold leading-[0.96] text-sindmed-ink md:text-7xl">
            Sindmed ABC
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-balance text-xl font-bold leading-8 text-sindmed-graphite md:text-2xl">
            Um site institucional à altura da força do sindicato dos médicos do Grande ABC.
          </motion.p>
          <motion.p variants={fadeUp} className="mt-5 max-w-2xl text-base leading-8 text-[#55606f] md:text-lg">
            Centralize notícias, campanha salarial, benefícios, associação e denúncias em um único canal digital, com painel próprio para a equipe publicar sem depender de desenvolvedor.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#solucao">Ver solução proposta</ButtonLink>
            <ButtonLink href="#funcionalidades" variant="secondary">
              Ver funcionalidades
            </ButtonLink>
          </motion.div>
        </motion.div>
        <HeroMockup parallax={parallax} />
      </div>
    </section>
  );
}

function ChallengeSection() {
  return (
    <section id="desafio" className="px-5 py-20 md:py-28">
      <SectionHeader eyebrow="O desafio" title="Representar médicos hoje também é ter presença digital" text="Sem um canal oficial e organizado, notícias, benefícios e serviços do sindicato se perdem entre grupos de mensagem, redes sociais e contato direto." />
      <motion.div className="mx-auto mt-12 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3" initial="hidden" whileInView="visible" viewport={viewport} variants={stagger}>
        {challengeCards.map((card) => (
          <motion.article key={card.title} variants={fadeUp} whileHover={{ y: -6 }} className="premium-card group relative overflow-hidden rounded-3xl border border-sindmed-ink/10 bg-white/70 p-6 shadow-[0_18px_48px_rgba(10,22,40,0.07)] backdrop-blur-xl">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sindmed-blue/30 to-transparent opacity-0 transition group-hover:opacity-100" />
            <span className="premium-icon grid h-12 w-12 place-items-center rounded-2xl bg-sindmed-blue/10 text-sindmed-navy transition group-hover:bg-sindmed-navy group-hover:text-white">
              <IconByName name={card.icon} className="h-5 w-5" />
            </span>
            <h3 className="mt-5 text-lg font-extrabold text-sindmed-ink">{card.title}</h3>
            <p className="mt-2 text-sm leading-6 text-[#5a6472]">{card.text}</p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}

function SolutionSection({ parallax }: { parallax: MouseParallax }) {
  return (
    <section id="solucao" className="relative isolate overflow-hidden px-5 py-20 md:py-28">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(145deg,#0A1628,#01379A)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(255,255,255,0.05),transparent_40%,rgba(139,209,76,0.12))]" />
      <SectionParallaxBackground parallax={parallax} tone="dark" />
      <div className="mx-auto grid max-w-6xl items-start gap-10 lg:grid-cols-[0.86fr_1.14fr]">
        <SectionHeader align="left" light eyebrow="A solução" title="Um site institucional que informa, aproxima e representa" text="O novo site do Sindmed ABC reúne a identidade, o conteúdo e os serviços do sindicato em um ambiente moderno, responsivo e fácil de manter." />
        <motion.div initial="hidden" whileInView="visible" viewport={viewport} variants={stagger} className="grid gap-4">
          <motion.div variants={fadeUp} className="rounded-3xl border border-white/20 bg-white/10 p-6 text-white backdrop-blur-xl">
            <p className="text-lg font-bold leading-8 text-white/80">O médico conhece a entidade, acompanha a campanha salarial, consulta benefícios, se associa pelo site e registra denúncias com sigilo garantido.</p>
          </motion.div>
          <motion.div variants={stagger} className="grid gap-3 sm:grid-cols-2">
            {solutionHighlights.map((item) => (
              <motion.div key={item} variants={fadeUp} className="dark-premium-card flex items-start gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 text-sm font-bold leading-6 text-white/80">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-sindmed-lime" />
                {item}
              </motion.div>
            ))}
          </motion.div>
          <motion.div variants={fadeUp} className="rounded-3xl border border-sindmed-lime/30 bg-sindmed-lime/10 p-6 text-white shadow-[0_26px_70px_rgba(0,0,0,0.18)]">
            <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-sindmed-lime">Princípio central</span>
            <strong className="mt-3 block text-2xl font-extrabold leading-tight">Todo conteúdo sob controle da diretoria, publicado em poucos cliques.</strong>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function FlowSection({ parallax }: { parallax: MouseParallax }) {
  return (
    <section id="fluxo" className="relative isolate overflow-hidden px-5 py-20 md:py-28">
      <SectionParallaxBackground parallax={parallax} />
      <SectionHeader eyebrow="Jornada no site" title="Do primeiro acesso à associação, sem fricção" text="A navegação conduz o médico da apresentação institucional até a associação, a denúncia ou o contato — e a equipe publica novidades a qualquer momento." />
      <div className="relative mx-auto mt-14 max-w-7xl">
        <motion.div className="absolute left-5 top-0 h-full w-px origin-top bg-gradient-to-b from-sindmed-blue via-sindmed-lime to-sindmed-blue lg:hidden" initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={viewport} transition={{ duration: 1.1, ease: "easeOut" }} />
        <motion.div className="absolute left-[5%] right-[5%] top-10 hidden h-px origin-left bg-gradient-to-r from-transparent via-sindmed-blue to-transparent lg:block" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={viewport} transition={{ duration: 1.2, ease: "easeOut" }} />
        <motion.div className="grid gap-4 pl-10 md:grid-cols-2 lg:grid-cols-4 lg:pl-0" initial="hidden" whileInView="visible" viewport={viewport} variants={stagger}>
          {flowSteps.map((step, index) => (
            <motion.article key={step.title} variants={fadeUp} whileHover={{ y: -6 }} className={cn("premium-card timeline-card relative rounded-3xl border bg-white/70 p-6 shadow-[0_18px_48px_rgba(10,22,40,0.07)] backdrop-blur-xl", index === 4 ? "border-sindmed-lime/50 ring-1 ring-sindmed-lime/30" : "border-sindmed-ink/10")}>
              <motion.span
                className={cn("timeline-number grid h-11 w-11 place-items-center rounded-full text-sm font-extrabold", index === 4 ? "bg-sindmed-lime text-sindmed-graphite" : "bg-sindmed-graphite text-white")}
                animate={index === 4 ? { scale: [1, 1.08, 1] } : undefined}
                transition={index === 4 ? { duration: 3.6, repeat: Infinity, ease: "easeInOut" } : undefined}
              >
                {String(index + 1).padStart(2, "0")}
              </motion.span>
              <h3 className="mt-5 text-base font-extrabold leading-snug text-sindmed-ink">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#5a6472]">{step.text}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
      <motion.div className="mx-auto mt-8 flex max-w-5xl flex-col gap-4 rounded-3xl border border-sindmed-navy/10 bg-sindmed-graphite p-5 text-white shadow-soft md:flex-row md:items-center md:justify-between" initial="hidden" whileInView="visible" viewport={viewport} variants={fadeUp}>
        <div className="flex items-center gap-3">
          <ShieldCheck className="h-7 w-7 shrink-0 text-sindmed-lime" />
          <strong className="text-lg font-extrabold">Conhece o sindicato → consulta o conteúdo → se associa ou denuncia → o Sindmed recebe por e-mail.</strong>
        </div>
        <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold text-white/70">Jornada simples e direta</span>
      </motion.div>
    </section>
  );
}

function PlatformSection({ parallax }: { parallax: MouseParallax }) {
  const [active, setActive] = useState(platformPanels[0].id);
  const panel = platformPanels.find((item) => item.id === active) ?? platformPanels[0];

  return (
    <section id="plataforma" className="relative isolate overflow-hidden px-5 py-20 md:py-28">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(255,255,255,0),rgba(255,255,255,0.52),rgba(139,209,76,0.14))]" />
      <SectionParallaxBackground parallax={parallax} />
      <SectionHeader eyebrow="O site em ação" title="Duas frentes: o que o associado vê e o que a equipe administra" text="A proposta não é apenas um site bonito. É uma área pública completa somada a um painel administrativo que dá autonomia total à equipe do sindicato." />
      <div className="mx-auto mt-12 max-w-6xl">
        <div className="mx-auto flex max-w-2xl flex-col gap-2 rounded-2xl border border-sindmed-ink/10 bg-white/60 p-2 shadow-[0_18px_48px_rgba(10,22,40,0.07)] backdrop-blur-xl sm:flex-row">
          {platformPanels.map((item) => (
            <button key={item.id} type="button" onClick={() => setActive(item.id)} className={cn("relative flex-1 rounded-xl px-4 py-3 text-sm font-extrabold transition", active === item.id ? "text-white" : "text-[#5a6472] hover:bg-white/70 hover:text-sindmed-ink")}>
              {active === item.id ? <motion.span layoutId="active-tab" className="absolute inset-0 rounded-xl bg-sindmed-graphite" transition={{ duration: 0.25 }} /> : null}
              <span className="relative z-10">{item.label}</span>
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div key={panel.id} className="mt-6 overflow-hidden rounded-[2rem] border border-white/70 bg-white/70 shadow-[0_34px_100px_rgba(10,22,40,0.13)] backdrop-blur-2xl" initial={{ opacity: 0, y: 18, filter: "blur(8px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} exit={{ opacity: 0, y: -12, filter: "blur(8px)" }} transition={{ duration: 0.36 }}>
            <div className="grid lg:grid-cols-[0.76fr_1.24fr]">
              <div className="dark-panel p-7 text-white md:p-9">
                <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-sindmed-lime">{panel.eyebrow}</span>
                <h3 className="mt-4 text-3xl font-extrabold leading-tight">{panel.title}</h3>
                <div className="mt-8 grid gap-3">
                  {panel.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-3 text-sm font-bold text-white/80">
                      <Check className="h-4 w-4 shrink-0 text-sindmed-lime" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-white to-sindmed-blue/10 p-5 md:p-8">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#7b869a]">Prévia</p>
                    <h4 className="mt-2 text-2xl font-extrabold text-sindmed-ink">{panel.label}</h4>
                  </div>
                  <span className="rounded-full bg-sindmed-blue/10 px-3 py-2 text-xs font-extrabold text-sindmed-navy">No ar</span>
                </div>
                <div className="mt-6 grid gap-4 md:grid-cols-[1fr_0.8fr]">
                  <div className="rounded-2xl border border-sindmed-ink/10 bg-white/75 p-4">
                    <div className="flex items-center justify-between">
                      <strong className="text-sm font-extrabold text-sindmed-ink">Últimas notícias</strong>
                      <Eye className="h-4 w-4 text-sindmed-blue" />
                    </div>
                    {[
                      ["Campanha salarial 2026", "Publicado"],
                      ["Convenção coletiva em PDF", "Atualizado"],
                      ["Novos benefícios ao associado", "Publicado"],
                    ].map(([title, status]) => (
                      <motion.div key={title} className="dashboard-row mt-4 flex items-center justify-between gap-3 rounded-xl bg-sindmed-porcelain/80 p-3" whileHover={{ x: 3 }}>
                        <span className="text-sm font-bold text-sindmed-graphite">{title}</span>
                        <small className="shrink-0 text-xs font-bold text-[#6c7789]">{status}</small>
                      </motion.div>
                    ))}
                  </div>
                  <div className="rounded-2xl border border-sindmed-ink/10 bg-white/75 p-4">
                    <strong className="text-sm font-extrabold text-sindmed-ink">Sempre à mão</strong>
                    <div className="mt-4 rounded-xl bg-sindmed-graphite p-4 text-white">
                      <MessageCircle className="h-5 w-5 text-sindmed-lime" />
                      <p className="mt-3 text-sm font-bold leading-6">Botão fixo de WhatsApp em todas as páginas.</p>
                    </div>
                    <div className="mt-3 rounded-xl border border-sindmed-blue/20 bg-sindmed-blue/5 p-4">
                      <Camera className="h-5 w-5 text-sindmed-navy" />
                      <p className="mt-3 text-sm font-bold leading-6 text-sindmed-navy">Posts do Instagram na home.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const [open, setOpen] = useState(0);

  return (
    <section id="funcionalidades" className="px-5 py-20 md:py-28">
      <SectionHeader eyebrow="Funcionalidades incluídas" title="Organizadas por categoria para leitura clara" text="O escopo cobre os blocos essenciais para apresentar o sindicato, comunicar, receber associações e denúncias e publicar conteúdo com autonomia." />
      <div className="mx-auto mt-12 grid max-w-6xl gap-4 lg:grid-cols-4">
        {featureGroups.map((group, index) => (
          <motion.article key={group.title} className="premium-card group overflow-hidden rounded-3xl border border-sindmed-ink/10 bg-white/70 shadow-[0_18px_48px_rgba(10,22,40,0.07)] backdrop-blur-xl" initial="hidden" whileInView="visible" viewport={viewport} variants={fadeUp} whileHover={{ y: -5 }}>
            <button type="button" className="flex w-full items-center justify-between gap-4 p-5 text-left" onClick={() => setOpen(open === index ? -1 : index)}>
              <span className="flex items-center gap-3">
                <span className="premium-icon grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-sindmed-blue/10 text-sindmed-navy">
                  <IconByName name={group.icon} className="h-5 w-5" />
                </span>
                <strong className="text-base font-extrabold text-sindmed-ink">{group.title}</strong>
              </span>
              <ChevronDown className={cn("h-4 w-4 shrink-0 text-[#6c7789] transition lg:hidden", open === index && "rotate-180")} />
            </button>
            <ul className={cn("gap-3 px-5 pb-5 lg:grid", open === index ? "grid" : "hidden")}>
              {group.items.map((item) => (
                <li key={item} className="flex gap-2 text-sm font-semibold leading-6 text-[#5a6472]">
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-sindmed-blue" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function SecuritySection() {
  return (
    <section className="relative overflow-hidden px-5 py-20 md:py-28">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(145deg,#0A1628,#01379A)]" />
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeader align="left" light eyebrow="Confiança e sigilo" title="Um canal digital que o associado pode usar com segurança" text="O site trata dados sensíveis com cuidado: a denúncia pode ser anônima, os dados da associação não ficam expostos e só a equipe autorizada publica conteúdo." />
        <motion.div initial="hidden" whileInView="visible" viewport={viewport} variants={stagger} className="grid gap-4">
          <div className="grid gap-4 md:grid-cols-3">
            {securityCards.map((card) => (
              <motion.article key={card.title} variants={fadeUp} className="dark-premium-card rounded-3xl border border-white/20 bg-white/10 p-5 text-white backdrop-blur-xl">
                <ShieldCheck className="h-7 w-7 text-sindmed-lime" />
                <h3 className="mt-5 text-base font-extrabold leading-snug">{card.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/60">{card.text}</p>
              </motion.article>
            ))}
          </div>
          <motion.div variants={fadeUp} className="dark-premium-card rounded-3xl border border-white/20 bg-white/10 p-5 text-white backdrop-blur-xl">
            <div className="grid gap-3 md:grid-cols-3">
              {[
                { label: "Denúncia anônima", icon: Lock, muted: true },
                { label: "Dados enviados por e-mail", icon: Mail },
                { label: "Publicação controlada", icon: LayoutDashboard },
              ].map(({ label, icon: Icon, muted }, index) => (
                <motion.div
                  key={label}
                  className="dark-premium-card rounded-2xl border border-white/10 bg-white/10 p-4"
                  initial={{ opacity: 0.72, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.45, delay: index * 0.12 }}
                  whileHover={{ y: -3 }}
                >
                  <Icon className={cn("h-6 w-6", muted ? "text-white/50" : "text-sindmed-lime")} />
                  <strong className="mt-4 block text-sm font-extrabold">{label}</strong>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function PhasesSection({ parallax }: { parallax: MouseParallax }) {
  return (
    <section className="relative isolate overflow-hidden px-5 py-20 md:py-28">
      <SectionParallaxBackground parallax={parallax} />
      <SectionHeader eyebrow="Fases de implementação" title="Uma implantação guiada, com risco controlado" text="A construção em etapas permite alinhar identidade e conteúdo, montar as páginas institucionais, ativar os formulários, entregar o painel e publicar com treinamento." />
      <div className="phase-timeline relative mx-auto mt-14 max-w-5xl">
        <motion.div className="phase-timeline-line" initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={viewport} transition={{ duration: 1.2, ease: "easeOut" }} />
        <div className="grid gap-8 md:gap-10">
          {implementationPhases.map((phase, index) => {
            const alignRight = index % 2 === 1;

            return (
              <motion.article
                key={phase.phase}
                className="relative z-10 grid grid-cols-[2.5rem_minmax(0,1fr)] gap-4 md:grid-cols-[minmax(0,1fr)_4rem_minmax(0,1fr)] md:gap-6"
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                variants={fadeUp}
              >
                <motion.span
                  className={cn("phase-connector hidden md:block", alignRight ? "phase-connector-right" : "phase-connector-left")}
                  initial={{ opacity: 0, scaleX: 0 }}
                  whileInView={{ opacity: 1, scaleX: 1 }}
                  viewport={viewport}
                  transition={{ duration: 0.48, ease: "easeOut", delay: index * 0.08 + 0.18 }}
                />
                <motion.span
                  className="phase-marker col-start-1 row-start-1 mt-6 grid h-10 w-10 place-items-center rounded-full bg-sindmed-graphite text-xs font-extrabold text-white md:col-start-2 md:mx-auto"
                  initial={{ opacity: 0, scale: 0.78 }}
                  whileInView={{ opacity: 1, scale: [0.78, 1.12, 1] }}
                  viewport={viewport}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                >
                  {index + 1}
                </motion.span>
                <motion.div
                  className={cn(
                    "phase-card premium-card col-start-2 row-start-1 rounded-3xl border border-sindmed-ink/10 bg-white/72 p-6 shadow-[0_18px_48px_rgba(10,22,40,0.07)] backdrop-blur-xl md:p-7",
                    alignRight ? "md:col-start-3" : "md:col-start-1",
                  )}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.26, ease: "easeOut" }}
                >
                  <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-sindmed-blue">{phase.phase}</span>
                  <h3 className="mt-3 text-xl font-extrabold text-sindmed-ink">{phase.title}</h3>
                  <ul className="mt-5 grid gap-2">
                    {phase.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-center gap-2 text-sm font-semibold text-[#5a6472]">
                        <Check className="h-4 w-4 shrink-0 text-sindmed-blue" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function InvestmentSection({ parallax }: { parallax: MouseParallax }) {
  return (
    <section id="investimento" className="relative isolate overflow-hidden px-5 py-20 text-white md:py-28">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(145deg,#0A1628,#01379A)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(120deg,rgba(139,209,76,0.16),transparent_40%,rgba(255,255,255,0.04))]" />
      <SectionParallaxBackground parallax={parallax} tone="dark" />
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.88fr_0.72fr]">
        <SectionHeader align="left" light eyebrow="Investimento" title="Investimento para desenvolvimento do site institucional" text="Um projeto sob medida para estruturar a identidade, as páginas institucionais, os formulários de associação e denúncia, o painel de notícias, os testes e a publicação." />
        <motion.article className="dark-premium-card relative overflow-hidden rounded-[2rem] border border-sindmed-lime/30 bg-white/10 p-7 shadow-[0_34px_100px_rgba(0,0,0,0.24)] backdrop-blur-2xl" initial="hidden" whileInView="visible" viewport={viewport} variants={scaleIn} whileHover={{ y: -5 }}>
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sindmed-graphite via-sindmed-blue to-sindmed-lime" />
          <span className="investment-neon-label rounded-full border px-3 py-2 text-xs font-extrabold uppercase tracking-[0.16em]">Site Institucional Sindmed ABC</span>
          <div className="mt-8 border-b border-white/20 pb-7">
            <small className="text-xs font-extrabold uppercase tracking-[0.16em] text-white/50">Desenvolvimento do site</small>
            <motion.strong className="mt-3 block text-5xl font-extrabold tracking-tight md:text-6xl" initial={{ opacity: 0, scale: 0.94 }} whileInView={{ opacity: 1, scale: 1 }} viewport={viewport} transition={{ duration: 0.55, ease: "easeOut", delay: 0.12 }}>
              R$ 5.900,00
            </motion.strong>
          </div>
          <div className="mt-5 rounded-2xl border border-sindmed-lime/30 bg-sindmed-lime/10 p-4">
            <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-sindmed-lime">Condição</span>
            <p className="mt-2 text-sm font-bold leading-6 text-white/80">50% para início do projeto e 50% na entrega/publicação.</p>
          </div>
          <div className="mt-3 rounded-2xl border border-white/15 bg-white/10 p-4">
            <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-sindmed-lime">Prazo</span>
            <p className="mt-2 text-sm font-bold leading-6 text-white/80">Até 60 dias para desenvolvimento completo, incluindo implementação, testes, ajustes e publicação.</p>
          </div>
          <ul className="mt-6 grid gap-3">
            {investmentIncludes.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm font-semibold leading-6 text-white/70">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sindmed-lime" />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-6 grid gap-2 text-xs leading-6 text-white/50">
            <p>O formulário de associação envia os dados por e-mail ao sindicato. Pagamento online (Pix ou cartão) não está incluso neste escopo — veja em &ldquo;Evoluções Futuras&rdquo;.</p>
            <p>Domínio, hospedagem, serviços externos e custos de terceiros não estão inclusos.</p>
            <p>Portal de transparência não faz parte deste escopo.</p>
          </div>
        </motion.article>
      </div>
    </section>
  );
}

function MaintenanceSection() {
  return (
    <section className="px-5 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.78fr_1.22fr]">
        <motion.div className="dark-premium-card rounded-[2rem] bg-sindmed-graphite p-7 text-white shadow-soft" initial="hidden" whileInView="visible" viewport={viewport} variants={scaleIn} whileHover={{ y: -4 }}>
          <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-sindmed-lime">Manutenção</span>
          <h2 className="mt-5 text-3xl font-extrabold leading-tight md:text-5xl">Manutenção e suporte do site</h2>
          <div className="mt-8 rounded-3xl border border-white/20 bg-white/10 p-5">
            <p className="mb-5 rounded-2xl border border-sindmed-lime/20 bg-sindmed-lime/10 px-4 py-3 text-sm font-semibold leading-6 text-white/75">
              A forma de contratação da manutenção pode ser ajustada conforme o budget e a rotina de publicação do sindicato.
            </p>
            <small className="text-xs font-extrabold uppercase tracking-[0.16em] text-white/50">Mensalidade fixa</small>
            <strong className="mt-3 block text-4xl font-extrabold text-sindmed-lime">R$ 150,00/mês</strong>
            <p className="mt-3 text-sm font-semibold leading-6 text-white/70">Cobre monitoramento, correções técnicas, atualizações preventivas e suporte ao uso do painel ao longo do mês.</p>
          </div>
        </motion.div>
        <motion.div className="grid content-start gap-3 rounded-[2rem] border border-sindmed-ink/10 bg-white/70 p-5 shadow-[0_18px_48px_rgba(10,22,40,0.07)] backdrop-blur-xl sm:grid-cols-2" initial="hidden" whileInView="visible" viewport={viewport} variants={stagger}>
          {maintenanceItems.map((item) => (
            <motion.div key={item} variants={fadeUp} className="premium-card flex items-center gap-3 rounded-2xl border border-sindmed-ink/10 bg-white/70 p-4 text-sm font-bold text-sindmed-graphite" whileHover={{ y: -3 }}>
              <LifeBuoy className="h-4 w-4 shrink-0 text-sindmed-blue" />
              {item}
            </motion.div>
          ))}
          <div className="rounded-2xl border border-sindmed-navy/25 bg-sindmed-navy/[0.06] p-4 sm:col-span-2">
            <span className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.16em] text-sindmed-navy">
              <LayoutDashboard className="h-4 w-4 shrink-0" />
              Manutenção técnica, não operacional
            </span>
            <p className="mt-3 text-sm font-semibold leading-6 text-[#1a4fa0]">
              A manutenção cobre o funcionamento do site, não a produção de conteúdo. O painel administrativo é entregue justamente para que a equipe do Sindmed publique notícias, fotos, vídeos e PDFs com autonomia — a alimentação do site é responsabilidade do sindicato.
            </p>
          </div>
          <p className="rounded-2xl border border-sindmed-blue/20 bg-[#eef4ff] p-4 text-sm font-semibold leading-6 text-[#1a4fa0] sm:col-span-2">Novas funcionalidades, integrações adicionais, automações avançadas ou alterações estruturais serão avaliadas e orçadas separadamente.</p>
        </motion.div>
      </div>
    </section>
  );
}

function OptionalSection() {
  return (
    <section className="px-5 py-20 md:py-28">
      <motion.div className="mx-auto max-w-3xl text-center" variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}>
        <span className="inline-flex items-center gap-2 rounded-full border border-sindmed-blue/20 bg-white/70 px-3 py-1.5 text-xs font-extrabold uppercase tracking-[0.16em] text-sindmed-navy shadow-[0_12px_30px_rgba(10,22,40,0.05)]">
          <span className="h-1.5 w-1.5 rounded-full bg-sindmed-blue" />
          Evoluções futuras
        </span>
        <h2 className="mt-5 text-balance text-3xl font-extrabold leading-[1.05] text-sindmed-ink md:text-5xl">O site pode crescer junto com o sindicato</h2>
        <p className="mt-5 text-base leading-8 text-[#55606f] md:text-lg">O projeto nasce com a base institucional completa e pode ganhar novos módulos conforme o Sindmed ABC quiser ampliar serviços digitais para os associados. Cada item abaixo passa por análise técnica e orçamento específico antes da implementação.</p>
      </motion.div>
      <motion.div className="mx-auto mt-12 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-5" initial="hidden" whileInView="visible" viewport={viewport} variants={stagger}>
        {optionalItems.map((item) => (
          <motion.article key={item.label} variants={fadeUp} whileHover={{ y: -5, scale: 1.01 }} className="premium-card group rounded-3xl border border-sindmed-ink/10 bg-white/70 p-5 shadow-[0_18px_48px_rgba(10,22,40,0.06)] backdrop-blur-xl">
            <span className="premium-icon grid h-11 w-11 place-items-center rounded-2xl bg-sindmed-blue/10 text-sindmed-navy">
              <IconByName name={item.icon} className="h-5 w-5" />
            </span>
            <strong className="mt-5 block text-sm font-extrabold leading-6 text-sindmed-ink">{item.label}</strong>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}

function MoralesSection() {
  return (
    <section className="px-5 py-20 md:py-28">
      <motion.div className="mx-auto grid max-w-6xl gap-10 rounded-[2rem] bg-sindmed-graphite p-7 text-white shadow-soft md:p-10 lg:grid-cols-[1fr_0.9fr]" initial="hidden" whileInView="visible" viewport={viewport} variants={fadeUp}>
        <div>
          <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-sindmed-lime">Por que a Morales Soluções</span>
          <h2 className="mt-5 text-3xl font-extrabold leading-tight md:text-5xl">Tecnologia sob medida com visão institucional</h2>
          <p className="mt-5 text-base leading-8 text-white/70">A Morales Soluções une desenvolvimento sob medida, visão de negócio e experiência em plataformas digitais para criar uma solução pensada para a realidade do Sindmed ABC e dos médicos que ele representa.</p>
        </div>
        <div className="grid content-start gap-3 sm:grid-cols-2">
          {moralesPoints.map((point) => (
            <div key={point} className="rounded-2xl border border-white/10 bg-white/10 p-4 text-sm font-bold text-white/80">
              {point}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function FinalCta() {
  return (
    <section id="aprovar" className="px-5 pb-10 pt-20 md:pt-28">
      <motion.div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-[linear-gradient(145deg,#0A1628,#01379A)] p-7 text-center text-white shadow-[0_34px_100px_rgba(10,22,40,0.2)] md:p-12" initial="hidden" whileInView="visible" viewport={viewport} variants={fadeUp}>
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-sindmed-lime/20 blur-[70px]" />
        <div className="pointer-events-none absolute -bottom-28 left-10 h-64 w-64 rounded-full bg-sindmed-blue/12 blur-[76px]" />
        <span className="relative text-xs font-extrabold uppercase tracking-[0.18em] text-sindmed-lime">Próximo passo</span>
        <h2 className="relative mx-auto mt-5 max-w-4xl text-balance text-3xl font-extrabold leading-tight md:text-6xl">Pronto para colocar o Sindmed ABC no ar?</h2>
        <p className="relative mx-auto mt-6 max-w-3xl text-base leading-8 text-white/70">Com o novo site institucional, o sindicato passa a ter um canal oficial à altura da sua representatividade: notícias sempre atualizadas, associação digital, canal de denúncias sigiloso e autonomia total para publicar.</p>
        <div className="relative mt-8 flex justify-center">
          <ButtonLink href={whatsappApprovalLink} variant="light">
            Aprovar proposta
          </ButtonLink>
        </div>
        <div className="relative mt-8 flex flex-wrap justify-center gap-2">
          <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold text-white/70">Morales Soluções</span>
          <a href="https://moralessolucoes.com.br/tecnologia" target="_blank" rel="noreferrer" className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold text-white/70 transition hover:bg-white/20">
            moralessolucoes.com.br/tecnologia
          </a>
          <a href={whatsappLink} target="_blank" rel="noreferrer" className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold text-white/70 transition hover:bg-white/20">
            {whatsappDisplay}
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export function ProposalPage() {
  const parallax = useMouseParallax();

  return (
    <MotionConfig reducedMotion="user">
      <main className="min-h-screen overflow-hidden">
        <Header />
        <HeroSection parallax={parallax} />
        <ChallengeSection />
        <SolutionSection parallax={parallax} />
        <FlowSection parallax={parallax} />
        <PlatformSection parallax={parallax} />
        <FeaturesSection />
        <SecuritySection />
        <PhasesSection parallax={parallax} />
        <InvestmentSection parallax={parallax} />
        <MaintenanceSection />
        <OptionalSection />
        <MoralesSection />
        <FinalCta />
        <footer className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-3 px-5 py-10 text-center text-sm font-semibold text-[#6c7789]">
          <span className="grid h-10 w-10 place-items-center overflow-hidden rounded-xl border border-sindmed-blue/20 bg-white shadow-[0_12px_30px_rgba(1,84,215,0.14)]">
            <Image src={moralesLogoSrc} alt="Morales Soluções" width={36} height={36} className="h-8 w-8 object-contain" />
          </span>
          <span>© 2026 Sindmed ABC. Todos os direitos reservados.</span>
          <span>
            Desenvolvido por{" "}
            <a href="https://moralessolucoes.com.br/tecnologia" target="_blank" rel="noreferrer" className="font-extrabold text-sindmed-blue transition hover:text-sindmed-graphite">
              Morales Soluções
            </a>
          </span>
        </footer>
      </main>
    </MotionConfig>
  );
}
