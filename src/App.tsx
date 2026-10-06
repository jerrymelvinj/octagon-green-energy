import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, 
  MapPin, 
  Zap, 
  Factory, 
  Sprout, 
  ChevronRight, 
  Menu, 
  X,
  MessageCircle,
  CheckCircle2,
  AlertCircle,
  Star,
  ChevronDown
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <div className="bg-primary-dark text-white text-xs md:text-sm py-2 px-4 flex justify-between md:justify-center gap-4 md:gap-8 items-center font-medium">
        <span className="flex items-center gap-2"><Phone size={14} /> +91 79042 59086</span>
        <span className="hidden md:flex items-center gap-2"><MapPin size={14} /> Woraiyur, Trichy</span>
        <a href="#calculator" className="text-accent hover:text-white transition-colors">Get Instant Quote →</a>
      </div>
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-border-subtle shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            <a href="#" className="flex items-center gap-2">
              <img src="/logo.png" alt="Octagon Green Energy" className="h-16 w-auto object-contain" />
            </a>
            
            <nav className="hidden md:flex items-center gap-8">
              <a href="#solutions" className="text-sm font-bold text-slate-700 hover:text-primary transition-colors">Solutions</a>
              <a href="#projects" className="text-sm font-bold text-slate-700 hover:text-primary transition-colors">Projects</a>
              <a href="#calculator" className="text-sm font-bold text-slate-700 hover:text-primary transition-colors">Savings Calculator</a>
              <a href="#faq" className="text-sm font-bold text-slate-700 hover:text-primary transition-colors">FAQ</a>
              <a href="#contact" className="text-sm font-bold text-slate-700 hover:text-primary transition-colors">Contact</a>
            </nav>

            <button className="md:hidden p-2 text-slate-700 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors" onClick={() => setIsOpen(!isOpen)} aria-label="Menu">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-border-subtle absolute w-full pb-4 shadow-xl overflow-hidden"
            >
              <div className="flex flex-col px-4 pt-2 pb-4 space-y-2">
                <a href="#solutions" onClick={() => setIsOpen(false)} className="block px-4 py-3 rounded-xl text-base font-bold text-slate-900 bg-slate-50 hover:bg-primary/10 hover:text-primary transition-colors">Solutions</a>
                <a href="#calculator" onClick={() => setIsOpen(false)} className="block px-4 py-3 rounded-xl text-base font-bold text-slate-900 bg-slate-50 hover:bg-primary/10 hover:text-primary transition-colors">Savings Calculator</a>
                <a href="#projects" onClick={() => setIsOpen(false)} className="block px-4 py-3 rounded-xl text-base font-bold text-slate-900 bg-slate-50 hover:bg-primary/10 hover:text-primary transition-colors">Projects</a>
                <a href="#faq" onClick={() => setIsOpen(false)} className="block px-4 py-3 rounded-xl text-base font-bold text-slate-900 bg-slate-50 hover:bg-primary/10 hover:text-primary transition-colors">FAQ</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}

