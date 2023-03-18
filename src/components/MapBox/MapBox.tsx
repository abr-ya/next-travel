import { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { ICoord } from "@/interfaces/index";

interface IMapBox {
  coord: ICoord;
  token: string;
}

const MapBox = ({ coord: { lat, lng }, token }: IMapBox) => {
  mapboxgl.accessToken = token;

  const mapContainer = useRef<any>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (map.current) return;

    if (lat && lng && mapContainer) {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/outdoors-v12",
        center: [lng, lat],
        zoom: 12,
      });
    }
  }, [lat, lng]);

  return <div ref={mapContainer} className="map" />;
};

export default MapBox;
