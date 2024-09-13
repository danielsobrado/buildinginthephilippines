import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Label, Input, Textarea, Button, Message, Spinner } from 'theme-ui';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);

    try {
      const result = await emailjs.sendForm(
        'service_fce4e9w',
        'template_3lb7vq6',
        event.target,
        'e3ig-UcY4TztSfq-b'
      );

      if (result.text === 'OK') {
        setSuccess(true);
        event.target.reset();
      } else {
        setSuccess(false);
      }
    } catch (error) {
      setSuccess(false);
    }

    setSubmitting(false);
  };

  const texts = {
    en: {
      successMessage: 'Thank you for contacting us. We\'ll get back to you soon!',
      errorMessage: 'Something went wrong. Please try again later!',
      nameLabel: 'Name',
      companyLabel: 'Company Name',
      emailLabel: 'Email',
      emailPlaceholder: 'email@example.com',
      phoneLabel: 'Phone Number',
      phonePlaceholder: '(xxx) xxx-xxxx',
      subjectLabel: 'Subject',
      messageLabel: 'Your Message',
      submitButton: 'Submit',
    }
  };

  const {
    successMessage,
    errorMessage,
    nameLabel,
    companyLabel,
    emailLabel,
    emailPlaceholder,
    phoneLabel,
    phonePlaceholder,
    subjectLabel,
    messageLabel,
    submitButton,
  } = texts["en"];

  return (
    <form onSubmit={handleSubmit} method='POST'>
      {success === true && <Message variant='success'>{successMessage}</Message>}
      {success === false && <Message variant='error'>{errorMessage}</Message>}
      <Box variant='forms.row'>
        <Box variant='forms.column'>
          <Label htmlFor='contact-form-name'>{nameLabel}</Label>
          <Input type='text' id='contact-form-name' name='name' required />
        </Box>
        <Box variant='forms.column'>
          <Label htmlFor='contact-form-company'>{companyLabel}</Label>
          <Input type='text' id='contact-form-company' name='company' />
        </Box>
      </Box>
      <Box variant='forms.row'>
        <Box variant='forms.column'>
          <Label htmlFor='contact-form-email'>{emailLabel}</Label>
          <Input
            type='email'
            placeholder={emailPlaceholder}
            id='contact-form-email'
            name='email'
            required
          />
        </Box>
        <Box variant='forms.column'>
          <Label htmlFor='contact-form-phone'>{phoneLabel}</Label>
          <Input
            type='tel'
            placeholder={phonePlaceholder}
            id='contact-form-phone'
            name='phone'
          />
        </Box>
      </Box>
      <Box variant='forms.row'>
        <Label htmlFor='contact-form-subject'>{subjectLabel}</Label>
        <Input type='text' id='contact-form-subject' name='subject' required />
      </Box>
      <Box variant='forms.row'>
        <Label htmlFor='contact-form-message'>{messageLabel}</Label>
        <Textarea name='message' id='contact-form-message' />
      </Box>
      <Button variant={success || submitting ? 'disabled' : 'primary'} disabled={success || submitting} type='submit' required>
        {submitButton} {submitting && <Spinner size='20' />}
      </Button>
    </form>
  );
};

export default ContactForm;

ContactForm.propTypes = {
  // Remove the handleSubmit, submitting, and success props
};