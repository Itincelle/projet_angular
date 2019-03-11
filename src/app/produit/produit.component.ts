import { Component, OnInit } from '@angular/core';
import { Produit } from '../produit';
import { ProduitService } from '../produit.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  private prixMaxi : number;
  //private tabProduit : Array<object>; // on peut ecrire comme ça mais c'est vag
  private tabProduit : Array<Produit>     //   le mieux c'est d ecrire comme ça mais obligé de créer la classe produit


  constructor(private produitService : ProduitService) {
    //NB1: au sens langage typescript (.ts) , si on passe
    //un paramètre public ou privée au constructeur (avec private ou public), la chose ( le parametre)
    //devient automatiquement un attribut de cette classe
 // c'est comme si c'etait un attribut et on lui fait le this.attribut=attribut



    //NB2: au sens interprétation angular , un élément passé dans un
    //constructeur déclenche une injection de dépendance
    //ressemblant à @Autowired de Spring/java
   }

  public onRechercheProd(event : any):void {
    console.log("onRechercheProd , prixMaxi="+this.prixMaxi);
    this.produitService.rechercherProduit$(this.prixMaxi)
         .subscribe((tabProd)=>{ this.tabProduit = tabProd; })          //subscribe =abonné = enregistré ce que l observable envoie et on le met dans le tabProduist   
    //...
  }



  ngOnInit() {
  }

}
