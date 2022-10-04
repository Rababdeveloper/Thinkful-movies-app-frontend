import React from 'react';
import { Get } from 'react-axios';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <h1 className='mt-4'>Now Showing</h1>
            <hr />
            <Get url="movies">
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
                                {response.data.data.map((movie, index) => {
                                    return (
                                        <div className='col-3 mt-3' key={index}>
                                            <Link to={'/movies/' + (index + 1)}>
                                                <div className="card border-0">
                                                    <img alt={movie.title + ' image'} className='img-fluid' src={movie.image_url} />
                                                    <h4 className='text-center text-dark'><b>{movie.title}</b></h4>
                                                </div>
                                            </Link>
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
    );
}

export default Home;