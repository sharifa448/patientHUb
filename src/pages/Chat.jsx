import React from 'react';
import PagePlaceholder from '../components/PagePlaceholder';
import { MessageSquare } from 'lucide-react';

const Chat = () => (
  <PagePlaceholder
    title="Chat"
    description="در این بخش می‌توانید با پزشکان چت کنید."
    icon={MessageSquare}
  />
);

export default Chat;