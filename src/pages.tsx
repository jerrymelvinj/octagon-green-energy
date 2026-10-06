import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle2, MessageCircle, ChevronRight, Zap, Sprout, Factory, Star, MapPin, Phone, Mail, ChevronDown, Download
} from 'lucide-react';
import { cn, Calculator, BrandsCarousel } from './components';

export function Home() {
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
    <>
      <section className="relative pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden bg-white">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] bg-primary/5 blur-[120px] rounded-full -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
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
            
            <div className="mt-16 bg-slate-50 border border-border-subtle rounded-3xl p-6 md:p-8 max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-border-subtle">
                <div className="flex flex-col items-center justify-center pt-4 md:pt-0">
                  <CheckCircle2 size={32} className="text-accent mb-3" />
                  <span className="font-extrabold text-lg text-primary-dark text-center leading-tight">Tier-1 Solar<br/>Modules</span>
                </div>
                <div className="flex flex-col items-center justify-center pt-6 md:pt-0">
                  <CheckCircle2 size={32} className="text-accent mb-3" />
                  <span className="font-extrabold text-lg text-primary-dark text-center leading-tight">25-Year Performance<br/>Warranty</span>
                </div>
                <div className="flex flex-col items-center justify-center pt-6 md:pt-0">
                  <CheckCircle2 size={32} className="text-accent mb-3" />
                  <span className="font-extrabold text-lg text-primary-dark text-center leading-tight">200+ Installations<br/>in TN</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <BrandsCarousel />

      <section className="py-24 bg-bg-neutral relative border-t border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <motion.div key={item.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} whileHover={{ y: -5 }} className="bg-white rounded-3xl p-8 flex flex-col h-full border border-border-subtle shadow-[0_8px_30px_rgb(4,28,63,0.04)] hover:shadow-[0_20px_40px_rgb(4,28,63,0.08)] transition-all duration-300 relative overflow-hidden group">
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

      <Calculator />

      <section className="py-24 bg-bg-neutral overflow-hidden border-t border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
          <span className="text-accent-dark font-extrabold text-sm tracking-widest uppercase bg-accent/10 px-3 py-1.5 rounded-full inline-block mb-4">
            Proven Results
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary-dark">Trusted by families & businesses.</h2>
        </div>
        <div className="relative w-full flex overflow-x-hidden pt-4 pb-8 group">
          <div className="flex animate-marquee group-hover:[animation-play-state:paused] whitespace-nowrap">
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
        <style>{`
          @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
          .animate-marquee { animation: marquee 30s linear infinite; }
        `}</style>
      </section>
    </>
  );
}

export function About() {
  return (
    <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl md:text-5xl font-extrabold text-primary-dark mb-8 text-center">Engineering the Future of Energy in Tamil Nadu</h1>
      
      <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
        <div>
          <h2 className="text-2xl font-bold text-primary-dark mb-4">Our Founding Story</h2>
          <p className="text-slate-600 leading-relaxed mb-4 text-lg">Octagon Green Energy was founded with a singular mission: to make Tier-1, highly engineered solar power solutions accessible to families and businesses across Central and South Tamil Nadu. Based in the heart of Trichy at Woraiyur, our operations are deeply rooted in understanding the specific energy needs of this region.</p>
          <p className="text-slate-600 leading-relaxed text-lg">We don't just sell panels; we provide turnkey engineering, procurement, and construction (EPC). From the first structural audit of your roof to the final TANGEDCO bi-directional meter commissioning, our in-house engineering team handles it all.</p>
        </div>
        <div className="bg-slate-100 rounded-3xl h-96 flex items-center justify-center shadow-inner border border-slate-200 p-8">
           <img src="/logo.png" className="w-3/4 opacity-30 grayscale" alt="Octagon logo placeholder" />
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-24">
        <div className="bg-white p-8 rounded-3xl border border-border-subtle shadow-md">
           <CheckCircle2 size={40} className="text-accent mb-4" />
           <h3 className="text-xl font-extrabold text-primary-dark mb-3">Tier-1 Hardware Compliance</h3>
           <p className="text-slate-600">We exclusively deploy Tier-1 modules (Bifacial Mono PERC/TopCon) and highly efficient inverters to guarantee a 25-year performance lifespan without degradation worries.</p>
        </div>
        <div className="bg-white p-8 rounded-3xl border border-border-subtle shadow-md">
           <Factory size={40} className="text-accent mb-4" />
           <h3 className="text-xl font-extrabold text-primary-dark mb-3">TANGEDCO Interconnection</h3>
           <p className="text-slate-600">As an empanelled partner, we navigate all regulatory frameworks, safely installing net-metering systems that comply strictly with state safety standards.</p>
        </div>
        <div className="bg-white p-8 rounded-3xl border border-border-subtle shadow-md">
           <Zap size={40} className="text-accent mb-4" />
           <h3 className="text-xl font-extrabold text-primary-dark mb-3">Rapid Post-Install Service</h3>
           <p className="text-slate-600">Located locally in Trichy, our maintenance teams are always on standby. We monitor your system’s generation on the cloud and resolve issues rapidly.</p>
        </div>
      </div>
    </div>
  );
}

