import { motion } from 'motion/react';
import { Award, Shield, Sparkles, CheckCircle, Heart, UserCheck } from 'lucide-react';
import doctorUrl from '../assets/doctor.jpg';

export default function ClinicPhilosophy() {
  const whyChooseAnio = [
    "Experienced & Certified Dental Care",
    "Personalized Aesthetic & Restorative Treatment Plans",
    "Modern Precision Dental Equipment",
    "Calm, Patient-Focused Clinic Environment",
    "Transparent & Ethical Treatment Guidance",
    "Commitment to Long-Term Oral Health"
  ];

  return (
    <section id="about" className="py-24 lg:py-32 bg-[#0A0A0C] border-b border-peach-200/60 relative overflow-hidden">
      {/* Decorative Subtle Grid Backdrop */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#D4AF37 1.5px, transparent 1.5px)', backgroundSize: '20px 20px' }} />
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-24 w-80 h-80 rounded-full bg-peach-500/10 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        
        {/* ABOUT THE DOCTOR SECTION */}
        <div id="doctors" className="max-w-5xl mx-auto space-y-10">
          <div className="text-center space-y-3">
            <span className="text-[10px] uppercase tracking-[0.25em] text-peach-500 font-bold block">
              About Doctor
            </span>
            <div className="h-[1px] w-12 bg-peach-500/60 mx-auto" />
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-warm-charcoal">
              Meet Dr. Anto Ashmi A.M.
            </h2>
            <p className="font-serif text-lg sm:text-xl text-peach-400 font-light">
              BDS | FAAD (Germany)
            </p>
            <p className="text-xs uppercase tracking-widest font-semibold text-peach-500">
              Aesthetic Dental Surgeon
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-center bg-peach-100/90 border border-peach-200 p-8 sm:p-12 shadow-xl">
            <div className="lg:col-span-4 flex flex-col items-center text-center space-y-4 lg:border-r lg:border-peach-200/60 lg:pr-8">
              <div className="relative group">
                <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden border-2 border-peach-500 shadow-[0_0_15px_rgba(212,175,55,0.3)] shrink-0 bg-[#121216] relative z-10 transition-transform duration-300 group-hover:scale-[1.01]">
                  <img
                    src={doctorUrl}
                    alt="Dr. Anto Ashmi A.M. - Aesthetic Dental Surgeon"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
              <div className="space-y-1">
                <h3 className="font-serif text-xl font-medium text-warm-charcoal">
                  Dr. Anto Ashmi A.M.
                </h3>
                <span className="text-xs font-semibold text-peach-500 block">
                  BDS | FAAD (Germany)
                </span>
                <span className="text-xs text-clay font-light block pt-1">
                  Aesthetic Dental Surgeon & Founder
                </span>
              </div>
              
              <div className="pt-4 border-t border-peach-200/60 w-full space-y-2">
                <div className="inline-flex items-center gap-2 text-xs text-peach-300 bg-[#121216] border border-peach-200/60 px-3 py-1.5 w-full justify-center">
                  <Award className="w-4 h-4 text-peach-500 shrink-0" />
                  <span>BDS — Dental Surgery</span>
                </div>
                <div className="inline-flex items-center gap-2 text-xs text-peach-300 bg-[#121216] border border-peach-200/60 px-3 py-1.5 w-full justify-center">
                  <Sparkles className="w-4 h-4 text-peach-500 shrink-0" />
                  <span>FAAD — Greifswald Univ. (Germany)</span>
                </div>
                <div className="inline-flex items-center gap-2 text-xs text-peach-300 bg-[#121216] border border-peach-200/60 px-3 py-1.5 w-full justify-center">
                  <Shield className="w-4 h-4 text-peach-500 shrink-0" />
                  <span>ICMR STS Research Scholar</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-6 text-sm sm:text-base text-clay leading-relaxed font-light">
              <p>
                Dr. Anto Ashmi A.M. is an aesthetic dental surgeon committed to delivering evidence-based, patient-centered dental care. During her BDS, she actively participated in state, national, and international scientific conferences, earning multiple awards for her research. Her original research was selected under the prestigious ICMR Short-Term Studentship (STS) Programme, and she later completed a Fellowship in Advanced Aesthetic Dentistry (FAAD) from the University of Greifswald, Germany. To further broaden her clinical expertise, she underwent advanced clinical training at Tambaram Government Hospital, gaining extensive hands-on experience in managing diverse dental conditions and treating patients from varied clinical backgrounds.
              </p>
              <p>
                As the founder of A'nio Multispecialty Dental Centre, Dr. Anto is passionate about combining advanced technology with compassionate care to create healthy, confident smiles. Guided by her philosophy, <strong className="font-normal italic text-peach-400 font-serif">“The perpetual preservation of what remains is more important than the meticulous replacement of what is lost,”</strong> she believes in preserving natural tooth structure through minimally invasive, evidence-based dentistry while delivering long-lasting aesthetic and functional outcomes.
              </p>
            </div>
          </div>
        </div>

        {/* WHY CHOOSE ANIO? Section */}
        <div className="pt-16 border-t border-peach-200/60">
          <div className="max-w-3xl space-y-4 mb-10 text-center mx-auto">
            <span className="text-[10px] uppercase tracking-[0.25em] text-peach-500 font-bold block">
              Our Core Values
            </span>
            <h2 className="font-serif text-3xl font-light tracking-tight text-warm-charcoal">
              Why Choose A’nio Multispecialty Dental Centre?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseAnio.map((item, idx) => (
              <div 
                key={idx}
                className="p-5 bg-peach-100/40 border border-peach-200/60 hover:border-peach-500/80 hover:bg-peach-150 transition-all duration-300 flex items-center gap-4"
              >
                <div className="w-8 h-8 rounded-full bg-peach-150 border border-peach-300 flex items-center justify-center shrink-0 text-peach-500 font-bold text-xs">
                  ✓
                </div>
                <span className="text-sm font-light text-clay">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

