import { Formik, Form } from 'formik';
import { IoIosArrowRoundForward } from 'react-icons/io';
import * as Yup from 'yup';

import Button from '../Button/Button';
import Input from '../Input/Input';
import styles from './MapInfoForm.module.scss';

interface MapInfoFormProps {
  submitForm: Function;
  submitting: boolean;
  submitError: boolean;
}

interface MapInfoFormValues {
  title: string;
  text: string;
  notes: string;
}

const MapInfoSchema:
  Yup.ObjectSchema<object & MapInfoFormValues>
  = Yup.object().shape({
    title: Yup.string()
      .max(80, 'Please use a shorter title.'),
    text: Yup.string()
      .max(500, 'Please use shorter text.'),
    notes: Yup.string()
});

const MapInfoForm = ({submitForm, submitting, submitError}: MapInfoFormProps) => {
  const initialFormValues: MapInfoFormValues = {
    title: '',
    text: '',
    notes: '',
  }

  return (
    <div className={styles.formContainer}>
      <Formik
        initialValues={initialFormValues}
        validationSchema={MapInfoSchema}
        onSubmit={(values) => {
          submitForm(values);
        }}
      >
        {() => (
          <Form className={styles.form}>
            <div className={styles.inputs}>
              <Input name="title" type="text" label="Map Title" />
              <Input textarea name="text" type="text" label="Additional Text (peak elevation, trip dates, route, etc.)" />
              <Input textarea name="notes" type="email" label="Any Notes for Us?" />
            </div>

            <Button
              type="submit"
              disabled={submitting}
              loading={submitting}
            >
              Submit Map <IoIosArrowRoundForward />
            </Button>
            {submitError
              && <p className={styles.error}>Sorry, we're having trouble submitting your map. Please try again later or <a href="https://www.mapyouradventure.com/contact">contact us</a>.</p>
            }
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default MapInfoForm;
