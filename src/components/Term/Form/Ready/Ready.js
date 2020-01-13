import React, { Component } from "react";

class Ready extends Component {
  constructor(props) {
    super(props);
  }
  get styles(){
    return({
        width: '100%',
        margin: '0 auto',
        minHeight: 860,
        backgroundColor: 'red ',
        position: 'absolute',
        top: 0,
        opacity: 0.7
    })
}
  render() {
    const { service, price } = this.props;
    return (
      <div style={this.styles}>
        <h2>
          jesteś umówiony na {service[0]} rozmiar {service[1]} data:{" "}
          {service[3]}.{service[4]}.{service[5]} cena: {price}
        </h2>
      </div>
    );
  }
}

export default Ready;
