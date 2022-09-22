import { Component } from '@angular/core';
import { Learner } from './learner';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'angularpiping';

  learnerForm: FormGroup
  ff: FormArray


  constructor(fb: FormBuilder) {
    this.learnerForm = fb.group({
      //name: ['', [Validators.required, Validators.email, Validators.maxLength(14), Validators.minLength(7)]],
      //name:[''],
      name: ['', [Validators.maxLength(14), Validators.minLength(7)]],
      nickname: [''],
      address: fb.group({
        bldgNo:[''],
        street:['']
      }),
      favoriteFoods:fb.array([])
    })
    this.ff = this.learnerForm.get('favoriteFoods') as FormArray
  }

  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
    this.learnerForm.valueChanges.subscribe((data) => {
      console.log(data)
    })
    this.ff = this.learnerForm.get('favoriteFoods') as FormArray
  }

  submit() {
    console.log(this.learnerForm.getError);
  }
  reset() {
    this.learnerForm.reset();
  }

  resetNickname() {
    this.learnerForm.get('nickname')?.reset();
  }
  markNickname() {
    this.learnerForm.get('nickname')?.setValue('Chin Mae');

  }

  addFavorite() {
    (this.learnerForm.get('favoriteFoods') as FormArray).push(new FormControl())
  }

  get name() {
    return this.learnerForm.get('name') as FormControl;
  }
}
