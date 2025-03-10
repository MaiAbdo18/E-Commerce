import { Pipe, PipeTransform } from '@angular/core';
import { productInterface } from '../../interfaces/product';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(allproducts: productInterface[], searchword: string): productInterface[] {

    
      return allproducts.filter(ele=> ele.title.toLowerCase().includes(searchword.toLowerCase()))

    
  }

}
