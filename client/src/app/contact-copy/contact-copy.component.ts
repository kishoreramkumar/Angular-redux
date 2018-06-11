import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { ContactActions } from '../../actions/contactActions';

@Component({
  selector: 'app-contact-copy',
  templateUrl: './contact-copy.component.html',
  styleUrls: ['./contact-copy.component.css']
})
export class ContactCopyComponent implements OnInit {

  constructor() { }
  @select() contacts: any;
  ngOnInit() {
  }

}
