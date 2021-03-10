import React, {useState, useEffect} from 'react';
import { movieAPI } from "../../api";
import MoviePresenter from "./MoviePresenter"

const MovieContainer = () => {
    const [movies, setMovies] = useState({
        nowPlaying: [],
        topRated: [],
        popular: [],
        upcoming: [],
        nowPlayingError: null,
        topRatedError: null,
        popularError: null,
        upcomingError: null
    })

    const getdata = async () => {
        const [nowPlaying, nowPlayingError] = await movieAPI.nowPlaying()
        const [topRated, topRatedError] = await movieAPI.toprated()
        const [popular, popularError] = await movieAPI.popular()
        const [upcoming, upcomingError] = await movieAPI.upcoming()
        setMovies({
            nowPlaying,
            topRated,
            popular,
            upcoming,
            nowPlayingError,
            topRatedError,
            popularError,
            upcomingError
        })
    }

    useEffect(() => {
        getdata()
    }, [])
    return (
        <MoviePresenter {...movies} />


    );
};

export default MovieContainer;
