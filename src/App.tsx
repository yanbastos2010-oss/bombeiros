/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Users, 
  Star, 
  Check, 
  ChevronDown, 
  ArrowLeft,
  ArrowRight,
  Smartphone,
  FileText,
  Sparkles,
  Gift,
  X,
  Flame,
  HeartPulse,
  DoorOpen,
  LifeBuoy,
  Layers,
  ShieldCheck,
  AlertTriangle,
  Award,
  BookOpen,
  Printer,
  Calendar,
  Smile,
  GraduationCap
} from 'lucide-react';
import { useState } from 'react';

const getTodayFormattedDate = () => {
  const today = new Date();
  const day = String(today.getDate()).padStart(2, '0');
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const year = today.getFullYear();
  return `${day}/${month}/${year}`;
};

const textGradientClass = "bg-gradient-to-r from-red-500 via-red-600 to-red-800 bg-clip-text text-transparent font-extrabold";

const Hero = () => {
  const formattedDate = getTodayFormattedDate();
  return (
    <section className="w-full">
      <div className="bg-red-600 text-white py-3 px-4 text-center">
        <p className="text-sm font-bold tracking-wide uppercase" data-testid="text-discount-banner">
          DESCONTO SÓ HOJE NESSA PÁGINA - {formattedDate}
        </p>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-slate-900 leading-tight" data-testid="text-hero-title">
            +250 Dinâmicas Prontas para <span className={textGradientClass}>Bombeiros Mirins</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-hero-subtitle">
            Atividades educativas e divertidas para transformar encontros e treinamentos de Bombeiros Mirins.
          </p>
        </div>
        
        {/* Mockup Image */}
        <div className="max-w-3xl mx-auto mb-8 flex justify-center">
          <img 
            src="https://i.ibb.co/Y7z3Kb0h/Chat-GPT-Image-3-de-ago-de-2026-19-34-36.png" 
            alt="Chat GPT Image 3 de ago de 2026 19 34 36" 
            className="w-full max-w-2xl h-auto rounded-xl object-contain pointer-events-none select-none"
            data-testid="hero-mockup-image"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="text-center">
          <a 
            href="#pricing"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover-elevate active-elevate-2 bg-green-600 hover:bg-green-700 text-white border border-green-700 min-h-10 rounded-md text-lg px-8 py-6 h-auto font-bold uppercase cursor-pointer shadow-md" 
            data-testid="button-cta-hero" 
            id="3e5a2ad8-382f-a31e-ccf1-217390dc1ec3"
          >
            QUERO AGORA!
          </a>
        </div>
      </div>
    </section>
  );
};

