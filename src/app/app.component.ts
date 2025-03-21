import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FlowbiteService } from './core/services/flowbite/flowbite.service';
import { NavbarComponent } from "./features/layout/navbar/navbar.component";
import { FooterComponent } from "./features/layout/footer/footer.component";
import { NgxSpinnerModule } from "ngx-spinner";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent , NgxSpinnerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private ngxSpinnerService = inject(NgxSpinnerService)
  constructor(private flowbiteService: FlowbiteService) {}

  ngOnInit(): void {

    /** spinner starts on init */
    this.ngxSpinnerService.show();

    setTimeout(() => {
      /** ngxSpinnerService ends after 5 seconds */
      this.ngxSpinnerService.hide();
    }, 5000);


    this.flowbiteService.loadFlowbite(flowbite => {
      // Your custom code here
      console.log('Flowbite loaded', flowbite);
    });
  }
}
