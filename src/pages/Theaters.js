import React from 'react';
import { Get } from 'react-axios';
import { Link } from 'react-router-dom';

function Theaters() {
    let allMovies = [];
    return (
        <div>
            <h1 className='mt-4'>All Theaters</h1>
            <hr />
            <div className='row'>
                <Get url="movies">
                    {(error, response, isLoading, makeRequest, axios) => {
                        if (isLoading) { }
                        else if (response !== null) {
                            allMovies = response.data.data;
                        }
                    }}
                </Get>
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
                                <div>
                                    {response.data.data.map((theater, index) => {
                                        return (
                                            <div className='col-12 mt-3' key={index}>
                                                <div className='row'>
                                                    <div className='col-6'>
                                                        <h4>{theater.name}</h4>
                                                        <p>{theater.address_line_1}</p>
                                                        <p>{theater.city}</p>
                                                    </div>
                                                    <div className='col-6'>
                                                        <div className='row'>
                                                            {/* Loop through all movies and show their images */}
                                                            {allMovies.map((movie, index) => {
                                                                if (index < 16) {
                                                                    return (
                                                                        <div className='col-2' key={index}>
                                                                            <Link to={'/movies/' + (index + 1)}>
                                                                                <img alt={movie.title + ' image'} className='img-fluid' src={movie.image_url} />
                                                                            </Link>
                                                                        </div>
                                                                    );
                                                                } else {
                                                                    return null;
                                                                }
                                                            })}
                                                        </div>
                                                    </div>
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
            </div>
        </div>
    );
}

export default Theaters;