import axios from 'axios';
import { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import { ApiError } from 'types/Api';
import qs from 'qs';
import { AppConfig } from 'AppConfig';

axios.defaults.headers.common['Content-Type'] = 'application/json; charset=utf-8';

export class ApiBase {
    public static delete<T>(options: AxiosRequestConfig): Promise<T | ApiError> {
        return this.executeAjax<T>({
            ...options,
            method: 'delete',
        });
    }

    public static get<T>(options: AxiosRequestConfig): Promise<T> {
        return this.executeAjax<T>({
            ...options,
            method: 'get',
        });
    }

    public static post<T>(options: AxiosRequestConfig): Promise<T> {
        return this.executeAjax<T>({
            ...options,
            method: 'post',
        });
    }

    public static put<T>(options: AxiosRequestConfig): Promise<T | ApiError> {
        return this.executeAjax<T>({
            ...options,
            method: 'put',
        });
    }

    public static patch<T>(options: AxiosRequestConfig): Promise<T | ApiError> {
        return this.executeAjax<T>({
            ...options,
            method: 'patch',
        });
    }

    private static executeAjax<T>(options: AxiosRequestConfig): Promise<T> {
        if (!options.baseURL) {
            options.baseURL = AppConfig.getSettings().activeCaptainThirdPartyApiUrlV2;
        }

        if (!options.paramsSerializer) {
            options.paramsSerializer = (params: any) => {
                return qs.stringify(params, { indices: false });
            };
        }

        return axios
            .request(options)
            .then((response: AxiosResponse<T>) => {
                return response.data;
            })
            .catch((err: AxiosError<T>) => {
                const axiosErr: AxiosError<T> = err as AxiosError<T>;
                const apiError: ApiError = {
                    httpStatus: axiosErr.response?.status || 0,
                    message: axiosErr.message,
                    response: axiosErr.response,
                };
                throw apiError;
            });
    }
}