export function Business() {
  return (
    <div className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-accent-dark font-extrabold text-sm tracking-widest uppercase bg-accent/10 px-3 py-1.5 rounded-full inline-block mb-4">B2B & Commercial EPC</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary-dark mb-6">High-Yield Solar for Industry & Agriculture</h1>
          <p className="text-slate-600 max-w-3xl mx-auto text-xl">Protect your margins against rising commercial tariffs. Leverage accelerated tax depreciation and achieve a payback in as little as 3 years.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="bg-white rounded-3xl p-10 border border-border-subtle shadow-lg">
            <Factory size={48} className="text-primary mb-6" />
            <h3 className="text-2xl font-extrabold text-primary-dark mb-4">Commercial Rooftop Systems (50kW - 1MW+)</h3>
            <ul className="space-y-3 text-slate-600 font-medium">
              <li className="flex gap-2"><CheckCircle2 className="text-accent shrink-0"/> Ideal for Manufacturing Plants, Textile Mills, and Cold Storages.</li>
              <li className="flex gap-2"><CheckCircle2 className="text-accent shrink-0"/> Claim Section 32 Accelerated Depreciation (up to 40%).</li>
              <li className="flex gap-2"><CheckCircle2 className="text-accent shrink-0"/> Slash LCOE (Levelized Cost of Energy) significantly.</li>
            </ul>
          </div>
          <div className="bg-white rounded-3xl p-10 border border-border-subtle shadow-lg">
            <Sprout size={48} className="text-primary mb-6" />
            <h3 className="text-2xl font-extrabold text-primary-dark mb-4">Agricultural Solar Water Pumping</h3>
            <ul className="space-y-3 text-slate-600 font-medium">
              <li className="flex gap-2"><CheckCircle2 className="text-accent shrink-0"/> 3 HP to 10 HP AC/DC submersible and surface pumps.</li>
              <li className="flex gap-2"><CheckCircle2 className="text-accent shrink-0"/> Operate independently of irregular EB supply hours.</li>
              <li className="flex gap-2"><CheckCircle2 className="text-accent shrink-0"/> Turnkey installation with mounting structures designed for high wind load.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Products() {
  const products = [
    { title: "Bifacial Mono PERC Modules (540W+)", desc: "Tier-1 panels ensuring maximum yield from both sides.", cat: "PV Modules" },
    { title: "TopCon High Efficiency Panels", desc: "Next-gen cell technology with lower degradation rates.", cat: "PV Modules" },
    { title: "Three-Phase On-Grid Inverters", desc: "Smart grid-tied inverters from Sungrow, GoodWe, and SMA.", cat: "Inverters" },
    { title: "Hybrid Inverters & Microinverters", desc: "For zero-power-cut homes and shaded roofs.", cat: "Inverters" },
    { title: "LiFePO4 Lithium Battery Banks", desc: "High-cycle life storage solutions for off-grid and hybrid setups.", cat: "Storage" },
    { title: "Solar Fencing Energizers", desc: "High-tension security fencing for farms and estates.", cat: "Security" },
  ];
  return (
    <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl md:text-5xl font-extrabold text-primary-dark mb-12 text-center">Trading & Hardware Catalog</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((p, i) => (
          <div key={i} className="bg-white border border-border-subtle rounded-3xl p-8 hover:shadow-xl transition-all group">
            <span className="text-xs font-extrabold tracking-wider uppercase text-accent-dark mb-4 block">{p.cat}</span>
            <h3 className="text-xl font-bold text-primary-dark mb-3">{p.title}</h3>
            <p className="text-slate-600 mb-6">{p.desc}</p>
            <div className="flex items-center gap-4 mt-auto">
              <button className="flex items-center gap-2 text-sm font-bold text-primary hover:text-primary-dark transition-colors"><Download size={16}/> Datasheet</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <div className="py-20 bg-slate-50 min-h-[60vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary-dark mb-6">Our Project Portfolio</h1>
        <p className="text-slate-600 text-lg mb-12">Filter through our recent installations across Tamil Nadu.</p>
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {['All Projects', 'Residential Rooftops', 'Commercial & Industrial', 'Agricultural Pumps', 'Solar Fencing'].map(chip => (
             <button key={chip} className="px-5 py-2 rounded-full border border-slate-300 bg-white text-slate-700 font-bold text-sm hover:border-primary hover:text-primary transition-colors">{chip}</button>
          ))}
        </div>
        <div className="bg-white p-16 rounded-3xl border border-border-subtle shadow-sm text-slate-500">
           Gallery integration coming soon. Displaying dynamic project metrics...
        </div>
      </div>
    </div>
  );
}

export function Faqs() {
  const faqsList = [
    {
      q: "How much central subsidy do I get for a residential plant?",
      a: "Under the PM Surya Ghar Muft Bijli Yojana, you get a subsidy of ₹30,000 for a 1kW system, ₹60,000 for 2kW, and up to a maximum of ₹78,000 for systems 3kW and above. We handle the entire national portal application process for you."
    },
    {
      q: "What is a bi-directional meter and how does TANGEDCO net metering work?",
      a: "A bi-directional meter records both the energy you import from the grid and the excess solar energy you export to it. TANGEDCO bills you only for the net difference. If you export more than you use, the surplus is credited to your next billing cycle."
    },
    {
      q: "How much roof space is required per kilowatt?",
      a: "Generally, you need about 80 to 100 sq.ft of shadow-free roof area per kilowatt of solar installation. For a standard 3kW residential system, a 300 sq.ft clear patch is sufficient."
    },
    {
      q: "What happens on rainy days or during power outages?",
      a: "On rainy days, generation decreases but doesn't stop. During a grid power outage, standard On-Grid systems will automatically shut down for safety (anti-islanding). If you face frequent power cuts, we recommend Hybrid systems with battery backup."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl md:text-5xl font-extrabold text-primary-dark mb-12 text-center">Educational Knowledge Hub</h1>
      <div className="space-y-4">
        {faqsList.map((faq, i) => (
          <div key={i} className={cn("border rounded-2xl transition-all duration-300 overflow-hidden", openIndex === i ? "border-primary shadow-md bg-white" : "border-border-subtle bg-slate-50 hover:border-primary/40")}>
            <button className="w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none" onClick={() => setOpenIndex(openIndex === i ? null : i)}>
              <span className="font-extrabold text-primary-dark text-lg pr-4">{faq.q}</span>
              <ChevronDown className={cn("text-primary transition-transform duration-300 flex-shrink-0", openIndex === i ? "rotate-180" : "rotate-0")} size={24} />
            </button>
            <AnimatePresence>
              {openIndex === i && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                  <div className="px-6 pb-6 text-slate-600 font-medium leading-relaxed text-base">
                    {faq.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Careers() {
  return (
    <div className="py-20 bg-slate-50 min-h-[60vh]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary-dark mb-6 text-center">Join the Renewable Revolution in Trichy</h1>
        <p className="text-center text-slate-600 text-lg mb-16">We're always looking for talented engineers and field technicians to join our growing team.</p>
        
        <div className="bg-white rounded-3xl border border-border-subtle shadow-sm p-8 mb-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h3 className="text-2xl font-bold text-primary-dark">Solar Design Engineer</h3>
              <p className="text-slate-500 font-medium">Trichy Office • 2+ Years Experience</p>
            </div>
            <button className="bg-primary text-white font-bold px-6 py-2 rounded-xl">Apply Now</button>
          </div>
        </div>
        <div className="bg-white rounded-3xl border border-border-subtle shadow-sm p-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h3 className="text-2xl font-bold text-primary-dark">Site Installation Technician</h3>
              <p className="text-slate-500 font-medium">Field Operations (TN) • Freshers / 1 Year Exp</p>
            </div>
            <button className="bg-primary text-white font-bold px-6 py-2 rounded-xl">Apply Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Contact() {
  return (
    <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl md:text-5xl font-extrabold text-primary-dark mb-16 text-center">Get in Touch</h1>
      
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-8">
          <div className="flex items-start gap-5 bg-slate-50 p-6 rounded-3xl border border-border-subtle">
            <MapPin className="text-primary shrink-0 mt-1" size={32} />
            <div>
              <h3 className="text-xl font-bold text-primary-dark mb-2">Our Office</h3>
              <p className="text-slate-600 font-medium">K.S.K Complex, Woraiyur,<br/>Tiruchirappalli, Tamil Nadu 620003</p>
            </div>
          </div>
          <div className="flex items-start gap-5 bg-slate-50 p-6 rounded-3xl border border-border-subtle">
            <Phone className="text-primary shrink-0 mt-1" size={32} />
            <div>
              <h3 className="text-xl font-bold text-primary-dark mb-2">Direct Lines</h3>
              <p className="text-slate-600 font-medium">Sales & Support: +91 79042 59086</p>
            </div>
          </div>
          <div className="flex items-start gap-5 bg-slate-50 p-6 rounded-3xl border border-border-subtle">
            <Mail className="text-primary shrink-0 mt-1" size={32} />
            <div>
              <h3 className="text-xl font-bold text-primary-dark mb-2">Email Us</h3>
              <p className="text-slate-600 font-medium">contact@octagongreenenergy.com<br/>sales@octagongreenenergy.com</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-10 border border-border-subtle shadow-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-accent"></div>
          <h3 className="text-2xl font-extrabold text-primary-dark mb-6">Send a Message</h3>
          <form action="https://formsubmit.co/sales@octagongreenenergy.com" method="POST" className="space-y-5">
            <input type="hidden" name="_subject" value="New Inquiry from Octagon Website" />
            <input type="hidden" name="_captcha" value="false" />
            
            <div>
              <label className="block text-sm font-extrabold text-slate-700 mb-2 uppercase tracking-wider">Name</label>
              <input required type="text" name="name" className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-200 focus:border-primary focus:ring-0 transition-all font-medium" />
            </div>
            <div>
              <label className="block text-sm font-extrabold text-slate-700 mb-2 uppercase tracking-wider">Phone / WhatsApp</label>
              <input required type="tel" name="phone" className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-200 focus:border-primary focus:ring-0 transition-all font-medium" />
            </div>
            <div>
              <label className="block text-sm font-extrabold text-slate-700 mb-2 uppercase tracking-wider">Message</label>
              <textarea required name="message" rows={4} className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-200 focus:border-primary focus:ring-0 transition-all font-medium resize-none"></textarea>
            </div>
            <input type="text" name="_honey" className="hidden" />
            <button type="submit" className="w-full bg-primary hover:bg-primary-dark text-white font-extrabold py-4 rounded-xl transition-all shadow-lg mt-2 text-lg">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
