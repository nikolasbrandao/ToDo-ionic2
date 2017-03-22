import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { AddTaskPage } from '../add-task/add-task';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }

  createTask(){
    this.navCtrl.push(AddTaskPage);
  }

}
