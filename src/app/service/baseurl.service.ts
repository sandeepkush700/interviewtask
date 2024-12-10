import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseurlService {

  constructor() { }



  INPLAY = "https://ag.bet36.live/api-V2/getInPlayGames"

  TODAY = "https://ag.bet36.live/api-V2/getTodayGames"

  TOMORROW = "https://ag.bet36.live/api-V2/getTomorrowGames"


}
