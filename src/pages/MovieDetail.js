import React from 'react';
import { Get } from 'react-axios';
import { useParams } from "react-router-dom";

function MovieDetail(props) {
    let params = useParams();

    return (
        <Get url={'movies/' + params.movieId}>
            {(error, response, isLoading, makeRequest, axios) => {
                if (error) {
                    return (<div>Something bad happened: {error.message}</div>)
                }
                else if (isLoading) {
                    return (<div>Loading...</div>)
                }
                else if (response !== null) {
                    let movie = response.data.data;

                    return (
                        <div className="row mt-4">
                            <div className="col-md-3">
                                <img alt={movie.title + ' image'} className='img-fluid' src={movie.image_url} />
                            </div>
                            <div className="col-md-9">
                                <h2>{movie.title}</h2>
                                <p>{movie.description}</p>

                                <h6 className='mt-4'><b>Runtime:</b> {movie.runtime_in_minutes} minutes</h6>
                                <h6 className='mt-4'><b>Rating:</b> {movie.rating}</h6>
                                <h6 className='mt-4'><b>Average Review Rating:</b> 3</h6>

                                <h4>Now Showing Here</h4>
                                <hr />
                                <Get url="theaters">
                                    {(error, response, isLoading, makeRequest, axios) => {
                                        if (error) {
                                            return (<div>Something bad happened: {error.message}</div>)
                                        }
                                        else if (isLoading) {
                                            return (<div>Loading...</div>)
                                        }
                                        else if (response !== null) {
                                            return (
                                                <div className='row'>
                                                    {response.data.data.map((theater, index) => {
                                                        return (
                                                            <div className='col-4 mt-3' key={index}>
                                                                <div className="card p-2">
                                                                    <h5>{theater.name}</h5>
                                                                    <p>{theater.address_line_1}</p>
                                                                    <p>{theater.city}</p>
                                                                </div>
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            )
                                        }

                                        return (<div>Default message before request is made.</div>)
                                    }}
                                </Get>

                                <h4 className='mt-4'>Reviews</h4>
                                <hr />
                                <Get url={'movies/' + params.movieId + '/reviews'}>
                                    {(error, response, isLoading, makeRequest, axios) => {
                                        if (error) {
                                            return (<div>Something bad happened: {error.message}</div>)
                                        }
                                        else if (isLoading) {
                                            return (<div>Loading...</div>)
                                        }
                                        else if (response !== null) {
                                            return (
                                                <div className='row'>
                                                    {response.data.data.map((review, index) => {
                                                        return (
                                                            <div className='col-12' key={index}>
                                                                <div className="card p-2 mt-4">
                                                                    <h4>{review.critic.preferred_name} {review.critic.surname}</h4>
                                                                    <p>{review.content}</p>
                                                                    <div>

                                                                    <button className='btn btn-danger'>Destroy review</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            )
                                        } else {
                                            return (<div>Default message before request is made.</div>)
                                        }
                                    }}
                                </Get>
                            </div>
                        </div>
                    )
                } else {
                    return (<div>Default message before request is made.</div>)
                }
            }}
        </Get>
    );
}

export default MovieDetail;