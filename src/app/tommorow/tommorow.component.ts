import { Component, OnInit } from '@angular/core';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-tommorow',
  templateUrl: './tommorow.component.html',
  styleUrls: ['./tommorow.component.css']
})
export class TommorowComponent implements OnInit {

  constructor(private service: CommonService) {

  }

  ngOnInit() {
    this.getdataFortomrrow()
  }


  data: any=[]
  async getdataFortomrrow() {
    let inputdatadata = ""
    this.data = await this.service.Tomorrow(inputdatadata)
    console.log(this.data);
    if(this.data )
    {
      this.data.filter((ele:any)=>{
        if(ele.sportid=4)
        {
          this
        }
      })
    }

  }
}
