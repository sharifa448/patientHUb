import React from 'react';
import PagePlaceholder from '../components/PagePlaceholder';
import { Calendar } from 'lucide-react';

const Appointments = () => (
  <PagePlaceholder 
    title="Appointments" 
    description="در این بخش می‌توانید نوبت‌های رزرو شده خود را مشاهده و مدیریت کنید."
    icon={Calendar}
  />
);

export default Appointments;