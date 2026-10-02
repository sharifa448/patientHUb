import React from 'react';
import PagePlaceholder from '../components/PagePlaceholder';
import { User } from 'lucide-react';

const MyAccount = () => (
  <PagePlaceholder
    title="My Account"
    description="اطلاعات حساب کاربری خود را مشاهده کنید."
    icon={User}
  />
);

export default MyAccount;