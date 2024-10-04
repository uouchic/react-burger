import BASE_URL from '../../utils/base-url'
import checkResponse from '../../utils/check-response'

import { fetchWithRefresh } from '../../utils/api'

import { register } from '../../utils/api'

import { logout } from '../../utils/api'

import { login } from '../../utils/api'

import { getUserApi } from '../../utils/api'


export const AUTH_CHECKED_USER = "AUTH_CHECKED_USER";
export const REGISTER_USER = "REGISTER_USER";

//-------------------------------------------- Регистрация пользователя ----------------------------------------------------------

export function registerUser(userData) {

    return function (dispatch) {

        function registerUserData(userData) {
            register(userData)
                .then((userData) => {
                    localStorage.setItem("accessToken", userData.accessToken);
                    localStorage.setItem("refreshToken", userData.refreshToken);

                    dispatch({
                        type: REGISTER_USER,
                        userData: userData.user,
                    });
                    dispatch({
                        type: AUTH_CHECKED_USER,
                        authChecked: true,
                    });
                })
                .catch((err) => console.log(err));
        }
        registerUserData(userData)
    }
}

//-------------------------------------------- Обновляем данные пользователя ----------------------------------------------------------

export function updateUser(userData) {

    return function (dispatch) {

        function updateUserData(userData) {
            fetchWithRefresh(`${BASE_URL}/auth/user`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                    authorization: localStorage.getItem('accessToken'),

                },
                body: JSON.stringify({
                    email: userData.email,
                    password: userData.password,
                    name: userData.name,
                }),
            })
                .then((userData) => {
                    console.log(userData)
                    dispatch({
                        type: REGISTER_USER,
                        userData: userData.user,
                    });
                })
                .catch((err) => console.log(err));
        }
        updateUserData(userData)
    }
}



//--------------------------------------------Получаем данные пользователя ----------------------------------------------------------

export function getUser() {

    return function (dispatch) {

        function getUserData() {
            fetchWithRefresh(`${BASE_URL}/auth/user`, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    authorization: localStorage.getItem('accessToken'),

                },
            })
                .then((userData) => {
                    dispatch({
                        type: REGISTER_USER,
                        userData: userData.user,
                    });
                })
                .catch(() => {
                    localStorage.removeItem("accessToken");
                    localStorage.removeItem("refreshToken");
                    dispatch({
                      type: REGISTER_USER,
                      userData: null,
                  });
                 })
                .finally(() => dispatch({
                  type: AUTH_CHECKED_USER,
                  authChecked: true,
              }))
        }
        getUserData()
    }
}


// ------------------------------------------ проверяем авторизацию пользователя ---------------------------------------------

export const checkUserAuth = () => {
    return (dispatch) => {
        if (localStorage.getItem("accessToken")) {
            dispatch(getUser());
        } else {
            dispatch({
                type: AUTH_CHECKED_USER,
                authChecked: true,
            });
        }
    };
};









//--------------------------------------------  Авторизация ----------------------------------------------------------

export function loginUser(userData) {

    return function (dispatch) {

        function loginUserData(userData) {
            login(userData)
                .then((userData) => {
                    localStorage.setItem("accessToken", userData.accessToken);
                    localStorage.setItem("refreshToken", userData.refreshToken);

                    dispatch({
                        type: REGISTER_USER,
                        userData: userData.user,
                    });
                    dispatch({
                        type: AUTH_CHECKED_USER,
                        authChecked: true,
                    });
                })
                .catch((err) => console.log(err));
        }
        loginUserData(userData)
    }
}

//--------------------------------------------  Выход ----------------------------------------------------------

export function logoutUser() {

    return function (dispatch) {

        function logoutUserData() {
            logout()
                .then(() => {
                    localStorage.removeItem("accessToken");
                    localStorage.removeItem("refreshToken");

                    dispatch({
                        type: REGISTER_USER,
                        userData: null,
                    });

                })
                .catch((err) => console.log(err));
        }
        logoutUserData()
    }
}