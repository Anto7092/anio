import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SPECIALITIES } from '../data';
import { Speciality } from '../types';
import * as Icons from 'lucide-react';

interface TreatmentExplorerProps {
  onSelectTreatmentForBooking: (id: string) => void;
}

// Icon helper to render icons dynamically
function TreatmentIcon({ name, className }: { name: string; className?: string }) {
  const IconComponent = (Icons as any)[name];
  if (!IconComponent) {
    return <Icons.Activity className={className} />;
  }
  return <IconComponent className={className} />;
}

export default function TreatmentExplorer({ onSelectTreatmentForBooking }: TreatmentExplorerProps) {
  const [selectedSpeciality, setSelectedSpeciality] = useState<Speciality | null>(null);

  const handleBookClick = (id: string) => {
    onSelectTreatmentForBooking(id);
    setSelectedSpeciality(null);
  };

  return (
    <section id="treatments" className="py-24 lg:py-32 bg-[#0A0A0C] border-y border-peach-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-20">
          <span className="text-[10px] uppercase tracking-[0.25em] text-peach-500 font-bold">
            Expert Multispecialty Dental Care
          </span>
          <div className="h-[1px] w-12 bg-peach-500/60 mx-auto" />
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-warm-charcoal">
            Our Dental Specialities
          </h2>
          <p className="text-clay font-light text-sm sm:text-base leading-relaxed">
            Every smile has distinct requirements. We focus on gentle, medically precise procedures 
            that respect your natural teeth and deliver highly functional, organic-looking results.
          </p>
        </div>

        {/* Treatment Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SPECIALITIES.map((spec, index) => (
            <motion.div
              key={spec.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedSpeciality(spec)}
              className="group cursor-pointer bg-peach-100/60 hover:bg-peach-150 border border-peach-200/80 p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
              id={`treatment-card-${spec.id}`}
            >
              <div className="space-y-6">
                {/* Icon wrapper */}
                <div className="w-12 h-12 bg-[#141418] flex items-center justify-center border border-peach-300/40 group-hover:bg-peach-500 group-hover:border-peach-500 group-hover:text-black transition-all duration-300">
                  <TreatmentIcon name={spec.iconName} className="w-5.5 h-5.5 text-peach-500 group-hover:text-black transition-colors duration-300" />
                </div>
                
                <div className="space-y-2">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-peach-500">
                    {spec.subtitle}
                  </span>
                  <h3 className="font-serif text-xl font-normal text-warm-charcoal group-hover:text-peach-400 transition-colors duration-200">
                    {spec.title}
                  </h3>
                  <p className="text-xs text-clay leading-relaxed font-light line-clamp-3">
                    {spec.description}
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-peach-200/60 flex items-center justify-between text-xs font-semibold text-peach-400">
                <span className="font-mono text-[10px] text-clay">{spec.duration}</span>
                <span className="inline-flex items-center gap-1.5 uppercase tracking-widest text-[10px] text-peach-500 group-hover:translate-x-1 transition-transform duration-250">
                  <span>Learn process</span>
                  <Icons.ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detailed Specialty Overlay / Modal */}
        <AnimatePresence>
          {selectedSpeciality && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedSpeciality(null)}
                className="absolute inset-0 bg-black/80 backdrop-blur-md"
              />

              {/* Modal Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.98, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: 15 }}
                transition={{ type: 'spring', damping: 25, stiffness: 350 }}
                className="relative bg-[#121215] w-full max-w-3xl max-h-[90vh] overflow-y-auto border border-peach-300/60 p-6 sm:p-10 z-10 shadow-[0_0_50px_rgba(0,0,0,0.9)] text-peach-800"
                id="treatment-detail-modal"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedSpeciality(null)}
                  className="absolute top-6 right-6 p-2 bg-peach-150 hover:bg-peach-200 text-peach-300 hover:text-white transition-colors duration-200 border border-peach-200/80"
                  aria-label="Close details"
                  id="close-modal-btn"
                >
                  <Icons.X className="w-4 h-4" />
                </button>

                <div className="space-y-8">
                  {/* Header Row */}
                  <div className="flex flex-col sm:flex-row gap-5 sm:items-center">
                    <div className="w-14 h-14 bg-peach-150 flex items-center justify-center border border-peach-300/60 shrink-0">
                      <TreatmentIcon name={selectedSpeciality.iconName} className="w-7 h-7 text-peach-500" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-[0.2em] text-peach-500 font-bold">
                        {selectedSpeciality.subtitle}
                      </span>
                      <h3 className="font-serif text-2xl sm:text-3xl font-light text-warm-charcoal mt-1">
                        {selectedSpeciality.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="space-y-4">
                    <p className="text-xs sm:text-sm text-clay leading-relaxed font-light">
                      {selectedSpeciality.detailedDescription}
                    </p>
                  </div>

                  {/* Split Specs */}
                  <div className="grid sm:grid-cols-2 gap-8 pt-4 border-t border-peach-200/60">
                    {/* Benefits Column */}
                    <div className="space-y-4">
                      <h4 className="text-[11px] font-bold uppercase tracking-widest text-warm-charcoal">
                        Treatment Benefits
                      </h4>
                      <ul className="space-y-2.5">
                        {selectedSpeciality.benefits.map((benefit, bIdx) => (
                           <li key={bIdx} className="flex items-start gap-2.5 text-xs text-clay leading-relaxed">
                            <Icons.Check className="w-4 h-4 text-peach-500 shrink-0 mt-0.5" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Timeline Specs */}
                    <div className="p-5 bg-peach-100/60 border border-peach-200/80 space-y-4">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-clay block">
                          Average Appointment Duration
                        </span>
                        <span className="text-xs font-semibold text-warm-charcoal flex items-center gap-2 mt-2 font-mono">
                          <Icons.Clock className="w-4 h-4 text-peach-500" />
                          {selectedSpeciality.duration}
                        </span>
                      </div>

                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-clay block">
                          Comfort &amp; Recovery Outlook
                        </span>
                        <span className="text-xs text-clay block mt-2 leading-relaxed font-light">
                          {selectedSpeciality.recovery}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Step by Step Treatment Flow */}
                  <div className="space-y-4 pt-4 border-t border-peach-200/60">
                    <h4 className="text-[11px] font-bold uppercase tracking-widest text-warm-charcoal">
                      The Therapeutic Process &mdash; What to Expect
                    </h4>
                    
                    <div className="grid sm:grid-cols-3 gap-4">
                      {selectedSpeciality.processSteps.map((step, sIdx) => (
                        <div key={sIdx} className="p-5 bg-peach-100/40 border border-peach-200/60 relative">
                          <span className="absolute right-4 top-3 text-3xl font-serif text-peach-500/20 font-semibold select-none">
                            0{sIdx + 1}
                          </span>
                          <h5 className="text-[11px] font-bold uppercase tracking-wider text-warm-charcoal pr-6">
                            {step.title}
                          </h5>
                          <p className="text-[11px] text-clay leading-relaxed mt-2 font-light">
                            {step.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Modal Action CTA */}
                  <div className="pt-6 border-t border-peach-200/60 flex flex-col sm:flex-row gap-4 items-center justify-between">
                    <p className="text-[10px] text-clay uppercase tracking-widest font-mono">
                      No pressure, clear advice. Speak with our dental team.
                    </p>
                    <div className="flex gap-3 w-full sm:w-auto">
                      <button
                        onClick={() => setSelectedSpeciality(null)}
                        className="w-1/2 sm:w-auto px-5 py-3 border border-peach-300/60 text-xs uppercase tracking-widest font-medium text-peach-300 hover:bg-peach-150 transition-colors"
                        id="cancel-modal-btn"
                      >
                        Back
                      </button>
                      <button
                        onClick={() => handleBookClick(selectedSpeciality.id)}
                        className="w-1/2 sm:w-auto px-5 py-3 bg-peach-500 border border-peach-500 text-black font-bold text-xs uppercase tracking-widest hover:bg-peach-600 transition-colors flex items-center justify-center gap-1.5 shadow-[0_0_12px_rgba(212,175,55,0.3)]"
                        id="book-modal-btn"
                      >
                        <Icons.Sparkles className="w-3.5 h-3.5" />
                        <span>Book Visit</span>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