const Features = () => (
  <section className="py-16 px-4 bg-white">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground" data-testid="text-section-receive">
        O Que Você Vai Receber
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="shadcn-card rounded-xl border bg-card border-card-border text-card-foreground shadow-sm hover-elevate h-full">
          <div className="flex flex-col space-y-1.5 p-6">
            <div className="w-12 h-12 rounded-md bg-red-50 flex items-center justify-center mb-4">
              <FileText className="w-6 h-6 text-red-600" />
            </div>
            <div className="font-semibold tracking-tight text-xl" data-testid="text-feature-material-completo-em-pdf">
              Material Completo em PDF
            </div>
          </div>
          <div className="p-6 pt-0">
            <p className="text-muted-foreground" data-testid="text-description-material-completo-em-pdf">
              +250 dinâmicas para Bombeiros Mirins organizadas e prontas para usar
            </p>
          </div>
        </div>

        <div className="shadcn-card rounded-xl border bg-card border-card-border text-card-foreground shadow-sm hover-elevate h-full">
          <div className="flex flex-col space-y-1.5 p-6">
            <div className="w-12 h-12 rounded-md bg-red-50 flex items-center justify-center mb-4">
              <Smartphone className="w-6 h-6 text-red-600" />
            </div>
            <div className="font-semibold tracking-tight text-xl" data-testid="text-feature-acesso-digital-completo">
              Acesso Digital Completo
            </div>
          </div>
          <div className="p-6 pt-0">
            <p className="text-muted-foreground" data-testid="text-description-acesso-digital-completo">
              Acesse por celular, tablet ou computador a qualquer hora
            </p>
          </div>
        </div>

        <div className="shadcn-card rounded-xl border bg-card border-card-border text-card-foreground shadow-sm hover-elevate h-full">
          <div className="flex flex-col space-y-1.5 p-6">
            <div className="w-12 h-12 rounded-md bg-red-50 flex items-center justify-center mb-4">
              <Printer className="w-6 h-6 text-red-600" />
            </div>
            <div className="font-semibold tracking-tight text-xl" data-testid="text-feature-pronto-para-imprimir">
              Pronto para Imprimir
            </div>
          </div>
          <div className="p-6 pt-0">
            <p className="text-muted-foreground" data-testid="text-description-pronto-para-imprimir">
              Material formatado para impressão e pronto para utilizar nos encontros
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Benefits = () => (
  <section className="py-16 px-4 bg-white">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground" data-testid="text-section-benefits">
        Benefícios Exclusivos
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="shadcn-card rounded-xl border bg-card border-card-border text-card-foreground shadow-sm hover-elevate h-full">
          <div className="flex flex-col space-y-1.5 p-6">
            <div className="w-12 h-12 rounded-md bg-red-50 flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-red-600" />
            </div>
            <div className="font-semibold tracking-tight text-xl" data-testid="text-feature-para-diferentes-idades">
              Para Diferentes Idades
            </div>
          </div>
          <div className="p-6 pt-0">
            <p className="text-muted-foreground" data-testid="text-description-para-diferentes-idades">
              Atividades adaptáveis para diferentes turmas e faixas etárias de Bombeiros Mirins
            </p>
          </div>
        </div>

        <div className="shadcn-card rounded-xl border bg-card border-card-border text-card-foreground shadow-sm hover-elevate h-full">
          <div className="flex flex-col space-y-1.5 p-6">
            <div className="w-12 h-12 rounded-md bg-red-50 flex items-center justify-center mb-4">
              <Award className="w-6 h-6 text-red-600" />
            </div>
            <div className="font-semibold tracking-tight text-xl" data-testid="text-feature-formacao-de-valores">
              Formação de Valores
            </div>
          </div>
          <div className="p-6 pt-0">
            <p className="text-muted-foreground" data-testid="text-description-formacao-de-valores">
              Dinâmicas que reforçam disciplina, responsabilidade, respeito e espírito de equipe
            </p>
          </div>
        </div>

        <div className="shadcn-card rounded-xl border bg-card border-card-border text-card-foreground shadow-sm hover-elevate h-full">
          <div className="flex flex-col space-y-1.5 p-6">
            <div className="w-12 h-12 rounded-md bg-red-50 flex items-center justify-center mb-4">
              <Smile className="w-6 h-6 text-red-600" />
            </div>
            <div className="font-semibold tracking-tight text-xl" data-testid="text-feature-aprendizado-divertido">
              Aprendizado Divertido
            </div>
          </div>
          <div className="p-6 pt-0">
            <p className="text-muted-foreground" data-testid="text-description-aprendizado-divertido">
              Atividades que tornam os conteúdos e treinamentos mais leves e participativos
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Bonuses = () => (
  <section className="py-16 px-4 bg-white">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground" data-testid="text-section-bonus">
          Bônus Exclusivos – Valor R$97 <span className="text-green-600">(Hoje Grátis!)</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="shadcn-card rounded-xl border bg-card border-card-border text-card-foreground shadow-sm hover-elevate h-full flex flex-col justify-between">
          <div>
            <div className="p-6">
              <div className="font-bold tracking-tight text-xl mb-2 bg-gradient-to-r from-red-500 via-red-600 to-red-800 bg-clip-text text-transparent" data-testid="text-bonus-title-certificado">
                Certificado de Conclusão
              </div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-muted-foreground line-through text-sm">R$37</span>
                <div className="whitespace-nowrap inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold bg-green-600 text-white border-transparent shadow-xs" data-testid="badge-gratis-1">
                  GRÁTIS
                </div>
              </div>
              <p className="text-sm text-muted-foreground" data-testid="text-bonus-description-certificado">
                Certificado de conclusão para os instrutores comprovarem a realização do treinamento e agregar valor à sua carreira profissional
              </p>
            </div>
          </div>
        </div>

        <div className="shadcn-card rounded-xl border bg-card border-card-border text-card-foreground shadow-sm hover-elevate h-full flex flex-col justify-between">
          <div>
            <div className="p-6">
              <div className="font-bold tracking-tight text-xl mb-2 bg-gradient-to-r from-red-500 via-red-600 to-red-800 bg-clip-text text-transparent" data-testid="text-bonus-title-quiz">
                Quiz Interativo
              </div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-muted-foreground line-through text-sm">R$27</span>
                <div className="whitespace-nowrap inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold bg-green-600 text-white border-transparent shadow-xs" data-testid="badge-gratis-2">
                  GRÁTIS
                </div>
              </div>
              <p className="text-sm text-muted-foreground" data-testid="text-bonus-description-quiz">
                Perguntas e desafios dinâmicos para testar e fixar os conhecimentos dos Bombeiros Mirins de forma divertida
              </p>
            </div>
          </div>
        </div>

        <div className="shadcn-card rounded-xl border bg-card border-card-border text-card-foreground shadow-sm hover-elevate h-full flex flex-col justify-between">
          <div>
            <div className="p-6">
              <div className="font-bold tracking-tight text-xl mb-2 bg-gradient-to-r from-red-500 via-red-600 to-red-800 bg-clip-text text-transparent" data-testid="text-bonus-title-manual">
                Manual de Prevenção de Incêndios em Casa e Escola
              </div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-muted-foreground line-through text-sm">R$33</span>
                <div className="whitespace-nowrap inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold bg-green-600 text-white border-transparent shadow-xs" data-testid="badge-gratis-3">
                  GRÁTIS
                </div>
              </div>
              <p className="text-sm text-muted-foreground" data-testid="text-bonus-description-manual">
                Guia com orientações práticas de prevenção e combate a princípios de incêndio para o dia a dia
              </p>
            </div>
          </div>
        </div>
      </div>

      <p className="text-center text-xl font-bold text-green-600 mt-8" data-testid="text-bonus-total">
        Total em Bônus: R$97 GRÁTIS HOJE!
      </p>
    </div>
  </section>
);

const Pricing = () => {
  const [showOfferModal, setShowOfferModal] = useState(false);

  return (
    <section id="pricing" className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground" data-testid="text-section-pricing">
          Escolha Seu Plano
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Plano Básico */}
          <div className="shadcn-card rounded-xl border bg-card border-card-border text-card-foreground shadow-sm hover-elevate h-full flex flex-col">
            <div className="flex flex-col space-y-1.5 p-6 pt-8">
              <div className="font-semibold tracking-tight text-2xl text-center" data-testid="text-plan-plano-basico">
                Plano Básico
              </div>
            </div>
            <div className="p-6 pt-0 flex-1 space-y-6">
              <div className="text-center">
                <div className="flex flex-col items-center justify-center mb-2">
                  <span className="text-xl text-muted-foreground line-through">R$47</span>
                  <span className="text-5xl font-extrabold bg-gradient-to-r from-red-500 via-red-600 to-red-800 bg-clip-text text-transparent" data-testid="text-price-plano-basico">
                    R$10,00
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">pagamento único</p>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2" data-testid="feature-plano-basico-0">
                  <Check className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">+250 Dinâmicas para Bombeiros Mirins PDF</span>
                </li>
                <li className="flex items-start gap-2" data-testid="feature-plano-basico-1">
                  <Check className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">Acesso digital e vitalício</span>
                </li>
                <li className="flex items-start gap-2" data-testid="feature-plano-basico-2">
                  <Check className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">Garantia de 7 dias</span>
                </li>
                <li className="flex items-start gap-2" data-testid="feature-plano-basico-3">
                  <X className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">Atualizações mensais</span>
                </li>
                <li className="flex items-start gap-2" data-testid="feature-plano-basico-4">
                  <X className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">Bônus exclusivos</span>
                </li>
              </ul>
            </div>
            <div className="flex items-center p-6 pt-0">
              <button 
                onClick={() => setShowOfferModal(true)}
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover-elevate active-elevate-2 bg-green-600 hover:bg-green-700 text-white border border-green-700 min-h-10 rounded-md px-8 w-full cursor-pointer py-3 font-bold uppercase" 
                data-testid="button-select-plano-basico"
              >
                ESCOLHER PLANO BÁSICO
              </button>
            </div>
          </div>

          {/* Plano Premium */}
          <div className="shadcn-card rounded-xl bg-card text-card-foreground shadow-sm hover-elevate h-full flex flex-col border-red-600 border-2 relative">
            <div className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white text-center py-2 px-4 rounded-t-md">
              <p className="text-sm font-bold uppercase" data-testid="badge-popular">MAIS POPULAR</p>
            </div>
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="font-semibold tracking-tight text-2xl text-center" data-testid="text-plan-plano-premium">
                Plano Premium
              </div>
            </div>
            <div className="p-6 pt-0 flex-1 space-y-6">
              <div className="text-center">
                <div className="flex flex-col items-center justify-center mb-2">
                  <span className="text-xl text-muted-foreground line-through">R$97</span>
                  <span className="text-5xl font-extrabold bg-gradient-to-r from-red-500 via-red-600 to-red-800 bg-clip-text text-transparent" data-testid="text-price-plano-premium">
                    R$27,00
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">pagamento único</p>
                <p className="text-sm text-muted-foreground mt-2 font-medium">+1736 pessoas escolheram essa oferta</p>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2" data-testid="feature-plano-premium-0">
                  <Check className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">+250 Dinâmicas para Bombeiros Mirins PDF</span>
                </li>
                <li className="flex items-start gap-2" data-testid="feature-plano-premium-1">
                  <Check className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">Acesso digital e vitalício</span>
                </li>
                <li className="flex items-start gap-2" data-testid="feature-plano-premium-2">
                  <Check className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">BÔNUS: Quizzes sobre Bombeiros</span>
                </li>
                <li className="flex items-start gap-2" data-testid="feature-plano-premium-3">
                  <Check className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">BÔNUS: Certificado de Conclusão</span>
                </li>
                <li className="flex items-start gap-2" data-testid="feature-plano-premium-4">
                  <Check className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">BÔNUS: +10 Planos de Aula Prontos</span>
                </li>
                <li className="flex items-start gap-2" data-testid="feature-plano-premium-5">
                  <Check className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">Atualizações mensais</span>
                </li>
                <li className="flex items-start gap-2" data-testid="feature-plano-premium-6">
                  <Check className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">Suporte prioritário</span>
                </li>
                <li className="flex items-start gap-2" data-testid="feature-plano-premium-7">
                  <Check className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">Garantia de 7 dias</span>
                </li>
              </ul>
            </div>
            <div className="flex items-center p-6 pt-0">
              <a 
                href="https://ggcheckout.app/checkout/v5/FaIT7Y9RF7CSEdAbLafi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover-elevate active-elevate-2 border border-red-700 min-h-10 rounded-md px-8 w-full bg-green-600 hover:bg-green-700 text-white cursor-pointer py-3 font-bold uppercase shadow-md text-center" 
                data-testid="button-select-plano-premium"
              >
                ESCOLHER PLANO PREMIUM
              </a>
            </div>
          </div>
        </div>
      </div>

      {showOfferModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in duration-200">
          <div className="relative bg-card text-card-foreground border border-border rounded-2xl max-w-lg w-full shadow-2xl overflow-hidden mx-auto">
            <button 
              onClick={() => setShowOfferModal(false)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 text-muted-foreground hover:text-foreground cursor-pointer p-2 rounded-full hover:bg-muted transition-colors z-10"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex flex-col items-center p-6 sm:p-8 gap-4">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shrink-0 shadow-sm">
                <Gift className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-center" data-testid="text-offer-title">
                Espere! Oferta Exclusiva!
              </h2>
              <p className="text-center text-base sm:text-lg">
                Upgrade para o Premium com <span className="text-green-600 font-bold">DESCONTO EXTRA</span>
              </p>
              <div className="w-full bg-muted/50 rounded-lg p-5 sm:p-6 text-center">
                <p className="text-xs sm:text-sm text-muted-foreground line-through mb-1">De R$ 27,00</p>
                <p className="text-3xl sm:text-4xl font-bold text-orange-500 whitespace-nowrap" data-testid="text-offer-price">
                  Por apenas R$ 19,90
                </p>
              </div>
              <ul className="w-full space-y-3">
                <li className="flex items-center gap-2.5">
                  <Check className="w-6 h-6 text-green-600 shrink-0" />
                  <span className="text-base sm:text-lg font-semibold">Todos os 3 bônus inclusos</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-6 h-6 text-green-600 shrink-0" />
                  <span className="text-base sm:text-lg font-semibold">Atualizações mensais</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-6 h-6 text-green-600 shrink-0" />
                  <span className="text-base sm:text-lg font-semibold">Suporte prioritário</span>
                </li>
              </ul>
              <div className="w-full space-y-3 mt-2">
                <a 
                  href="https://ggcheckout.app/checkout/v5/cXtDzU0IttOEjblnlios"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-bold focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover-elevate active-elevate-2 border border-green-700 min-h-12 rounded-md px-8 w-full bg-green-600 hover:bg-green-700 text-white text-base sm:text-lg cursor-pointer py-3.5 uppercase shadow-md text-center" 
                  data-testid="button-accept-offer" 
                  id="628fdc2d-6a35-dad2-d44d-3e31039555d4"
                >
                  SIM, QUERO O DESCONTO!
                </a>
                <a 
                  href="https://ggcheckout.app/checkout/v5/6dVr6stC1CzIjlXJceek"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover-elevate active-elevate-2 border border-slate-300 shadow-xs active:shadow-none min-h-10 rounded-md px-8 w-full text-base cursor-pointer py-2 text-slate-600 hover:bg-slate-100 text-center" 
                  data-testid="button-decline-offer" 
                  id="b5139952-bddd-2439-8703-8ababb6ea45a"
                >
                  Não, quero o básico
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqData = [
    {
      q: "Como acessar o material?",
      a: "O acesso ao material é 100% digital e imediato após a confirmação do pagamento. Você receberá um e-mail e uma mensagem no WhatsApp com o link para baixar tudo em PDF."
    },
    {
      q: "Posso usar em projetos e treinamentos?",
      a: "Sim! O material foi especialmente desenvolvido para instrutores, bombeiros, educadores e coordenadores utilizarem em projetos sociais, escolas e treinamentos de Bombeiros Mirins."
    },
    {
      q: "Serve para qual idade?",
      a: "As dinâmicas são altamente adaptáveis para crianças e adolescentes de diversas faixas etárias."
    },
    {
      q: "Preciso ter experiência prévia para aplicar as dinâmicas?",
      a: "Não! Todas as atividades possuem passo a passo simples e explicativo para você aplicar facilmente mesmo se for a sua primeira vez conduzindo um encontro."
    },
    {
      q: "Como funciona a garantia?",
      a: "Você tem 7 dias de garantia incondicional. Se por qualquer motivo não gostar do material, basta solicitar o reembolso que devolvemos 100% do seu dinheiro."
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground" data-testid="text-section-faq">
          Perguntas Frequentes
        </h2>
        <div className="w-full">
          <div className="w-full space-y-4">
            {faqData.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={i} className="bg-card border rounded-md px-6 shadow-xs" data-testid={`faq-item-${i}`}>
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      className="flex flex-1 items-center justify-between py-4 w-full text-left font-semibold hover:no-underline transition-all cursor-pointer"
                      data-testid={`faq-question-${i}`}
                    >
                      <span>{item.q}</span>
                      <ChevronDown className={`h-4 w-4 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                  </h3>
                  {isOpen && (
                    <div className="pb-4 text-sm text-muted-foreground transition-all leading-relaxed" data-testid={`faq-answer-${i}`}>
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-8 bg-white border-t border-slate-200 text-center">
    <div className="max-w-6xl mx-auto px-4 space-y-4">
      <p className="text-sm text-slate-600 font-medium">
        © 2026 +250 Dinâmicas Prontas para Bombeiros Mirins. Todos os direitos reservados.
      </p>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-red-600/20 selection:text-red-600">
      <main>
        <Hero />
        <Features />
        <Benefits />
        <Bonuses />
        <Pricing />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
