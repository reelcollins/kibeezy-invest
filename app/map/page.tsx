"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { useLoadScript, GoogleMap, MarkerF } from "@react-google-maps/api";

import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import styles from "@/styles/Home.module.css";
import { Spinner } from "@/components/common";

async function fetchdetails() {
  const response = await fetch(
    "https://abc.nyumbani.xyz/api/listing/get-listings"
  );
  if (response.ok) {
    const responseBody = await response.json();
    return responseBody;
  }
}

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<{ listings: Props[] } | null>(null);

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
    latt: string;
    lngg: string;
    date_created: number;
  }

  const [lat, setLat] = useState(-1.101811785859803);
  const [lng, setLng] = useState(37.014391469570306);
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

  const handleMarkerClick = (item: Props) => {
    router.push(`/home/${item.slug}`);
  };

  if (!isLoaded) {
    return (
      <div className="flex justify-center my-8">
        <Spinner md />
      </div>
    );
  }

  return (
    <div className={styles.homeWrapper}>
      <div className={styles.sidebar}>
        {/* render Places Auto Complete and pass custom handler which updates the state */}
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
      <div style={{ flex: 1, height: "100vh" }}>
        <GoogleMap
          options={mapOptions}
          zoom={14}
          center={mapCenter}
          mapTypeId={google.maps.MapTypeId.ROADMAP}
          mapContainerStyle={{ width: "100%", height: "100%" }}
          onLoad={(map) => console.log("Map Loaded")}
        >
          {data?.listings?.map((item: Props) => (
            <MarkerF
              key={item.id ?? item.slug}
              position={{
                lat: parseFloat(item.latt),
                lng: parseFloat(item.lngg),
              }}
              onClick={() => handleMarkerClick(item)}
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
    requestOptions: { componentRestrictions: { country: "ke" } },
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
        placeholder="123 Stariway To Heaven"
      />

      {status === "OK" && (
        <ul className={styles.suggestionWrapper}>{renderSuggestions()}</ul>
      )}
    </div>
  );
};
