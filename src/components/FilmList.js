import React, { Component } from 'react';
import Film from './Film';
import MoreFilmsButton from './MoreFilmsButton';

class FilmList extends Component {
    render() {

        const commentNodes = this.props.films.map((film) => {
            return (
            <Film key={film.id} url={film.url}>{film.name}</Film>
            );
        });

        return (
            <>  
                <ul>
                    {commentNodes}
                </ul>
                <MoreFilmsButton></MoreFilmsButton>
            </>
        )
    }
}
export default FilmList;