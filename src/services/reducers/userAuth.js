import {
    AUTH_CHECKED_USER,
    REGISTER_USER,
} from '../actions/userAuth';


const initialState = {
    user: null,
    isAuthChecked: false,
};


export const userRegisterReducer = (state = initialState, action) => {

    switch (action.type) {

        case REGISTER_USER: {
            return {
                ...state,
                user: action.userData,
            };
        }
        case AUTH_CHECKED_USER: {
            return {
                ...state,
                isAuthChecked: action.authChecked,
            };
        }
        default: {
            return state;
        }
    }
};