import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../models/User';
import {AbstractControl, FormControl, FormGroup, FormsModule, NgForm, Validators} from '@angular/forms';
import {errorObject} from 'rxjs/internal-compatibility';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()
  user: User;

  // name = new FormControl('', [Validators.required, Validators.minLength(10), this.customFukcValidator]);
  // email = new FormControl('');
  // myForm = new FormGroup({
  //   name: this.name,
  //   email: this.email
  // });


  constructor(private formsModule: FormsModule) { }

  ngOnInit(): void {
  }

  // first var

  onInputAction(qqq: HTMLInputElement): void {
    console.log(this.user.name);
    console.log(qqq.value);
    console.log(qqq.validity);
  }


  submit(form: NgForm): void {
    console.log(form);
  }


  // second var

  // xxx(myForm: FormGroup): void {
  //   console.log(myForm);
  // }

  // customFukcValidator(inputData: AbstractControl): any {
  //   if (inputData.value === 'fukc') {
  //     console.log(inputData);
  //     return {error: true, msg: 'fukc is present'};
  //   } else {
  //     return null;
  //   }
  // }
}
