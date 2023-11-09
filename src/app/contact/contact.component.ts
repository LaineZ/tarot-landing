import {Component, ViewChild} from '@angular/core';
import {DEPLOYMENT_URL} from "../config";
import {ModalComponent} from "../modal/modal.component";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  @ViewChild("modalSuccess") modalSuccess!: ModalComponent;
}
