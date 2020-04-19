import { useState } from 'react';

import Footer from '../../components/Footer/Footer';
import ContactForm from '../../components/ContactForm/ContactForm';
import MapInfoForm from '../../components/MapInfoForm/MapInfoForm';
import Header from '../../components/Header/Header';
import HtmlHead from '../../components/HtmlHead/HtmlHead';
import Map from '../../components/Map/Map';

import { POST } from '../../utils/fetcher';
import { useWindowDimensions } from '../../hooks';

import styles from './Root.module.scss';

const SEND_EMAIL_URL: string = 'http://localhost:3000/api/email';

const Root: React.FC = () => {
  const [zoom, setZoom] = useState(8);
  const [latLng, setLatLng] = useState({
    lat: 45.3736,
    lng: -121.6960,
  });

  const [contactInfo, setContactInfo]: any = useState({});
  const [step, setStep]: any = useState(0);
  const [submitting, setSubmitting]: any = useState(false);
  const [submitError, setSubmitError]: any = useState(false);
  const { width } = useWindowDimensions();

  if (process.browser) {
    navigator.geolocation.getCurrentPosition(
      position => setLatLng({ 
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      })
    );
  }

  const submitForm = async (mapInfoValues: {text: string, notes: string}) => {
    setSubmitting(true);
    setSubmitError(false);
      try {
        await POST(SEND_EMAIL_URL, {
          body: {
            ...contactInfo,
            ...mapInfoValues,
            zoom,
            latLng,
            boxSize: width > 550 ? 450 : 350,
          }
        });
        if (process.browser) {
          window.location.href = 'https://mapyouradventure.com/';
        }
      } catch (error) {
        setSubmitError(true);
      } finally {
        setSubmitting(false);
      }
  }

  return (
    <div className={styles.appContainer}>
      <HtmlHead />

      <Header />

      <main className={styles.main}>
        <div className={styles.stepContainer}>
          <p className={styles.instructions}><strong>Step 1.</strong> Position map at desired location and zoom level.</p>
          <Map setZoom={setZoom} setLatLng={setLatLng} latLng={latLng} />
        </div>
        <div className={styles.stepContainer}>
          <p className={styles.instructions}><strong>Step 2.</strong> Confirm your contact and map info.</p>
          {step === 0
           ? <ContactForm setContactInfo={setContactInfo} setStep={setStep} />
           : <MapInfoForm submitError={submitError} submitForm={submitForm} submitting={submitting} /> 
          }
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Root;
