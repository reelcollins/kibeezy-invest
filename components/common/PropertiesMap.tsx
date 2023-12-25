'use client';

import React from 'react'
import { useLoadScript, GoogleMap, MarkerF, CircleF } from '@react-google-maps/api';
import type { NextPage } from 'next';
import { useMemo, useState } from 'react';
import styles from '@/styles/Map.module.css';
// -1.1012990914383662, 37.010998481591166


interface PropertiesMapProps {
    latt: number;
    lngg: number;
      
    }

export default function Page({latt, lngg}: PropertiesMapProps) {
// export default function Page() {
    const [lat, setLat] = useState<number>(latt);
    const [lng, setLng] = useState<number>(lngg);
    // const [storedLat, setStoredLat] = useState<number>(lat);
    // const [storedLng, setStoredLng] = useState<number>(lng);
    // console.log(storedLat)
    // console.log(storedLng)
  

    const libraries = useMemo(() => ['places'], []);
    const mapCenter = useMemo(() => ({ lat: +lat, lng: +lng }), [lat, lng]);

    // const mapCenter = useMemo(() => ({ lat: storedLat, lng: storedLng }), [storedLat, storedLng]);



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

    if (!isLoaded) {
        return <p>Loading...</p>;
    }
    return (
        <div>
            <div className={styles.homeWrapper}>
                <GoogleMap
                    options={mapOptions}
                    zoom={15}
                    center={mapCenter}
                    mapTypeId={google.maps.MapTypeId.ROADMAP}
                    mapContainerStyle={{ width: '800px', height: '360px' }}
                    onLoad={() => console.log('Map Component Loaded...')}
                >
                    <MarkerF position={mapCenter} onLoad={() => console.log('Marker Loaded')} />

                    {[1000, 2500].map((radius, idx) => {
                        return (
                        <CircleF
                            key={idx}
                            center={mapCenter}
                            radius={radius}
                            onLoad={() => console.log('Circle Load...')}
                            options={{
                            fillColor: radius > 1000 ? 'red' : 'green',
                            strokeColor: radius > 1000 ? 'red' : 'green',
                            strokeOpacity: 0.8,
                            }}
                        />
                        );
                    })}
                </GoogleMap>
            </div>

        </div>

    )
}

