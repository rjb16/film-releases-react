import React, { Component } from 'react';

class MoreFilmsButton extends Component {

    btnClick() {
        window.open("https://www.imdb.com/calendar/?region=gb");
    }

    render() {
        return (
            <button className="button" cssClass="e-link" onClick={this.btnClick.bind(this)}>View more upcoming releases {">>"} </button>
        )
    }
}

export default MoreFilmsButton;