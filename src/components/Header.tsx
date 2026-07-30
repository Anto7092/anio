import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Clock, MapPin, Menu, X, Sparkles } from 'lucide-react';
import ClinicLogo from './ClinicLogo';

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export default function Header({ onNavigate, activeSection }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About Doctor' },
    { id: 'services', label: 'Services' },
    { id: 'booking', label: 'Book Appointment' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (id: string) => {
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
      setTimeout(() => {
        onNavigate(id);
      }, 150);
    } else {
      onNavigate(id);
    }
  };

  return (
    <header className="w-full bg-[#0A0A0C]/95 backdrop-blur-md sticky top-0 z-50 border-b border-peach-200/60">
      {/* Top Banner */}
      <div className="bg-[#050507] text-peach-300/90 py-2 px-4 text-[10px] uppercase tracking-widest font-light border-b border-peach-200/20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-1.5">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <MapPin className="w-3 h-3 text-peach-500" />
              <span>No. 1/134, Amudham nagar, ORR service road, Mudichur, Chennai- 48</span>
            </span>
            <span className="hidden sm:inline text-peach-500/30">|</span>
            <span className="flex items-center gap-2">
              <Clock className="w-3 h-3 text-peach-500" />
              <span>All Days: 9:00 AM – 2:00 PM & 5:00 PM – 9:00 PM</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href="tel:+919677455661" 
              className="flex items-center gap-1.5 hover:text-peach-400 transition-colors duration-200 font-medium text-peach-400"
              id="top-phone-link"
            >
              <Phone className="w-3 h-3 text-peach-500" />
              <span>+91 96774 55661</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo / Brand */}
          <button 
            onClick={() => handleNavClick('hero')} 
            className="flex items-center gap-3 group text-left focus:outline-none"
            id="brand-logo-btn"
          >
            <ClinicLogo size={44} className="transition-transform duration-300 group-hover:scale-105 shrink-0" />
            <div className="flex flex-col justify-center">
              <span className="font-serif text-[18px] sm:text-[20px] font-bold tracking-wider text-warm-charcoal group-hover:text-peach-500 transition-colors duration-200 uppercase leading-none">
                A’nio
              </span>
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-peach-500 font-bold mt-1.5 leading-none">
                Multispecialty
              </span>
              <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.14em] text-clay font-medium mt-1.5 leading-none">
                Dental care
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`py-1 text-[11px] uppercase tracking-widest font-semibold transition-colors duration-300 focus:outline-none relative ${
                    isActive 
                      ? 'text-peach-500' 
                      : 'text-clay hover:text-peach-400'
                  }`}
                  id={`nav-item-${item.id}`}
                >
                  <span className="relative z-10">{item.label}</span>
                  {isActive && (
                    <motion.div 
                      layoutId="activeNavBackground"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-peach-500 shadow-[0_0_8px_rgba(212,175,55,0.6)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* CTA & Mobile Menu Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleNavClick('booking')}
              className="hidden sm:inline-flex items-center gap-2 px-6 py-2.5 bg-peach-500 text-black border border-peach-500 text-xs uppercase tracking-widest font-bold hover:bg-peach-600 transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.2)]"
              id="cta-schedule-btn"
            >
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              <span>Book Appointment</span>
            </button>

            {/* Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 bg-peach-100/50 border border-peach-200 text-clay hover:text-warm-charcoal transition-colors duration-200"
              id="mobile-menu-toggle"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden bg-[#0A0A0C] border-t border-peach-200 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-2 max-w-7xl mx-auto">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full text-left px-4 py-3 text-xs uppercase tracking-widest font-medium transition-all duration-200 flex items-center justify-between ${
                      isActive 
                        ? 'bg-peach-100 text-peach-500 border-l-2 border-peach-500 pl-3 font-bold' 
                        : 'text-clay hover:bg-peach-100/40 hover:text-warm-charcoal'
                    }`}
                    id={`mobile-nav-item-${item.id}`}
                  >
                    <span>{item.label}</span>
                    <span className="text-peach-500 font-light">&rarr;</span>
                  </button>
                );
              })}
              <div className="pt-4 border-t border-peach-200">
                <button
                  onClick={() => handleNavClick('booking')}
                  className="w-full flex items-center justify-center gap-2 py-3.5 border border-peach-500 text-xs uppercase tracking-widest font-bold bg-peach-500 text-black hover:bg-peach-600 transition-all duration-200"
                  id="mobile-cta-btn"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Free Consultation</span>
                </button>
                <div className="mt-4 flex justify-center gap-6 text-[10px] uppercase tracking-widest text-clay">
                  <a href="tel:+919677455661" className="flex items-center gap-1.5 font-medium hover:text-peach-500">
                    <Phone className="w-3.5 h-3.5 text-peach-500" />
                    <span>Call +91 96774 55661</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
