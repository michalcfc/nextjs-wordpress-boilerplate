import React, {
  useEffect,
  useState,
} from 'react';

// components
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
} from '@chakra-ui/react';
import { RiMailSendLine } from 'react-icons/ri';
import { ContactFormCard } from './components';

// types
import {
  ContactFormD,
  FormValues,
} from './ContactForm.d';

const ContactForm: React.FC<ContactFormD> = () => {
  const initialValues = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };
  const [formValues, setFormData] = useState<FormValues>(initialValues);
  const [formErrors, setFormErrors] = useState<FormValues>(initialValues);
  const [isSubmit, setIsSubmit] = useState<boolean>(false);

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formErrors);
    }
  }, [formErrors]);

  const isValidate = (values: FormValues) => {
    const errors = {} as FormValues;
    if (!values.name) {
      errors.name = 'Username is required!';
    }
    if (!values.email) {
      errors.email = 'Email is required!';
    }
    if (!values.subject) {
      errors.subject = 'Subject is required!';
    }
    if (!values.message) {
      errors.message = 'Message is required!';
    }
    return errors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormErrors(isValidate(formValues));
    setIsSubmit(true);
    const data = {
      name: formValues.name,
      email: formValues.email,
      subject: formValues.subject,
      message: formValues.message,
    };

    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(data),
      });
    } catch (error) {
      // toast error message. whatever you wish
    }
  };

  const changeHandler = (name: string, value: string) => {
    setFormData({
      ...formValues,
      [name]: value,
    });
  };

  return (
    <ContactFormCard title="Kontakt">
      <form onSubmit={(e) => handleSubmit(e)}>
        <FormControl isRequired>
          <FormLabel fontWeight={600}>Imię:</FormLabel>
          <Input
            type="name"
            value={formValues.name}
            onChange={(e) => changeHandler('name', e.target.value)}
          />
          <FormErrorMessage>{formErrors.name}</FormErrorMessage>
        </FormControl>
        <FormControl
          isRequired
          mt={4}
        >
          <FormLabel fontWeight={600}>Email:</FormLabel>
          <Input
            type="email"
            value={formValues.name}
            onChange={(e) => changeHandler('email', e.target.value)}
          />
          <FormErrorMessage>{formErrors.email}</FormErrorMessage>
        </FormControl>
        <FormControl
          isRequired
          mt={4}
        >
          <FormLabel
            mb="8px"
            fontWeight={600}
          >
            Wiadomość:
          </FormLabel>
          <Textarea
            value={formValues.message}
            placeholder="Treść wiadomości..."
            onChange={(e) => changeHandler('message', e.target.value)}
          />
          <FormErrorMessage>{formErrors.message}</FormErrorMessage>
        </FormControl>
        <Button
          mt={4}
          size="lg"
          variant="brandPrimary"
          onClick={() => {
          }}
          leftIcon={<RiMailSendLine fontSize={22} />}
          _hover={{
            bg: 'black',
            color: 'white',
          }}
        >
          Wyślij wiadomość
        </Button>
      </form>
    </ContactFormCard>
  );
};

export default ContactForm;
