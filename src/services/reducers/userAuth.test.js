import { userRegisterReducer } from './userAuth';
import { initialState } from './userAuth';

import {
    AUTH_CHECKED_USER,
    REGISTER_USER,
} from '../actions/userAuth';

describe("user register reduser", () => {

    it("initial state", () => {
        expect(userRegisterReducer(undefined, {})).toEqual(initialState)
    })



    it("register user", () => {
        expect(userRegisterReducer(initialState, {
            type: REGISTER_USER,
            userData: {
                name: 'user',
                email: 'user@user.ru'
            }
        })).toEqual({
            ...initialState,
            user: {
                name: 'user',
                email: 'user@user.ru'
            }
        }
        )
    })


    it("auth checked user", () => {
        expect(userRegisterReducer(initialState, {
            type: AUTH_CHECKED_USER,
            authChecked: true
        })).toEqual({
            ...initialState,
            isAuthChecked: true
        }
        )
    })


})