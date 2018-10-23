import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var firebase;
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  name:string;
  items= [];
  kush = {
    name:''
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    firebase.database().ref('/kush/').on("value",(snapshot) =>{
      snapshot.forEach((snap) =>{
        console.log(snap.val())

        this.items.push(snap.val());
        return false;
      })
    })
  } 
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  //Populate database
  PushToDatabase(){
    this.items = [];
    console.log(name);
    this.kush.name = this.name;
    var database = firebase.database();
    database.ref('/kush/').push(this.kush);
  }
}
