import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage'

import { AddTaskPage } from '../add-task/add-task';

import { Tarefa } from '../../models/tarefa';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  atividades: Array<Tarefa>;

  constructor(public navCtrl: NavController, public storage: Storage, public toast: ToastController) {
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

  conclui(posicao:number){
    this.toast.create({
      message: "Atividade removida",
      duration: 3000,
      position: 'top'
    }).present();
    this.atividades.splice(posicao,1);
    this.storage.set('tarefas', this.atividades);
  }

  obterAtividades() {
    return new Promise((resolve, reject) => {
      this.storage.get('tarefas').then((val:Array<Tarefa>)=>{
        resolve(val); 
      });
    });
  }
}
