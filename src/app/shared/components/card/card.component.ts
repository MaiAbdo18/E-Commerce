import { Component, inject, Input, SimpleChange, SimpleChanges } from '@angular/core';
import { productInterface } from '../../interfaces/product';
import { RouterLink } from '@angular/router';
import { CartService } from '../../../core/services/ecomm/cart/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-card',
  imports: [RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  private cartService : CartService = inject(CartService)
  private toastrService : ToastrService = inject(ToastrService)

  @Input({required:true})  cardProduct!:productInterface ;

  addToCart(pId:string){

    this.cartService.addToCartAPI(pId).subscribe({

      next : (res)=>{

        this.toastrService.success(res.message , "Cart operations!")

            } ,

      error : (err)=>{
        console.log(err);
        
      }

    })
  }


  

}
