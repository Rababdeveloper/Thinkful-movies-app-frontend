import React from 'react';
import { useNavigate } from "react-router-dom";

function SingleMovie(props) {
    let navigate = useNavigate();

    return (
        <div className="row">
            <div className="col-md-3">
                <img alt={props.movie.title + ' image'} className='img-fluid' src={props.movie.image_url} />
            </div>
            <div className="col-md-9">
                <h2>{props.movie.title}</h2>
                <p>{props.movie.description}</p>

                <h6 className='mt-4'><b>Runtime:</b> {props.movie.runtime_in_minutes} minutes</h6>
                <h6 className='mt-4'><b>Rating:</b> {props.movie.rating}</h6>
                <h6 className='mt-4'><b>Average Review Rating:</b> 3</h6>

                <button className="btn btn-primary mt-4" onClick={(e) => {
                    navigate('/movies/' + props.movieId);
                }}>See more</button>
            </div>
        </div>
    );
}

export default SingleMovie;