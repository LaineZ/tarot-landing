import {Component, ViewChild} from '@angular/core';
import {DEPLOYMENT_URL} from "../config";
import {ModalComponent} from "../modal/modal.component";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
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

  @ViewChild("modalSuccess") modalSuccess!: ModalComponent;
  @ViewChild("modalFailure") modalFailure!: ModalComponent;

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

        this.modalSuccess.openModal();
      } catch (e) {
        this.modalFailure.openModal();
        console.log(e);
      }
      this.sending = false;
    }
  }
}
