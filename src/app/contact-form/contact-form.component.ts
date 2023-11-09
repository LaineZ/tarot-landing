import {Component, EventEmitter, Output, ViewChild} from '@angular/core';
import {ModalComponent} from "../modal/modal.component";
import {DEPLOYMENT_URL} from "../config";

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  formData = {
    name: '',
    email: '',
    phone: '',
    question: '',
    agree: false,
  };

  phoneFormatError: boolean = false;
  emailFormatError: boolean = false;
  dataProcessingAgreement: boolean = true;
  sending: boolean = false;

  @ViewChild("modalFailure") modalFailure!: ModalComponent;
  @Output() onSent = new EventEmitter();

  async onSubmit() {
    this.phoneFormatError = this.formData.phone.length <= 10;
    this.emailFormatError = !/^\S+@\S+\.\S+$/.test(this.formData.email);
    this.dataProcessingAgreement = this.formData.agree;

    if (this.dataProcessingAgreement && !this.emailFormatError && !this.phoneFormatError) {
      let form = new FormData();
      form.append('name', this.formData.name);
      form.append('phone', this.formData.phone);
      form.append('question', this.formData.question);
      form.append('email', this.formData.email);

      this.sending = true;
      try {
        await fetch(DEPLOYMENT_URL,
          {
            body: form,
            method: "post"
          });

        this.onSent.emit();
      } catch (e) {
        this.modalFailure.openModal();
        console.log(e);
      }
      this.sending = false;
    }
  }
}
