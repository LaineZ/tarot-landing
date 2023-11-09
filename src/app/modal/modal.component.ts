import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() isOpen: boolean = false;
  @Input() closeable: boolean = true;

  ngOnInit() {
    if (this.isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }

  openModal() {
    this.isOpen = true;
    document.body.classList.add('no-scroll');
  }

  closeModal() {
    this.isOpen = false;
    document.body.classList.remove('no-scroll');
  }
}
