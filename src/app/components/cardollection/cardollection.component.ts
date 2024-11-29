import { Component, input, Input, InputSignal } from '@angular/core';
import { Spirit } from '../../models/spirit.models';

@Component({
  selector: 'app-cardollection',
  imports: [],
  templateUrl: './cardollection.component.html',
  styleUrl: './cardollection.component.css'
})
export class CardollectionComponent {

  @Input()spirit = new Spirit();
   
  
    }
  


