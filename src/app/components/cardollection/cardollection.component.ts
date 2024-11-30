import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Spirit } from '../../models/spirit.models';
import { SpiritTypeProperties } from '../../utils/spirit.utils';

@Component({
  selector: 'app-cardollection',
  imports: [],
  templateUrl: './cardollection.component.html',
  styleUrl: './cardollection.component.css'
})
export class CardollectionComponent implements OnChanges {

  @Input()spirit = new Spirit();
  SpiritTypeIcon: string = "mode-nuit.png";
  backgroundColor: string = "purple";

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['spirit']) {
      if (changes['spirit'].previousValue?.type != changes['spirit'].currentValue.type) {
        this.SpiritTypeIcon = SpiritTypeProperties[this.spirit.type].imageUrl;
        this.backgroundColor = SpiritTypeProperties[this.spirit.type].color;
      }
    }
  }

}
