import React, { Component } from 'react';
import image1 from './1.jpg'

class Home extends Component {
    get styles(){
        return({
            width: '80%',
            margin: '0 auto',
            minHeight: 560,                  
        })
    }
        

    render() {
        return (
            <div style={this.styles}>
                <img class='mainImage' src={image1} />
            </div>
        );
    }
}

export default Home;

