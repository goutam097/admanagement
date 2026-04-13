import React, { useState, useEffect, useRef } from 'react';
import "./AddLocation.scss";
import axios from 'axios';
import Button from '../shared/ui/button/Button';
const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

declare global {
    interface Window {
        google: any;
    }
}

interface Prediction {
    place: string;
    description: string;
    place_id: string;
}

interface GooglePrediction {
    description: string;
    place_id: string;
}

interface MapOptions {
    center: any;
    zoom: number;
}

interface props {
    onSaveLocation?: (params: { location: Location, distance: number }) => void;
    selectedLocation?: Location;
    selectedDistance?: number;
    isShowDistance?: boolean;
}

const AddLocation: React.FC<props> = ({ onSaveLocation, selectedLocation, selectedDistance, isShowDistance = true }) => {

    
    const handleAddLocation = () => {
        if (onSaveLocation && location) {
            onSaveLocation({ location, distance });
        }
    }
    const [predictions, setPredictions] = useState<Prediction[]>([]);
    const [distance, setDistance] = useState<number>(0);
    const [searchAddress, setSearchAddress] = useState<string | null>(null);
    const [location, setLocation] = useState<{
        address: string | null,
        city: string | null,
        state: string | null,
        country: string | null,
        postal_code: string | null,
        latitude: number | null,
        longitude: number | null,
    } | null>(null);
    const autocompleteService = useRef<any>(null);
    const mapRef = useRef(null);

    useEffect(() => {
        const loadGoogleMapsAPI = () => {
            const hasGoogleMaps = !!window.google?.maps;
            const hasPlaces = !!window.google?.maps?.places;

            if (!hasGoogleMaps || !hasPlaces) {
                const existingScript = document.querySelector(
                    `script[src*="maps.googleapis.com/maps/api/js"]`
                ) as HTMLScriptElement | null;

                if (existingScript) {
                    existingScript.addEventListener("load", () => {
                        if (window.google?.maps?.places) {
                            autocompleteService.current = new window.google.maps.places.AutocompleteService();
                        }
                    });
                    if (window.google?.maps?.places) {
                        autocompleteService.current = new window.google.maps.places.AutocompleteService();
                    }
                    return;
                }

                const script = document.createElement('script');
                script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
                script.async = true;
                script.onload = () => {
                    if (window.google?.maps?.places) {
                        autocompleteService.current = new window.google.maps.places.AutocompleteService();
                    }
                };
                document.body.appendChild(script);
            } else {
                try {
                    autocompleteService.current = new window.google.maps.places.AutocompleteService();
                } catch (error) {
                    console.error("Error initializing AutocompleteService:", error);
                }
            }
        };

        loadGoogleMapsAPI();
        setLocation(
            selectedLocation
                ? {
                    address: selectedLocation.address || null,
                    city: selectedLocation.city || null,
                    state: selectedLocation.state || null,
                    country: selectedLocation.country || null,
                    postal_code: selectedLocation.postal_code || null,
                    latitude: selectedLocation.latitude || null,
                    longitude: selectedLocation.longitude || null,
                }
                : {
                    address: null,
                    city: null,
                    state: null,
                    country: null,
                    postal_code: null,
                    latitude: null,
                    longitude: null,
                }
        );
        setSearchAddress(selectedLocation?.address || null);
        setDistance(selectedDistance || 0);
    }, []);



useEffect(() => {
    if (!navigator.geolocation) return;

    navigator.geolocation.getCurrentPosition(
        async (position) => {
            const { latitude, longitude } = position.coords;

            try {
                const res = await axios.get(
                    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`
                );

                const result = res.data.results[0];
                if (!result) return;

                let city = '';
                let state = '';
                let country = '';
                let postal_code = '';
                let address = result.formatted_address;

                for (let comp of result.address_components) {
                    if (comp.types.includes('locality')) city = comp.long_name;
                    if (comp.types.includes('administrative_area_level_1')) state = comp.long_name;
                    if (comp.types.includes('country')) country = comp.long_name;
                    if (comp.types.includes('postal_code')) postal_code = comp.long_name;
                }

                setLocation({
                    address,
                    city,
                    state,
                    country,
                    postal_code,
                    latitude,
                    longitude,
                });

                setSearchAddress(address);

            } catch (error) {
                console.error("Reverse geocoding failed:", error);
            }
        },
        (error) => {
            console.log("User denied location permission:", error);
        }
    );
}, []);



    useEffect(() => {
        if (location && location.latitude != null && location.longitude != null && distance >= 0) {
            initMap();
        }
    }, [location, distance]);

    const handleInputChange = (e: any) => {
        const input = e.target.value;
        setSearchAddress(input);
        if (!input || !autocompleteService.current) return;

        autocompleteService.current.getPlacePredictions(
            { input },
            (data: GooglePrediction[] | null) => {
                const suggestions: Prediction[] =
                    data?.map((d: GooglePrediction) => ({
                        place: d.description.split(',')[0],
                        description: d.description,
                        place_id: d.place_id,
                    })) || [];
                setPredictions(suggestions);
            }
        );
    };

    const selectLocation = async (item: Prediction) => {
        try {
            const res = await axios.get(
                `https://maps.googleapis.com/maps/api/geocode/json?place_id=${item.place_id}&key=${apiKey}`
            );
            const result = res.data.results[0];
            let city = '';
            let state = '';
            let country = '';
            let postal_code = '';
            let address = result.formatted_address || item.description;

            for (let comp of result.address_components) {
                if (comp.types.includes('locality')) city = comp.long_name;
                if (comp.types.includes('administrative_area_level_1')) state = comp.long_name;
                if (comp.types.includes('country')) country = comp.long_name;
                if (comp.types.includes('postal_code')) postal_code = comp.long_name;
            }

            setLocation({
                address,
                city,
                state,
                country,
                postal_code,
                latitude: result.geometry.location.lat,
                longitude: result.geometry.location.lng,
            });
            setSearchAddress(address);
            setPredictions([]);
            setTimeout(() => initMap(), 0);
        } catch (err) {
            console.error(err);
        }
    };

    const initMap = () => {
        if (!location || location.latitude == null || location.longitude == null || !window.google || !window.google.maps) {
            return;
        }
        try {
            const mapOptions: MapOptions = {
                center: new window.google.maps.LatLng(location.latitude, location.longitude),
                zoom: 12,
            };
            const map = new window.google.maps.Map(mapRef.current, mapOptions);

            new window.google.maps.Marker({
                position: { lat: location.latitude, lng: location.longitude },
                map,
                title: location.address ?? '',
            });

            new window.google.maps.Circle({
                strokeColor: '#FF0000',
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: '#FF0000',
                fillOpacity: 0.35,
                map,
                center: { lat: location.latitude, lng: location.longitude },
                radius: distance * 1609.34,
            });
        } catch (error) {
            console.error("Error initializing map:", error);
        }
    };

    return (
        <>
            <div className="modalBody">
                <div className="inrPopup">
                    <div className="searchTopOption position-relative">
                        <div className="searchBoxInner">
                            <span><i className="fa-regular fa-magnifying-glass"></i></span>:
                            <input type="text" placeholder="Choose location" value={searchAddress ?? ''} className="inputSearch" onChange={handleInputChange} />
                        </div>

                        {isShowDistance && <> <div className='text-start ' ><strong>Set Distance for setting up distance</strong></div> <div className="addDistance">
                            <span><i className="fa-solid fa-map-location-dot"></i></span>
                            <input
                                type="number"
                                placeholder="Set Distance?"
                                value={distance === 0 ? '' : distance}
                                className="inputSearch"
                                onChange={(e) => {
                                    const value = e.target.value;
                                    setDistance(value === '' ? 0 : Number(value));
                                }}
                            />
                        </div> </>}
                    </div>
                    <div className="showDrop">
                        {predictions && Array.isArray(predictions) && predictions.length > 0 &&
                            predictions.map((item, index) => (
                                <label className="chkAll" key={index}>
                                    <i className="fa-solid fa-location-dot"></i> {item.description}
                                    <input type="checkbox" onClick={() => selectLocation(item)} />
                                </label>
                            ))
                        }

                        {isShowDistance && <div
                            id="map"
                            ref={mapRef}
                            style={{ width: '100%', height: '375px', marginTop: '20px' }}
                        />}
                    </div>
                </div>
            </div>

            <div className='modal-footer'>
                <Button onClick={handleAddLocation} text={<> <i className="fa-solid fa-check"></i> &nbsp; Submit </>} />
            </div>
        </>
    );
};

export default AddLocation;
