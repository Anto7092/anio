export interface ProcessStep {
  title: string;
  desc: string;
}

export interface Speciality {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  detailedDescription: string;
  iconName: string;
  benefits: string[];
  processSteps: ProcessStep[];
  duration: string;
  recovery: string;
}

export interface AppointmentRequest {
  id: string;
  name: string;
  phone: string;
  email?: string;
  specialityId: string;
  date: string;
  timeSlot: string;
  notes?: string;
  status: 'pending' | 'confirmed';
  createdAt: string;
}

export interface InquiryMessage {
  id: string;
  name: string;
  phone: string;
  email: string;
  message: string;
  createdAt: string;
}
