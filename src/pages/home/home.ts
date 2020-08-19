import { Component } from '@angular/core';
import { NavController, IonicPage, MenuController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public menu: MenuController) {

  }
  /*Esse método tira a opção de arrastar o menu quando se entra no sistema*/
  ionViewWillEnter() {
    this.menu.swipeEnable(false);
    }

    ionViewDidLeave() {
    this.menu.swipeEnable(true);
    }
  /*metodo para navegar entre as páginas*/
  login(){
    this.navCtrl.setRoot('CategoriasPage');
  }

}
