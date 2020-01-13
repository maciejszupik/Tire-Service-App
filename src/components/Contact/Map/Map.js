import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';


const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
    static defaultProps = {
    center: {
      lat: 50.06,
      lng: 19.93
    },
    zoom: 11
  };
    render() {
        return (
            <div style={{ height: '60vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{key :  "AIzaSyDV9mZ3uy-cZzveRCld5r34mGOnRTBt3Oo" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={50.061613}
            lng={50.061613}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
        );
    }
}

export default Map;
