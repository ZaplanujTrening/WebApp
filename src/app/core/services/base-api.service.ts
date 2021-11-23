import { HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

export class BaseApiService {

  protected controllerName: string;
  
  constructor(controllerName: string) {
    this.controllerName = controllerName;
  }

  protected getHttpParams(params?: Array<{ name: string, value: any }>): HttpParams {
    let httpParams = new HttpParams();
    if (params) {
      params.forEach((item) => {
        httpParams = httpParams.append(item.name, item.value);
      });
    }
    return httpParams;
  }

  protected getEndpoint(endpoint: string): string {
    if (!this.controllerName || this.controllerName.length === 0) {
      throw new Error('Controller name is not set');
    } else {
      return environment.apiUrl + this.controllerName + '/' + endpoint;
    }
  }
}
