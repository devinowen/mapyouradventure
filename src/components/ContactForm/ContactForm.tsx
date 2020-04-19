import { Formik, Form } from 'formik';
import { IoIosArrowRoundForward } from 'react-icons/io';
import * as Yup from 'yup';

import Button from '../Button/Button';
import Input from '../Input/Input';
import styles from './ContactForm.module.scss';

interface ContactFormProps {
  setContactInfo: Function;
  setStep: Function;
}

interface ContactFormValues {
  name: string;
  email: string;
}

const ContactFormSchema:
  Yup.ObjectSchema<object & ContactFormValues>
  = Yup.object().shape({
    name: Yup.string()
      .max(50, 'Please use a shorter name.')
      .required('Required'),
    email: Yup.string()
      .email('Invalid email.')
      .required('Required'),
});

const ContactForm = ({setContactInfo, setStep}: ContactFormProps) => {
  const initialFormValues: ContactFormValues = {
    name: '',
    email: '',
  }

  return (
    <div className={styles.formContainer}>
      <Formik
        initialValues={initialFormValues}
        validationSchema={ContactFormSchema}
        onSubmit={(values) => {
          setContactInfo(values);
          setStep(1);
        }}
      >
        {() => (
          <Form className={styles.form}>
            <div className={styles.inputs}>
              <Input name="name" type="text" label="Your Name *" />
              <Input name="email" type="email" label="Your Email *" />
            </div>

            <Button
              type="submit"
            >
              Next <IoIosArrowRoundForward />
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default ContactForm;
