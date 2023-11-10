import {Component, ViewChild} from '@angular/core';
import {ModalComponent} from "../modal/modal.component";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  @ViewChild("modalContact") modalContact!: ModalComponent;
  @ViewChild("modalSuccess") modalSuccess!: ModalComponent;
}
