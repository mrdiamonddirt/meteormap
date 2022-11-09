import React from "react";
import {
  ComposableMap,
  ZoomableGlobe,
  Geographies,
  Geography
} from "react-simple-maps";
import { Motion, spring } from "react-motion";

async function onclick(geo) {
    console.log(geo);
    try {
      const response = await fetch(`https://data.nasa.gov/resource/gh4g-9sfh.json?$limit=46000`)
      const data = await response.json()
      console.log(data)
    let meteorstrikes = data.length;
    console.log(meteorstrikes)
    } catch (error) {
     console.log(error) 
    }
  }

const mapStyles = {
  width: "90vh",
  height: "auto"
};

const Map = ({ center }) => (
  <div>
    <Motion
      defaultStyle={{
        x: center[0],
        y: center[1]
      }}
      style={{
        x: spring(center[0]),
        y: spring(center[1])
      }}
    >
      {({ x, y }) => (
        <ComposableMap
          width={500}
          height={500}
          projection="orthographic"
          projectionConfig={{ scale: 220 }}
          style={mapStyles}
        >
          <ZoomableGlobe center={[x, y]}>
            <circle
              cx={250}
              cy={250}
              r={220}
              fill="darkblue"
              stroke="#CFD8DC"
            />
            <Geographies
              disableOptimization
              geography="https://unpkg.com/world-atlas@1.1.4/world/110m.json"
            >
              {(geos, proj) =>
                geos.map((geo, i) => (
                  <Geography
                    key={geo.id + i}
                    geography={geo}
                    projection={proj}
                    style={{
                      default: { fill: "darkgreen" }
                    }}
                    onClick={() => onclick(geo)}
                  />
                ))
              }
            </Geographies>
          </ZoomableGlobe>
        </ComposableMap>
      )}
    </Motion>
  </div>
);

export default Map;
