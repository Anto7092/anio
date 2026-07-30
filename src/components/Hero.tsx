import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Heart, Shield, HelpCircle } from 'lucide-react';
import ClinicLogo from './ClinicLogo';
import doctorUrl from '../assets/doctor.jpg';

interface HeroProps {
  onExploreTreatments: () => void;
  onBookAppointment: () => void;
  onContactUs: () => void;
}

export default function Hero({ onExploreTreatments, onBookAppointment, onContactUs }: HeroProps) {
  return (
    <section className="relative overflow-hidden pt-16 pb-24 lg:pt-24 lg:pb-36 bg-peach-50 border-b border-peach-200">
      {/* Decorative Editorial Gold Dot Grid Background */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#8B5E3C 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }} />
      <div className="absolute top-12 right-12 w-96 h-96 bg-peach-200/30 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Hero Text */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-peach-100 border border-peach-200 text-[10px] uppercase tracking-widest font-semibold text-peach-800"
            >
              <Sparkles className="w-3.5 h-3.5 text-peach-500 animate-pulse" />
              <span>A New Standard of Dental Precision in Mudichur, Chennai</span>
            </motion.div>

            <div className="space-y-5">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-warm-charcoal leading-[1.12]"
                id="hero-heading"
              >
                A Comfortable Dental Experience Starts Here
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-sm sm:text-base text-clay/85 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light"
              >
                At A'nio Multispecialty Dental Centre, we believe every smile deserves exceptional care. Our mission is to provide comprehensive, ethical, and patient-focused dental treatment in a modern, comfortable, and welcoming environment.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="text-sm sm:text-base text-clay/85 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light"
              >
                Led by <strong className="font-semibold text-warm-charcoal">Dr. Anto Ashmi A.M., BDS., FAAD (Germany)</strong>, we combine advanced technology with personalized treatment plans to deliver high-quality dental care for patients of all ages. Whether you need preventive care, cosmetic smile enhancement, restorative procedures, or advanced dental treatments, our team is committed to ensuring a painless, comfortable, and confident dental experience.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-sm sm:text-base text-clay/85 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light"
              >
                At A'nio Multispecialty Dental Centre, we don't just treat teeth—we build lasting relationships based on trust, compassion, and excellence. Our goal is to help every patient achieve a healthy, confident smile through personalized care and the latest advancements in dentistry.
              </motion.p>
            </div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-col sm:flex-row gap-3.5 justify-center lg:justify-start"
            >
              <button
                onClick={onBookAppointment}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-peach-500 bg-peach-500 text-black font-bold text-xs uppercase tracking-widest hover:bg-peach-600 transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.25)] cursor-pointer"
                id="hero-book-btn"
              >
                <span>Book Appointment</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreTreatments}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-peach-300 bg-peach-100 text-peach-800 font-semibold text-xs uppercase tracking-widest hover:border-peach-500 hover:bg-peach-150 transition-colors duration-300 cursor-pointer"
                id="hero-explore-btn"
              >
                <span>Our Services</span>
              </button>

              <button
                onClick={onContactUs}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 border border-peach-200 bg-peach-100/40 text-peach-700 font-medium text-xs uppercase tracking-widest hover:bg-peach-150 transition-colors duration-300 cursor-pointer"
                id="hero-contact-btn"
              >
                <span>Contact Us</span>
              </button>
            </motion.div>

            {/* Reassuring Core Values / Why Choose Us */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="pt-8 border-t border-peach-200 space-y-4"
            >
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-peach-500">Why Choose Us</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-left max-w-xl">
                <div className="flex items-center gap-2 text-xs font-light text-clay">
                  <span className="text-peach-500 font-bold">✓</span>
                  <span>Gentle & Patient-Centred Care</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-light text-clay">
                  <span className="text-peach-500 font-bold">✓</span>
                  <span>Modern Dental Technology</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-light text-clay">
                  <span className="text-peach-500 font-bold">✓</span>
                  <span>Multispecialty Treatments</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-light text-clay">
                  <span className="text-peach-500 font-bold">✓</span>
                  <span>Comfortable & Hygienic Environment</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Hero Interactive Presentation */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative mx-auto max-w-[380px] lg:max-w-none"
            >
              {/* Main Decorative Card */}
              <div className="relative bg-peach-100/90 p-6 sm:p-8 border border-peach-200/80 overflow-hidden shadow-2xl">
                {/* Brand Logo Presentation with Clinic Slogan */}
                <div className="bg-[#18181D] p-6 sm:p-8 border border-peach-300/60 flex flex-col items-center justify-center relative overflow-hidden group mb-6 text-center shadow-md">
                  {/* Subtle grid glow */}
                  <div className="absolute inset-0 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] opacity-[0.08] pointer-events-none" style={{ backgroundSize: '16px 16px' }} />
                  <div className="absolute w-40 h-40 bg-peach-500/10 rounded-full blur-2xl -top-10 -right-10" />

                  {/* High Fidelity Logo */}
                  <ClinicLogo size={84} className="relative z-10 transition-transform duration-300 group-hover:scale-[1.01] mb-4 shadow-sm" />
                  
                  <div className="relative z-10 space-y-1">
                    <span className="font-serif text-xl font-bold tracking-widest text-warm-charcoal block uppercase">A’nio</span>
                    <span className="text-xs text-peach-500 uppercase tracking-[0.2em] font-bold block">Multispecialty Dental Centre</span>
                    <div className="flex items-center justify-center gap-2.5 mt-2.5 pt-1">
                      <div className="w-9 h-9 rounded-full overflow-hidden border border-peach-500 shrink-0 shadow-sm transition-transform duration-300 hover:scale-[1.01]">
                        <img src={doctorUrl} alt="Dr. Anto Ashmi A.M." className="w-full h-full object-cover object-top" />
                      </div>
                      <span className="text-xs text-peach-300 font-serif block font-medium">By Dr. Anto Ashmi A.M., BDS., FAAD (Germany)</span>
                    </div>
                  </div>

                  <div className="relative z-10 mt-6 pt-4 border-t border-peach-300/40 w-full">
                    <p className="font-serif italic text-peach-200 text-xs sm:text-sm leading-relaxed tracking-wide font-medium">
                      “Rooted in Prudence<br />
                      Driven by Love<br />
                      Delivered with Care”
                    </p>
                  </div>
                </div>

                {/* Patient-Centric Reassurance Block */}
                <div className="space-y-4">
                  <div className="p-4 border border-peach-200/60 bg-peach-150/40 flex items-start gap-4">
                    <div className="w-8 h-8 border border-peach-300 flex items-center justify-center shrink-0 bg-peach-150 text-peach-500">
                      <Heart className="w-4.5 h-4.5 text-peach-500" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-warm-charcoal uppercase tracking-wider">Calming Touch Philosophy</h4>
                      <p className="text-[11px] text-clay leading-relaxed mt-1">We use warming local anesthetics and explain every single step to eliminate clinical anxiety.</p>
                    </div>
                  </div>

                  <div className="p-4 border border-peach-200/60 bg-peach-150/40 flex items-start gap-4">
                    <div className="w-8 h-8 border border-peach-300 flex items-center justify-center shrink-0 bg-peach-150 text-peach-500">
                      <Shield className="w-4.5 h-4.5 text-peach-500" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-warm-charcoal uppercase tracking-wider">Conservative Dental Guard</h4>
                      <p className="text-[11px] text-clay leading-relaxed mt-1">No aggressive shaving or unneeded crown work. We save your natural structures whenever possible.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Element */}
              <div className="absolute -bottom-4 -right-2 p-3 bg-peach-500 text-black rounded-none shadow-xl text-xs font-bold border border-peach-300 hidden sm:flex items-center gap-2 uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-black animate-ping" />
                <span>Open for Appointments</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
