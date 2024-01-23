'use client';

import React from 'react'
import { useLoadScript, GoogleMap, MarkerF, CircleF } from '@react-google-maps/api';
import { useMemo, useState } from 'react';
import styles from '@/styles/Map.module.css';



interface PropertiesMapProps {
    latt: number;
    lngg: number;
      
    }

export default function PropertiesMap({latt, lngg}: PropertiesMapProps) {
    const [lat, setLat] = useState<number>(latt);
    const [lng, setLng] = useState<number>(lngg);


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

    if (!isLoaded) {
        return <p>Loading...</p>;
    }
    return (
        <div>
            <div className={styles.homeWrapper}>
                <GoogleMap
                    options={mapOptions}
                    zoom={19}
                    center={mapCenter}
                    mapTypeId={google.maps.MapTypeId.ROADMAP}
                    mapContainerStyle={{ width: '800px', height: '360px' }}
                    onLoad={() => console.log('Map Component Loaded...')}
                >
                    <MarkerF position={mapCenter} onClick={handleMarkerClick} onLoad={() => console.log('Marker Loaded')} />

                </GoogleMap>
            </div>

        </div>

    )
}

