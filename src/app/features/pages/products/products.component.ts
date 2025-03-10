import { Component, inject } from '@angular/core';
import { ProductService } from '../../../core/services/ecomm/product/product.service';
import { productInterface } from '../../../shared/interfaces/product';
import { CardComponent } from "../../../shared/components/card/card.component";

@Component({
  selector: 'app-products',
  imports: [CardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

  private productService = inject(ProductService) ;
    allProducts : productInterface[] = [] ;



  ngOnInit(): void {

    this.getAllProducts()

  }

  getAllProducts(){

    this.productService.getAllProducts().subscribe({
      next : (res)=>{
        this.allProducts = res.data
        console.log(res.data)
      },

      error : (err)=>{
        console.log(err)
      }
    })
  }


}
