import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-xd',
  templateUrl: './xd.component.html',
  styleUrls: ['./xd.component.css']
})
export class XdComponent implements OnInit {
  xd?: string;

  constructor() { }

  ngOnInit(): void {
    const date = new Date();
    this.xd = "x" + "d".repeat(date.getDate())
  }

}
