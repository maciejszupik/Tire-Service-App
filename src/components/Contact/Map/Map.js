import React, { Component } from "react";
import { render } from "react-dom";
import MapGL from "react-map-gl";
import ReactMapGL, {Marker} from 'react-map-gl';

const MAPBOX_TOKEN =
  "pk.eyJ1IjoibWFjaWVqc3p1cGlrIiwiYSI6ImNrNWptN25hazA0Z2Uza3FpanJqb3FlYjAifQ.zvWmbIeLZpsJLrKXiwlWFw"; // Set your mapbox token here

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: 50.06,
        longitude: 19.93,
        zoom: 14,
        bearing: 0,
        pitch: 0
      }
    };
  }

  render() {
    return (
      <ReactMapGL
        {...this.state.viewport}
        width="80vw"
        height="60vh"
        mapStyle="mapbox://styles/mapbox/dark-v9"
        onViewportChange={viewport => this.setState({ viewport })}
        mapboxApiAccessToken={MAPBOX_TOKEN}
      >
          <Marker latitude={50.06} longitude={19.93} offsetLeft={-20} offsetTop={-10}>
            <div style={{ color: '#fff', fontSize: 20 }}>&ordm; WE ARE HERE</div>
          </Marker>
      </ReactMapGL>
    );
  }
}

export default Map;

