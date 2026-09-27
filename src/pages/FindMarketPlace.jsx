import React from 'react';
import PagePlaceholder from '../components/PagePlaceholder';
import { ShoppingBag } from 'lucide-react';

const FindMarketPlace = () => (
  <PagePlaceholder 
    title="Find MarketPlace" 
    description="در این بخش می‌توانید محصولات سلامت و دارویی را خریداری کنید."
    icon={ShoppingBag}
  />
);

export default FindMarketPlace;