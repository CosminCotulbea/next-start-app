import axios from 'axios';
import qs from 'qs';

// import {translate} from './trans';
import {HTTP_UNAUTHORIZED} from "../environment/constants";

class Http {
    constructor() {
        axios.defaults.headers.patch['Content-Type'] = 'application/x-www-form-urlencoded';
        axios.interceptors.request.use((request) => {
            if (request.data && request.headers['Content-Type'] === 'application/x-www-form-urlencoded') {
                request.data = qs.stringify(request.data);
            }
            return request;
        });
        this._axios = axios.create({});
        this._axios.defaults.timeout = 300000;
        this._url = process.env.API_URL;
        this._apiMethod = false;
        this._response = false;
        this._error = false;
    }

    _validate() {
        if (!this._apiMethod) {
            throw new Error('Method was not specified.');
        }
    }

    route(apiMethod) {
        this._apiMethod = apiMethod;
        return this;
    }

    static _getAuthConfig() {
        let axiosConfig = {};

        const jwt = sessionStorage.getItem('jwt');

        if (jwt) {
            axiosConfig = Object.assign({}, {
                headers: {'Authorization': 'Bearer ' + jwt}
            });
        }

        return axiosConfig;
    }

    build() {
        let response = this._response && this._response.data ? {...this._response.data} : false;
        this._response = false;

        let errorResponse = {
            isError: true,
            isForbidden: false,
            userFault: true,
            errorMessage: {},
            forbiddenMessage: {}
        };

        if (response) {
            if (response.isError && response.isError === true) {
                let errorMessage = {};

                if (response.errorMessage) {
                    for (let error in response.errorMessage) {
                        if (response.errorMessage.hasOwnProperty(error)) {
                            if (Array.isArray(response.errorMessage[error])) {
                                //use translate
                                errorMessage = {...errorMessage, [error]: response.errorMessage[error][0]};
                            } else {
                                //use translate
                                errorMessage = {...errorMessage, [error]: response.errorMessage[error]};
                            }
                        }
                    }
                }

                errorResponse = {
                    ...errorResponse,
                    ...response,
                    ...{errorMessage}
                };
            } else if (response.isForbidden && response.isForbidden === true) {
                let forbiddenMessage = {};

                if (response.forbiddenMessage) {
                    for (let error in response.forbiddenMessage) {
                        if (response.forbiddenMessage.hasOwnProperty(error)) {
                            if (Array.isArray(response.forbiddenMessage[error])) {
                                // use translate
                                forbiddenMessage = {
                                    ...forbiddenMessage,
                                    [error]: response.forbiddenMessage[error][0]
                                };
                            } else {
                                // use translate
                                forbiddenMessage = {
                                    ...forbiddenMessage,
                                    [error]: response.forbiddenMessage[error]
                                };
                            }
                        }
                    }
                }

                errorResponse = {
                    ...errorResponse, ...{
                        isError: false,
                        userFault: false
                    }, ...response,
                    ...{forbiddenMessage}
                };
            } else {
                return response;
            }
        } else {
            //use translate
            errorResponse = {...errorResponse, errorMessage: {application: 'errors.application'}};
        }

        return errorResponse;
    }

    buildError(status) {
        let errorData = this._error ? {...this._error} : false;
        this._error = false;

        if (status === HTTP_UNAUTHORIZED) {
            sessionStorage.removeItem('jwt');
            localStorage.removeItem('rememberToken');
            window.location.reload();
        } else {
            let errorMessage = {};

            if (errorData && errorData.errorMessage) {
                for (let error in errorData.errorMessage) {
                    if (errorData.errorMessage.hasOwnProperty(error)) {
                        if (Array.isArray(errorData.errorMessage[error])) {
                            //use translate
                            errorMessage = {...errorMessage, [error]: errorData.errorMessage[error][0]};
                        } else {
                            //use translate
                            errorMessage = {...errorMessage, [error]: errorData.errorMessage[error]};
                        }
                    }
                }
            }

            return {
                isError: true,
                isForbidden: false,
                userFault: true,
                errorMessage: {...errorMessage},
                forbiddenMessage: {}
            };
        }
    }

    async get(options = {}) {
        this._validate();

        let url = `${this._url}/${this._apiMethod}`;
        this._apiMethod = false;

        let authConfig = Http._getAuthConfig();

        try {
            this._response = await this._axios.get(url, {
                params: {
                    ...options,
                    language: localStorage.getItem('lang') || process.env.DEFAULT_LANG
                },
                ...authConfig
            });
        } catch (e) {
            this._error = e.response.data;

            return this.buildError(e.response.status);
        }

        return this.build();
    }

    async post(data = {}) {
        this._validate();

        let url = `${this._url}/${this._apiMethod}`;
        this._apiMethod = false;

        let authConfig = Http._getAuthConfig();

        if (data instanceof FormData) {
            data.append('language', localStorage.getItem('lang') || process.env.DEFAULT_LANG);
        } else {
            data.language = localStorage.getItem('lang') || process.env.DEFAULT_LANG;
        }

        try {
            this._response = await this._axios.post(url, data, authConfig);
        } catch (e) {
            this._error = e.response.data;

            return this.buildError(e.response.status);
        }

        return this.build();
    }

    async delete(data = {}) {
        this._validate();

        let url = `${this._url}/${this._apiMethod}`;
        this._apiMethod = false;

        let authConfig = Http._getAuthConfig();

        try {
            this._response = await this._axios.delete(url, {...authConfig, params: {...data}});
        } catch (e) {
            this._error = e.response.data;

            return this.buildError(e.response.status);
        }

        return this.build();
    }

    async patch(data = {}) {
        this._validate();

        let url = `${this._url}/${this._apiMethod}`;
        this._apiMethod = false;

        let authConfig = Http._getAuthConfig();

        try {
            this._response = await this._axios.patch(url, {
                ...data,
                language: localStorage.getItem('lang') || process.env.DEFAULT_LANG
            }, authConfig);
        } catch (e) {
            this._error = e.response.data;

            return this.buildError(e.response.status);
        }

        return this.build();
    }
}

export default new Http();
