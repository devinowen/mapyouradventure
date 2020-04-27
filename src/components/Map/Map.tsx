import { GoogleMap, LoadScript, StandaloneSearchBox } from '@react-google-maps/api';

import styles from './Map.module.scss';

export interface LatLng {
  lat: number;
  lng: number;
}

interface MapProps {
  setZoom: Function;
  setLatLng: Function;
  latLng: LatLng;
}

const MAPS_API_KEY = process.env.MAPS_API_KEY;

const Map = ({setZoom, setLatLng, latLng}: MapProps) => {

  function handleZoomChange(this: any) {
    setZoom(this.getZoom());
  }

  function handleCenterChange(this: any) {
    const lat = this.center.lat();
    const lng = this.center.lng();
    if (latLng.lat !== lat || latLng.lng !== lng) {
      setLatLng({
        lat,
        lng,
      });
    }
  }

  return (
    <div className={styles.mapContainer}>
      <div className={styles.map}>
        <LoadScript
          id="script-loader"
          googleMapsApiKey={MAPS_API_KEY}
          libraries={['places']}
        >
          <GoogleMap
            id='create-map'
            mapContainerStyle={{
              width: '100%',
              height: '100%',
            }}
            zoom={8}
            center={latLng}
            options={{
              streetViewControl: false,
              fullscreenControl: false,
              mapTypeId: 'terrain'
            }}
            onZoomChanged={handleZoomChange}
            onCenterChanged={handleCenterChange}
          >
            <StandaloneSearchBox>
              <input
                type='text'
                placeholder='Search'
                className={styles.input}
              />
            </StandaloneSearchBox>
          </GoogleMap>
        </LoadScript>
      </div>
      <p className={styles.confirm}>We will confirm the final map boundaries before printing.</p>
    </div>
  )
}

export default Map;
