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
      titulo:'teste1', texto:'lorem ipsum', data: '22/11/2017', horario: '16:04'
    },
    {
      titulo:'teste2',texto:'lorem ipsum dolor', data: '10/06/2017', horario: '11:55'
    }];

  }
 
  createTask(){
    this.navCtrl.push(AddTaskPage);
  }

}
