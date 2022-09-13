import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';


import { UserService } from '../user.service';
import { User } from '../user.model';
import { LoaderService } from '../../core/loader/loader.service';
import { ToastrServiceProvider } from '../../core/toastr/toastr.service';
import { BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'add-user',
  templateUrl: './add.component.html'
})

export class addComponent implements OnInit {
  public userAddForm: FormGroup;
  public title: string;
  constructor(
    private _toast: ToastrServiceProvider,
    private userservice: UserService,
    private loader: LoaderService,
    public bsModalRef: BsModalRef,
    private _fb: FormBuilder,
  ) {
    this.userAddForm = this.buildUser(this.emptyUser());
    this.title ='Demo'

  }

  ngOnInit() {
  }

  /**
 * TO GET EMPTY ROLE DATA.
 */
  emptyUser(): User {
    return {
      FirstName: '',
      LastName: '',
      Email: '',
      ContactNumber: '',
      Date: '',
      id: ''
    }
  }

  addUser() {
    let newUserData = this.userAddForm.value;
    let validate = this.validateAllFormFields(this.userAddForm);
    if (validate.result) {
      this.userservice.addUser(newUserData).subscribe(
        response => {
          if (response.status) {
            this._toast.success('User Added', 'Success');
            this.userservice.sendNewUserData(newUserData);
            this.bsModalRef.hide();
          } else {
            console.log('error');
            //this._toast.error(response.errors, 'Error');
          }
        }, err => {
          this._toast.error(err.errors, 'Error'), {
            timeOut: 30,
          }
        });
      this.clearForm();
    } else {
      this._toast.error(validate.errors, 'Error')
    }
  }

  /**
   * CLEAR FORM DATA.
   */
  clearForm() {
    this.userAddForm.reset();
  }

  /**
   * BUILD FORM GROUP FOR ROLE DATA.
   * @param data 
   */
  buildUser(data: User): FormGroup {
    return this._fb.group({
      FirstName: [data.FirstName, [Validators.required]],
      LastName: [data.LastName, [Validators.required]],
      Email: [data.Email, [Validators.required]],
      ContactNumber: [data.ContactNumber, [Validators.required]]
    })
  }

  /**
   * FORM VALIDATION
   * @param formGroup 
   */
  validateAllFormFields(formGroup: FormGroup) {
    let flag = true;
    let errors: any = [];

    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        if (control.invalid) {
          flag = false;
          errors.push(`${field} field is invalid.`);
        }
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });

    return { result: flag, errors: errors };
  }

}