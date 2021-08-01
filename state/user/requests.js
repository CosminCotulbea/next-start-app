// import FetchApi from "lib/FetchApi"

export const requestGetUser = (payload = {}) => {
    return ({
        data: {
            name: 'Gica',
            orice: 'fotbalist'
        },
        isError: false
    })
    // return FetchApi.get(`user`, rest);
};
