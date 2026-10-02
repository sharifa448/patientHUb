import React from 'react';
import PagePlaceholder from '../components/PagePlaceholder';
import { Settings as SettingsIcon } from 'lucide-react';

const Settings = () => (
  <PagePlaceholder
    title="Settings"
    description="تنظیمات اپلیکیشن خود را مدیریت کنید."
    icon={SettingsIcon}
  />
);

export default Settings;