import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgRedux, NgReduxModule, DevToolsExtension } from '@angular-redux/store';

import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactformComponent } from './contactform/contactform.component';
import { ContactService } from './contact.service';
import { ContactActions } from '../actions/contactActions';
import rootReducer from '../reducers/index';
import thunk from 'redux-thunk';
import { ContactCopyComponent } from './contact-copy/contact-copy.component';
import {AppRoutingModule} from './app-routing';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    ContactformComponent,
    ContactCopyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgReduxModule,
    AppRoutingModule
  ],
  providers: [ContactService, ContactActions ],
  bootstrap: [AppComponent]
})
export class AppModule {
    constructor (ngRedux: NgRedux<any>, private devTools: DevToolsExtension) {
    let enhancers = [];
    // ... add whatever other enhancers you want.

    // You probably only want to expose this tool in devMode.
    if (devTools.isEnabled()) {
      enhancers = [ ...enhancers, devTools.enhancer() ];
    }
    ngRedux.configureStore(rootReducer, {}, [ thunk ], enhancers);
  }
}
