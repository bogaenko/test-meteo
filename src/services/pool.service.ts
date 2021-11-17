import { HttpClientService } from './http-client.service';
import { AxiosResponse } from 'axios';
import { ApiPointsEnum } from '../enums/ApiPointsEnum';

export class PoolService {
  private httpClientService;
  
  constructor() {
    this.httpClientService = new HttpClientService();
    this.httpClientService.create();
  }

  public async runRequests(count: number, isParallel: boolean): Promise<void> {
    let response: AxiosResponse;
    try {
      if (isParallel) {
        let promises = [];
        for (let i = 0; i < count; i++) {
          promises.push(this.httpClientService.get(ApiPointsEnum.TEST_API_POINT));            
        }
        await Promise.all(promises);        
      } else {
        for (let i = 0; i < count; i++) {
          response = await this.httpClientService
            .get(ApiPointsEnum.TEST_API_POINT);            
        }        
      }             
    } catch (e) {
      console.log('Error', e);      
    }
  }
}
