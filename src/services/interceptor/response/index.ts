/* eslint-disable react-hooks/rules-of-hooks */
import { AxiosError, AxiosResponse } from 'axios';
import { useErrorsHandlers } from './errorHandler';

export const responseInterceptor = () => {
  const { notAuthorized, internalServerError, noInternetConnection } = useErrorsHandlers();

  const onSuccess = async (response: AxiosResponse<any>): Promise<any> => {
    return Promise.resolve(response);
  };

  const onError = (error: AxiosError): Promise<AxiosError> => {
    notAuthorized(error);
    internalServerError(error);
    noInternetConnection(error);

    return Promise.reject(error);
  };

  return { onSuccess, onError };
};
