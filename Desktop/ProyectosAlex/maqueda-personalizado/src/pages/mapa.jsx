import React, { useState } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, GeoJSON, Marker } from "react-leaflet";

const initialGeojsonFeatures = [
  {
    id: "route1",
    type: "Feature",
    geometry: {
      type: "LineString",
      coordinates: [
        [-98.73715826871519, 20.12225175730221],
        [-98.7367, 20.1229],
      ],
    },
    properties: { color: "#ff0000", isActive: false },
  },
  {
    id: "route2",
    type: "Feature",
    geometry: {
      type: "LineString",
      coordinates: [
        [-98.7368477872877, 20.12167747372288],
        [-98.7368, 20.1230],
      ],
    },
    properties: { color: "#00ff00", isActive: false },
  },
  {
    id: "route3",
    type: "Feature",
    geometry: {
      type: "LineString",
      coordinates: [
        [-98.7360477872877, 20.12167747372288],
        [-98.7360, 20.1225],
      ],
    },
    properties: { color: "#0000FF", isActive: false },
  },
];

const additionalGeojsonFeature1 = {
  id: "additionalRoute1",
  type: "Feature",
  geometry: {
    type: "LineString",
    coordinates: [
      [-98.73706567894149, 20.122273621803586],
      [-98.73734315799442, 20.122617063012925],
      [-98.7366713556548, 20.123152828572103],
      [-98.73652808324562, 20.12338607153511],
      [-98.73625742161362, 20.12348290343951],
      [-98.73633537899062, 20.12373057184344],
    ],
  },
  properties: { color: "#0000FF", isActive: false },
};

const additionalGeojsonFeature2 = {
  id: "additionalRoute2",
  type: "Feature",
  geometry: {
    type: "LineString",
    coordinates: [
      [-98.73705558092433, 20.12225502588211],
      [-98.73721504821721, 20.122127966362342],
      [-98.73681383101538, 20.12159453445352],
      [-98.736984715757, 20.121493739961238],
    ],
  },
  properties: { color: "#FFA500", isActive: false },
};

const additionalGeojsonFeature3 = {
  id: "additionalRoute3",
  type: "Feature",
  geometry: {
    type: "LineString",
    coordinates: [
    ],
  },
  properties: { color: "#FF00FF", isActive: false },
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
  },
  mapContainer: {
    position: "relative",
    flex: 1,
  },
  card: {
    position: "absolute",
    top: "10px",
    right: "10px",
    padding: "10px",
    backgroundColor: "white",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    borderRadius: "4px",
    zIndex: 1000,
  },
};
// ... (other code remains the same)

function Mapa() {
  const mexicoCityCoords = [19.4326, -99.1332];
  const [centerCoords, setCenterCoords] = useState([20.1229, -98.7367]);
  const [markerCoords, setMarkerCoords] = useState([20.1229, -98.7367]);
  const [showRoutes, setShowRoutes] = useState({
    route1: true,
    route2: true,
    route3: true,
    additionalRoute1: true,
    additionalRoute2: true,
    additionalRoute3: true,
  });

  const geojsonFeatures = [
    ...initialGeojsonFeatures,
    additionalGeojsonFeature1,
    additionalGeojsonFeature2,
    additionalGeojsonFeature3,
  ];

  const handleNavigateToMexicoCity = () => {
    setCenterCoords(mexicoCityCoords); // Set the center coordinates to Mexico City
  }

  const handleMapClick = (e) => {
    setMarkerCoords([e.latlng.lat, e.latlng.lng]);
  };

  const handleToggleRoute = (routeId) => {
    setShowRoutes((prevRoutes) => ({
      ...prevRoutes,
      [routeId]: !prevRoutes[routeId],
    }));
  };

  return (
    <div style={styles.container}>
      <div style={styles.mapContainer}>
        <MapContainer
          center={centerCoords}
          zoom={14}
          style={{ height: "500px", width: "100%" }}
          onClick={handleMapClick}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="" />

          {/* Marker */}
          <Marker position={markerCoords}></Marker>

          {/* GeoJSON Layers (Routes) */}
          {geojsonFeatures.map((feature) => (
            showRoutes[feature.id] && (
              <GeoJSON
                key={feature.id}
                data={{ type: "FeatureCollection", features: [feature] }}
                style={(feature) => ({
                  color: feature.properties.color,
                  opacity: feature.properties.isActive ? 1 : 0.5,
                })}
              />
            )
          ))}
        </MapContainer>
      </div>

      <div style={styles.card}>
        <button onClick={handleNavigateToMexicoCity}>Ir a Ciudad de México</button>

        {Object.entries(showRoutes).map(([routeId, showRoute]) => (
          <div key={routeId}>
            <label style={{ color: "black" }}>{`Mostrar Ruta ${routeId}:`}</label>
            <input
              type="checkbox"
              checked={showRoute}
              onChange={() => handleToggleRoute(routeId)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Mapa;
