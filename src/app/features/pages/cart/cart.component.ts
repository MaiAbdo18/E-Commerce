import { Component, inject } from '@angular/core';
import { CartService } from '../../../core/services/ecomm/cart/cart.service';
import { productInterface } from '../../../shared/interfaces/product';
import { cartProductInterface } from '../../../shared/interfaces/product-cart';
import { ToastrService } from 'ngx-toastr';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-cart',
  imports: [RouterLink , TranslatePipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  private cartService:CartService = inject(CartService) ;
    private toastrService : ToastrService = inject(ToastrService) 
    cartId : string = ""
    
  

  cartProducts:cartProductInterface[] = [] ;
  totalPrice : number = 0 ;

  ngOnInit(): void {

    this.getMyCart()

  }

  getMyCart()
  {

    this.cartService.getCartAPI().subscribe({

      next : (res)=>{

        this.cartProducts = res.data.products ;
        this.totalPrice = res.data.totalCartPrice 
        this.cartId = res.cartId
      
      } ,

      error : (err)=>{
        
        console.log(err);
        
      }
    })

  }

  removeProduct(pId:string)
  {
    this.cartService.deleteCartAPI(pId).subscribe({

      next : (res)=>{

        if(res.status == 'success')
        {
          this.toastrService.success("Item deleyed successfully from your cart" , "Cart Operations!") ;
          this.getMyCart()
        }
        
      } ,

      error : (err)=>{
        console.log(err);
        
      }
    })

  }

  changeCount(pId:string , pCount:number)
  {
    if(pCount<=0)
    {
      this.removeProduct(pId)
      return
    }
    this.cartService.updateCartAPI(pId,pCount).subscribe({
      next: (res)=>{
        this.toastrService.success("Item updated successfully") ;

        this.getMyCart()

        
      } ,
      error: (err)=>{
        console.log(err);
        
      }
    })
    
  }

  clearbtn()
  {
    this.cartService.clearCartAPI().subscribe({
      next: (res)=>{
        this.toastrService.success("your cart empty" , "Cart Operations!") ;
        this.getMyCart()

      } ,
      error: (err)=>{
        console.log(err);
        
      }
    })
  }

  

}
