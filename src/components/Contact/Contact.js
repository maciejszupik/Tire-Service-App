import React, { Component } from 'react';
import Map from './Map'

class Contact extends Component {
    get styles(){
        return({
            width: '80%',
            margin: '0 auto',  
        })
    }
    render() {
        return (
            <div style={this.styles}>
                <h1>TIRE WORKSHOP</h1>
                <h2>KRAKÓW RYNEK GŁÓWNY 3</h2>
                <h2>MOBILE: +48 797 979 123</h2>
                <Map />
                <div style={{ height: 100 }}></div>
            </div>
        );
    }
}

export default Contact;
