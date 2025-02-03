"use client";

import React, { useState, useEffect, useMemo } from "react";
import type { NextPage } from "next";
import {
  useLoadScript,
  GoogleMap,
  MarkerF,
  CircleF,
} from "@react-google-maps/api";

import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import styles from "./Home.module.css";
import { Spinner } from "@/components/common";

async function fetchdetails() {
  const response = await fetch(
    "https://api.kibeezy.com/api/get-station/"
  );
  if (response.ok) {
    const responseBody = await response.json();
    console.log(`data ${responseBody}`);
    return responseBody;
  }
}

export default function Page() {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState<{ stations: Props[] } | null>(null);
  
    useEffect(() => {
      const fetchData = async () => {
        const fetchedData = await fetchdetails();
        setData(fetchedData);
        setIsLoading(false);
      };
  
      fetchData();
    }, []);
  
    interface Props {
      id: number;
      title: string;
      slug: number;
      description: string;
      lat: string;
      lng: string;
      date_created: number;
    }

    const [lat, setLat] = useState(-1.1036439899237742);
    const [lng, setLng] = useState(37.01336244887943);
  
    const libraries = useMemo(() => ["places"], []);
    const mapCenter = useMemo(() => ({ lat: lat, lng: lng }), [lat, lng]);
  
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
      return (
        <div className="spinnerWrapper">
          <Spinner md />
        </div>
      );
    }
  
    return (
        <div className={styles.homeWrapper}>
        {/* Search Bar - Directly use the component */}
        <PlacesAutocomplete
          onAddressSelect={(address) => {
            getGeocode({ address: address }).then((results) => {
              const { lat, lng } = getLatLng(results[0]);
              setLat(lat);
              setLng(lng);
            });
          }}
        />
  
        {/* Map Container */}
        <div className={styles.mapContainer}>
          <GoogleMap
            options={mapOptions}
            zoom={14}
            center={mapCenter}
            mapTypeId={google.maps.MapTypeId.ROADMAP}
            mapContainerStyle={{ width: "100%", height: "100%" }}
            onLoad={(map) => console.log("Map Loaded")}
          >
            {data?.stations.map((item) => (
              <MarkerF
                key={item.id}
                position={{
                  lat: parseFloat(item.lat),
                  lng: parseFloat(item.lng),
                }}
                onLoad={() => console.log("Marker Loaded")}
              />
            ))}
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
      requestOptions: { componentRestrictions: { country: "us" } },
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
          placeholder="Search for a location"
        />
  
        {status === "OK" && (
          <ul className={styles.suggestionWrapper}>{renderSuggestions()}</ul>
        )}
      </div>
    );
  };
  