function Hero() {
  return (
    <section className="relative pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden bg-white">
      {/* Background Orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] bg-primary/5 blur-[120px] rounded-full -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/20 text-primary-dark font-bold text-sm uppercase tracking-wider mb-6 border border-accent/30 shadow-sm">
            <CheckCircle2 size={16} className="text-accent-dark" /> TANGEDCO Empanelled Partner
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-primary-dark tracking-tight mb-6 leading-[1.15] max-w-5xl mx-auto">
            Slash Your Electricity Bills with Trichy's Trusted Solar Engineers.
          </h1>
          <p className="mt-6 text-lg md:text-2xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
            Turnkey rooftop and agricultural solar solutions with PM Surya Ghar subsidy assistance up to <strong className="text-primary-dark font-extrabold bg-accent/20 px-2 rounded-md">₹78,000</strong>.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#calculator" className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-xl hover:shadow-primary/30 flex items-center justify-center gap-2 border border-primary-dark">
              Calculate Your Savings <ChevronRight size={20} />
            </a>
            <a href="https://wa.me/917904259086" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-[#25D366] hover:bg-[#1DA851] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-green-500/30 flex items-center justify-center gap-2">
              <MessageCircle size={20} /> Chat on WhatsApp
            </a>
          </div>
          
          {/* Bold Emphasized Features Strip */}
          <div className="mt-16 bg-slate-50 border border-border-subtle rounded-3xl p-6 md:p-8 max-w-4xl mx-auto shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-border-subtle">
              <div className="flex flex-col items-center justify-center pt-4 md:pt-0">
                <CheckCircle2 size={32} className="text-accent mb-3 drop-shadow-sm" />
                <span className="font-extrabold text-lg text-primary-dark text-center leading-tight">Tier-1 Solar<br/>Modules</span>
              </div>
              <div className="flex flex-col items-center justify-center pt-6 md:pt-0">
                <CheckCircle2 size={32} className="text-accent mb-3 drop-shadow-sm" />
                <span className="font-extrabold text-lg text-primary-dark text-center leading-tight">25-Year Performance<br/>Warranty</span>
              </div>
              <div className="flex flex-col items-center justify-center pt-6 md:pt-0">
                <CheckCircle2 size={32} className="text-accent mb-3 drop-shadow-sm" />
                <span className="font-extrabold text-lg text-primary-dark text-center leading-tight">200+ Installations<br/>in TN</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function BrandsCarousel() {
  const brandLogos = [
    { name: "HAVELLS", color: "text-red-600" },
    { name: "UTL SOLAR", color: "text-emerald-600" },
    { name: "EXIDE", color: "text-red-500" },
    { name: "SMA", color: "text-blue-700" },
    { name: "solis", color: "text-orange-500" },
    { name: "SUNGROW", color: "text-amber-600" },
    { name: "K Solare", color: "text-orange-600" },
    { name: "GOODWE", color: "text-red-700" },
    { name: "DELTA", color: "text-blue-500" },
    { name: "LEADER", color: "text-slate-800" },
    { name: "OKAYA", color: "text-green-600" },
    { name: "CanadianSolar", color: "text-red-600" },
    { name: "ABB", color: "text-red-600" },
    { name: "LUMINOUS", color: "text-blue-800" },
    { name: "Growatt", color: "text-lime-600" },
  ];

  return (
    <section className="py-12 bg-white border-t border-border-subtle overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex items-center gap-4">
          <div className="w-1.5 h-8 bg-accent rounded-full"></div>
          <h3 className="text-2xl md:text-3xl font-extrabold text-primary-dark">Our Major Brands</h3>
        </div>
      </div>
      
      <div className="relative w-full flex overflow-x-hidden group py-4">
        <div className="flex animate-marquee-fast whitespace-nowrap items-center">
          {[...brandLogos, ...brandLogos, ...brandLogos].map((brand, i) => (
            <div key={i} className="mx-8 md:mx-12 flex items-center justify-center grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 cursor-default">
               <span className={cn("text-2xl md:text-3xl font-black tracking-tighter uppercase", brand.color)}>
                 {brand.name}
               </span>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes marquee-fast {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee-fast {
          animation: marquee-fast 25s linear infinite;
        }
      `}</style>
    </section>
  );
}

function Solutions() {
  const solutions = [
    {
      id: 1,
      title: "Residential Rooftop Solar",
      description: "Grid-tied net metering, subsidy assistance, and zero-power-cut hybrid battery systems.",
      icon: Zap,
      tag: "Subsidy Eligible"
    },
    {
      id: 2,
      title: "Agricultural Solar Pumps",
      description: "Submersible and surface solar pump sets (3HP to 10HP) with zero grid dependency for farmers.",
      icon: Sprout,
      tag: "Zero Running Cost"
    },
    {
      id: 3,
      title: "Commercial & Industrial",
      description: "Factory roofs, petrol pumps, and commercial buildings with rapid ROI and tax depreciation benefits.",
      icon: Factory,
      tag: "High ROI"
    }
  ];

  return (
    <section id="solutions" className="py-24 bg-bg-neutral relative border-t border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Asymmetrical Grid Pattern from saas-minimal-ui-design skill */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          <div className="flex flex-col justify-start lg:pr-8 py-4">
            <div className="mb-6">
              <span className="text-accent-dark font-extrabold text-sm tracking-widest uppercase bg-accent/10 px-3 py-1.5 rounded-full">
                Core Expertise
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-primary-dark mb-6 leading-[1.15]">
              Powering Every Sector.
            </h2>
            <p className="text-slate-600 leading-relaxed text-lg font-medium">
              From reducing household EB bills to powering heavy agricultural pumps, our engineered solutions are built for maximum efficiency and longevity.
            </p>
          </div>

          {solutions.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl p-8 flex flex-col h-full border border-border-subtle shadow-[0_8px_30px_rgb(4,28,63,0.04)] hover:shadow-[0_20px_40px_rgb(4,28,63,0.08)] transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-6 right-6 text-[10px] font-extrabold px-3 py-1.5 rounded-full uppercase tracking-wider bg-slate-100 text-slate-700">
                {item.tag}
              </div>
              
              <div className="mb-6 mt-2">
                <div className="inline-flex p-4 rounded-2xl bg-primary text-white shadow-[0_0_20px_rgba(4,28,63,0.2)] mb-2 group-hover:scale-110 transition-transform duration-300">
                  <item.icon size={24} strokeWidth={2.5} className="text-accent" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-primary-dark mb-3">{item.title}</h3>
              
              <p className="text-slate-600 flex-grow mb-8 leading-relaxed font-medium">
                {item.description}
              </p>
              
              <a href="#calculator" className="mt-auto inline-flex items-center gap-1 text-primary font-bold text-sm transition-colors hover:text-accent-dark group-hover/link:translate-x-1">
                Explore Solution
                <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Calculator() {
  const [propertyType, setPropertyType] = useState('Residential');
  const [billAmount, setBillAmount] = useState<number>(3000);
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const monthlyBill = billAmount / 2;
  const kw = Math.max(1, Math.ceil(monthlyBill / 1200));
  const isEligibleForSubsidy = propertyType === 'Residential' && kw <= 3;
  const roofArea = kw * 100;
  const annualSavings = monthlyBill * 12;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="calculator" className="py-24 bg-primary relative z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-[150px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">Calculate Your Solar Savings</h2>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto font-medium">Get an instant estimate of your required system size, required roof area, and potential government subsidies.</p>
        </div>

        <div className="bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-primary/20 p-6 md:p-10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-accent via-accent-dark to-primary"></div>
          
          {!submitted ? (
            step === 1 ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8 mt-2">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-3 uppercase tracking-wider">Property Type</label>
                  <div className="flex flex-col sm:flex-row bg-slate-100 p-1.5 rounded-2xl gap-1">
                    {['Residential', 'Commercial', 'Agriculture'].map(type => (
                      <button
                        key={type}
                        onClick={() => setPropertyType(type)}
                        className={cn(
                          "flex-1 py-3 text-sm font-bold rounded-xl transition-all",
                          propertyType === type ? "bg-white text-primary shadow-sm ring-1 ring-black/5" : "text-slate-500 hover:text-slate-800 hover:bg-slate-200/50"
                        )}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-end mb-4">
                    <label className="block text-sm font-bold text-slate-700 uppercase tracking-wider">Average Bi-Monthly EB Bill (₹)</label>
                    <span className="text-3xl font-extrabold text-primary">₹{billAmount.toLocaleString()}</span>
                  </div>
                  <input 
                    type="range" 
                    min="1000" 
                    max="50000" 
                    step="500"
                    value={billAmount}
                    onChange={(e) => setBillAmount(Number(e.target.value))}
                    className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                  <div className="flex justify-between text-xs text-slate-400 mt-3 font-bold">
                    <span>₹1,000</span>
                    <span>₹50,000+</span>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-2xl p-6 border border-border-subtle">
                  <h3 className="text-xs font-extrabold text-slate-500 uppercase tracking-widest mb-6">Estimated System Requirement</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6 divide-x divide-border-subtle">
                    <div className="pl-2">
                      <p className="text-slate-500 text-sm font-bold mb-1">System Size</p>
                      <p className="text-4xl font-extrabold text-primary-dark">{kw} <span className="text-xl">kW</span></p>
                    </div>
                    <div className="pl-6">
                      <p className="text-slate-500 text-sm font-bold mb-1">Roof Area</p>
                      <p className="text-4xl font-extrabold text-primary-dark">{roofArea} <span className="text-xl text-slate-400">sq.ft</span></p>
                    </div>
                    <div className="col-span-2 md:col-span-1 md:pl-6 border-t md:border-t-0 pt-6 md:pt-0">
                      <p className="text-slate-500 text-sm font-bold mb-1">Yearly Savings</p>
                      <p className="text-4xl font-extrabold text-[#15803d]">₹{annualSavings.toLocaleString()}</p>
                    </div>
                  </div>
                  
                  {isEligibleForSubsidy && (
                    <div className="mt-8 flex items-start gap-4 bg-accent/10 p-5 rounded-2xl border border-accent/30 shadow-sm">
                      <AlertCircle className="text-accent-dark flex-shrink-0 mt-0.5" size={24} />
                      <div>
                        <p className="font-extrabold text-primary-dark text-base">Eligible for Central Govt Subsidy</p>
                        <p className="text-slate-700 text-sm mt-1 font-medium">Under PM Surya Ghar Muft Bijli Yojana, you can get up to <strong className="bg-accent/20 px-1 rounded">₹78,000</strong> as a direct subsidy for this {kw}kW system.</p>
                      </div>
                    </div>
                  )}
                </div>

                <button 
                  onClick={() => setStep(2)}
                  className="w-full bg-accent hover:bg-accent-dark text-primary-dark font-extrabold py-4 rounded-xl transition-all shadow-lg flex justify-center items-center gap-2 text-xl mt-4"
                >
                  Proceed to Detailed Quote <ChevronRight size={24} />
                </button>
              </motion.div>
            ) : (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                <div className="mb-8">
                  <button onClick={() => setStep(1)} className="text-sm text-slate-500 hover:text-primary font-bold mb-4 inline-flex items-center gap-1 bg-slate-100 px-3 py-1.5 rounded-lg">
                    ← Back to Calculator
                  </button>
                  <h3 className="text-3xl font-extrabold text-primary-dark">Where should we send your quote?</h3>
                  <p className="text-slate-600 mt-3 text-base font-medium">We'll prepare a detailed feasibility report for a <strong className="text-primary">{kw}kW system</strong> and share it instantly via WhatsApp.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-extrabold text-slate-700 mb-2 uppercase tracking-wider">Full Name</label>
                    <input required type="text" className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-200 focus:outline-none focus:ring-0 focus:border-primary transition-all text-lg font-medium" placeholder="Enter your full name" />
                  </div>
                  <div>
                    <label className="block text-sm font-extrabold text-slate-700 mb-2 uppercase tracking-wider">WhatsApp Number</label>
                    <div className="flex">
                      <span className="inline-flex items-center px-4 rounded-l-xl border-2 border-r-0 border-slate-200 bg-slate-50 text-slate-600 font-extrabold text-lg">
                        +91
                      </span>
                      <input required type="tel" pattern="^[6-9]\d{9}$" className="w-full px-4 py-3.5 rounded-r-xl border-2 border-slate-200 focus:outline-none focus:ring-0 focus:border-primary transition-all text-lg font-medium" placeholder="10-digit mobile number" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-extrabold text-slate-700 mb-2 uppercase tracking-wider">City / Pincode</label>
                    <input required type="text" className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-200 focus:outline-none focus:ring-0 focus:border-primary transition-all text-lg font-medium" placeholder="e.g. Woraiyur, 620003" />
                  </div>
                  
                  <input type="text" name="website_url" className="hidden" tabIndex={-1} autoComplete="off" />

                  <button type="submit" className="w-full bg-primary hover:bg-primary-dark text-white font-extrabold py-4 rounded-xl transition-all shadow-xl mt-6 text-xl">
                    Claim Your Detailed Quote →
                  </button>
                </form>
              </motion.div>
            )
          ) : (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12 space-y-6">
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
                <CheckCircle2 className="text-[#15803d] w-12 h-12" />
              </div>
              <h3 className="text-3xl font-extrabold text-primary-dark">Request Received!</h3>
              <p className="text-slate-600 max-w-md mx-auto text-lg font-medium">
                Our engineers are reviewing your requirement for a <strong className="text-primary">{kw}kW system</strong>. We will contact you shortly with the exact pricing and subsidy details.
              </p>
              
              <div className="pt-8 border-t border-slate-100 mt-8">
                <p className="text-sm font-extrabold text-slate-400 mb-4 uppercase tracking-widest">Want an immediate response?</p>
                <a href="https://wa.me/917904259086" target="_blank" rel="noopener noreferrer" className="inline-flex bg-[#25D366] hover:bg-[#1DA851] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-green-500/30 flex items-center justify-center gap-2 mx-auto">
                  <MessageCircle size={24} /> Connect on WhatsApp Now
                </a>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const testimonials = [
    {
      text: "Our EB bill used to be ₹4,500 bi-monthly. After Octagon installed a 3kW system, we are literally paying the minimum fixed charges. Highly professional execution.",
      author: "Ramesh K.",
      location: "Residential Rooftop, Srirangam"
    },
    {
      text: "The 5HP solar pump installation at our farm changed everything. No more waiting for free EB supply at odd hours. The team handled everything flawlessly.",
      author: "Murugan S.",
      location: "Agriculture, Lalgudi"
    },
    {
      text: "Excellent service and transparent pricing. They helped us secure the PM Surya Ghar subsidy without any hassle. Highly recommend their Tier-1 modules.",
      author: "Priya V.",
      location: "Residential, Thillai Nagar"
    },
    {
      text: "We installed a 10kW system for our commercial building. The ROI calculation provided by Octagon was spot on. Very knowledgeable engineers.",
      author: "Karthik R.",
      location: "Commercial, Cantonment"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-bg-neutral overflow-hidden border-t border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <span className="text-accent-dark font-extrabold text-sm tracking-widest uppercase bg-accent/10 px-3 py-1.5 rounded-full inline-block mb-4">
          Proven Results
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-primary-dark">Trusted by families & businesses.</h2>
      </div>

      {/* Infinite Carousel Loop */}
      <div className="relative w-full flex overflow-x-hidden pt-4 pb-8 group">
        <div className="flex animate-marquee group-hover:[animation-play-state:paused] whitespace-nowrap">
          {/* Duplicate array for seamless loop */}
          {[...testimonials, ...testimonials].map((t, i) => (
            <div key={i} className="w-80 md:w-96 shrink-0 mx-4 bg-white p-8 rounded-3xl border border-border-subtle shadow-sm flex flex-col h-full whitespace-normal">
              <div className="flex gap-1 text-accent mb-4">
                {[1,2,3,4,5].map(star => <Star key={star} size={18} fill="currentColor" stroke="none" />)}
              </div>
              <p className="text-slate-700 italic mb-6 font-medium leading-relaxed flex-grow">"{t.text}"</p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary-dark font-extrabold text-xl">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <p className="font-extrabold text-primary-dark text-base">{t.author}</p>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wide">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Styles for the marquee animation */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
}

function FAQ() {
  const faqs = [
    {
      q: "How does the PM Surya Ghar subsidy work?",
      a: "The central government provides a direct subsidy up to ₹78,000 for residential rooftop solar up to 3kW. We handle the entire application, feasibility, and claim process on the national portal on your behalf."
    },
    {
      q: "What is TANGEDCO Net Metering?",
      a: "A bi-directional meter records the solar power you export to the grid and what you import. You only pay for the net difference. If you export more, it gets credited to your next billing cycle."
    },
    {
      q: "What warranties do you provide?",
      a: "We offer a 25-year performance warranty on Tier-1 Solar Panels, 5 to 10 years on inverters, and comprehensive AMC options. Everything can be monitored live via a cloud mobile app."
    },
    {
      q: "Do solar panels work during power cuts?",
      a: "Standard grid-tied systems shut down during power cuts for safety (anti-islanding). However, we offer hybrid systems with battery backup that provide uninterrupted power even during outages."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white border-t border-border-subtle">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
           <span className="text-accent-dark font-extrabold text-sm tracking-widest uppercase bg-accent/10 px-3 py-1.5 rounded-full inline-block mb-4">
            Common Questions
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary-dark">Everything you need to know.</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className={cn(
                "border rounded-2xl transition-all duration-300 overflow-hidden",
                openIndex === i ? "border-primary shadow-md bg-white" : "border-border-subtle bg-slate-50 hover:border-primary/40"
              )}
            >
              <button 
                className="w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="font-extrabold text-primary-dark text-lg md:text-xl pr-4">{faq.q}</span>
                <ChevronDown 
                  className={cn(
                    "text-primary transition-transform duration-300 flex-shrink-0",
                    openIndex === i ? "rotate-180" : "rotate-0"
                  )} 
                  size={24} 
                />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-slate-600 font-medium leading-relaxed text-base md:text-lg">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-primary-dark text-white rounded-3xl text-center flex flex-col items-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary rounded-full blur-[80px] opacity-50 -translate-y-1/2 translate-x-1/2"></div>
          <MapPin className="text-accent w-12 h-12 mb-4" />
          <h4 className="font-extrabold text-2xl mb-2 relative z-10">Visit Our Office in Trichy</h4>
          <p className="text-blue-100 mb-6 text-lg max-w-sm relative z-10">K.S.K Complex, Woraiyur, Tiruchirappalli, Tamil Nadu 620003</p>
          <a href="tel:+917904259086" className="bg-white text-primary-dark font-extrabold px-8 py-3 rounded-full hover:bg-slate-100 transition-colors shadow-lg relative z-10">
            Call +91 79042 59086
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="bg-primary-dark text-slate-400 py-16 pb-28 md:pb-16 border-t border-[#031530]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
           <div className="flex items-center gap-3 mb-6">
              <img src="/logo.png" alt="Octagon Green Energy" className="h-12 w-auto object-contain brightness-0 invert" />
            </div>
            <p className="text-base font-medium max-w-md mb-6 leading-relaxed">Premier Solar EPC, renewable technology trader, and installation provider based in Tiruchirappalli, accelerating Tamil Nadu's transition to clean energy.</p>
            <p className="text-base font-bold text-white flex items-center gap-2"><Phone size={18} className="text-accent"/> +91 79042 59086</p>
        </div>
        <div>
          <h4 className="text-white font-extrabold mb-6 uppercase tracking-wider text-sm">Solutions</h4>
          <ul className="space-y-3 font-medium">
            <li><a href="#" className="hover:text-accent transition-colors">Residential Solar</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Agricultural Pumps</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Commercial EPC</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Solar Fencing</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-extrabold mb-6 uppercase tracking-wider text-sm">Legal</h4>
          <ul className="space-y-3 font-medium">
            <li><a href="#" className="hover:text-accent transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Subsidy Disclaimers</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-[#052654] text-sm text-center md:text-left flex flex-col md:flex-row justify-between items-center font-medium">
        <p>© {new Date().getFullYear()} Octagon Green Energy. All rights reserved.</p>
        <p className="mt-3 md:mt-0 text-slate-500 flex items-center gap-1.5"><Zap size={14} className="text-accent"/> Designed for Maximum Efficiency.</p>
      </div>
    </footer>
  );
}

function MobileActionDrawer() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-border-subtle shadow-[0_-10px_40px_rgba(4,28,63,0.1)] pb-safe">
      <div className="flex h-[72px] divide-x divide-border-subtle">
        <a href="tel:+917904259086" className="flex-1 flex flex-col items-center justify-center gap-1 font-extrabold text-primary-dark bg-white hover:bg-slate-50 active:bg-slate-100 transition-colors">
          <Phone size={20} className="text-primary" />
          <span className="text-[11px] uppercase tracking-wider">Call Us</span>
        </a>
        <a href="https://wa.me/917904259086" target="_blank" rel="noopener noreferrer" className="flex-1 flex flex-col items-center justify-center gap-1 font-extrabold text-white bg-[#25D366] hover:bg-[#1DA851] active:bg-green-700 transition-colors">
          <MessageCircle size={20} />
          <span className="text-[11px] uppercase tracking-wider">WhatsApp</span>
        </a>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-bg-neutral selection:bg-accent/30 selection:text-primary-dark">
      <Header />
      <main>
        <Hero />
        <BrandsCarousel />
        <Solutions />
        <Calculator />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
      <MobileActionDrawer />
    </div>
  );
}
