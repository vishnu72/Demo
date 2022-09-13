import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-directives',
  templateUrl: './attribute-directives.component.html',
  styleUrls: ['./attribute-directives.component.scss']
})
export class AttributeDirectivesComponent implements OnInit {

  public flag: boolean = true;
  public setClassFlag: boolean = false;
  public setStyleFlag: boolean = false;
  public applyStyle: boolean = false;
  public setTextClass:boolean=false;
  constructor() {

  }
  getClass() {
    return { 'paragraph anotherParagraph': this.setClassFlag };
  }

  getStyle() {
    let styles = {
      // CSS property names
      'font-style': this.setStyleFlag ? 'italic' : 'normal',// italic
      'font-weight': this.setStyleFlag ? 'bold' : 'normal',// normal
    };
    return styles;
  }

 people: any[] = [
    {
      "name": "Douglas  Pace",
      "country": 'UK'
    },
    {
      "name": "Mcleod  Mueller",
      "country": 'USA'
    },
    {
      "name": "Day  Meyers",
      "country": 'HK'
    },
    {
      "name": "Aguirre  Ellis",
      "country": 'UK'
    },
    {
      "name": "Cook  Tyson",
      "country": 'UAE'
    }
  ];
  ngOnInit(): void {
  }

}
