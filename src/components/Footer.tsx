import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, MapPin, Clock, Send, Check, Sparkles, AlertCircle } from 'lucide-react';
import { InquiryMessage } from '../types';
import ClinicLogo from './ClinicLogo';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!name.trim()) {
      setError('Please provide your name.');
      return;
    }
    if (!phone.trim()) {
      setError('Please provide your phone number.');
      return;
    }
    if (!message.trim()) {
      setError('Please type your question or message.');
      return;
    }

    setIsSubmitting(true);

    // Simulate clinical transmission
    setTimeout(() => {
      const newInquiry: InquiryMessage = {
        id: `INQ-${Math.floor(1000 + Math.random() * 9000)}`,
        name,
        phone,
        email,
        message,
        createdAt: new Date().toLocaleDateString('en-IN')
      };

      // Save to localStorage inquiries
      const existingRaw = localStorage.getItem('anio_inquiries');
      let existing: InquiryMessage[] = [];
      if (existingRaw) {
        try {
          existing = JSON.parse(existingRaw);
        } catch (e) {
          console.error(e);
        }
      }
      existing.unshift(newInquiry);
      localStorage.setItem('anio_inquiries', JSON.stringify(existing));

      setIsSubmitting(false);
      setSuccess(true);

      // Reset
      setName('');
      setPhone('');
      setEmail('');
      setMessage('');
    }, 1200);
  };

  const getWhatsAppInquiryLink = () => {
    const text = `Hello A’nio Dental Centre, I have a dental question or inquiry.\n\n` +
      `• *Name:* ${name || 'Patient'}\n` +
      `• *Contact:* ${phone}\n` +
      `• *Inquiry:* ${message}`;
    return `https://wa.me/919677455661?text=${encodeURIComponent(text)}`;
  };

  return (
    <footer id="contact" className="bg-warm-charcoal text-peach-100/90 pt-20 pb-12 border-t border-peach-800/20 relative">
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#FFFFFF 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-peach-900/40">
          
          {/* Left Columns: Brand & Contact Info */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <span className="text-[10px] uppercase tracking-[0.25em] text-peach-400 font-bold block">
                Contact Us
              </span>
              <div className="flex items-center gap-4">
                <ClinicLogo size={52} variant="light" className="text-peach-400 shrink-0" />
                <div>
                  <h2 className="font-serif text-3xl sm:text-4xl font-light tracking-tight text-white">
                    Get in Touch
                  </h2>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-peach-400 font-semibold block mt-0.5">
                    A’nio Multispecialty Dental Centre
                  </span>
                </div>
              </div>
              <p className="text-xs text-peach-200/65 font-light leading-relaxed max-w-md">
                Have questions or need assistance? Reach out to us through any of the channels below, or visit our clinic at Mudichur, Chennai.
              </p>
            </div>

            {/* Direct Contact Links */}
            <div className="space-y-4">
              <h4 className="text-[10px] font-mono uppercase tracking-widest text-peach-400 font-bold">
                Contact Details &mdash; A’nio Multispecialty Dental Centre
              </h4>

              <div className="space-y-3">
                <a 
                  href="https://maps.google.com/?q=No.+1/134,+Amudham+nagar,+ORR+service+road,+Mudichur,+Chennai-+48" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-start gap-3.5 p-4 rounded-none bg-peach-950/15 hover:bg-peach-950/30 border border-peach-800/20 text-xs text-white font-medium transition-all duration-250 hover:border-peach-600/40 group"
                  id="footer-address-link"
                >
                  <MapPin className="w-4 h-4 text-peach-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-200" />
                  <div>
                    <span className="text-[9px] text-peach-300/50 block uppercase tracking-wider">Address</span>
                    <span className="text-peach-200 font-medium leading-relaxed group-hover:text-white transition-colors duration-200">No. 1/134, Amudham nagar, ORR service road, Mudichur, Chennai- 48</span>
                  </div>
                </a>

                <a 
                  href="tel:+919677455661" 
                  className="flex items-center gap-3.5 p-4 rounded-none bg-peach-950/15 hover:bg-peach-950/30 border border-peach-800/20 text-xs text-white font-medium transition-all duration-250 hover:border-peach-600/40"
                  id="footer-call-link"
                >
                  <Phone className="w-4 h-4 text-peach-400 shrink-0" />
                  <div>
                    <span className="text-[9px] text-peach-300/50 block uppercase tracking-wider">Phone</span>
                    <span className="text-sm font-semibold tracking-wide text-peach-100">+91 96774 55661</span>
                  </div>
                </a>

                <a 
                  href="mailto:aniomdc@gmail.com" 
                  className="flex items-center gap-3.5 p-4 rounded-none bg-peach-950/15 hover:bg-peach-950/30 border border-peach-800/20 text-xs text-white font-medium transition-all duration-250 hover:border-peach-600/40"
                  id="footer-email-link"
                >
                  <Mail className="w-4 h-4 text-peach-400 shrink-0" />
                  <div>
                    <span className="text-[9px] text-peach-300/50 block uppercase tracking-wider">Email</span>
                    <span className="text-sm font-semibold tracking-wide text-peach-100">aniomdc@gmail.com</span>
                  </div>
                </a>

                <div className="flex items-start gap-3.5 p-4 rounded-none bg-peach-950/15 border border-peach-800/20 text-xs">
                  <Clock className="w-4 h-4 text-peach-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[9px] text-peach-300/50 block uppercase tracking-wider">Clinic Hours</span>
                    <span className="text-peach-200 font-medium block">All Days (Monday &mdash; Sunday)</span>
                    <span className="text-peach-300 block text-xs font-light mt-0.5">9:00 AM &mdash; 2:00 PM &bull; 5:00 PM &mdash; 9:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Columns: Quick Interactive Contact Form */}
          <div className="lg:col-span-6 bg-peach-950/15 border border-peach-800/20 p-6 sm:p-8 rounded-none">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-2 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-peach-400" />
              <span>Leave a Question or Inquiry</span>
            </h4>
            <p className="text-[11px] text-peach-200/60 leading-relaxed font-light mb-6">
              Have a question about clinical timing, clear aligners, dental implants, or a specific toothache? Send a query to our dental team.
            </p>

            <AnimatePresence mode="wait">
              {!success ? (
                <motion.form
                  key="inquiry-form"
                  onSubmit={handleInquirySubmit}
                  className="space-y-4"
                >
                  {error && (
                    <div className="p-3 bg-red-950/30 border border-red-900/50 text-red-300 text-[11px] flex items-center gap-2">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0 text-red-400" />
                      <span>{error}</span>
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[10px] uppercase font-bold tracking-widest text-peach-300/60 block">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full px-3.5 py-2.5 rounded-none bg-peach-950/20 border border-peach-800/40 focus:border-peach-500 focus:outline-none text-xs text-white"
                        id="inquiry-name"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] uppercase font-bold tracking-widest text-peach-300/60 block">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full px-3.5 py-2.5 rounded-none bg-peach-950/20 border border-peach-800/40 focus:border-peach-500 focus:outline-none text-xs text-white"
                        id="inquiry-phone"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-peach-300/60 block">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="yourname@gmail.com"
                      className="w-full px-3.5 py-2.5 rounded-none bg-peach-950/20 border border-peach-800/40 focus:border-peach-500 focus:outline-none text-xs text-white"
                      id="inquiry-email"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-peach-300/60 block">
                      Your Message / Inquiry *
                    </label>
                    <textarea
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={3}
                      placeholder="Type your questions here..."
                      className="w-full px-3.5 py-2.5 rounded-none bg-peach-950/20 border border-peach-800/40 focus:border-peach-500 focus:outline-none text-xs text-white resize-none"
                      id="inquiry-message"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-3.5 bg-peach-500 border border-peach-500 text-black text-xs font-bold uppercase tracking-widest transition-all duration-300 rounded-none hover:bg-peach-600 shadow-[0_0_12px_rgba(212,175,55,0.3)]"
                    id="inquiry-submit-btn"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-3.5 h-3.5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                        <span>Transmitting Inquiry...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Transmit Inquiry Message</span>
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="inquiry-success"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-6 text-center py-4"
                >
                  <div className="w-12 h-12 border border-peach-400 bg-peach-950/35 text-peach-400 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>

                  <div className="space-y-2">
                    <h5 className="text-sm font-semibold text-white uppercase tracking-wider">Inquiry Received</h5>
                    <p className="text-xs text-peach-200/70 font-light leading-relaxed max-w-md mx-auto">
                      Thank you for reaching out. Your question has been registered in our clinic&apos;s digital database.
                    </p>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => setSuccess(false)}
                      className="text-xs text-peach-400 hover:text-peach-300 border-b border-peach-500/30 hover:border-peach-300 transition-colors duration-150 pb-0.5 uppercase tracking-widest"
                      id="new-inquiry-btn"
                    >
                      Ask Another Question
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

        {/* Sub-Footer: Copyrights & fine lines */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-peach-200/40">
          <p className="font-light">
            &copy; 2026 A’nio Multispecialty Dental Centre, Mudichur, Chennai- 48. All rights reserved.
          </p>
          <div className="flex gap-4 font-light uppercase tracking-widest">
            <span className="hover:text-peach-300 cursor-pointer" onClick={() => onNavigate('treatments')}>Specialties</span>
            <span>&bull;</span>
            <span className="hover:text-peach-300 cursor-pointer" onClick={() => onNavigate('philosophy')}>Philosophy</span>
            <span>&bull;</span>
            <span className="hover:text-peach-300 cursor-pointer" onClick={() => onNavigate('booking')}>Scheduling</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
