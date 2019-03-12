import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';                  // il nous a proposé tte un chemin on a gardé que la fin
import { map } from 'rxjs/operators';
import { Produit } from 'src/app/produit';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  //constructor() { }
    constructor(private http : HttpClient) { }

public  rechercherProduit$(prixMaxi : number) : Observable<Produit[]> {
  //return this.rechercherProduitSimu$(prixMaxi);
       return this.rechercherProduitHttp$(prixMaxi);
}


/*

  //version préliminaire (simulation)
public rechercherProduitSimu$(prixMaxi : number) : Observable<Produit[]> {
  let tabProduit = [
    { numero : 1 , label : "produit 1" , prix : prixMaxi -1 } ,
    { numero : 2 , label : "produit 2" , prix : prixMaxi }
  ]
    return of(tabProduit);             //of renvoie les données en version simulé
  }

*/





public rechercherProduitHttp$(prixMaxi : number) : Observable<Produit[]> {
 /* let wsUrl = "http://localhost:8080/serveurRestSpringMvc/"
          + "rest/produit"; */
 let wsUrl = "http://localhost:8080/serveurRestSpringMvc2/rest/produit"; //url relative (ok si option
                             // --proxy.config proxy.conf.json de ng serve)
 if(prixMaxi!=null){
   wsUrl+="?prixMaxi=" + prixMaxi;
   }

 return this.http.get<Produit[]>(wsUrl );
               /*  .pipe(
                   map((tabP:Produit[])=>{
                        return tabP.map(
                            (p)=>{p.label = p.label.toUpperCase(); return p;}
                          );
                       })
                 );//end-of-pipe */
}



//delete
/** DELETE: delete the hero from the server */
/*
deleteHero (id: number): Observable<{}> {
  let wsUrl = "./rest/produit";
  const url = `${this.}/${id}`; // DELETE api/heroes/42
  return this.http.delete(url, httpOptions)
    .pipe(
      catchError(this.handleError('deleteHero'))
    );
}
*/
public deleteProduit$(numProd : number): Observable<any> {
  let wsUrl = "http://localhost:8080/serveurRestSpringMvc2/rest/produit/"+numProd;



   return this.http
       .delete(wsUrl )

   }
/*
   private handleError(error: any) {
          let errMsg = (error.message) ? error.message :
              error.status ? `${error.status} - ${error.statusText}` : 'Server error';
          console.error(errMsg);
          return Observable.throw(errMsg);
      }
*/





// methode post

private _headers = new HttpHeaders({'Content-Type': 'application/json'});

 public postProduit$(produit: Produit) : Observable<Produit> {    // ça veut dire ça renvoie un observable qui envoie plus trad un produits
     let wsUrl = "http://localhost:8080/serveurRestSpringMvc2/rest/produit";
     return this.http.post<Produit>(wsUrl,
                                    produit,
                                    {headers:this._headers});

 }



}
