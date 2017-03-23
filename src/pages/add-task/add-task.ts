import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddTaskPage');
  }

  adiciona(){

    console.log(this.titulo);
    console.log(this.texto);
    console.log(this.data);
    console.log(this.horario);

    this.navCtrl.pop();
  }

}
