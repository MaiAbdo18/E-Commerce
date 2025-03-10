import { Component, inject } from '@angular/core';
import { ProductService } from '../../../core/services/ecomm/product/product.service';
import { productInterface } from '../../../shared/interfaces/product';
import { CardComponent } from "../../../shared/components/card/card.component";
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { SearchPipe } from '../../../shared/pipes/search/search.pipe';
import { FormsModule } from '@angular/forms';
import { TranslationService } from '../../../core/services/translation/translation.service';
import { TranslatePipe } from '@ngx-translate/core';


@Component({
  selector: 'app-home',
  imports: [CardComponent , CarouselModule ,SearchPipe , FormsModule , TranslatePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  userword : string = "" ;
  private productService = inject(ProductService) ;
  private translationService = inject(TranslationService) ;

  allProducts : productInterface[] = [] ;

  customMainSlider: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    rtl: true,
    autoplay: true,
    navSpeed: 700,
    navText: ['', ''],
    items : 1,
    nav: true
  }



  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    autoplay: true,
    navSpeed: 700,
    rtl : true ,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 8
      }
    },
    nav: true
  }

  ngOnInit(): void {

    this.getAllProductsHome()

  }

  getAllProductsHome(){

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
