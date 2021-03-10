import axios from "axios";

const TMDB_KEY = "c9349dd29b0c396b729d9fc6016daf67";

const makeRequest = (path, params) =>
    axios.get(`https://api.themoviedb.org/3${path}`, {
        params: {
            ...params,
            api_key: TMDB_KEY,
        },
    });

const geyAnything = async (path, params = {}) => {
    try {
        const {
            data: { results },
            data,
        } = await makeRequest(path, params)
        return [results || data, null]
    } catch (e) {
        return [null, e]
    }
}

export const movieAPI = {
    lastest: () => geyAnything("/movie/lasteset"),
    nowPlaying: () => geyAnything("/movie/now_playing"),
    toprated: () => geyAnything("/movie/top_rated"),
    popular: () => geyAnything("/movie/popular"),
    upcoming: () => geyAnything("/movie/upcoming"),
    detail: (id) => geyAnything(`/movie/${id}`)
}

export const tvAPI = {
    lastest: () => geyAnything("/tv/lasteset"),
    ontheair: () => geyAnything("/tv/on_the_air"),
    popular: () => geyAnything("/tv/popular"),
    toprated: () => geyAnything("/tv/top_rated"),
    detail: (id) => geyAnything(`/tv/${id}`)
}