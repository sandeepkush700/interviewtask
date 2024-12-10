import { Component, OnInit } from '@angular/core';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {
  constructor(private service: CommonService) {

  }
  ngOnInit() {
    this.getdataToday()
  }

  todata:any

  async getdataToday() {
    let impudata = ""
    let data = await this.service.Today(impudata);
    this.todata=data
    console.log(data);


  }

}
