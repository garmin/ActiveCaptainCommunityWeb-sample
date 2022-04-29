export interface ApiError {
    message: string;
    httpStatus: number;
    response?: any;
}
