import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

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

  public titulo: String;
  public texto: String;
  public data: String; 
  public horario: String;
  public tarefa:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddTaskPage');
  }

  adiciona(){

    this.tarefa = {
      titulo: this.titulo,
      texto: this.texto,
      data: this.data,
      horario: this.horario
    }

    this.storage.get('tarefa').then(()=>{
      this.tarefa.
    });

    this.storage.ready().then(()=> {  
      this.storage.set('tarefa',this.tarefa);
    });

    this.navCtrl.pop();
  }

}
