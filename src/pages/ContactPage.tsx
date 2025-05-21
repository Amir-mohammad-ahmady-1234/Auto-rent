import React, { useEffect } from 'react';
import { scrollToTop } from '../utils/ScrollToTop';
import ContactInfo from '../components/Contact/ContactInfo';
import ContactForm from '../components/Contact/ContactForm';

const ContactPage: React.FC = () => {
  useEffect(function () {
    scrollToTop();
  }, []);

  return (
    <>
    <ContactInfo />
    <ContactForm />
    </>
  );
};

export default ContactPage;
