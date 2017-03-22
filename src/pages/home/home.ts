import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { AddTaskPage } from '../add-task/add-task';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  atividades:any;

  constructor(public navCtrl: NavController) {

  this.atividades = [
    {
      titulo:'teste1', texto:'lorem ipsum'
    },
    {
      titulo:'teste2',texto:'lorem ipsum dolor'
    }];

  }
 
  createTask(){
    this.navCtrl.push(AddTaskPage);
  }

}
