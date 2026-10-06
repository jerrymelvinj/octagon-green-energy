import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, 
  MapPin, 
  Menu, 
  X,
  MessageCircle,
  AlertCircle,
  ChevronRight,
  Zap,
  Sprout,
  Factory
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Business', path: '/business' },
    { name: 'Products', path: '/products' },
    { name: 'Projects', path: '/projects' },
    { name: 'FAQs', path: '/faqs' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact Us', path: '/contact' },
  ];
  
  return (
    <>
      <div className="bg-primary-dark text-white text-xs md:text-sm py-2 px-4 flex justify-between md:justify-center gap-4 md:gap-8 items-center font-medium">
        <span className="flex items-center gap-2"><Phone size={14} /> +91 79042 59086</span>
        <span className="hidden md:flex items-center gap-2"><MapPin size={14} /> Woraiyur, Trichy</span>
        <Link to="/#calculator" className="text-accent hover:text-white transition-colors">Get Instant Quote →</Link>
      </div>
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-border-subtle shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            <Link to="/" className="flex items-center gap-2">
              <img src="/logo.png" alt="Octagon Green Energy" className="h-16 w-auto object-contain" />
            </Link>
            
            <nav className="hidden xl:flex items-center gap-6">
              {links.map((link) => (
                <Link 
                  key={link.path}
                  to={link.path} 
                  className={cn(
                    "text-sm font-bold transition-colors",
                    location.pathname === link.path ? "text-primary border-b-2 border-primary" : "text-slate-700 hover:text-primary"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <button className="xl:hidden p-2 text-slate-700 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors" onClick={() => setIsOpen(!isOpen)} aria-label="Menu">
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
              className="xl:hidden bg-white border-t border-border-subtle absolute w-full pb-4 shadow-xl overflow-hidden"
            >
              <div className="flex flex-col px-4 pt-2 pb-4 space-y-2">
                {links.map((link) => (
                   <Link 
                     key={link.path}
                     to={link.path} 
                     onClick={() => setIsOpen(false)} 
                     className="block px-4 py-3 rounded-xl text-base font-bold text-slate-900 bg-slate-50 hover:bg-primary/10 hover:text-primary transition-colors"
                   >
                     {link.name}
                   </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}

export function Footer() {
  return (
    <footer className="bg-primary-dark text-slate-400 py-16 pb-28 md:pb-16 border-t border-[#031530]">
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
            <li><Link to="/business" className="hover:text-accent transition-colors">Commercial EPC</Link></li>
            <li><Link to="/products" className="hover:text-accent transition-colors">Products Catalog</Link></li>
            <li><Link to="/projects" className="hover:text-accent transition-colors">Our Projects</Link></li>
            <li><Link to="/faqs" className="hover:text-accent transition-colors">Subsidy Info</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-extrabold mb-6 uppercase tracking-wider text-sm">Legal & Company</h4>
          <ul className="space-y-3 font-medium">
            <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
            <li><Link to="/careers" className="hover:text-accent transition-colors">Careers</Link></li>
            <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-[#052654] text-xs text-center flex justify-center items-center font-medium">
        <p className="uppercase tracking-widest">© {new Date().getFullYear()} Octagon Green Energy. All rights reserved.</p>
      </div>
    </footer>
  );
}

export function MobileActionDrawer() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-border-subtle shadow-[0_-10px_40px_rgba(4,28,63,0.1)] pb-safe">
      <div className="flex h-[72px] divide-x divide-border-subtle">
        <a href="tel:+917904259086" className="flex-1 flex flex-col items-center justify-center gap-1 font-extrabold text-primary-dark bg-white hover:bg-slate-50 active:bg-slate-100 transition-colors">
          <Phone size={20} className="text-primary" />
          <span className="text-[11px] uppercase tracking-wider">Call Us</span>
        </a>
        <a href="https://wa.me/917904259086?text=Hi%20Octagon%20Energy,%20I%20have%20an%20inquiry." target="_blank" rel="noopener noreferrer" className="flex-1 flex flex-col items-center justify-center gap-1 font-extrabold text-white bg-[#25D366] hover:bg-[#1DA851] active:bg-green-700 transition-colors">
          <MessageCircle size={20} />
          <span className="text-[11px] uppercase tracking-wider">WhatsApp</span>
        </a>
      </div>
    </div>
  );
}

export function BrandsCarousel() {
  const brands = [
    { name: "Havells", domain: "havells.com" },
    { name: "UTL Solar", domain: "utlsolar.com" },
    { name: "Exide", domain: "exideindustries.com" },
    { name: "SMA", domain: "sma.de" },
    { name: "Solis", domain: "ginlong.com" },
    { name: "Sungrow", domain: "sungrowpower.com" },
    { name: "K Solare", domain: "ksolare.com" },
    { name: "GoodWe", domain: "goodwe.com" },
    { name: "Delta", domain: "deltaww.com" },
    { name: "Leader", domain: "leaderbatteries.com" },
    { name: "Okaya", domain: "okayapower.com" },
    { name: "Canadian Solar", domain: "canadiansolar.com" },
    { name: "ABB", domain: "abb.com" },
    { name: "Luminous", domain: "luminousindia.com" },
    { name: "Growatt", domain: "ginverter.com" },
  ];

  return (
    <section className="py-24 bg-white border-t border-border-subtle overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex items-center justify-center gap-4">
          <div className="w-1.5 h-10 bg-accent rounded-full"></div>
          <h3 className="text-3xl md:text-5xl font-extrabold text-primary-dark">Our Major Brands</h3>
        </div>
      </div>
      
      <div className="relative w-full flex overflow-x-hidden group py-4">
        <div className="flex animate-marquee-fast whitespace-nowrap items-center">
          {[...brands, ...brands, ...brands].map((brand, i) => (
            <div key={i} className="mx-8 md:mx-12 flex items-center justify-center grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300 cursor-default h-12 w-28 md:w-36 relative group/logo">
               <img 
                 src={`https://logo.clearbit.com/${brand.domain}?size=400`} 
                 alt={brand.name} 
                 className="max-h-full max-w-full object-contain drop-shadow-sm"
                 onError={(e) => {
                   e.currentTarget.style.display = 'none';
                   if (e.currentTarget.nextElementSibling) {
                     e.currentTarget.nextElementSibling.classList.remove('hidden');
                   }
                 }}
               />
               <span className="hidden text-xl md:text-2xl font-black tracking-tighter uppercase text-slate-400 group-hover/logo:text-primary transition-colors">
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
          animation: marquee-fast 35s linear infinite;
        }
      `}</style>
    </section>
  );
}

export function Calculator() {
  const [propertyType, setPropertyType] = useState('Residential');
  const [billAmount, setBillAmount] = useState<number>(3000);
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const monthlyBill = billAmount / 2;
  const kw = Math.max(1, Math.ceil(monthlyBill / 1200));
  const isEligibleForSubsidy = propertyType === 'Residential' && kw <= 3;
  const roofArea = kw * 90; // Prompt says 90 sq ft per kw
  
  // Subsidy logic
  let subsidyAmount = 0;
  if (isEligibleForSubsidy) {
    if (kw === 1) subsidyAmount = 30000;
    else if (kw === 2) subsidyAmount = 60000;
    else if (kw >= 3) subsidyAmount = 78000;
  }

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
                        <p className="text-slate-700 text-sm mt-1 font-medium">Under PM Surya Ghar Muft Bijli Yojana, you can get up to <strong className="bg-accent/20 px-1 rounded">₹{subsidyAmount.toLocaleString()}</strong> as a direct subsidy for this {kw}kW system.</p>
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
                <a href={`https://wa.me/917904259086?text=Hi!%20I%20just%20used%20your%20calculator.%20I%20need%20a%20${kw}kW%20system%20quote.`} target="_blank" rel="noopener noreferrer" className="inline-flex bg-[#25D366] hover:bg-[#1DA851] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-green-500/30 flex items-center justify-center gap-2 mx-auto">
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

// Just an alias for CheckCircle2 to use inside components.
import { CheckCircle2 } from 'lucide-react';


export function WelcomePopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem('octagon_welcome_seen');
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem('octagon_welcome_seen', 'true');
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, []);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-primary-dark/80 backdrop-blur-sm"
      >
        <motion.div 
          initial={{ scale: 0.9, opacity: 0, y: 20 }} 
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="bg-white rounded-3xl w-full max-w-lg p-8 relative overflow-hidden shadow-2xl"
        >
          <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 text-slate-400 hover:text-slate-800 transition-colors">
             <X size={24} />
          </button>
          
          <div className="mb-8 pr-6">
            <span className="text-accent-dark font-extrabold text-xs tracking-widest uppercase bg-accent/10 px-3 py-1.5 rounded-full inline-block mb-4">
              Welcome to Octagon
            </span>
            <h3 className="text-3xl font-extrabold text-primary-dark mb-2">How can we help you power up today?</h3>
            <p className="text-slate-600 font-medium text-lg">Select your requirement below for a tailored experience.</p>
          </div>

          <div className="space-y-4">
            <Link to="/#calculator" onClick={() => setIsOpen(false)} className="flex items-center gap-4 p-4 rounded-2xl border-2 border-slate-100 hover:border-primary hover:bg-slate-50 transition-all group">
               <div className="bg-primary/10 p-3 rounded-xl text-primary group-hover:scale-110 transition-transform">
                 <Zap size={24} />
               </div>
               <div className="text-left flex-grow">
                 <h4 className="font-extrabold text-primary-dark text-lg">Solar for my Home</h4>
                 <p className="text-sm text-slate-500 font-medium">Subsidized rooftop systems</p>
               </div>
               <ChevronRight className="text-slate-300 group-hover:text-primary transition-colors" />
            </Link>

            <Link to="/business" onClick={() => setIsOpen(false)} className="flex items-center gap-4 p-4 rounded-2xl border-2 border-slate-100 hover:border-primary hover:bg-slate-50 transition-all group">
               <div className="bg-primary/10 p-3 rounded-xl text-primary group-hover:scale-110 transition-transform">
                 <Factory size={24} />
               </div>
               <div className="text-left flex-grow">
                 <h4 className="font-extrabold text-primary-dark text-lg">Solar for my Business</h4>
                 <p className="text-sm text-slate-500 font-medium">High-capacity EPC & ROI analysis</p>
               </div>
               <ChevronRight className="text-slate-300 group-hover:text-primary transition-colors" />
            </Link>

            <Link to="/business" onClick={() => setIsOpen(false)} className="flex items-center gap-4 p-4 rounded-2xl border-2 border-slate-100 hover:border-primary hover:bg-slate-50 transition-all group">
               <div className="bg-primary/10 p-3 rounded-xl text-primary group-hover:scale-110 transition-transform">
                 <Sprout size={24} />
               </div>
               <div className="text-left flex-grow">
                 <h4 className="font-extrabold text-primary-dark text-lg">Agricultural Pumps</h4>
                 <p className="text-sm text-slate-500 font-medium">Off-grid irrigation solutions</p>
               </div>
               <ChevronRight className="text-slate-300 group-hover:text-primary transition-colors" />
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
