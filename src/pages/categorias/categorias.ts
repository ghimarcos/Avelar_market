import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CategoriaDTO } from '../../models/categoria.dto';
import { categoriaService } from '../../services/domain/categoria.service';


@IonicPage()
@Component({
  selector: 'page-categorias',
  templateUrl: 'categorias.html',
})
export class CategoriasPage {

  itens : CategoriaDTO[]


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public categoriaService : categoriaService
    ) {
  }

  ionViewDidLoad() {
    this.categoriaService.findAll()
      .subscribe(response => {
        this.itens = response;
      },
      error => {
        console.log(error);
      });
  }

  


}
