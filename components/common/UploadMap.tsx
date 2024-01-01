'use client';

import React, { useMemo, useState } from 'react';
import { useLoadScript, GoogleMap, Marker } from '@react-google-maps/api';
import styles from '@/styles/Map.module.css';
import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
  } from 'use-places-autocomplete';

interface UploadMapProps {
    onLatLngChange: (lat: number, lng: number) => void;
}

interface CustomMouseEvent extends React.MouseEvent<HTMLDivElement> {
    latLng: google.maps.LatLng;
  }

export default function UploadMap({ onLatLngChange }: UploadMapProps) {
    const [lat, setLat] = useState(-1.1008204900530465);
    const [lng, setLng] = useState(37.010441055197546);

    const libraries = useMemo(() => ['places'], []);
    const mapCenter = useMemo(() => ({ lat: +lat, lng: +lng }), [lat, lng]);

    const mapOptions = useMemo<google.maps.MapOptions>(
        () => ({
            disableDefaultUI: true,
            clickableIcons: true,
            scrollwheel: false,
        }),
        []
    );

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY as string,
        libraries: libraries as any,
    });

    const handleMarkerClick = () => {
        const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
        window.open(url, '_blank');
    };

    // Call the callback function to update lat and lng in the parent component
    const handleDragEnd = (e: CustomMouseEvent) => {
        if (e.latLng) {
            const newLat = e.latLng.lat();
            const newLng = e.latLng.lng();
            onLatLngChange(newLat, newLng);
        }
    };
    if (!isLoaded) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <div className={styles.homeWrapper}>
                {/* <div className={styles.sidebar}>
                    <PlacesAutocomplete 
                    onAddressSelect={(address) => {
                        getGeocode({ address: address }).then((results) => {
                        const { lat, lng } = getLatLng(results[0]);

                        setLat(lat);
                        setLng(lng);
                        });
                    }}
                    />
                </div>
                */}
                <GoogleMap
                    options={mapOptions}
                    zoom={19}
                    center={mapCenter}
                    mapTypeId={google.maps.MapTypeId.ROADMAP}
                    mapContainerStyle={{ width: '800px', height: '360px' }}
                    onLoad={() => console.log('Map Component Loaded...')}
                >
                    <Marker
                        position={mapCenter}
                        draggable={true}
                        onDragEnd={handleDragEnd}
                        onClick={handleMarkerClick}
                        onLoad={() => console.log('Marker Loaded')}
                    />
                </GoogleMap>
            </div>
        </div>
    );
}



const PlacesAutocomplete = ({
    onAddressSelect,
  }: {
    onAddressSelect?: (address: string) => void;
  }) => {
    const {
      ready,
      value,
      suggestions: { status, data },
      setValue,
      clearSuggestions,
    } = usePlacesAutocomplete({
        requestOptions: { componentRestrictions: { country: 'ke' } },
        debounce: 300,
        cache: 86400,
    });
  
    const renderSuggestions = () => {
      return data.map((suggestion) => {
        const {
          place_id,
          structured_formatting: { main_text, secondary_text },
          description,
        } = suggestion;
  
        return (
          <li
            key={place_id}
            onClick={() => {
              setValue(description, false);
              clearSuggestions();
              onAddressSelect && onAddressSelect(description);
            }}
          >
            <strong>{main_text}</strong> <small>{secondary_text}</small>
          </li>
        );
      });
    };
  
    return (
      <div className={styles.autocompleteWrapper}>
        <input
          value={value}
          className={styles.autocompleteInput}
          disabled={!ready}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Search on map..."
        />
  
        {status === 'OK' && (
          <ul className={styles.suggestionWrapper}>{renderSuggestions()}</ul>
        )}
      </div>
    );
  };
  