import axios from 'axios';

export const ADD_GALLERY = 'ADD_GALLERY';
export const GALLERY_LOADING = 'GALLERY_LOADING';
export const GALLERY_FAILED = 'GALLERY_FAILED';

const FETCH_BASE_URL = 'https://www.flickr.com/services/feeds/photos_public.gne/?tags=marilyn%20monroe&format=json&nojsoncallback=true';
const FETCH_PROXY = 'https://cors-anywhere.herokuapp.com/';

const config = {
    headers: {
      'Content-Type': 'application/json',
      'accept': 'application/json'
    },
    data: {},
};

export const fetchGallery = () => (dispatch) => {
    
    dispatch(galleryLoading());

    return axios.get(FETCH_PROXY + FETCH_BASE_URL, config)
        .then(({data}) => {
            dispatch(addGallery(data.items));
        })
        .catch((err) => {
            dispatch(galleryFailed(err));
        })
};

export function addGallery(gallery) {
    return { 
        type: ADD_GALLERY,
        payload: gallery
    }
}

export function galleryLoading() {
    return {
        type: GALLERY_LOADING
    }
}

export function galleryFailed(errorMsg) {
    return {
        type: GALLERY_FAILED,
        payload: errorMsg
    }
}