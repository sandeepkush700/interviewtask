import { Injectable } from '@angular/core';
import { IntermediateService } from './intermediate.service';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private service: IntermediateService) { }

  async Inplay(inputdata: any) {

    return  await  this.service.forinPaly(inputdata)
    // try {
    //  return  await  this.service.forinPaly(inputdata)
     
    // } catch (error) {
    //   console.log(error)
    // }
  }


  async Today(inputdata: any) {
   return await this.service.forToday(inputdata)
   
    try {
       await this.service.forToday(inputdata)
    } catch (error) {
      console.log(error)
    }

  }


  async Tomorrow(inputdata: any) {
   return  this.service.forTomorrow(inputdata)
    try {
      this.service.forTomorrow(inputdata)
    } catch (error) {
      console.log(error)
    }

  }

}
