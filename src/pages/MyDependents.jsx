import React from 'react';
import PagePlaceholder from '../components/PagePlaceholder';
import { Users } from 'lucide-react';

const MyDependents = () => (
  <PagePlaceholder 
    title="My Dependents" 
    description="اطلاعات اعضای خانواده تحت تکلف خود را مدیریت کنید."
    icon={Users}
  />
);

export default MyDependents;