import { Component, computed, effect, signal } from '@angular/core';
import { CardollectionComponent } from "./components/cardollection/cardollection.component";
import { Spirit } from './models/spirit.models';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SpiritType } from './utils/spirit.utils';

@Component({
  selector: 'app-root',
  imports: [SearchBarComponent, CardollectionComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], // Correct usage of 'styleUrls'
})
export class AppComponent {

  count: number = 0;
  search = '';
  spirits!: Spirit[];
  selectedSpiritIndex = signal(0);

  selectedSpirit = computed(() => {
    return this.spirits[this.selectedSpiritIndex()];
  });

  constructor() {

    effect(() => {
      console.log(this.selectedSpirit());
    })
    this.spirits = [];

    const spirit1 = new Spirit();
    spirit1.name = "Fatigre";
    spirit1.hp = 150;
    spirit1.type=SpiritType.DARK;
    spirit1.figureCaption = "N°023";
    spirit1.attackName = "Sommeil éternel";
    spirit1.attackStrength = 0;
    spirit1.attackDescription = "L'adversaire s'endort jusqu'à la nuit des temps";
    spirit1.image = "Fatigree.jpeg";  // Chemin vers l'image dans le dossier public
    this.spirits.push(spirit1);

    const spirit2 = new Spirit();
    spirit2.name = "Gondra";
    spirit2.image = "Gondra.png";  // Chemin vers l'image dans le dossier public
    spirit2.hp = 250;
    spirit2.type=SpiritType.DRAGON;
    spirit2.figureCaption = "N°369";
    spirit2.attackName = "Fin du monde";
    spirit2.attackStrength = 999;
    spirit2.attackDescription = "Tout disparaît";
    this.spirits.push(spirit2);

    const spirit3 = new Spirit();
    spirit3.name = "Glaciance";
    spirit3.image = "Glaciance.jpeg";  // Chemin vers l'image dans le dossier public
    spirit3.hp = 180;
    spirit3.type=SpiritType.ICE;
    spirit3.figureCaption = "N°369";
    spirit3.attackName = "Ere Glaciaire";
    spirit3.attackStrength = 550;
    spirit3.attackDescription = "La terre est gelée";
    this.spirits.push(spirit3);

    const spirit4 = new Spirit();
    spirit4.name = "Antisémouette";
    spirit4.image = "Antisémouette.jpeg";  // Chemin vers l'image dans le dossier public
    spirit4.hp = 180;
    spirit4.type=SpiritType.LIGHT;
    spirit4.figureCaption = "N°369";
    spirit4.attackName = "Luminaris";
    spirit4.attackStrength = 999;
    spirit4.attackDescription = "L'univers est inondé de lumière infinie";
    this.spirits.push(spirit4);

    const spirit5 = new Spirit();
    spirit5.name = "Noirastre";
    spirit5.image = "Noirastre.jpeg";  // Chemin vers l'image dans le dossier public
    spirit5.hp = 180;
    spirit5.type=SpiritType.DARK;
    spirit5.figureCaption = "N°369";
    spirit5.attackName = "Pleine Lune";
    spirit5.attackStrength = 550;
    spirit5.attackDescription = "Noirastre devient inciblable et fait un massacre";
    this.spirits.push(spirit5);


  }

  increaseCount() {
    this.count++;
  }

  toggleSpirit() {
    this.selectedSpiritIndex.set((this.selectedSpiritIndex() + 1) % this.spirits.length);
  }
  
}
