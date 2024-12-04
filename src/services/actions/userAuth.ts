import BASE_URL from '../../utils/base-url'

import checkResponse from '../../utils/check-response'

import { Dispatch } from 'redux';

import { fetchWithRefresh } from '../../utils/api'

import { register } from '../../utils/api'

import { logout } from '../../utils/api'

import { login } from '../../utils/api'


export const AUTH_CHECKED_USER: 'AUTH_CHECKED_USER' = "AUTH_CHECKED_USER";
export const REGISTER_USER: 'REGISTER_USER' = "REGISTER_USER";

export interface IAuthCheckedUserAction {
    readonly type: typeof AUTH_CHECKED_USER;
    readonly authChecked: boolean;
  
  }

  export interface IRegisterUserAction {
    readonly type: typeof REGISTER_USER;
    readonly userData: {
        email: string,
        name: string
    };
    
  
  }

  export type IUserAuthAction =
  | IAuthCheckedUserAction
  | IRegisterUserAction;


export type AppDispatch = Dispatch<IUserAuthAction>;



export type TUserData = {
    email: string,
    name: string,
    password?: string,
    
  }

  export type TUser = {
    user: {
        email: string,
        name: string,
        password: string,

    }
    accessToken: string,
    refreshToken: string
    
  }


 




//-------------------------------------------- Регистрация пользователя ----------------------------------------------------------

export function registerUser(userData: TUserData) {

    return function (dispatch: AppDispatch) {

        function registerUserData(userData: TUserData) {
            register(userData)
            //@ts-ignore
                .then((userData: TUser) => {
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

export function updateUser(userData: TUserData) {

    return function (dispatch: AppDispatch) {

        function updateUserData(userData: TUserData) {
            fetchWithRefresh(`${BASE_URL}/auth/user`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                    //@ts-ignore
                    authorization: localStorage.getItem('accessToken'),

                },
                body: JSON.stringify({
                    email: userData.email,
                    password: userData.password,
                    name: userData.name,
                }),
            })
            //@ts-ignore
                .then((userData: TUser) => {
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

    return function (dispatch: AppDispatch) {

        function getUserData() {
            fetchWithRefresh(`${BASE_URL}/auth/user`, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    //@ts-ignore
                    authorization: localStorage.getItem('accessToken'),

                },
            })
            //@ts-ignore
                .then((userData: TUser) => {
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
                      //@ts-expect-error
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
    return (dispatch: AppDispatch) => {
        if (localStorage.getItem("accessToken")) {
            //@ts-ignore
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

export function loginUser(userData: TUserData) {

    return function (dispatch: AppDispatch) {

        function loginUserData(userData: TUserData) {
            login(userData)
            //@ts-ignore
                .then((userData: TUser) => {
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

    return function (dispatch: AppDispatch) {

        function logoutUserData() {
            logout()
                .then(() => {
                    localStorage.removeItem("accessToken");
                    localStorage.removeItem("refreshToken");

                    dispatch({
                        type: REGISTER_USER,
                        //@ts-ignore
                        userData: null,
                    });

                })
                .catch((err) => console.log(err));
        }
        logoutUserData()
    }
}