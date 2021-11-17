import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

export class HttpClientService {
  private http: AxiosInstance;

  public create(config?: AxiosRequestConfig): HttpClientService {
    this.http = axios.create(config);

    return this;
  }

  public async get(url: string): Promise<AxiosResponse> {
    return this.http.get(url);
  }
}
