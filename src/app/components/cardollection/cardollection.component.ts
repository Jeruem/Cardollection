import { Component, computed, input, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Spirit } from '../../models/spirit.models';
import { SpiritTypeProperties } from '../../utils/spirit.utils';

@Component({
  selector: 'app-cardollection',
  imports: [],
  templateUrl: './cardollection.component.html',
  styleUrl: './cardollection.component.css'
})
export class CardollectionComponent {

  spirit = input(new Spirit());
  SpiritTypeIcon= computed(() => {
    return SpiritTypeProperties[this.spirit().type].imageUrl;
  })
  backgroundColor= computed(() => {
    return SpiritTypeProperties[this.spirit().type].color;
  });



}
