import React from 'react';
import { Get } from 'react-axios';
import SingleMovie from '../components/SingleMovie';

function Movies() {
    return (
        <div>
            <h1 className='mt-4'>All Movies</h1>
            <hr />
            <div className='row'>
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
                                <div>
                                    {response.data.data.map((movie, index) => {
                                        return (
                                            <div className='col-12 mt-3' key={index}>
                                                <SingleMovie movie={movie} movieId={index + 1} />
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

export default Movies;