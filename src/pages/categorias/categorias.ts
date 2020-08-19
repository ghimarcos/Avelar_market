import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { categoriaService } from '../../services/domain/categoria.service';


@IonicPage()
@Component({
  selector: 'page-categorias',
  templateUrl: 'categorias.html',
})
export class CategoriasPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public categoriaService : categoriaService
    ) {
  }

  ionViewDidLoad() {
    this.categoriaService.findAll()
      .subscribe(response => {
        console.log(response);
      },
      error => {
        console.log(error);
      });
  }
}
