import { Component, computed, effect, model, signal } from '@angular/core';
import { CardollectionComponent } from "./components/cardollection/cardollection.component";
import { Spirit } from './models/spirit.models';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SpiritType } from './utils/spirit.utils';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule, SearchBarComponent, CardollectionComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], // Correct usage of 'styleUrls'
})
export class AppComponent {

  
  spirits!: Spirit[];
  search = model('');

    filteredSpirits = computed(() =>{
      return this.spirits.filter(spirit => spirit.name.includes(this.search()));
    })
  
  constructor() {

    
    this.spirits = [];
    

    const spirit1 = new Spirit();
    spirit1.name = "Fatigre";
    spirit1.hp = 150;
    spirit1.type=SpiritType.MENTAL;
    spirit1.figureCaption = "N°123";
    spirit1.attackName = "La moche aux bois dormants";
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
    spirit3.figureCaption = "N°231";
    spirit3.attackName = "Ere Glaciaire";
    spirit3.attackStrength = 550;
    spirit3.attackDescription = "La terre est gelée et fait disparaître les dinosaures en priorité";
    this.spirits.push(spirit3);

    const spirit4 = new Spirit();
    spirit4.name = "Antisémouette";
    spirit4.image = "Antisémouette.jpeg";  // Chemin vers l'image dans le dossier public
    spirit4.hp = 220;
    spirit4.type=SpiritType.LIGHT;
    spirit4.figureCaption = "N°820";
    spirit4.attackName = "Luminaris";
    spirit4.attackStrength = 999;
    spirit4.attackDescription = "L'univers est inondé de lumière infinie, il ne fera plus nuit et c'est casse-couilles";
    this.spirits.push(spirit4);

    const spirit5 = new Spirit();
    spirit5.name = "Noirastre";
    spirit5.image = "Noirastre.jpeg";  // Chemin vers l'image dans le dossier public
    spirit5.hp = 180;
    spirit5.type=SpiritType.DARK;
    spirit5.figureCaption = "N°088";
    spirit5.attackName = "Pleine Lune";
    spirit5.attackStrength = 550;
    spirit5.attackDescription = "Noirastre devient inciblable et fait un massacre";
    this.spirits.push(spirit5);

    const spirit6 = new Spirit();
    spirit6.name = "Volcancre";
    spirit6.image = "Volcancre.jpeg";  // Chemin vers l'image dans le dossier public
    spirit6.hp = 180;
    spirit6.type=SpiritType.FIRE;
    spirit6.figureCaption = "N°256";
    spirit6.attackName = "Faille Magmatique";
    spirit6.attackStrength = 550;
    spirit6.attackDescription = "Eruption de magma qui détruit des villes dont Pompei :/";
    this.spirits.push(spirit6);

    const spirit7 = new Spirit();
    spirit7.name = "Matoubib";
    spirit7.image = "Matoubib.jpeg";  // Chemin vers l'image dans le dossier public
    spirit7.hp = 120;
    spirit7.type=SpiritType.MENTAL;
    spirit7.figureCaption = "N°639";
    spirit7.attackName = "Cauchemar non exhaustif";
    spirit7.attackStrength = 550;
    spirit7.attackDescription = "l'adversaire est coincé dans un cauchemar revivant ses traumas éternellement";
    this.spirits.push(spirit7)

    const spirit8 = new Spirit();
    spirit8.name = "Glaxus";
    spirit8.image = "Glaxus.jpeg";  // Chemin vers l'image dans le dossier public
    spirit8.hp = 150;
    spirit8.type=SpiritType.ICE;
    spirit8.figureCaption = "N°222";
    spirit8.attackName = "Glacier X";
    spirit8.attackStrength = 550;
    spirit8.attackDescription = "Glaciation globale couvrant 2 km";
    this.spirits.push(spirit8)

    const spirit9 = new Spirit();
    spirit9.name = "Revenange";
    spirit9.image = "Revenange.jpeg";  // Chemin vers l'image dans le dossier public
    spirit9.hp = 200;
    spirit9.type=SpiritType.DARK;
    spirit9.figureCaption = "N°369";
    spirit9.attackName = "Maison hantée";
    spirit9.attackStrength = 0;
    spirit9.attackDescription = "Hante votre maison dès possession de la carte";
    this.spirits.push(spirit9)

    const spirit10 = new Spirit();
    spirit10.name = "Lunium";
    spirit10.image = "Lunium.jpeg";  // Chemin vers l'image dans le dossier public
    spirit10.hp = 223;
    spirit10.type=SpiritType.LIGHT;
    spirit10.figureCaption = "N°023";
    spirit10.attackName = "Lumière du paradis";
    spirit10.attackStrength = 9999;
    spirit10.attackDescription = "Soigne toutes les formes de vie de la planète";
    this.spirits.push(spirit10)

    const spirit11 = new Spirit();
    spirit11.name = "Lianard";
    spirit11.image = "Lianard.jpeg";  // Chemin vers l'image dans le dossier public
    spirit11.hp = 250;
    spirit11.type=SpiritType.PLANT;
    spirit11.figureCaption = "N°341";
    spirit11.attackName = "Coupe du chrysanthème";
    spirit11.attackStrength = 550;
    spirit11.attackDescription = "Coupe qui taille dans toutes les directions et tranche toute matière";
    this.spirits.push(spirit11)

    const spirit12 = new Spirit();
    spirit12.name = "Dragonstre";
    spirit12.image = "Dragonstre.jpeg";  // Chemin vers l'image dans le dossier public
    spirit12.hp = 420;
    spirit12.type=SpiritType.DRAGON;
    spirit12.figureCaption = "N°999";
    spirit12.attackName = "Ligne du ciel";
    spirit12.attackStrength = 9999;
    spirit12.attackDescription = "supprime la couche d'ozone sans faire exprès";
    this.spirits.push(spirit12)

    const spirit13 = new Spirit();
    spirit13.name = "Flerbe";
    spirit13.image = "Flerbe.jpeg";  // Chemin vers l'image dans le dossier public
    spirit13.hp = 250;
    spirit13.type=SpiritType.PLANT;
    spirit13.figureCaption = "N°174";
    spirit13.attackName = "Repousse";
    spirit13.attackStrength = 0;
    spirit13.attackDescription = "Fais repousser toutes les plantes mortes de la planète";
    this.spirits.push(spirit13)

    const spirit14 = new Spirit();
    spirit14.name = "Meriasme";
    spirit14.image = "Meriasme.jpeg";  // Chemin vers l'image dans le dossier public
    spirit14.hp = 300;
    spirit14.type=SpiritType.WATER;
    spirit14.figureCaption = "N°369";
    spirit14.attackName = "Lame de fond";
    spirit14.attackStrength = 550;
    spirit14.attackDescription = "Envoie de légers tsunamis qui détruisent beaucoup de choses";
    this.spirits.push(spirit14)

    const spirit15 = new Spirit();
    spirit15.name = "Puicéan";
    spirit15.image = "Puicéan.jpeg";  // Chemin vers l'image dans le dossier public
    spirit15.hp = 420;
    spirit15.type=SpiritType.WATER;
    spirit15.figureCaption = "N°452";
    spirit15.attackName = "Hydroplanete";
    spirit15.attackStrength = 9999;
    spirit15.attackDescription = "Déverse tous les océans au meme endroit";
    this.spirits.push(spirit15)


  }


}
