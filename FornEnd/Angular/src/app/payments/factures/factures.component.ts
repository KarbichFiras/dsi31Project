import { Component, OnInit } from '@angular/core';
import { FACTURES } from '../models/factureList';
@Component({
  selector: 'app-factures',
  templateUrl: './factures.component.html',
  styleUrls: ['./factures.component.css']
})
export class FacturesComponent implements OnInit {
  factures = FACTURES;
  constructor() { }

  ngOnInit(): void {
    
  }
 
}
