import checkResponse from './check-response'

import BASE_URL from './base-url'



type TUserData = {
    email: string;
    name?: string;
    password?: string;
    token?: string;

}


type TUserDataRes = {
    success: boolean;
    user: Pick<TUserData, 'email' | 'name'>;
    accessToken: string;
    refreshToken: string;

}


type TLogoutRes = {
    success: string;
    message: string;

}



export const refreshToken = () => {
    return fetch(`${BASE_URL}/auth/token`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({
            token: localStorage.getItem("refreshToken"),
        }),
    })
        .then(checkResponse<TUserDataRes>)
        .then((refreshData) => {
            if (!refreshData.success) {
                return Promise.reject(refreshData);
            }
            localStorage.setItem("refreshToken", refreshData.refreshToken);
            localStorage.setItem("accessToken", refreshData.accessToken);
            return refreshData;
        });
};



type THeaders = {
  authorization: string;
};



type TOptions = {
  method: string;
  headers: THeaders;
  body: string;
};



export const fetchWithRefresh = async (url: string, options: TOptions) => {

    try {
        const res = await fetch(url, options);
        return await checkResponse<TUserDataRes>(res);
    } catch (err: any) {
        if (err.message === "jwt expired") {
            const refreshData = await refreshToken();
            options.headers.authorization = refreshData.accessToken;
            const res = await fetch(url, options);
            return await checkResponse(res);
        } else {
            return Promise.reject(err);
        }
    }
};



export const register = (userData: Pick<TUserData, 'email' | 'password' | 'name'>): Promise<TUserDataRes> => {
    return fetch(`${BASE_URL}/auth/register`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({
            email: userData.email,
            password: userData.password,
            name: userData.name,
        }),
    })
        .then((res) => checkResponse<TUserDataRes>(res));
};


export const login = (userData: Pick<TUserData, 'email' | 'password'>): Promise<TUserDataRes> => {
    return fetch(`${BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({
            email: userData.email,
            password: userData.password,
        }),
    })
        .then((res) => checkResponse<TUserDataRes>(res));
};





export const logout = (): Promise<TLogoutRes> => {
    return fetch(`${BASE_URL}/auth/logout`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({
            token: localStorage.getItem("refreshToken"),
        }),
    })
        .then((res) => checkResponse<TLogoutRes>(res));
};


export const forgot = (email:  Pick<TUserData, 'email'>): Promise<TLogoutRes> => {
    return fetch(`${BASE_URL}/password-reset`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({
            email: email.email,
        }),
    })
        .then((res) => checkResponse<TLogoutRes>(res));
};


export const reset = (resetData: Pick<TUserData, 'token' | 'password'>): Promise<TLogoutRes> => {
    return fetch(`${BASE_URL}/password-reset/reset`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({
            password: resetData.password,
            token: resetData.token,
        }),
    })
    .then((res) => checkResponse<TLogoutRes>(res));

};

