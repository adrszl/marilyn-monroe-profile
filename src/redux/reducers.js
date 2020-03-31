import { ADD_GALLERY, GALLERY_LOADING, GALLERY_FAILED } from './actions';

export const profile = (state = { loading: true,
                                 errorMsg: null }, action) => {
    switch (action.type) {
        case ADD_GALLERY:
            return {...state, loading: false, errorMsg: null, gallery: action.payload};

        case GALLERY_LOADING:
            return {...state, loading: true, errorMsg: null, gallery: []}

        case GALLERY_FAILED:
            return {...state, loading: false, errorMsg: action.payload};

        default:
            return state;
    }
};