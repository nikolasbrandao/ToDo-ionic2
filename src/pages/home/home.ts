import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage'

import { AddTaskPage } from '../add-task/add-task';

import { Tarefa } from '../../models/tarefa';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  atividades: Array<Tarefa>;

  constructor(public navCtrl: NavController, public storage: Storage) {

    this.obterAtividades().then((val:Array<Tarefa>) => {
      this.atividades = val;
    });
  }

  ionViewWillEnter(){
    this.obterAtividades().then((val:Array<Tarefa>) => {
      this.atividades = val;
    });
  }

  createTask() {
    this.navCtrl.push(AddTaskPage);
  }

  obterAtividades() {
    return new Promise((resolve, reject) => {
      this.storage.get('tarefas').then((val:Array<Tarefa>)=>{
        resolve(val); 
      });
    });
  }

}
