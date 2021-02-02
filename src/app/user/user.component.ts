import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../models/User';
import {AbstractControl, FormBuilder, FormControl, FormGroup, FormsModule, NgForm, Validators} from '@angular/forms';
import {errorObject} from 'rxjs/internal-compatibility';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()
  user: User;

  // second var - 1st method
  // name = new FormControl('', [Validators.required, Validators.minLength(4), this.customFukcValidator]);
  // email = new FormControl('');
  // newForm = new FormGroup({
  //   name: this.name,
  //   email: this.email
  // });

newForm: FormGroup;


  constructor(private formsModule: FormsModule, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  // first var

  // onInputAction(qqq: HTMLInputElement): void {
  //   console.log(this.user.name);
  //   console.log(qqq.value);
  //   console.log(qqq.validity);
  // }
  // submit(form: NgForm): void {
  //   console.log(form);
  // }

  // second var
  // new method

  private initForm(): void {
    this.newForm = this.formBuilder.group({
      name: new FormControl(this.user.name, [Validators.required, Validators.minLength(10), this.customFukcValidator]),
      email: new FormControl(this.user.email, [Validators.required, Validators.minLength(10), this.customFukcValidator])
    })
  }


  xxx(newForm: FormGroup): void {
    console.log(newForm);
  }

  customFukcValidator(inputData: AbstractControl): any {
    if (inputData.value === 'fukc') {
      console.log(inputData);
      return {error: true, msg: 'fukc is present'};
    } else {
      return null;
    }
  }



}
