import { Component, inject } from '@angular/core';
import { BrandsService } from '../../../core/services/ecomm/brands/brands.service';
import { Brand } from '../../../shared/interfaces/brand';

@Component({
  selector: 'app-brands',
  imports: [],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.scss'
})
export class BrandsComponent {

  private brandsService = inject(BrandsService)
  allBrands : Brand[] = [] ;

  ngOnInit(): void{
    
    this.getAllBrands()

  }

  getAllBrands()
  {
    this.brandsService.getAllBrands().subscribe({
      next : (res)=>{
        this.allBrands = res.data
      },

      error : (err)=>{
        console.log(err)
      }
    })
  }
  

}
