import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TIME_SLOTS, SPECIALITIES } from '../data';
import { AppointmentRequest } from '../types';
import { Calendar as CalendarIcon, Clock, Check, Sparkles, AlertCircle, Phone, CalendarRange } from 'lucide-react';

interface BookingSchedulerProps {
  selectedSpecialityId: string;
  onClearSpecialityId: () => void;
}

export default function BookingScheduler({ selectedSpecialityId, onClearSpecialityId }: BookingSchedulerProps) {
  // Booking Form States
  const [specialityId, setSpecialityId] = useState(selectedSpecialityId || SPECIALITIES[0].id);
  const [selectedDate, setSelectedDate] = useState<Date>(() => {
    // Default to tomorrow
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d;
  });
  const [selectedTime, setSelectedTime] = useState(TIME_SLOTS[0]);
  const [patientName, setPatientName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');

  // Statuses
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [successRequest, setSuccessRequest] = useState<AppointmentRequest | null>(null);
  const [myRequests, setMyRequests] = useState<AppointmentRequest[]>([]);
  const [viewingTab, setViewingTab] = useState<'book' | 'history'>('book');

  // Load existing requests from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('anio_bookings');
    if (saved) {
      try {
        setMyRequests(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse saved bookings", e);
      }
    }
  }, []);

  // Sync selectedSpecialityId if parent updates it
  useEffect(() => {
    if (selectedSpecialityId) {
      setSpecialityId(selectedSpecialityId);
      setViewingTab('book'); // Switch to book view if user clicks a service
    }
  }, [selectedSpecialityId]);

  // Calendar Helpers
  const [currentMonth, setCurrentMonth] = useState(new Date());
  
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const days = [];
    const firstDayIndex = new Date(year, month, 1).getDay();
    const totalDays = new Date(year, month + 1, 0).getDate();

    // Pad prior month days
    for (let i = 0; i < firstDayIndex; i++) {
      days.push(null);
    }

    // Current month days
    for (let i = 1; i <= totalDays; i++) {
      days.push(new Date(year, month, i));
    }

    return days;
  };

  const handleMonthNav = (direction: 'prev' | 'next') => {
    const nextMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + (direction === 'next' ? 1 : -1), 1);
    setCurrentMonth(nextMonth);
  };

  const isToday = (date: Date) => {
    const today = new Date();
    return date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear();
  };

  const isPast = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  const isSunday = (date: Date) => {
    return date.getDay() === 0;
  };

  const days = getDaysInMonth(currentMonth);
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  // Form Submit - Mandatory WhatsApp Flow
  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!patientName.trim()) {
      setError('Please provide your full name.');
      return;
    }
    if (!phone.trim()) {
      setError('Please provide a contact phone number.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const formattedDateString = selectedDate.toLocaleDateString('en-IN', {
        weekday: 'short',
        day: '2-digit',
        month: 'short',
        year: 'numeric'
      });

      const newRequest: AppointmentRequest = {
        id: `ANIO-${Math.floor(1000 + Math.random() * 9000)}`,
        name: patientName,
        phone,
        email,
        specialityId,
        date: formattedDateString,
        timeSlot: selectedTime,
        notes,
        status: 'pending',
        createdAt: new Date().toLocaleDateString('en-IN')
      };

      const updatedRequests = [newRequest, ...myRequests];
      setMyRequests(updatedRequests);
      localStorage.setItem('anio_bookings', JSON.stringify(updatedRequests));

      setSuccessRequest(newRequest);
      setIsSubmitting(false);

      // Trigger WhatsApp directly
      const waUrl = getWhatsAppLink(newRequest);
      window.open(waUrl, '_blank');

      // Reset Form fields
      setPatientName('');
      setPhone('');
      setEmail('');
      setNotes('');
      onClearSpecialityId();
    }, 1000);
  };

  const getSelectedSpecialityTitle = (id: string) => {
    return SPECIALITIES.find(s => s.id === id)?.title || "General Dentistry";
  };

  // WhatsApp helper
  const getWhatsAppLink = (req: AppointmentRequest) => {
    const text = `Hello A’nio Dental Centre, I would like to request a dental appointment.\n\n` +
      `• *Request ID:* ${req.id}\n` +
      `• *Patient Name:* ${req.name}\n` +
      `• *Speciality:* ${getSelectedSpecialityTitle(req.specialityId)}\n` +
      `• *Preferred Date:* ${req.date}\n` +
      `• *Preferred Time:* ${req.timeSlot}\n` +
      `• *Contact:* ${req.phone}\n` +
      (req.notes ? `• *Notes:* ${req.notes}\n` : '') +
      `\nPlease let me know if this slot is confirmed. Thank you!`;
    
    return `https://wa.me/919677455661?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="booking" className="py-24 lg:py-32 bg-peach-50 border-b border-peach-200 relative">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#8B5E3C 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Toggle tabs */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex p-1 bg-[#121216] border border-peach-200/80">
            <button
              onClick={() => { setViewingTab('book'); setSuccessRequest(null); }}
              className={`px-5 py-2.5 text-xs uppercase tracking-widest font-semibold transition-all duration-250 flex items-center gap-1.5 ${
                viewingTab === 'book' 
                  ? 'bg-peach-500 text-black font-bold border border-peach-500 shadow-md' 
                  : 'text-clay hover:text-warm-charcoal'
              }`}
              id="tab-book-btn"
            >
              <CalendarIcon className="w-3.5 h-3.5" />
              <span>Request Appointment</span>
            </button>
            <button
              onClick={() => { setViewingTab('history'); setSuccessRequest(null); }}
              className={`px-5 py-2.5 text-xs uppercase tracking-widest font-semibold transition-all duration-250 flex items-center gap-1.5 relative ${
                viewingTab === 'history' 
                  ? 'bg-peach-500 text-black font-bold border border-peach-500 shadow-md' 
                  : 'text-clay hover:text-warm-charcoal'
              }`}
              id="tab-history-btn"
            >
              <CalendarRange className="w-3.5 h-3.5" />
              <span>My Requested Slots</span>
              {myRequests.length > 0 && (
                <span className="w-4 h-4 bg-black text-peach-500 text-[10px] flex items-center justify-center font-bold absolute -top-1 -right-1 border border-peach-500">
                  {myRequests.length}
                </span>
              )}
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {viewingTab === 'book' ? (
            !successRequest ? (
              <motion.div
                key="book-panel"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start"
              >
                {/* Left side: Guide / Core values */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="space-y-4">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-peach-500 font-bold">
                      Gentle Scheduling
                    </span>
                    <div className="h-[1px] w-12 bg-peach-500/60" />
                    <h2 className="font-serif text-3xl sm:text-4xl font-light text-warm-charcoal">
                      Request Your Preferred Consultation Slot
                    </h2>
                    <p className="text-sm text-clay font-light leading-relaxed">
                      Select your desired specialty, pick a convenient date and time, and share your basic details. 
                      Our experienced dental team reviews each request to ensure appropriate clinical spacing and absolute comfort.
                    </p>
                  </div>

                  {/* Trust Cards */}
                  <div className="space-y-4 pt-4">
                    <div className="p-5 bg-[#121215] border border-peach-200/80 flex gap-4 items-start shadow-md">
                      <div className="p-2 border border-peach-300/60 bg-peach-150 text-peach-500 shrink-0">
                        <Check className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-warm-charcoal">Pre-appointment Verification</h4>
                        <p className="text-[11px] text-clay leading-relaxed mt-1">We call to understand any underlying dental anxieties before you step inside our clinic.</p>
                      </div>
                    </div>

                    <div className="p-5 bg-[#121215] border border-peach-200/80 flex gap-4 items-start shadow-md">
                      <div className="p-2 border border-peach-300/60 bg-peach-150 text-peach-500 shrink-0">
                        <Check className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-warm-charcoal">No Aggressive Billing</h4>
                        <p className="text-[11px] text-clay leading-relaxed mt-1">Your first consultation focuses on visual checkups. Treatment plans are always custom-tailored and pressure-free.</p>
                      </div>
                    </div>
                  </div>

                  {/* Direct assistance note */}
                  <div className="p-6 bg-peach-100/40 border border-peach-200/80 text-xs text-clay space-y-2">
                    <p className="font-semibold text-peach-400 uppercase tracking-wider text-[11px]">Need Immediate Care?</p>
                    <p className="font-light leading-relaxed">For severe tooth discomfort or urgent questions, please feel free to call our primary clinical registry directly:</p>
                    <a href="tel:+919677455661" className="inline-flex items-center gap-1.5 text-peach-500 hover:text-peach-400 font-bold mt-1 uppercase tracking-widest text-xs">
                      <Phone className="w-3.5 h-3.5" />
                      <span>+91 96774 55661</span>
                    </a>
                  </div>
                </div>

                {/* Right side: Form & Custom Interactive Datepicker */}
                <div className="lg:col-span-7 bg-[#121215] border border-peach-200/80 p-6 sm:p-8 shadow-2xl">
                  <form onSubmit={handleBookingSubmit} className="space-y-6">
                    {error && (
                      <div className="p-3.5 bg-red-950/60 border border-red-500/50 text-red-200 text-xs flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                        <span>{error}</span>
                      </div>
                    )}

                    {/* Specialty selection */}
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-warm-charcoal block">
                        Treatment
                      </label>
                      <select
                        value={specialityId}
                        onChange={(e) => setSpecialityId(e.target.value)}
                        className="w-full px-4 py-3.5 border border-peach-200/80 focus:border-peach-500 focus:outline-none text-xs sm:text-sm font-medium text-peach-800 bg-[#0A0A0C] rounded-none"
                        id="form-select-speciality"
                      >
                        {SPECIALITIES.map((spec) => (
                          <option key={spec.id} value={spec.id} className="bg-[#121215] text-peach-800">
                            {spec.title} &mdash; {spec.subtitle}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Custom Inline Calendar */}
                    <div className="space-y-3">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-warm-charcoal block">
                        Preferred Date
                      </label>
                      
                      {/* Calendar Box */}
                      <div className="border border-peach-200/80 p-4 bg-[#0A0A0C]">
                        {/* Month Navigation */}
                        <div className="flex items-center justify-between mb-4">
                          <button
                            type="button"
                            onClick={() => handleMonthNav('prev')}
                            className="p-1 hover:bg-peach-200/40 text-peach-300 border border-peach-200/60 bg-[#18181D]"
                            id="calendar-prev-btn"
                          >
                            &larr;
                          </button>
                          <span className="text-xs font-bold tracking-widest uppercase text-warm-charcoal">
                            {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                          </span>
                          <button
                            type="button"
                            onClick={() => handleMonthNav('next')}
                            className="p-1 hover:bg-peach-200/40 text-peach-300 border border-peach-200/60 bg-[#18181D]"
                            id="calendar-next-btn"
                          >
                            &rarr;
                          </button>
                        </div>

                        {/* Weekday Labels */}
                        <div className="grid grid-cols-7 gap-1 text-center text-[10px] uppercase tracking-wider text-clay font-bold mb-2">
                          <span>Su</span><span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span>
                        </div>

                        {/* Days Grid */}
                        <div className="grid grid-cols-7 gap-1 text-center">
                          {days.map((day, idx) => {
                            if (!day) return <div key={`empty-${idx}`} />;
                            
                            const isSel = selectedDate.getDate() === day.getDate() &&
                              selectedDate.getMonth() === day.getMonth() &&
                              selectedDate.getFullYear() === day.getFullYear();

                            const isOld = isPast(day);
                            const isTodayDay = isToday(day);

                            // Disabled if past date (clinic is open all days including Sunday)
                            const isDisabled = isOld;

                            return (
                              <button
                                key={idx}
                                type="button"
                                disabled={isDisabled}
                                onClick={() => setSelectedDate(day)}
                                className={`h-8 sm:h-9 w-full rounded-none text-xs font-semibold flex flex-col items-center justify-center relative transition-all duration-150 ${
                                  isDisabled 
                                    ? 'text-clay/30 line-through cursor-not-allowed' 
                                    : isSel 
                                      ? 'bg-peach-500 text-black font-bold shadow-[0_0_10px_rgba(212,175,55,0.4)]' 
                                      : 'hover:bg-peach-200/50 text-warm-charcoal bg-[#18181D] border border-peach-200/40'
                                }`}
                                id={`calendar-day-${day.getDate()}`}
                              >
                                <span>{day.getDate()}</span>
                                {isTodayDay && !isSel && (
                                  <span className="absolute bottom-1 w-1 h-1 rounded-full bg-peach-500 animate-ping" />
                                )}
                              </button>
                            );
                          })}
                        </div>
                        
                        {/* Legend */}
                        <div className="mt-3.5 flex gap-4 text-[10px] text-clay justify-center font-mono">
                          <span className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 bg-peach-500" /> Selected
                          </span>
                          <span className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 border border-peach-200/60 bg-[#18181D]" /> Open
                          </span>
                          <span className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 bg-clay/20 line-through" /> Past Date
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Time Slot Picker */}
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-warm-charcoal block">
                        Preferred Time
                      </label>
                      <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                        {TIME_SLOTS.map((slot) => {
                          const isSel = selectedTime === slot;
                          return (
                            <button
                              key={slot}
                              type="button"
                              onClick={() => setSelectedTime(slot)}
                              className={`py-2 text-[11px] font-mono tracking-wide border transition-all duration-150 rounded-none ${
                                isSel 
                                  ? 'bg-peach-500 text-black border-peach-500 font-bold shadow-[0_0_10px_rgba(212,175,55,0.3)]' 
                                  : 'bg-[#0A0A0C] hover:bg-peach-200/40 border-peach-200/80 text-clay'
                              }`}
                              id={`time-slot-${slot.replace(':', '').replace(' ', '')}`}
                            >
                              {slot}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Contact Details */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-warm-charcoal block">
                          Full Name
                        </label>
                        <input
                          type="text"
                          required
                          value={patientName}
                          onChange={(e) => setPatientName(e.target.value)}
                          placeholder="Your full name"
                          className="w-full px-4 py-3 rounded-none border border-peach-200/80 focus:border-peach-500 focus:outline-none text-xs sm:text-sm text-peach-800 bg-[#0A0A0C] placeholder:text-clay/50"
                          id="form-patient-name"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-warm-charcoal block">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+91 XXXXX XXXXX"
                          className="w-full px-4 py-3 rounded-none border border-peach-200/80 focus:border-peach-500 focus:outline-none text-xs sm:text-sm text-peach-800 bg-[#0A0A0C] placeholder:text-clay/50"
                          id="form-patient-phone"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-warm-charcoal block">
                        Email (Optional)
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="yourname@gmail.com"
                        className="w-full px-4 py-3 rounded-none border border-peach-200/80 focus:border-peach-500 focus:outline-none text-xs sm:text-sm text-peach-800 bg-[#0A0A0C] placeholder:text-clay/50"
                        id="form-patient-email"
                      />
                    </div>

                    {/* Notes / Pain Description */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-warm-charcoal block">
                        Describe Pain / Symptoms / Concern (Optional)
                      </label>
                      <textarea
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        rows={3}
                        placeholder="Optional: Describe any tooth pain, sensitivity, symptoms, or specific reasons for your visit..."
                        className="w-full px-4 py-3 rounded-none border border-peach-200/80 focus:border-peach-500 focus:outline-none text-xs sm:text-sm text-peach-800 bg-[#0A0A0C] placeholder:text-clay/50 resize-none"
                        id="form-patient-notes"
                      />
                    </div>

                    {/* WhatsApp Notice */}
                    <div className="p-3.5 bg-[#0D2214] border border-green-500/40 text-green-200 flex items-start gap-2.5 text-xs font-medium">
                      <Phone className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold block text-[11px] uppercase tracking-wider text-green-300">WhatsApp Direct Confirmation</span>
                        <p className="text-[11px] text-green-200/80 font-light mt-0.5 leading-relaxed">
                          To ensure your slot is instantly reserved, sending your booking details directly via WhatsApp is recommended. Clicking the button below will register your request and launch WhatsApp with your details pre-filled.
                        </p>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 py-4 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs uppercase tracking-widest shadow-md transition-all duration-200 disabled:opacity-50 cursor-pointer"
                      id="form-submit-btn"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Preparing WhatsApp Booking...</span>
                        </>
                      ) : (
                        <>
                          <Phone className="w-4 h-4" />
                          <span>Book & Send via WhatsApp</span>
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </motion.div>
            ) : (
              // Success confirmation screen
              <motion.div
                key="booking-success"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                className="max-w-2xl mx-auto bg-[#121215] border border-peach-200/80 p-8 sm:p-12 text-center space-y-8 shadow-2xl"
              >
                <div className="w-16 h-16 border-2 border-[#25D366]/40 bg-[#0D2214] rounded-full flex items-center justify-center mx-auto text-[#25D366]">
                  <Phone className="w-8 h-8" />
                </div>

                <div className="space-y-3">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#25D366] bg-[#0D2214] border border-green-500/40 px-3 py-1 inline-block">
                    WhatsApp Booking Step Required
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-light text-warm-charcoal">
                    Please Send Your Request in WhatsApp
                  </h3>
                  <div className="h-[1px] w-12 bg-peach-500/60 mx-auto" />
                  <p className="text-xs sm:text-sm text-clay font-normal max-w-md mx-auto leading-relaxed">
                    Your appointment details have been prepared for <strong className="text-peach-400 font-semibold">+91 96774 55661</strong>. You must send the pre-filled WhatsApp message to lock in your appointment slot.
                  </p>
                </div>

                {/* Appointment Card Recap */}
                <div className="p-6 bg-[#0A0A0C] border border-peach-200/80 text-left space-y-4 max-w-md mx-auto">
                  <div className="flex justify-between items-center pb-3 border-b border-peach-200/60">
                    <span className="text-[10px] uppercase tracking-wider font-bold text-clay">Booking Reference:</span>
                    <strong className="text-xs font-mono text-peach-400 bg-peach-150 border border-peach-300/40 px-2 py-0.5">{successRequest.id}</strong>
                  </div>

                  <div className="space-y-2.5 text-xs">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-clay block">Patient Name:</span>
                      <span className="font-semibold text-warm-charcoal">{successRequest.name} ({successRequest.phone})</span>
                    </div>

                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-clay block">Selected Specialty:</span>
                      <span className="font-semibold text-warm-charcoal">{getSelectedSpecialityTitle(successRequest.specialityId)}</span>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <span className="text-[10px] uppercase tracking-wider text-clay block">Proposed Date:</span>
                        <span className="font-semibold text-warm-charcoal flex items-center gap-1.5 mt-0.5">
                          <CalendarIcon className="w-3.5 h-3.5 text-peach-500" />
                          {successRequest.date}
                        </span>
                      </div>
                      <div>
                        <span className="text-[10px] uppercase tracking-wider text-clay block">Proposed Time Slot:</span>
                        <span className="font-semibold text-warm-charcoal flex items-center gap-1.5 mt-0.5">
                          <Clock className="w-3.5 h-3.5 text-peach-500" />
                          {successRequest.timeSlot}
                        </span>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-peach-200/60">
                      <span className="text-[10px] uppercase tracking-wider text-clay block">Clinic Address:</span>
                      <span className="font-medium text-warm-charcoal block mt-0.5">No. 1/134, Amudham nagar, ORR service road, Mudichur, Chennai- 48</span>
                    </div>
                  </div>
                </div>

                 {/* Direct Action */}
                <div className="space-y-4 bg-[#0D2214] border border-green-500/40 p-6 max-w-lg mx-auto text-center">
                  <p className="text-xs text-green-200 font-medium leading-relaxed">
                    If WhatsApp didn&apos;t launch automatically, tap the button below to open WhatsApp with your prefilled appointment message:
                  </p>

                  <a
                    href={getWhatsAppLink(successRequest)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold uppercase tracking-widest shadow-md transition-transform duration-200 hover:scale-[1.02]"
                    id="whatsapp-confirm-btn"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Send Message on WhatsApp</span>
                  </a>
                </div>

                <div className="pt-4 flex justify-center gap-6 text-xs font-medium uppercase tracking-widest">
                  <button
                    onClick={() => setSuccessRequest(null)}
                    className="text-clay hover:text-warm-charcoal border-b border-clay/30 hover:border-warm-charcoal transition-all duration-150"
                    id="new-booking-btn"
                  >
                    Request Another Slot
                  </button>
                  <span className="text-clay/20">|</span>
                  <button
                    onClick={() => setViewingTab('history')}
                    className="text-peach-400 hover:text-peach-300 border-b border-peach-500/30 hover:border-peach-300 transition-all duration-150"
                    id="success-view-history-btn"
                  >
                    View All Requested Slots
                  </button>
                </div>
              </motion.div>
            )
          ) : (
            // Requests History list
            <motion.div
              key="history-panel"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="max-w-3xl mx-auto space-y-6"
            >
              <div className="text-center space-y-2">
                <h3 className="font-serif text-3xl font-light text-warm-charcoal">
                  Your Requested Appointments
                </h3>
                <p className="text-xs text-clay font-light">
                  These requests are saved securely within your device&apos;s local browser storage.
                </p>
              </div>

              {myRequests.length === 0 ? (
                <div className="p-12 border border-dashed border-peach-200/80 bg-[#121215] text-center space-y-4">
                  <CalendarIcon className="w-12 h-12 text-peach-500/50 mx-auto" />
                  <div className="space-y-1">
                    <h4 className="text-xs font-semibold text-warm-charcoal uppercase tracking-wider">No Active Requests</h4>
                    <p className="text-[11px] text-clay font-light">You haven&apos;t requested any dental consultations in this session yet.</p>
                  </div>
                  <button
                    onClick={() => setViewingTab('book')}
                    className="px-6 py-3 bg-peach-500 border border-peach-500 text-black text-xs uppercase tracking-widest font-bold hover:bg-peach-600 transition-colors duration-300"
                    id="empty-book-now-btn"
                  >
                    Request Slot Now
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {myRequests.map((req) => (
                    <div 
                       key={req.id} 
                       className="p-6 bg-[#121215] border border-peach-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-md"
                    >
                      <div className="space-y-2.5">
                        <div className="flex items-center gap-2">
                          <strong className="text-[10px] font-mono text-peach-400 bg-peach-150 border border-peach-300/40 px-2 py-0.5">{req.id}</strong>
                          <span className="text-[10px] text-clay font-mono">Requested on {req.createdAt}</span>
                        </div>

                        <div>
                          <h4 className="text-sm font-semibold text-warm-charcoal uppercase tracking-wide">{getSelectedSpecialityTitle(req.specialityId)}</h4>
                          <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-clay mt-1 font-light">
                            <span className="flex items-center gap-1">
                              <CalendarIcon className="w-3.5 h-3.5 text-peach-500" />
                              {req.date}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-3.5 h-3.5 text-peach-500" />
                              {req.timeSlot}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-row sm:flex-col gap-2.5 items-center sm:items-end justify-between border-t sm:border-t-0 pt-3 sm:pt-0 border-peach-200/40">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[9px] uppercase font-bold tracking-widest bg-peach-150 text-peach-400 border border-peach-300/40">
                          <span className="w-1.5 h-1.5 rounded-full bg-peach-500 animate-pulse" />
                          <span>Awaiting Callback</span>
                        </span>
                        
                        <a
                          href={getWhatsAppLink(req)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[11px] font-semibold text-[#25D366] hover:underline"
                          id={`history-wa-link-${req.id}`}
                        >
                          Resend to WhatsApp &rarr;
                        </a>
                      </div>
                    </div>
                  ))}

                  <div className="flex justify-center pt-4">
                    <button
                      onClick={() => {
                        if (confirm("Are you sure you want to clear your local appointment history?")) {
                          localStorage.removeItem('anio_bookings');
                          setMyRequests([]);
                        }
                      }}
                      className="text-[10px] text-clay hover:text-red-400 transition-colors duration-200 uppercase tracking-widest font-mono"
                      id="clear-history-btn"
                    >
                      Clear Local History
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
