import React from 'react';
import PagePlaceholder from '../components/PagePlaceholder';
import { Pill } from 'lucide-react';

const FindPharmacy = () => (
  <PagePlaceholder
    title="Find Pharmacy"
    description="نزدیک‌ترین داروخانه‌ها را جستجو کنید."
    icon={Pill}
  />
);

export default FindPharmacy;