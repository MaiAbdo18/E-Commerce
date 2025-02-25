import { Component, Input, SimpleChange, SimpleChanges } from '@angular/core';
import { productInterface } from '../../interfaces/product';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  imports: [RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  @Input({required:true})  cardProduct!:productInterface


  

}
