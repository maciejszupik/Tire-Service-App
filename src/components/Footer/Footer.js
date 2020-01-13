import React, { Component } from 'react';

class Footer extends Component {
    get styles(){
        return({
            width: '100%',
            margin: '0 auto',
            minHeight: 60,
            marginTop: '10%'
        })
    }
    render() {
        return (
            <div style={this.styles}>
                Footer
            </div>
        );
    }
}

export default Footer;