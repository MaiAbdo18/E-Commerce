import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../core/services/ecomm/product/product.service';
import { productInterface } from '../../../shared/interfaces/product';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {

  private activatedRoute = inject(ActivatedRoute) ;
  private productService = inject(ProductService)
  pId : string|null = "" ;
  pSpec !: productInterface ;

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((p)=>{

     this.pId = p.get('id')
     this.productService.getSpecificProducts(this.pId).subscribe({
      next : (res)=>{
        this.pSpec = res.data ;
        
      } ,
      error : (err)=>{
        console.log(err);
        
      }
     })
     

    })

  }

}
