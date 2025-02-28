import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-address',
  imports: [ReactiveFormsModule],
  templateUrl: './address.component.html',
  styleUrl: './address.component.scss'
})
export class AddressComponent {

  addressForm:FormGroup = new FormGroup({

    details : new FormControl(null) ,
    phone : new FormControl(null) ,
    city : new FormControl(null) ,
  })

  addressSubmit()
  {
    console.log(this.addressForm.value);
    
  }


}
