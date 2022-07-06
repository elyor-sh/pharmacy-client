import {AxiosResponse} from "axios";

interface ResponseType<T> {
    items: T
    message: string
    paging: null
}

export type AxiosResponseType<T> = Promise<AxiosResponse<ResponseType<T>>>