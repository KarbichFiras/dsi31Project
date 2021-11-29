import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Facture } from '../models/facture';
import { FACTURES } from '../models/factureList';
@Component({
  selector: 'app-facture-details',
  templateUrl: './facture-details.component.html',
  styleUrls: ['./facture-details.component.css']
})
export class FactureDetailsComponent implements OnInit {

  code : string ="";
  factures = FACTURES;


  facture  : Facture = {
    code_fac : "",
    mode_paimenent : "",    
    total : "",
  };
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.code = params.id;
      console.log(this.code);
    })
    this.getCode(this.code);

  }
  getCode(code : string){
    let CodeIndex = this.fetchFactures(code);
   
    this.facture = this.factures[CodeIndex];
  }
  fetchFactures(code : string):number{
    let CodeIndex :number = -1;
    
    this.factures.forEach(function(r,index){
      if(r.code_fac === code){
        CodeIndex = index;
      }
    });

    return CodeIndex;
  }
}
