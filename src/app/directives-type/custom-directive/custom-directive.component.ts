import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-directive',
  templateUrl: './custom-directive.component.html',
  styleUrls: ['./custom-directive.component.scss']
})
export class CustomDirectiveComponent implements OnInit {
  public color: string;

  constructor() {
    this.color = '';
  }

  public changeColor(ColorName: string) {
    this.color = ColorName;
  }
  ngOnInit(): void {
  }

}
