import React, { useEffect } from 'react';
import { scrollToTop } from '../utils/ScrollToTop';
import ContactInfo from '../components/Contact/ContactInfo';
import ConcatForm from '../components/Contact/ConcatForm';

const ContactPage: React.FC = () => {
  useEffect(function () {
    scrollToTop();
  }, []);

  return (
    <>
    <ContactInfo />
    <ConcatForm />
    </>
  );
};

export default ContactPage;
