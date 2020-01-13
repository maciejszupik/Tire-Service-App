import React, { Component } from 'react';

class Contact extends Component {
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
                CONTACT
            </div>
        );
    }
}

export default Contact;
