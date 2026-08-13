import { useState } from "react";
import { Menu, X, ArrowRight, Star, Phone, Instagram, MapPin, Clock, Check, MessageCircle, ChevronDown } from "lucide-react";

const WA_NUMBER = "5519982920110";
const WA_MSG = encodeURIComponent("Olá! Gostaria de agendar uma consulta gratuita de mega hair.");
const WA_URL = `https://wa.me/${WA_NUMBER}?text=${WA_MSG}`;

const display = "'Fraunces', serif";
const sans = "'Outfit', sans-serif";

const SERVICES = [
  { num: "01", title: "Queratina", sub: "Natural & Duradouro", desc: "Fios 100% humanos fixados com queratina. Resultado que dura meses com aspecto completamente natural.", hrs: "4–6h" },
  { num: "02", title: "Fita Adesiva", sub: "Discreta & Rápida", desc: "Técnica de alta performance para quem busca volume e comprimento com agilidade e discrição.", hrs: "2–3h" },
  { num: "03", title: "Microlink", sub: "Sem Calor", desc: "Microanéis sem calor e sem dano. Ideal para cabelos finos e sensíveis que precisam de cuidado extra.", hrs: "3–5h" },
  { num: "04", title: "Manutenção", sub: "Trimestral", desc: "Reposicionamento dos fios a cada 3–4 meses para garantir resultado impecável por muito mais tempo.", hrs: "2–4h" },
];

const GALLERY = [
  { src: "https://images.unsplash.com/photo-1636153279424-cb5d1e00f5a2?w=600&h=800&fit=crop&auto=format&q=80", alt: "Cabelo longo e volumoso", span: "row-span-2" },
  { src: "https://images.unsplash.com/photo-1619218533116-f050e7d91d91?w=600&h=400&fit=crop&auto=format&q=80", alt: "Mega hair natural", span: "" },
  { src: "https://images.unsplash.com/photo-1611367540736-b1b38aff784b?w=600&h=400&fit=crop&auto=format&q=80", alt: "Volume e brilho", span: "" },
  { src: "https://images.unsplash.com/photo-1535579710123-3c0f261c474e?w=600&h=800&fit=crop&auto=format&q=80", alt: "Resultado mega hair", span: "row-span-2" },
  { src: "https://images.unsplash.com/photo-1574015974293-817f0ebebb74?w=600&h=400&fit=crop&auto=format&q=80", alt: "Cabelo liso mega hair", span: "" },
  { src: "https://images.unsplash.com/photo-1633381521050-26bb467d9d5a?w=600&h=400&fit=crop&auto=format&q=80", alt: "Transformação completa", span: "" },
];



const REVIEWS = [
  { name: "Camila F.", city: "Rio Claro", text: "Nunca imaginei que ficaria tão natural. Ninguém acredita que não é meu cabelo — já fiz três vezes!", stars: 5 },
  { name: "Juliana M.", city: "Rio Claro", text: "Atendimento impecável do começo ao fim. O resultado superou todas as minhas expectativas.", stars: 5 },
  { name: "Renata O.", city: "Rio Claro", text: "Saí com cabelo na cintura. O processo foi cuidadoso e o visual ficou absolutamente perfeito.", stars: 5 },
];

const PLANS = [
  { label: "Essencial", price: "890", unit: "até 50 fios", items: ["Cabelos naturais virgens", "Até 55 cm de comprimento", "Queratina ou fita adesiva", "Consultoria de cor"], cta: false },
  { label: "Luxe", price: "1.890", unit: "até 120 fios", items: ["Cabelos premium coloridos", "Até 70 cm de comprimento", "Todas as técnicas", "Retoque em 60 dias grátis", "Kit de manutenção incluso"], cta: true },
  { label: "Signature", price: "—", unit: "volume total", items: ["Cabelos raros exclusivos", "Acima de 70 cm", "Dia VIP reservado", "Manutenção trimestral", "Acesso prioritário"], cta: false },
];

