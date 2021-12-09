import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dank-img',
  templateUrl: './dank-img.component.html',
  styleUrls: ['./dank-img.component.css']
})
export class DankImgComponent implements OnInit {
  imgUrl?: string;

  constructor() { }

  ngOnInit(): void {
    const date = new Date()
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0)

    if (date.getDate() == lastDay.getDate()) {
      this.imgUrl = "/assets/WAYTOODANK.gif"
    } else {
      this.imgUrl = "/assets/DankingAround.gif"
    }
  }

}
