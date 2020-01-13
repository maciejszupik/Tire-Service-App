import React, { Component } from 'react';
import Form from './Form';

class Term extends Component {
    get styles(){
        return({
            width: '80%',
            margin: '0 auto',
            minHeight: 860   
        })
    }
    render() {
        return (
            <div style={this.styles}>
                <Form />
            </div>
        );
    }
}


export default Term;