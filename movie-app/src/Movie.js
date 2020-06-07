import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

const Movie = ({poster, title, genres, synopsis}) => (
    <div className="Movie">
        <div className="Movie__Columns">
            <MoviePoster poster={poster} />
        </div>
        <div className="Movie__Columns">
            <h1>{title}</h1>
            <div className='Movie__Genres'>
                { genres.map( (genre, index) => <MovieGenre genre={genre} key={index}/> ) }
            </div>
            <p className='Movie__Synopsis'>
                {synopsis}
            </p>
        </div>
    </div>
);

const MoviePoster = ({poster}) =>  ( <img className='Movie__Poster' src={poster} alt=''/> );    
const MovieGenre = ({genre}) => ( <span className='Movie__Genre' >{genre}</span> );


Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired
}

MoviePoster.propType = {
    poster: PropTypes.string.isRequired
}

MovieGenre.propType = {
    genre: PropTypes.string.isRequired
}


export default Movie;