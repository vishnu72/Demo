import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch-case',
  templateUrl: './switch-case.component.html',
  styleUrls: ['./switch-case.component.scss']
})
export class SwitchCaseComponent implements OnInit {

  public selectItem: string;
  public items: any;
  constructor() { }

  ngOnInit(): void {
    this.items = [
      { id: 1, name: 'success' },
      { id: 2, name: 'info' },
      { id: 3, name: 'warning' },
      { id: 4, name: 'danger' },
      { id: 5, name: 'other' }


    ]
  }

}
