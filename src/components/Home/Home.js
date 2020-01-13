import React, { Component } from 'react';


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
                HOME
            </div>
        );
    }
}

export default Home;
