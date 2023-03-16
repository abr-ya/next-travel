import { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { ICoord } from "@/interfaces/index";

interface IMapBox {
  coord: ICoord;
}

const MapBox = ({ coord: { lat, lng } }: IMapBox) => {
  const token = process.env.NEXT_PUBLIC_MAP_API;

  if (!token) return <span>ошибка! не передан токен!</span>;

  mapboxgl.accessToken = token;

  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    if (map.current) return;

    if (lat && lng) {
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
