import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from "@angular/common/http"
import { BaseurlService } from './baseurl.service';

@Injectable({
  providedIn: 'root'
})
export class IntermediateService {

  constructor(private url: BaseurlService, private http: HttpClient) { }

async  forinPaly(data: any) {
    return await this.http.post(this.url.INPLAY, data).toPromise()
  }

  forToday(inpudata: any) {
    return this.http.post(this.url.TODAY, inpudata).toPromise()
  }

  forTomorrow(inputdata: any) {
    return this.http.post(this.url.TOMORROW, inputdata).toPromise()
  }

}
