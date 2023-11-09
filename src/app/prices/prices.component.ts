import {Component, ViewChild} from '@angular/core';
import {ModalComponent} from "../modal/modal.component";

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.css']
})
export class PricesComponent {
  @ViewChild("modalContact") modalContact!: ModalComponent;
  @ViewChild("modalSuccess") modalSuccess!: ModalComponent;
}
