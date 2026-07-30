import React, { useState, useRef, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TreatmentExplorer from './components/TreatmentExplorer';
import ClinicPhilosophy from './components/ClinicPhilosophy';
import BookingScheduler from './components/BookingScheduler';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedSpecialityId, setSelectedSpecialityId] = useState('');

  // Refs for scrolling
  const heroRef = useRef<HTMLDivElement>(null);
  const treatmentsRef = useRef<HTMLDivElement>(null);
  const philosophyRef = useRef<HTMLDivElement>(null);
  const bookingRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  // Map section IDs to their respective element refs
  const sectionRefs: { [key: string]: React.RefObject<HTMLDivElement | null> } = {
    hero: heroRef,
    about: philosophyRef,
    services: treatmentsRef,
    treatments: treatmentsRef,
    doctors: philosophyRef,
    philosophy: philosophyRef,
    booking: bookingRef,
    contact: contactRef
  };

  const handleNavigate = (sectionId: string) => {
    const targetRef = sectionRefs[sectionId];
    if (targetRef && targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(sectionId);
    }
  };

  // Treatment booking select callback
  const handleSelectTreatmentForBooking = (specialityId: string) => {
    setSelectedSpecialityId(specialityId);
    // Scroll to booking form
    setTimeout(() => {
      handleNavigate('booking');
    }, 100);
  };

  // Intersection Observer to highlight active section on scroll
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    // Observe all sections
    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-peach-50 text-warm-charcoal flex flex-col font-sans selection:bg-peach-200 selection:text-peach-900 overflow-x-hidden">
      {/* Navigation Header */}
      <Header 
        onNavigate={handleNavigate} 
        activeSection={activeSection} 
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Banner */}
        <div id="hero" ref={heroRef} className="scroll-mt-28">
          <Hero 
            onExploreTreatments={() => handleNavigate('services')}
            onBookAppointment={() => handleNavigate('booking')}
            onContactUs={() => handleNavigate('contact')}
          />
        </div>

        {/* Dental Specialities Grid */}
        <div id="treatments" ref={treatmentsRef} className="scroll-mt-28">
          <TreatmentExplorer 
            onSelectTreatmentForBooking={handleSelectTreatmentForBooking} 
          />
        </div>

        {/* Clinic Philosophy & Credentials */}
        <div id="philosophy" ref={philosophyRef} className="scroll-mt-28">
          <ClinicPhilosophy />
        </div>

        {/* Custom Booking Scheduler */}
        <div id="booking" ref={bookingRef} className="scroll-mt-28">
          <BookingScheduler 
            selectedSpecialityId={selectedSpecialityId} 
            onClearSpecialityId={() => setSelectedSpecialityId('')}
          />
        </div>
      </main>

      {/* Footer Contact Registry */}
      <div id="contact" ref={contactRef} className="scroll-mt-28">
        <Footer onNavigate={handleNavigate} />
      </div>
    </div>
  );
}
