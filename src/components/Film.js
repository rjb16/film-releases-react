import React, { Component } from 'react';

class Film extends Component {
    render() {
        return(
            <>
                <li className="list-item">
                    <a className="item-link" href={this.props.url}>{this.props.children}</a>
                </li>
            </>
        )
    }
}

export default Film;