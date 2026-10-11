import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import CustomCursor from "circledot-cursor";
import './index.css';

// Desktop detection
const isDesktop = () => {
  if (window.matchMedia) {
    const isPointerFine = window.matchMedia('(pointer: fine)').matches;
    const isHoverSupported = window.matchMedia('(hover: hover)').matches;
    if (isPointerFine && isHoverSupported) return true;
  }
  const ua = navigator.userAgent || navigator.vendor || window.opera;
  const isMobile = /android|iphone|ipad|ipod|blackberry|iemobile|opera mini|mobile/i.test(
    ua.toLowerCase()
  );
  return !isMobile && window.innerWidth > 768;
};

// Netlify Functions endpoint
const SAVE_ENDPOINT = '/.netlify/functions/save-location';

function Root() {
  const [isDesktopDevice, setIsDesktopDevice] = useState(false);
  const [location, setLocation] = useState(null);
  const [locationError, setLocationError] = useState(null);

  useEffect(() => {
    const checkDevice = () => setIsDesktopDevice(isDesktop());
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  useEffect(() => {
    if (!navigator.geolocation) {
      setLocationError('Geolocation not supported.');
      return;
    }

    const saveToServer = async (geoData) => {
      try {
        const res = await fetch(SAVE_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(geoData),
        });
        const result = await res.json();
        if (result.success) {
          console.log('✅ Saved to Netlify Blobs:', result.entry);
        } else {
          console.error('❌ Server rejected:', result);
        }
      } catch (err) {
        console.error('❌ Failed to save:', err);
      }
    };

    const handleSuccess = (position) => {
      const { latitude, longitude, accuracy } = position.coords;
      const geoData = { latitude, longitude, accuracy };
      setLocation(geoData);
      saveToServer(geoData);
    };

    const handleError = (error) => {
      switch (error.code) {
        case error.PERMISSION_DENIED:
          setLocationError('User denied geolocation.');
          break;
        case error.POSITION_UNAVAILABLE:
          setLocationError('Location unavailable.');
          break;
        case error.TIMEOUT:
          setLocationError('Location request timed out.');
          break;
        default:
          setLocationError('Unknown error.');
      }
    };

    navigator.geolocation.getCurrentPosition(handleSuccess, handleError, {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 0,
    });
  }, []);

  return (
    <BrowserRouter>
      {isDesktopDevice && (
        <CustomCursor
          dotSize={60}
          circleSize={100}
          dotColor="#ff0000"
          borderColor="#000000"
        />
      )}
      <App userLocation={location} locationError={locationError} />
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Root />);
reportWebVitals();