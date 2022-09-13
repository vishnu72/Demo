import { Component, OnInit, TemplateRef } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user.model';

import { SearchPipe } from '../shared/pipes';
import { addComponent } from './add/add.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public modalRef: BsModalRef;
  public showAdd: boolean= true;

  constructor(private modalService: BsModalService, private userservice: UserService,) {
    this.modalRef =new BsModalRef;

  }
  
  ngOnInit() {}
  
  openModal() {
    const initialState:any = {
        title: 'Add User',
    };
    this.modalRef = this.modalService.show(addComponent, { initialState });
  }
}
