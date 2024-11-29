import { Component } from '@angular/core';
import { CardollectionComponent } from "./components/cardollection/cardollection.component";
import { Spirit } from './models/spirit.models';
import { SearchBarComponent } from './components/search-bar/search-bar.component';


@Component({
  selector: 'app-root',
  imports: [SearchBarComponent, CardollectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  
})
export class AppComponent {

  count: number = 0;
  search='';
  spirits!: Spirit[];
  

  selectedSpiritIndex= 0;


  constructor() {

    this.spirits=[];

    const spirit1 = new Spirit ();
    spirit1.name= "Fatigre";
    spirit1.hp= 150;
    spirit1.figureCaption= "N°023";
    spirit1.attackName= "Sommeil éternel";
    spirit1.attackStrength= 0;
    spirit1.attackDescription= "L'adversaire s'endort jusqu'à la nuit des temps";
    this.spirits.push(spirit1);

    const spirit2 = new Spirit ();
    spirit2.name= "Gondra";
    spirit2.hp= 250;
    spirit2.figureCaption= "N°369";
    spirit2.attackName= "Fin du monde";
    spirit2.attackStrength= 999;
    spirit2.attackDescription= "Tout disparaît";
    this.spirits.push(spirit2);

  }

  increaseCount(){
    this.count ++;

  }

  toggleSpirit(){
      this.selectedSpiritIndex = (this.selectedSpiritIndex + 1) % this.spirits.length
  }
 




}
  

