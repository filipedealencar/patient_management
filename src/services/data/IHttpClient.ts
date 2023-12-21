export interface IHttpResponse<Data, Error> {
  data: Data | null | undefined;
  isLoading: boolean;
  error: Error | null | undefined;
}

export default interface IHttpClient {
  useGet: <Data = unknown, Error = unknown>(
    url: string
  ) => IHttpResponse<Data, Error> | Promise<IHttpResponse<Data, Error>>;
  usePost: <Data = unknown, Error = unknown>(
    url: string,
    body: BodyInit
  ) => IHttpResponse<Data, Error> | Promise<IHttpResponse<Data, Error>>;
  usePut: <Data = unknown, Error = unknown>(
    url: string,
    body: BodyInit
  ) => IHttpResponse<Data, Error> | Promise<IHttpResponse<Data, Error>>;
  useDelete: <Data = unknown, Error = unknown>(
    url: string
  ) => IHttpResponse<Data, Error> | Promise<IHttpResponse<Data, Error>>;
}
