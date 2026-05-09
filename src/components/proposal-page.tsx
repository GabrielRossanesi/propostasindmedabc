"use client";

import { useState, type ReactNode } from "react";
import { AnimatePresence, MotionConfig, motion, useMotionValueEvent, useReducedMotion, useScroll, useTransform } from "framer-motion";
import type { MotionValue, Variants } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Boxes,
  Building2,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  CreditCard,
  Database,
  Eye,
  Gift,
  History,
  KeyRound,
  Layers,
  LayoutDashboard,
  LifeBuoy,
  Lock,
  Menu,
  MessageCircle,
  Package,
  PackageCheck,
  Receipt,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Tags,
  Upload,
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
  orderStatuses,
  platformPanels,
  securityCards,
  solutionHighlights,
} from "@/lib/proposal-data";
import { useMouseParallax } from "@/hooks/use-mouse-parallax";

const iconMap = {
  boxes: Boxes,
  calendar: CalendarDays,
  cart: ShoppingCart,
  chart: BarChart3,
  credit: CreditCard,
  dashboard: LayoutDashboard,
  database: Database,
  history: History,
  key: KeyRound,
  layers: Layers,
  lock: Lock,
  messages: MessageCircle,
  package: Package,
  payment: CreditCard,
  receipt: Receipt,
  rocket: Sparkles,
  tags: Tags,
  upload: Upload,
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
        className={cn("pointer-events-none absolute -z-10 h-80 w-80 rounded-full blur-[70px]", tone === "dark" ? "right-[4%] top-[14%] bg-bloom-champagne/14" : "right-[8%] top-[10%] bg-bloom-green/10")}
      />
      <ParallaxLayer
        x={parallax.x}
        y={parallax.y}
        strength={-7}
        strengthY={5}
        className={cn("pointer-events-none absolute -z-10 h-64 w-64 rounded-full blur-[68px]", tone === "dark" ? "bottom-[8%] left-[5%] bg-white/8" : "bottom-[10%] left-[4%] bg-bloom-champagne/16")}
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
            : "border-bloom-green/20 bg-white/70 text-bloom-forest shadow-[0_12px_30px_rgba(23,24,20,0.05)]",
        )}
      >
        <span className={cn("h-1.5 w-1.5 rounded-full", light ? "bg-bloom-champagne" : "bg-bloom-green")} />
        {eyebrow}
      </span>
      <h2 className={cn("mt-5 text-balance text-3xl font-extrabold leading-[1.05] md:text-5xl", light ? "text-white" : "text-bloom-ink")}>
        {title}
      </h2>
      {text ? <p className={cn("mt-5 text-base leading-8 md:text-lg", light ? "text-white/70" : "text-[#62645f]")}>{text}</p> : null}
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
        "group relative inline-flex min-h-12 items-center justify-center gap-2 overflow-hidden rounded-full px-5 text-sm font-extrabold outline-none transition focus-visible:ring-2 focus-visible:ring-bloom-champagne focus-visible:ring-offset-2 focus-visible:ring-offset-bloom-porcelain md:min-h-14 md:px-6",
        variant === "primary" && "bg-bloom-graphite text-white shadow-[0_20px_48px_rgba(23,77,62,0.22)] hover:bg-bloom-forest",
        variant === "secondary" &&
          "border border-bloom-ink/10 bg-white/70 text-bloom-graphite shadow-[0_14px_34px_rgba(23,24,20,0.06)] hover:border-bloom-green/30 hover:bg-white",
        variant === "light" && "bg-white text-bloom-graphite shadow-[0_20px_48px_rgba(0,0,0,0.18)] hover:bg-bloom-porcelain",
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
      <motion.div className="fixed left-0 top-0 z-[80] h-1 w-full origin-left bg-gradient-to-r from-bloom-green via-bloom-champagne to-bloom-rose" style={{ scaleX: progress }} />
      <header className="fixed left-1/2 top-4 z-50 w-[min(calc(100%_-_24px),1180px)] -translate-x-1/2">
        <motion.div
          className={cn(
            "glass-panel flex min-h-16 items-center justify-between rounded-full px-3 py-2 transition-all duration-500",
            isScrolled && "border-bloom-ink/10 bg-white/85 shadow-[0_22px_70px_rgba(23,24,20,0.14)]",
          )}
          animate={{ y: isScrolled ? -2 : 0, scale: isScrolled ? 0.992 : 1 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <a href="#inicio" className="flex min-w-0 items-center gap-3 rounded-full pr-2">
            <span className="grid h-11 w-11 place-items-center rounded-lg bg-gradient-to-br from-bloom-forest via-bloom-green to-bloom-champagne text-sm font-extrabold text-white shadow-glow">
              BG
            </span>
            <span className="min-w-0">
              <strong className="block truncate text-sm font-extrabold text-bloom-ink md:text-base">Bloom Gifts Franchise Portal</strong>
              <small className="hidden text-xs font-semibold text-[#74766f] sm:block">Proposta comercial interativa</small>
            </span>
          </a>

          <nav className="hidden items-center rounded-full border border-bloom-ink/10 bg-bloom-porcelain/70 p-1 lg:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="group relative rounded-full px-4 py-2 text-sm font-bold text-[#666961] transition hover:bg-white hover:text-bloom-ink">
                {item.label}
                <span className="absolute inset-x-4 bottom-1 h-px origin-left scale-x-0 bg-bloom-green transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a href="#aprovar" className="group relative hidden overflow-hidden rounded-full bg-bloom-graphite px-5 py-3 text-sm font-bold text-white shadow-[0_16px_34px_rgba(23,77,62,0.2)] transition hover:-translate-y-0.5 hover:bg-bloom-forest sm:inline-flex">
              <span className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 transition duration-700 group-hover:left-full group-hover:opacity-100" />
              <span className="relative z-10">
              Aprovar proposta
              </span>
            </a>
            <button type="button" className="grid h-11 w-11 place-items-center rounded-full border border-bloom-ink/10 bg-white text-bloom-ink lg:hidden" onClick={() => setOpen((value) => !value)} aria-label={open ? "Fechar menu" : "Abrir menu"}>
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
                <a key={item.href} href={item.href} className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-bold text-bloom-graphite transition hover:bg-white" onClick={() => setOpen(false)}>
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
      className={cn("absolute z-30 hidden items-center gap-2 rounded-full border border-white/70 bg-white/80 px-4 py-3 text-xs font-bold text-bloom-graphite shadow-[0_20px_50px_rgba(23,24,20,0.12)] backdrop-blur-xl md:flex", className)}
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
        <ClipboardCheck className="h-4 w-4 text-bloom-green" />
        Pedido aguardando aprovação
      </FloatingBadge>
      <FloatingBadge className="right-2 top-1/3 xl:-right-4" delay={0.8}>
        <CreditCard className="h-4 w-4 text-bloom-green" />
        Pagamento liberado
      </FloatingBadge>
      <FloatingBadge className="bottom-14 right-10" delay={1.2}>
        <PackageCheck className="h-4 w-4 text-bloom-green" />
        Produção autorizada
      </FloatingBadge>
      <FloatingBadge className="bottom-36 left-2 xl:-left-3" delay={1.6}>
        <Building2 className="h-4 w-4 text-bloom-green" />
        Franquia conectada
      </FloatingBadge>

      <ParallaxLayer x={parallax.x} y={parallax.y} strength={4} strengthY={3} rotate={0.45} className="relative z-10">
        <motion.div className="relative overflow-hidden rounded-[1.6rem] border border-white/70 bg-white/70 shadow-[0_38px_110px_rgba(23,24,20,0.18)] backdrop-blur-2xl" whileHover={{ y: -5, rotateY: -0.6, rotateX: 0.4, scale: 1.003 }} transition={{ duration: 0.35 }}>
          <motion.div
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-transparent via-white/35 to-transparent"
            initial={{ x: "-140%" }}
            animate={{ x: "760%" }}
            transition={{ duration: 6.8, repeat: Infinity, repeatDelay: 2.8, ease: "easeInOut" }}
          />
          <div className="flex min-h-12 items-center gap-2 border-b border-bloom-ink/10 bg-white/60 px-5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#dc8b91]" />
            <span className="h-2.5 w-2.5 rounded-full bg-bloom-champagne" />
            <span className="h-2.5 w-2.5 rounded-full bg-bloom-green" />
            <span className="ml-3 text-xs font-extrabold uppercase tracking-[0.18em] text-[#818279]">Portal privado</span>
          </div>

        <div className="grid min-h-[520px] grid-cols-1 md:grid-cols-[84px_1fr]">
          <aside className="hidden bg-bloom-graphite p-4 md:block">
            <div className="grid h-10 w-10 place-items-center rounded-lg bg-white/10 text-xs font-extrabold text-white">BG</div>
            <div className="mt-8 space-y-3">
              {[0, 1, 2, 3].map((item) => (
                <span key={item} className={cn("block h-9 rounded-lg bg-white/10", item === 0 && "bg-white text-bloom-graphite shadow-lg")} />
              ))}
            </div>
          </aside>

          <div className="bg-gradient-to-br from-white via-[#fbfaf6] to-bloom-mint/50 p-5 md:p-7">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#85877f]">Pedido #BG-2487</p>
                <h3 className="mt-2 max-w-sm text-2xl font-extrabold leading-tight text-bloom-ink">Kit boas-vindas para unidade Campinas</h3>
              </div>
              <span className="w-fit rounded-full border border-bloom-champagne/40 bg-[#fff7e7] px-3 py-2 text-xs font-extrabold text-[#7b5d2b]">
                Aguardando aprovação
              </span>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              {[
                ["Valor", "R$ 4.860"],
                ["Itens", "320"],
                ["Unidade", "Campinas"],
              ].map(([label, value]) => (
                <motion.div key={label} className="premium-card rounded-2xl border border-bloom-ink/10 bg-white/70 p-4 shadow-[0_14px_34px_rgba(23,24,20,0.06)]" whileHover={{ y: -3 }}>
                  <span className="text-[0.68rem] font-extrabold uppercase tracking-[0.16em] text-[#8a8c84]">{label}</span>
                  <strong className="mt-2 block text-sm font-extrabold text-bloom-graphite md:text-lg">{value}</strong>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 grid gap-2 sm:grid-cols-4">
              {["Pedido", "Aprovação", "Pagamento", "Produção"].map((step, index) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0.72 }}
                  animate={index === 1 ? { opacity: [0.86, 1, 0.86], scale: [1, 1.025, 1] } : { opacity: 1 }}
                  transition={{ duration: 3.8, repeat: index === 1 ? Infinity : 0, ease: "easeInOut" }}
                  className={cn("rounded-full border px-3 py-3 text-center text-xs font-extrabold", index === 0 && "border-bloom-green/30 bg-bloom-mint text-bloom-forest", index === 1 && "border-transparent bg-bloom-forest text-white shadow-glow", index > 1 && "border-bloom-ink/10 bg-white/70 text-[#8a8c84]")}
                >
                  {step}
                </motion.div>
              ))}
            </div>

            <div className="mt-6 grid gap-4 lg:grid-cols-[1.18fr_0.82fr]">
              <div className="rounded-2xl border border-bloom-ink/10 bg-white/70 p-4 shadow-[0_14px_34px_rgba(23,24,20,0.06)]">
                <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#85877f]">Produtos no catálogo</p>
                {[
                  ["Garrafa térmica personalizada", "120 unidades"],
                  ["Ecobag premium", "200 unidades"],
                ].map(([title, quantity]) => (
                  <div key={title} className="mt-4 flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-bloom-mint text-bloom-forest">
                      <Gift className="h-5 w-5" />
                    </span>
                    <div>
                      <strong className="block text-sm font-extrabold text-bloom-ink">{title}</strong>
                      <small className="text-xs font-semibold text-[#777970]">{quantity}</small>
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl bg-bloom-graphite p-4 text-white shadow-[0_18px_42px_rgba(23,24,20,0.16)]">
                <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-white/50">Regra operacional</p>
                <strong className="mt-3 block text-lg font-extrabold leading-snug">Pagamento bloqueado até aprovação.</strong>
                <p className="mt-3 text-sm leading-6 text-white/60">Produção liberada apenas com pagamento confirmado.</p>
                <div className="mt-5 rounded-xl border border-white/10 bg-white/10 p-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-white/75">
                    <ShieldCheck className="h-4 w-4 text-bloom-champagne" />
                    Sequência protegida
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
      <ParallaxLayer x={parallax.x} y={parallax.y} strength={4} strengthY={3} className="absolute inset-[-4%] -z-10 bg-[linear-gradient(115deg,rgba(255,255,255,0.96),rgba(247,244,237,0.88)_46%,rgba(221,239,231,0.55))]" />
      <ParallaxLayer x={parallax.x} y={parallax.y} strength={6} strengthY={4} className="absolute right-[-4%] top-[-4%] -z-10 h-[108%] w-[56%] bg-[linear-gradient(135deg,transparent,rgba(47,125,100,0.10))]" />
      <ParallaxLayer x={parallax.x} y={parallax.y} strength={7} strengthY={5} className="pointer-events-none absolute left-[8%] top-[14%] -z-10">
        <motion.div
          className="h-44 w-44 rounded-full bg-bloom-green/15 blur-[46px]"
          animate={{ x: [0, 18, 0], y: [0, -14, 0], scale: [1, 1.06, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </ParallaxLayer>
      <ParallaxLayer x={parallax.x} y={parallax.y} strength={-8} strengthY={6} className="pointer-events-none absolute right-[10%] top-[10%] -z-10">
        <motion.div
          className="h-56 w-56 rounded-full bg-bloom-champagne/20 blur-[46px]"
          animate={{ x: [0, -16, 0], y: [0, 18, 0], scale: [1, 1.04, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
      </ParallaxLayer>
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]">
        <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
          <motion.span variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-bloom-green/20 bg-white/70 px-3 py-2 text-xs font-extrabold uppercase tracking-[0.16em] text-bloom-forest shadow-[0_16px_40px_rgba(23,24,20,0.06)]">
            <span className="h-1.5 w-1.5 rounded-full bg-bloom-green" />
            Plataforma fechada de pedidos, aprovação e pagamento
          </motion.span>
          <motion.h1 variants={fadeUp} className="mt-6 text-balance text-5xl font-extrabold leading-[0.96] text-bloom-ink md:text-7xl">
            Bloom Gifts Franchise Portal
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-balance text-xl font-bold leading-8 text-bloom-graphite md:text-2xl">
            A plataforma fechada para transformar pedidos de brindes em uma operação aprovada, paga e rastreável.
          </motion.p>
          <motion.p variants={fadeUp} className="mt-5 max-w-2xl text-base leading-8 text-[#62645f] md:text-lg">
            Centralize franquias, catálogo, aprovações, pagamentos e produção em um único ambiente privado, com controle total do pedido até a entrega.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#solucao">Ver solução proposta</ButtonLink>
            <ButtonLink href="#fluxo" variant="secondary">
              Entender fluxo operacional
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
      <SectionHeader eyebrow="O desafio" title="Escalar pedidos de brindes em redes de franquias exige controle real" text="Quando pedidos circulam por WhatsApp, e-mail ou planilhas, a operação perde rastreabilidade, aprovação e segurança financeira." />
      <motion.div className="mx-auto mt-12 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3" initial="hidden" whileInView="visible" viewport={viewport} variants={stagger}>
        {challengeCards.map((card) => (
          <motion.article key={card.title} variants={fadeUp} whileHover={{ y: -6 }} className="premium-card group relative overflow-hidden rounded-3xl border border-bloom-ink/10 bg-white/70 p-6 shadow-[0_18px_48px_rgba(23,24,20,0.07)] backdrop-blur-xl">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-bloom-green/30 to-transparent opacity-0 transition group-hover:opacity-100" />
            <span className="premium-icon grid h-12 w-12 place-items-center rounded-2xl bg-bloom-mint text-bloom-forest transition group-hover:bg-bloom-forest group-hover:text-white">
              <IconByName name={card.icon} className="h-5 w-5" />
            </span>
            <h3 className="mt-5 text-lg font-extrabold text-bloom-ink">{card.title}</h3>
            <p className="mt-2 text-sm leading-6 text-[#686a63]">{card.text}</p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}

function SolutionSection({ parallax }: { parallax: MouseParallax }) {
  return (
    <section id="solucao" className="relative isolate overflow-hidden px-5 py-20 md:py-28">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(145deg,#20231f,#174d3e)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(255,255,255,0.05),transparent_40%,rgba(216,190,138,0.10))]" />
      <SectionParallaxBackground parallax={parallax} tone="dark" />
      <div className="mx-auto grid max-w-6xl items-start gap-10 lg:grid-cols-[0.86fr_1.14fr]">
        <SectionHeader align="left" light eyebrow="A solução" title="Uma plataforma privada para conectar franquias, marca e Bloom Gifts" text="O Bloom Gifts Franchise Portal centraliza todo o processo de compra de brindes personalizados em um ambiente fechado, seguro e organizado." />
        <motion.div initial="hidden" whileInView="visible" viewport={viewport} variants={stagger} className="grid gap-4">
          <motion.div variants={fadeUp} className="rounded-3xl border border-white/20 bg-white/10 p-6 text-white backdrop-blur-xl">
            <p className="text-lg font-bold leading-8 text-white/80">A franquia acessa o catálogo, monta o pedido, envia para aprovação, paga após autorização e acompanha o status até a conclusão.</p>
          </motion.div>
          <motion.div variants={stagger} className="grid gap-3 sm:grid-cols-2">
            {solutionHighlights.map((item) => (
              <motion.div key={item} variants={fadeUp} className="dark-premium-card flex items-start gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 text-sm font-bold leading-6 text-white/80">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-bloom-champagne" />
                {item}
              </motion.div>
            ))}
          </motion.div>
          <motion.div variants={fadeUp} className="rounded-3xl border border-bloom-champagne/30 bg-bloom-champagne/10 p-6 text-white shadow-[0_26px_70px_rgba(0,0,0,0.18)]">
            <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-bloom-champagne">Regra central</span>
            <strong className="mt-3 block text-2xl font-extrabold leading-tight">Pedido só vai para produção depois de aprovado e pago.</strong>
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
      <SectionHeader eyebrow="Fluxo operacional" title="Fluxo inteligente de pedido, aprovação e pagamento" text="A sequência protege a operação: a franquia solicita, a marca aprova, o pagamento é liberado e a Bloom produz apenas depois da confirmação." />
      <div className="relative mx-auto mt-14 max-w-7xl">
        <motion.div className="absolute left-5 top-0 h-full w-px origin-top bg-gradient-to-b from-bloom-green via-bloom-champagne to-bloom-green lg:hidden" initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={viewport} transition={{ duration: 1.1, ease: "easeOut" }} />
        <motion.div className="absolute left-[5%] right-[5%] top-10 hidden h-px origin-left bg-gradient-to-r from-transparent via-bloom-green to-transparent lg:block" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={viewport} transition={{ duration: 1.2, ease: "easeOut" }} />
        <motion.div className="grid gap-4 pl-10 md:grid-cols-2 lg:grid-cols-4 lg:pl-0" initial="hidden" whileInView="visible" viewport={viewport} variants={stagger}>
          {flowSteps.map((step, index) => (
            <motion.article key={step.title} variants={fadeUp} whileHover={{ y: -6 }} className={cn("premium-card timeline-card relative rounded-3xl border bg-white/70 p-6 shadow-[0_18px_48px_rgba(23,24,20,0.07)] backdrop-blur-xl", index === 4 ? "border-bloom-champagne/50 ring-1 ring-bloom-champagne/30" : "border-bloom-ink/10")}>
              <motion.span
                className={cn("timeline-number grid h-11 w-11 place-items-center rounded-full text-sm font-extrabold", index === 4 ? "bg-bloom-champagne text-bloom-graphite" : "bg-bloom-graphite text-white")}
                animate={index === 4 ? { scale: [1, 1.08, 1] } : undefined}
                transition={index === 4 ? { duration: 3.6, repeat: Infinity, ease: "easeInOut" } : undefined}
              >
                {String(index + 1).padStart(2, "0")}
              </motion.span>
              <h3 className="mt-5 text-base font-extrabold leading-snug text-bloom-ink">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#666960]">{step.text}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
      <motion.div className="mx-auto mt-8 flex max-w-5xl flex-col gap-4 rounded-3xl border border-bloom-forest/10 bg-bloom-graphite p-5 text-white shadow-soft md:flex-row md:items-center md:justify-between" initial="hidden" whileInView="visible" viewport={viewport} variants={fadeUp}>
        <div className="flex items-center gap-3">
          <ShieldCheck className="h-7 w-7 shrink-0 text-bloom-champagne" />
          <strong className="text-lg font-extrabold">Franquia solicita → gerente aprova → pagamento libera → franquia paga → Bloom produz.</strong>
        </div>
        <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold text-white/70">Sequência operacional protegida</span>
      </motion.div>
    </section>
  );
}

function PlatformSection({ parallax }: { parallax: MouseParallax }) {
  const [active, setActive] = useState(platformPanels[0].id);
  const panel = platformPanels.find((item) => item.id === active) ?? platformPanels[0];

  return (
    <section id="plataforma" className="relative isolate overflow-hidden px-5 py-20 md:py-28">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(255,255,255,0),rgba(255,255,255,0.52),rgba(221,239,231,0.28))]" />
      <SectionParallaxBackground parallax={parallax} />
      <SectionHeader eyebrow="Plataforma em ação" title="Telas que simulam a operação real de cada perfil" text="A proposta não é apenas um catálogo online. É um portal operacional fechado com painéis específicos para Bloom, franquia e gerente geral." />
      <div className="mx-auto mt-12 max-w-6xl">
        <div className="mx-auto flex max-w-3xl flex-col gap-2 rounded-2xl border border-bloom-ink/10 bg-white/60 p-2 shadow-[0_18px_48px_rgba(23,24,20,0.07)] backdrop-blur-xl sm:flex-row">
          {platformPanels.map((item) => (
            <button key={item.id} type="button" onClick={() => setActive(item.id)} className={cn("relative flex-1 rounded-xl px-4 py-3 text-sm font-extrabold transition", active === item.id ? "text-white" : "text-[#686a63] hover:bg-white/70 hover:text-bloom-ink")}>
              {active === item.id ? <motion.span layoutId="active-tab" className="absolute inset-0 rounded-xl bg-bloom-graphite" transition={{ duration: 0.25 }} /> : null}
              <span className="relative z-10">{item.label}</span>
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div key={panel.id} className="mt-6 overflow-hidden rounded-[2rem] border border-white/70 bg-white/70 shadow-[0_34px_100px_rgba(23,24,20,0.13)] backdrop-blur-2xl" initial={{ opacity: 0, y: 18, filter: "blur(8px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} exit={{ opacity: 0, y: -12, filter: "blur(8px)" }} transition={{ duration: 0.36 }}>
            <div className="grid lg:grid-cols-[0.76fr_1.24fr]">
              <div className="dark-panel p-7 text-white md:p-9">
                <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-bloom-champagne">{panel.eyebrow}</span>
                <h3 className="mt-4 text-3xl font-extrabold leading-tight">{panel.title}</h3>
                <div className="mt-8 grid gap-3">
                  {panel.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-3 text-sm font-bold text-white/80">
                      <Check className="h-4 w-4 text-bloom-champagne" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-white to-bloom-mint/40 p-5 md:p-8">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#85877f]">Dashboard</p>
                    <h4 className="mt-2 text-2xl font-extrabold text-bloom-ink">{panel.label}</h4>
                  </div>
                  <span className="rounded-full bg-bloom-mint px-3 py-2 text-xs font-extrabold text-bloom-forest">Online</span>
                </div>
                <motion.div className="mt-6 grid gap-3 sm:grid-cols-3" initial="hidden" animate="visible" variants={stagger}>
                  {panel.stats.map((stat) => (
                    <motion.div key={stat.label} className="premium-card rounded-2xl border border-bloom-ink/10 bg-white/75 p-4 shadow-[0_14px_34px_rgba(23,24,20,0.06)]" variants={scaleIn} whileHover={{ y: -4, scale: 1.015 }}>
                      <span className="text-[0.68rem] font-extrabold uppercase tracking-[0.16em] text-[#8a8c84]">{stat.label}</span>
                      <strong className="mt-2 block text-xl font-extrabold text-bloom-graphite">{stat.value}</strong>
                    </motion.div>
                  ))}
                </motion.div>
                <div className="mt-6 grid gap-4 md:grid-cols-[1fr_0.8fr]">
                  <div className="rounded-2xl border border-bloom-ink/10 bg-white/75 p-4">
                    <div className="flex items-center justify-between">
                      <strong className="text-sm font-extrabold text-bloom-ink">Pedidos recentes</strong>
                      <Eye className="h-4 w-4 text-bloom-green" />
                    </div>
                    {["Aguardando aprovação", "Pagamento aprovado", "Em produção"].map((status, index) => (
                      <motion.div key={status} className="dashboard-row mt-4 flex items-center justify-between rounded-xl bg-bloom-porcelain/80 p-3" whileHover={{ x: 3 }}>
                        <span className="text-sm font-bold text-bloom-graphite">#BG-{2487 + index}</span>
                        <small className="text-xs font-bold text-[#76786f]">{status}</small>
                      </motion.div>
                    ))}
                  </div>
                  <div className="rounded-2xl border border-bloom-ink/10 bg-white/75 p-4">
                    <strong className="text-sm font-extrabold text-bloom-ink">Próxima ação</strong>
                    <div className="mt-4 rounded-xl bg-bloom-graphite p-4 text-white">
                      <CreditCard className="h-5 w-5 text-bloom-champagne" />
                      <p className="mt-3 text-sm font-bold leading-6">Liberar pagamento após aprovação gerencial.</p>
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

function StatusSection() {
  return (
    <section className="px-5 py-20 md:py-28">
      <SectionHeader eyebrow="Status dos pedidos" title="Controle total do pedido, do início à conclusão" text="A esteira de status deixa claro em que ponto cada pedido está, quem precisa agir e quando a Bloom pode produzir." />
      <motion.div className="mx-auto mt-12 flex max-w-6xl flex-wrap justify-center gap-3" initial="hidden" whileInView="visible" viewport={viewport} variants={stagger}>
        {orderStatuses.map((status, index) => (
          <motion.span
            key={status}
            variants={fadeUp}
            whileHover={{ y: -3, scale: 1.015 }}
            animate={index < 3 ? { boxShadow: ["0 12px 30px rgba(23,24,20,0.05)", "0 16px 38px rgba(47,125,100,0.16)", "0 12px 30px rgba(23,24,20,0.05)"] } : undefined}
            transition={index < 3 ? { duration: 3.8, repeat: Infinity, delay: index * 0.38, ease: "easeInOut" } : undefined}
            className={cn("status-chip rounded-full border px-4 py-3 text-sm font-extrabold shadow-[0_12px_30px_rgba(23,24,20,0.05)]", index >= 8 ? "border-bloom-rose/20 bg-[#fff1f4] text-[#865661]" : "border-bloom-green/20 bg-white/75 text-bloom-forest", index < 3 && "status-chip-active")}
          >
            {status}
          </motion.span>
        ))}
      </motion.div>
    </section>
  );
}

function FeaturesSection() {
  const [open, setOpen] = useState(0);

  return (
    <section className="px-5 py-20 md:py-28">
      <SectionHeader eyebrow="Funcionalidades incluídas" title="Organizadas por categoria para leitura clara" text="O escopo cobre os blocos essenciais para cadastrar, pedir, aprovar, pagar, produzir e acompanhar com segurança." />
      <div className="mx-auto mt-12 grid max-w-6xl gap-4 lg:grid-cols-5">
        {featureGroups.map((group, index) => (
          <motion.article key={group.title} className="premium-card group overflow-hidden rounded-3xl border border-bloom-ink/10 bg-white/70 shadow-[0_18px_48px_rgba(23,24,20,0.07)] backdrop-blur-xl" initial="hidden" whileInView="visible" viewport={viewport} variants={fadeUp} whileHover={{ y: -5 }}>
            <button type="button" className="flex w-full items-center justify-between gap-4 p-5 text-left" onClick={() => setOpen(open === index ? -1 : index)}>
              <span className="flex items-center gap-3">
                <span className="premium-icon grid h-11 w-11 place-items-center rounded-2xl bg-bloom-mint text-bloom-forest">
                  <IconByName name={group.icon} className="h-5 w-5" />
                </span>
                <strong className="text-base font-extrabold text-bloom-ink">{group.title}</strong>
              </span>
              <ChevronDown className={cn("h-4 w-4 text-[#74766f] transition lg:hidden", open === index && "rotate-180")} />
            </button>
            <ul className={cn("gap-3 px-5 pb-5 lg:grid", open === index ? "grid" : "hidden")}>
              {group.items.map((item) => (
                <li key={item} className="flex gap-2 text-sm font-semibold leading-6 text-[#666960]">
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-bloom-green" />
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
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(145deg,#20231f,#174d3e)]" />
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeader align="left" light eyebrow="Segurança operacional" title="Menos risco humano, mais controle operacional" text="A plataforma reduz falhas manuais ao impedir que pedidos avancem fora da sequência correta." />
        <motion.div initial="hidden" whileInView="visible" viewport={viewport} variants={stagger} className="grid gap-4">
          <div className="grid gap-4 md:grid-cols-3">
            {securityCards.map((card) => (
              <motion.article key={card.title} variants={fadeUp} className="dark-premium-card rounded-3xl border border-white/20 bg-white/10 p-5 text-white backdrop-blur-xl">
                <ShieldCheck className="h-7 w-7 text-bloom-champagne" />
                <h3 className="mt-5 text-base font-extrabold leading-snug">{card.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/60">{card.text}</p>
              </motion.article>
            ))}
          </div>
          <motion.div variants={fadeUp} className="dark-premium-card rounded-3xl border border-white/20 bg-white/10 p-5 text-white backdrop-blur-xl">
            <div className="grid gap-3 md:grid-cols-3">
              {[
                { label: "Pagamento bloqueado", icon: Lock, muted: true },
                { label: "Pagamento liberado", icon: CreditCard },
                { label: "Produção autorizada", icon: PackageCheck },
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
                  <Icon className={cn("h-6 w-6", muted ? "text-white/50" : "text-bloom-champagne")} />
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
      <SectionHeader eyebrow="Fases de implementação" title="Uma implantação guiada, com risco controlado" text="A construção em etapas permite alinhar o fluxo, validar a base, integrar pagamento e publicar com treinamento." />
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
                  className="phase-marker col-start-1 row-start-1 mt-6 grid h-10 w-10 place-items-center rounded-full bg-bloom-graphite text-xs font-extrabold text-white md:col-start-2 md:mx-auto"
                  initial={{ opacity: 0, scale: 0.78 }}
                  whileInView={{ opacity: 1, scale: [0.78, 1.12, 1] }}
                  viewport={viewport}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                >
                  {index + 1}
                </motion.span>
                <motion.div
                  className={cn(
                    "phase-card premium-card col-start-2 row-start-1 rounded-3xl border border-bloom-ink/10 bg-white/72 p-6 shadow-[0_18px_48px_rgba(23,24,20,0.07)] backdrop-blur-xl md:p-7",
                    alignRight ? "md:col-start-3" : "md:col-start-1",
                  )}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.26, ease: "easeOut" }}
                >
                  <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-bloom-green">{phase.phase}</span>
                  <h3 className="mt-3 text-xl font-extrabold text-bloom-ink">{phase.title}</h3>
                  <ul className="mt-5 grid gap-2">
                    {phase.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-center gap-2 text-sm font-semibold text-[#666960]">
                        <Check className="h-4 w-4 shrink-0 text-bloom-green" />
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
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(145deg,#171814,#174d3e)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(120deg,rgba(216,190,138,0.14),transparent_40%,rgba(255,255,255,0.04))]" />
      <SectionParallaxBackground parallax={parallax} tone="dark" />
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.88fr_0.72fr]">
        <SectionHeader align="left" light eyebrow="Investimento" title="Investimento para desenvolvimento da plataforma" text="Um projeto sob medida para estruturar usuários, catálogo, aprovação, pagamento, gestão de pedidos, testes, publicação e suporte inicial." />
        <motion.article className="dark-premium-card relative overflow-hidden rounded-[2rem] border border-white/20 bg-white/10 p-7 shadow-[0_34px_100px_rgba(0,0,0,0.24)] backdrop-blur-2xl" initial="hidden" whileInView="visible" viewport={viewport} variants={scaleIn} whileHover={{ y: -5 }}>
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-bloom-green via-bloom-champagne to-bloom-rose" />
          <span className="investment-neon-label rounded-full border px-3 py-2 text-xs font-extrabold uppercase tracking-[0.16em]">Bloom Gifts Franchise Portal</span>
          <div className="mt-8 border-b border-white/20 pb-7">
            <small className="text-xs font-extrabold uppercase tracking-[0.16em] text-white/50">Desenvolvimento da plataforma</small>
            <motion.strong className="mt-3 block text-5xl font-extrabold tracking-tight md:text-6xl" initial={{ opacity: 0, scale: 0.94 }} whileInView={{ opacity: 1, scale: 1 }} viewport={viewport} transition={{ duration: 0.55, ease: "easeOut", delay: 0.12 }}>
              R$ 19.990,00
            </motion.strong>
          </div>
          <div className="mt-5 rounded-2xl border border-bloom-champagne/30 bg-bloom-champagne/10 p-4">
            <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-bloom-champagne">Condição</span>
            <p className="mt-2 text-sm font-bold leading-6 text-white/80">50% para início do projeto e 50% na entrega/publicação.</p>
          </div>
          <ul className="mt-6 grid gap-3">
            {investmentIncludes.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm font-semibold leading-6 text-white/70">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-bloom-champagne" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xs leading-6 text-white/50">Taxas de gateway de pagamento, domínio, hospedagem, serviços externos e custos de terceiros não estão inclusos.</p>
        </motion.article>
      </div>
    </section>
  );
}

function MaintenanceSection() {
  return (
    <section className="px-5 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.78fr_1.22fr]">
        <motion.div className="dark-premium-card rounded-[2rem] bg-bloom-graphite p-7 text-white shadow-soft" initial="hidden" whileInView="visible" viewport={viewport} variants={scaleIn} whileHover={{ y: -4 }}>
          <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-bloom-champagne">Manutenção</span>
          <h2 className="mt-5 text-3xl font-extrabold leading-tight md:text-5xl">Manutenção, suporte e evolução contínua</h2>
          <div className="mt-8 rounded-3xl border border-white/20 bg-white/10 p-5">
            <small className="text-xs font-extrabold uppercase tracking-[0.16em] text-white/50">Valor mensal</small>
            <motion.strong className="mt-3 block text-4xl font-extrabold" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={viewport} transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}>
              R$ 350,00/mês
            </motion.strong>
          </div>
        </motion.div>
        <motion.div className="grid content-start gap-3 rounded-[2rem] border border-bloom-ink/10 bg-white/70 p-5 shadow-[0_18px_48px_rgba(23,24,20,0.07)] backdrop-blur-xl sm:grid-cols-2" initial="hidden" whileInView="visible" viewport={viewport} variants={stagger}>
          {maintenanceItems.map((item) => (
            <motion.div key={item} variants={fadeUp} className="premium-card flex items-center gap-3 rounded-2xl border border-bloom-ink/10 bg-white/70 p-4 text-sm font-bold text-bloom-graphite" whileHover={{ y: -3 }}>
              <LifeBuoy className="h-4 w-4 text-bloom-green" />
              {item}
            </motion.div>
          ))}
          <p className="rounded-2xl border border-bloom-champagne/30 bg-[#fff7e7] p-4 text-sm font-semibold leading-6 text-[#755b2f] sm:col-span-2">Novas funcionalidades, integrações adicionais ou alterações estruturais serão orçadas separadamente.</p>
        </motion.div>
      </div>
    </section>
  );
}

function OptionalSection() {
  return (
    <section className="px-5 py-20 md:py-28">
      <SectionHeader eyebrow="Opcionais futuros" title="A plataforma pode evoluir conforme a operação amadurece" text="O portal nasce com a base essencial e pode ganhar módulos avançados quando a Bloom quiser ampliar automações, relatórios e integrações." />
      <motion.div className="mx-auto mt-12 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-5" initial="hidden" whileInView="visible" viewport={viewport} variants={stagger}>
        {optionalItems.map((item) => (
          <motion.article key={item.label} variants={fadeUp} whileHover={{ y: -5, scale: 1.01 }} className="premium-card group rounded-3xl border border-bloom-ink/10 bg-white/70 p-5 shadow-[0_18px_48px_rgba(23,24,20,0.06)] backdrop-blur-xl">
            <span className="premium-icon grid h-11 w-11 place-items-center rounded-2xl bg-bloom-mint text-bloom-forest">
              <IconByName name={item.icon} className="h-5 w-5" />
            </span>
            <strong className="mt-5 block text-sm font-extrabold leading-6 text-bloom-ink">{item.label}</strong>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}

function MoralesSection() {
  return (
    <section className="px-5 py-20 md:py-28">
      <motion.div className="mx-auto grid max-w-6xl gap-10 rounded-[2rem] bg-bloom-graphite p-7 text-white shadow-soft md:p-10 lg:grid-cols-[1fr_0.9fr]" initial="hidden" whileInView="visible" viewport={viewport} variants={fadeUp}>
        <div>
          <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-bloom-champagne">Por que a Morales Soluções</span>
          <h2 className="mt-5 text-3xl font-extrabold leading-tight md:text-5xl">Tecnologia sob medida com visão comercial e operacional</h2>
          <p className="mt-5 text-base leading-8 text-white/70">A Morales Soluções une desenvolvimento sob medida, visão de negócio e experiência em plataformas digitais para criar uma solução pensada para a operação real da Bloom Gifts e das redes de franquias atendidas.</p>
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
      <motion.div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-[linear-gradient(145deg,#174d3e,#20231f)] p-7 text-center text-white shadow-[0_34px_100px_rgba(23,24,20,0.18)] md:p-12" initial="hidden" whileInView="visible" viewport={viewport} variants={fadeUp}>
        <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-bloom-champagne">Próximo passo</span>
        <h2 className="mx-auto mt-5 max-w-4xl text-balance text-3xl font-extrabold leading-tight md:text-6xl">Pronta para transformar a operação de pedidos da Bloom Gifts?</h2>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/70">Com o Bloom Gifts Franchise Portal, a Bloom passa a oferecer uma experiência mais profissional para redes de franquias, centralizando pedidos, aprovações, pagamentos e produção em um único ambiente.</p>
        <div className="mt-8 flex justify-center">
          <ButtonLink href="https://wa.me/5511944006443?text=Ol%C3%A1%21%20Analisei%20a%20proposta%20do%20Bloom%20Gifts%20Franchise%20Portal%20e%20gostaria%20de%20dar%20sequ%C3%AAncia." variant="light">
            Aprovar proposta
          </ButtonLink>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold text-white/70">Morales Soluções</span>
          <a href="https://moralessolucoes.com.br/tecnologia" target="_blank" rel="noreferrer" className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold text-white/70 transition hover:bg-white/20">
            moralessolucoes.com.br/tecnologia
          </a>
          <a href="https://wa.me/5511944006443" target="_blank" rel="noreferrer" className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold text-white/70 transition hover:bg-white/20">
            +55 11 94400-6443
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
        <StatusSection />
        <FeaturesSection />
        <SecuritySection />
        <PhasesSection parallax={parallax} />
        <InvestmentSection parallax={parallax} />
        <MaintenanceSection />
        <OptionalSection />
        <MoralesSection />
        <FinalCta />
        <footer className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-2 px-5 py-8 text-center text-sm font-semibold text-[#777970]">
          <span>© 2026 Morales Soluções. Todos os direitos reservados.</span>
          <span>
            Desenvolvido por{" "}
            <a href="https://moralessolucoes.com.br/tecnologia" target="_blank" rel="noreferrer" className="font-extrabold text-bloom-green transition hover:text-bloom-forest">
              Morales Soluções
            </a>
          </span>
        </footer>
      </main>
    </MotionConfig>
  );
}