export default function App() {
  const [nav, setNav] = useState(false);
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="bg-background text-foreground min-h-screen overflow-x-hidden" style={{ fontFamily: sans }}>

      {/* ── NAV ── */}
      <header className="fixed top-0 inset-x-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="text-accent font-light text-2xl" style={{ fontFamily: display, fontStyle: "italic" }}></span>
            <span className="text-sm tracking-[0.22em] uppercase font-medium text-foreground">STUDIO AFLORES</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-[13px] tracking-wide text-foreground/60">
            {["Técnicas", "Galeria", "Depoimentos", "Preços", "Contato"].map(l => (
              <a key={l} href={`#${l.toLowerCase()}`} className="hover:text-foreground transition-colors">{l}</a>
            ))}
          </nav>

          <a href={WA_URL} target="_blank" rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 bg-primary text-primary-foreground text-[12px] tracking-widest uppercase px-5 py-2.5 hover:bg-primary/90 transition-colors">
            <MessageCircle size={13} /> WhatsApp
          </a>

          <button className="md:hidden" onClick={() => setNav(!nav)}>
            {nav ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {nav && (
        <div className="fixed inset-0 z-40 bg-background flex flex-col items-center justify-center gap-7 pt-16">
          {["Técnicas", "Galeria", "Depoimentos", "Preços", "Contato"].map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setNav(false)}
              className="text-3xl font-light text-foreground/80" style={{ fontFamily: display }}>{l}</a>
          ))}
          <a href={WA_URL} target="_blank" rel="noopener noreferrer" onClick={() => setNav(false)}
            className="mt-4 flex items-center gap-2 bg-primary text-primary-foreground text-xs tracking-widest uppercase px-8 py-3">
            <MessageCircle size={13} /> WhatsApp
          </a>
        </div>
      )}

      {/* ── HERO ── */}
      <section className="relative pt-16 min-h-screen flex flex-col">
        {/* Background image — full bleed with tint */}
        <div className="absolute inset-0 bg-card">
          <img
            src="/images/hero-bg.jpg"
            alt="Mulher com cabelos longos e naturais"
            className="w-full h-full object-cover object-top opacity-40"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, #faf7f200 40%, #faf7f2ff 100%)" }} />
        </div>

        {/* Content */}
        <div className="relative flex-1 flex flex-col max-w-7xl mx-auto w-full px-6 md:px-10">
          {/* Tag row */}
          <div className="pt-20 md:pt-28 flex items-center gap-3">
            <div className="w-8 h-px bg-accent" />
            <span className="text-[11px] tracking-[0.35em] uppercase text-accent font-medium">Salão Especializado em Mega Hair · Rio Claro</span>
          </div>

          {/* Giant headline */}
          <h1 className="mt-6 font-light leading-[1.0] text-foreground max-w-4xl"
            style={{ fontFamily: display, fontSize: "clamp(3rem, 8.5vw, 7.5rem)" }}>
            Seu cabelo<br />
            <em className="text-primary not-italic">dos sonhos,</em><br />
            finalmente.
          </h1>

          <p className="mt-7 text-foreground/60 leading-relaxed max-w-md text-base md:text-lg font-light">
            Técnicas premium de mega hair com fios 100% naturais. Transformação real com resultado que dura meses.
          </p>

          <div className="mt-10 flex flex-wrap gap-4 items-center">
            <a href={WA_URL} target="_blank" rel="noopener noreferrer"
              className="group flex items-center gap-3 bg-primary text-primary-foreground text-[12px] tracking-widest uppercase px-8 py-4 hover:bg-primary/90 transition-all">
              <MessageCircle size={14} /> Falar no WhatsApp
              <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#galeria" className="flex items-center gap-2 text-[12px] tracking-widest uppercase text-foreground/50 hover:text-foreground transition-colors py-4">
              Ver galeria <ArrowRight size={12} />
            </a>
          </div>

          {/* Stats bar */}
          <div className="mt-auto pt-16 pb-10 grid grid-cols-3 md:grid-cols-3 gap-6 max-w-lg">
            {[["2.400+", "Clientes atendidas"], ["6 anos", "De experiência"], ["4.9 ★", "Nota no Google"]].map(([n, l]) => (
              <div key={l} className="border-t-2 border-primary/30 pt-4">
                <p className="text-2xl md:text-3xl font-light text-primary" style={{ fontFamily: display }}>{n}</p>
                <p className="text-[11px] tracking-wider uppercase text-foreground/45 mt-1 leading-tight">{l}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll nudge */}
        <div className="relative flex justify-center pb-8 text-foreground/30">
          <ChevronDown size={22} className="animate-bounce" />
        </div>
      </section>

      {/* ── SOBRE ── */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-16 items-center">
          {/* Images stack */}
          <div className="relative h-[520px]">
            <img
              src="https://images.unsplash.com/photo-1626383137804-ff908d2753a2?w=600&h=700&fit=crop&auto=format&q=80"
              alt="Interior do salão Studio Aflores"
              className="absolute top-0 left-0 w-3/4 h-4/5 object-cover bg-card"
            />
            <img
              src="https://images.unsplash.com/photo-1619218533116-f050e7d91d91?w=400&h=480&fit=crop&auto=format&q=80"
              alt="Resultado de mega hair natural"
              className="absolute bottom-0 right-0 w-1/2 h-3/5 object-cover border-4 border-background bg-card"
            />
            {/* Badge */}
            <div className="absolute top-6 right-6 md:-right-6 bg-accent text-accent-foreground w-24 h-24 rounded-full flex flex-col items-center justify-center text-center">
              <span className="text-2xl font-light" style={{ fontFamily: display }}>8</span>
              <span className="text-[9px] tracking-wider uppercase leading-tight">anos de<br />experiência</span>
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="text-[11px] tracking-[0.35em] uppercase text-primary mb-4 font-medium">Quem somos</p>
            <h2 className="font-light leading-[1.1] mb-6 text-foreground" style={{ fontFamily: display, fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
              Especialistas em<br /><em className="not-italic text-accent">transformação</em><br />capilar.
            </h2>
            <p className="text-foreground/60 leading-relaxed mb-6 font-light">
              No Lumina Hair, cada aplicação é tratada como uma obra de arte. Usamos apenas cabelos humanos virgens de alta procedência, selecionados individualmente para cada cliente.
            </p>
            <p className="text-foreground/60 leading-relaxed mb-10 font-light">
              Nossa equipe de especialistas passa por treinamentos contínuos para oferecer as técnicas mais avançadas do mercado com total segurança e cuidado.
            </p>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-primary text-primary text-[12px] tracking-widest uppercase px-7 py-3.5 hover:bg-primary hover:text-primary-foreground transition-all">
              Agendar consulta
            </a>
          </div>
        </div>
      </section>

      {/* ── TÉCNICAS ── */}
      <section id="técnicas" className="bg-secondary py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <p className="text-[11px] tracking-[0.35em] uppercase text-primary mb-3 font-medium">O que oferecemos</p>
              <h2 className="font-light leading-[1.05]" style={{ fontFamily: display, fontSize: "clamp(2rem, 4vw, 3.2rem)" }}>
                Quatro técnicas,<br />resultado único.
              </h2>
            </div>
            <p className="text-foreground/55 max-w-xs leading-relaxed font-light text-sm">
              Cada cliente recebe uma indicação personalizada após análise completa do seu cabelo.
            </p>
          </div>

          {/* Accordion-style service list */}
          <div className="divide-y divide-border">
            {SERVICES.map((s, i) => (
              <div key={s.num}>
                <button
                  className="w-full flex items-center justify-between py-6 text-left group"
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <div className="flex items-baseline gap-5">
                    <span className="text-[11px] tracking-widest text-foreground/30 font-medium">{s.num}</span>
                    <span className="text-xl md:text-2xl font-light group-hover:text-primary transition-colors"
                      style={{ fontFamily: display }}>{s.title}</span>
                    <span className="hidden md:block text-xs tracking-wider uppercase text-accent bg-accent/10 px-3 py-1">{s.sub}</span>
                  </div>
                  <div className="flex items-center gap-4 shrink-0">
                    <span className="text-xs text-foreground/40 hidden sm:block"><Clock size={11} className="inline mr-1" />{s.hrs}</span>
                    <ChevronDown size={16} className={`text-foreground/40 transition-transform ${open === i ? "rotate-180" : ""}`} />
                  </div>
                </button>
                {open === i && (
                  <div className="pb-6 pl-12 pr-4 text-foreground/60 font-light leading-relaxed text-sm max-w-2xl">
                    {s.desc}
                    <div className="mt-4">
                      <a href={WA_URL} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary text-[11px] tracking-widest uppercase hover:gap-3 transition-all">
                        Saber mais <ArrowRight size={11} />
                      </a>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALERIA ── */}
      <section id="galeria" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="mb-12">
            <p className="text-[11px] tracking-[0.35em] uppercase text-primary mb-3 font-medium">Galeria</p>
            <h2 className="font-light" style={{ fontFamily: display, fontSize: "clamp(2rem, 4vw, 3.2rem)" }}>
              Antes e depois.<br /><em className="not-italic text-accent">Veja a diferença.</em>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[220px]">
            {GALLERY.map((g, i) => (
              <div key={i} className={`relative overflow-hidden group bg-card ${g.span}`}>
                <img
                  src={g.src}
                  alt={g.alt}
                  className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESSO ── */}
      <section className="bg-primary text-primary-foreground py-24 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="mb-14 text-center">
            <p className="text-[11px] tracking-[0.35em] uppercase text-primary-foreground/50 mb-3 font-medium">Passo a passo</p>
            <h2 className="font-light text-primary-foreground" style={{ fontFamily: display, fontSize: "clamp(2rem, 4vw, 3.2rem)" }}>
              Do contato ao resultado.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              ["01", "Consulta Gratuita", "Análise do seu cabelo e indicação da técnica ideal para o seu objetivo."],
              ["02", "Escolha dos Fios", "Seleção de cor, textura e comprimento perfeitos para o resultado desejado."],
              ["03", "Aplicação", "Nossas especialistas aplicam com cuidado e precisão milimétrica."],
              ["04", "Cuidados", "Orientações completas para prolongar a vida útil do seu mega hair."],
            ].map(([n, t, d]) => (
              <div key={n} className="border-t border-primary-foreground/20 pt-6">
                <p className="text-5xl font-light text-primary-foreground/20 mb-4" style={{ fontFamily: display }}>{n}</p>
                <h3 className="font-medium text-primary-foreground mb-2 text-lg">{t}</h3>
                <p className="text-primary-foreground/60 text-sm leading-relaxed font-light">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DEPOIMENTOS ── */}
      <section id="depoimentos" className="py-24 md:py-32 bg-secondary">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="mb-14">
            <p className="text-[11px] tracking-[0.35em] uppercase text-primary mb-3 font-medium">Depoimentos</p>
            <h2 className="font-light" style={{ fontFamily: display, fontSize: "clamp(2rem, 4vw, 3.2rem)" }}>
              Elas já <em className="not-italic text-accent">transformaram</em><br />seus cabelos.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {REVIEWS.map((r) => (
              <div key={r.name} className="bg-background p-8 flex flex-col gap-5">
                <div className="flex gap-0.5">
                  {Array.from({ length: r.stars }).map((_, i) => (
                    <Star key={i} size={12} className="fill-accent text-accent" />
                  ))}
                </div>
                <p className="font-light leading-relaxed text-foreground/75 flex-1" style={{ fontFamily: display, fontSize: "1.05rem" }}>
                  "{r.text}"
                </p>
                <div className="border-t border-border pt-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent font-medium text-sm">
                    {r.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{r.name}</p>
                    <p className="text-xs text-foreground/40">{r.city}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PREÇOS ── */}
      {/* <section id="preços" className="py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <div className="text-center mb-14">
            <p className="text-[11px] tracking-[0.35em] uppercase text-primary mb-3 font-medium">Investimento</p>
            <h2 className="font-light" style={{ fontFamily: display, fontSize: "clamp(2rem, 4vw, 3.2rem)" }}>
              Escolha o pacote ideal<br />para você.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {PLANS.map(p => (
              <div key={p.label}
                className={`relative flex flex-col p-8 border transition-all ${p.cta ? "bg-primary text-primary-foreground border-primary" : "bg-card border-border hover:border-primary/30"}`}>
                {p.cta && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-[10px] tracking-widest uppercase px-3 py-1 whitespace-nowrap">
                    Mais escolhido
                  </div>
                )}
                <p className={`text-[11px] tracking-[0.22em] uppercase mb-4 font-medium ${p.cta ? "text-primary-foreground/60" : "text-primary"}`}>
                  {p.label}
                </p>
                <div className="mb-1 flex items-baseline gap-1">
                  {p.price !== "—" && <span className={`text-sm ${p.cta ? "text-primary-foreground/60" : "text-foreground/40"}`}>R$</span>}
                  <span className="font-light" style={{ fontFamily: display, fontSize: "2.8rem" }}>{p.price}</span>
                </div>
                <p className={`text-xs mb-8 ${p.cta ? "text-primary-foreground/50" : "text-foreground/40"}`}>{p.unit}</p>

                <ul className="flex flex-col gap-3 flex-1 mb-8">
                  {p.items.map(item => (
                    <li key={item} className="flex items-start gap-3 text-sm font-light">
                      <Check size={13} className={`mt-0.5 shrink-0 ${p.cta ? "text-primary-foreground/80" : "text-primary"}`} />
                      <span className={p.cta ? "text-primary-foreground/80" : "text-foreground/65"}>{item}</span>
                    </li>
                  ))}
                </ul>

                <a href={WA_URL} target="_blank" rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 text-[11px] tracking-widest uppercase py-3.5 transition-all ${p.cta ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90" : "border border-border hover:border-primary text-foreground/60 hover:text-foreground"}`}>
                  <MessageCircle size={12} /> Falar no WhatsApp
                </a>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ── CTA FAIXA ── */}
      <section className="relative overflow-hidden py-0">
        <div className="grid md:grid-cols-2 min-h-[440px]">
          <div className="bg-accent flex flex-col justify-center px-10 md:px-16 py-16">
            <p className="text-[11px] tracking-[0.35em] uppercase text-accent-foreground/60 mb-4 font-medium">Comece agora</p>
            <h2 className="font-light text-accent-foreground leading-[1.1] mb-8"
              style={{ fontFamily: display, fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              Pronta para a sua<br />transformação?
            </h2>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-accent-foreground text-accent text-[12px] tracking-widest uppercase px-8 py-4 self-start hover:bg-accent-foreground/90 transition-all">
              <MessageCircle size={14} /> Chamar no WhatsApp
              <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          <div className="relative bg-card min-h-[300px]">
            <img
              src="https://images.unsplash.com/photo-1781450090585-1a511b7066d9?w=900&h=600&fit=crop&auto=format&q=80"
              alt="Salão Studio Aflores"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── CONTATO ── */}
      <section id="contato" className="py-24 md:py-32 bg-secondary">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-[11px] tracking-[0.35em] uppercase text-primary mb-4 font-medium">Contato</p>
            <h2 className="font-light mb-6 leading-[1.1]" style={{ fontFamily: display, fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              Agende sua<br /><em className="not-italic text-primary">consulta gratuita.</em>
            </h2>
            <p className="text-foreground/55 leading-relaxed mb-10 font-light max-w-sm">
              Na consulta avaliamos seu cabelo, discutimos a técnica ideal e você recebe um orçamento sem compromisso.
            </p>

            <a href={WA_URL} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] text-white text-[12px] tracking-widest uppercase px-7 py-4 hover:bg-[#1ebe5d] transition-all mb-12">
              <MessageCircle size={14} /> Chamar no WhatsApp
            </a>

            <div className="flex flex-col gap-5">
              {[
                [Phone, "(19) 98292-0110"],
                [Instagram, "@studio.aflores"],
                [MapPin, "Avenida 31 nº 710 - Cidade Jardim, Rio Claro, SP"],
                [Clock, "Ter–Sáb: 8h–20h"],
              ].map(([Icon, text]: any) => (
                <div key={text} className="flex items-center gap-4">
                  <div className="w-9 h-9 bg-background border border-border flex items-center justify-center shrink-0">
                    <Icon size={14} className="text-primary" />
                  </div>
                  <span className="text-sm text-foreground/65 font-light">{text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-background border border-border p-8">
            <h3 className="font-light text-xl mb-6" style={{ fontFamily: display }}>Solicitar Agendamento</h3>
            <form className="flex flex-col gap-4"
              onSubmit={e => { e.preventDefault(); window.open(WA_URL, "_blank"); }}>
              {[
                { label: "Nome completo", type: "text", ph: "Ana Carolina Silva" },
                { label: "WhatsApp", type: "tel", ph: "(11) 99999-0000" },
                { label: "E-mail", type: "email", ph: "ana@email.com" },
              ].map(f => (
                <div key={f.label}>
                  <label className="block text-[10px] tracking-widest uppercase text-foreground/45 mb-2 font-medium">{f.label}</label>
                  <input type={f.type} placeholder={f.ph} required
                    className="w-full bg-secondary border border-border px-4 py-3 text-sm text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary transition-colors font-light" />
                </div>
              ))}
              <div>
                <label className="block text-[10px] tracking-widest uppercase text-foreground/45 mb-2 font-medium">Técnica de interesse</label>
                <select className="w-full bg-secondary border border-border px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary transition-colors font-light">
                  <option value="">Selecione uma opção</option>
                  <option>Mega Hair Queratina</option>
                  <option>Mega Hair Fita Adesiva</option>
                  <option>Mega Hair Microlink</option>
                  <option>Manutenção & Reposição</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] tracking-widest uppercase text-foreground/45 mb-2 font-medium">Mensagem (opcional)</label>
                <textarea rows={3} placeholder="Conte um pouco sobre o que deseja..."
                  className="w-full bg-secondary border border-border px-4 py-3 text-sm text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary transition-colors resize-none font-light" />
              </div>
              <button type="submit"
                className="mt-2 flex items-center justify-center gap-2 bg-[#25D366] text-white text-[12px] tracking-widest uppercase py-4 hover:bg-[#1ebe5d] transition-all">
                <MessageCircle size={14} /> Enviar via mensagem
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-foreground text-background/70 py-10 px-6 md:px-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-2">
            <span className="text-accent font-light text-2xl" style={{ fontFamily: display, fontStyle: "italic" }}>L</span>
            <span className="text-sm tracking-[0.22em] uppercase font-medium text-background/80">Studio Aflores</span>
          </div>
          <p className="text-xs text-background/40 text-center">© 2026 Studio Aflores · Todos os direitos reservados.</p>
          <div className="flex gap-6 text-xs tracking-wider uppercase text-background/40">
            <a href="#técnicas" className="hover:text-background/70 transition-colors">Técnicas</a>
            <a href="#contato" className="hover:text-background/70 transition-colors">Contato</a>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="hover:text-background/70 transition-colors">WhatsApp</a>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a href={WA_URL} target="_blank" rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-[#25D366] text-white text-[11px] tracking-widest uppercase px-5 py-3.5 shadow-xl hover:bg-[#1ebe5d] transition-all hover:scale-105">
        <MessageCircle size={16} />
        <span className="hidden sm:inline">WhatsApp</span>
      </a>
    </div>
  );
}
