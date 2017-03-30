import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage'

import { AddTaskPage } from '../add-task/add-task';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  atividades: JSON;

  constructor(public navCtrl: NavController, public storage: Storage) {

  this.obterAtividades().then(val=>{
    console.log('valor recuperado:');
    console.log(val);
  });
  


  }

  createTask() {
    this.navCtrl.push(AddTaskPage);
  }

  obterAtividades(){
    return new Promise((resolve,reject)=>{ 
      let atividades:Array<any>;

      this.storage.forEach((val, key, number)=>{
          if(key.includes('tarefa')){
          console.log(val);
          console.log(key);
          console.log(number);

          atividades.push(val);
          }
          resolve(atividades);
      });    
    });
  }

}
