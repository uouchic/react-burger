import {
    AUTH_CHECKED_USER,
    REGISTER_USER,
} from '../actions/userAuth';


import type { IUserAuthAction } from '../actions/userAuth';

import type { TUser } from '../../utils/types';

type TUserRegisterState = {
    
    user: TUser,
    isAuthChecked: boolean,
  };


const initialState: TUserRegisterState = {
    user: {name: '', email: ''},
    isAuthChecked: false,
};


export const userRegisterReducer = (state = initialState, action: IUserAuthAction): TUserRegisterState => {

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