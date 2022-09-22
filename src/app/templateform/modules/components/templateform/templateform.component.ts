import { Component, OnInit } from '@angular/core';
import { Learner } from './../../../../learner';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.scss']
})
export class TemplateformComponent implements OnInit {
  constructor() { }

  model:Learner = {
    name: 'Joan Arc',
    nickname: 'j-a',
    address: [{
      bldgNo: '',
      street: ''
    }],
    favoriteFood:[]
  } 
  ngOnInit(): void {
  }

  submit() {
    console.log(this.model)
  }

  

}
