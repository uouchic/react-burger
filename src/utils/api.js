import checkResponse from './check-response'

import BASE_URL from './base-url'



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
        .then(checkResponse)
        .then((refreshData) => {
            if (!refreshData.success) {
                return Promise.reject(refreshData);
            }
            localStorage.setItem("refreshToken", refreshData.refreshToken);
            localStorage.setItem("accessToken", refreshData.accessToken);
            return refreshData;
        });
};

export const fetchWithRefresh = async (url, options) => {

    try {
        const res = await fetch(url, options);
        console.log(res)
        return await checkResponse(res);
    } catch (err) {
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


export const register = (userData) => {
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
        .then((res) => checkResponse(res));
};


export const login = (userData) => {
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
        .then((res) => checkResponse(res));
};





export const logout = () => {
    return fetch(`${BASE_URL}/auth/logout`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({
            token: localStorage.getItem("refreshToken"),
        }),
    })
        .then((res) => checkResponse(res));
};


export const forgot = (email) => {
    return fetch(`${BASE_URL}/password-reset`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({
            email: email.email,
        }),
    })
        .then((res) => checkResponse(res));
};


export const reset = (resetData) => {
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
    .then((res) => checkResponse(res));

};

