import { Component, OnInit } from '@angular/core';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-inplay',
  templateUrl: './inplay.component.html',
  styleUrls: ['./inplay.component.css']
})
export class InplayComponent implements OnInit {

  constructor(private commonservice: CommonService) {

  }

  playdata: any = []
  playdatafortennis: any = []
  playdataforscore: any = []

  ngOnInit(): void {
    this.getInplaydata()
  }

  data: any = []
  async getInplaydata() {
    let inputdata: string = ""
    this.data = await this.commonservice.Inplay(inputdata)
    if (this.data) {
      this.data.filter((ele: any) => {
        if (ele.sportid == 4) {
          this.playdata.push(ele)
        }
      })
      console.log(this.playdata);
    }
    if (this.data) {
      this.data.filter((ele: any) => {
        if (ele.sportid == 2) {
          this.playdatafortennis.push(ele)
        }
      })
      console.log(this.playdatafortennis);

    }

    if (this.data) {
      this.data.filter((ele: any) => {
        if (ele.sportid == 1) {
          this.playdataforscore.push(ele)
        }
      })
    }
  }

}
