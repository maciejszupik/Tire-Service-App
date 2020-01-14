import React, { Component } from 'react';
import image1 from './1.jpg'

class Home extends Component {
    get styles(){
        return({
            width: '80%',
            margin: '0 auto',
            minHeight: '60vh',                  
        })
    }
        

    render() {
        return (
            <div style={this.styles}>
                <img className='mainImage' src={image1} alt='img1'/>
            </div>
        );
    }
}

export default Home;

