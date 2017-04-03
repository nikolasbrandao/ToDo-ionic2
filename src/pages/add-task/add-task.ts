import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Tarefa } from '../../models/tarefa';

/*
  Generated class for the AddTask page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

@Component({
  selector: 'page-add-task',
  templateUrl: 'add-task.html'
})
export class AddTaskPage {

  public tarefas: Array<Tarefa>;

  titulo: string;
  texto: string;
  data: string;
  horario: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
    this.tarefas = [];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddTaskPage');
  }

  adiciona() {

    this.storage.get('tarefas').then((val: Array<Tarefa>) => {
      if (val.length != 0) {
        console.log('Puxou:');
        console.log(val);
        this.tarefas = val;
      }
      else {
        console.log("vazio");
      }
      
      this.storage.ready().then(() => {
        let novaTarefa: Tarefa = new Tarefa(this.titulo, this.texto, this.data, this.horario);
        this.tarefas.push(novaTarefa);
        console.log('Enviou')
        this.storage.set('tarefas', this.tarefas);
      });

    });
    this.navCtrl.pop();
  }

}
