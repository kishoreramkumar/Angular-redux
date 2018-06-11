import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';

import { ContactsComponent } from '../app/contacts/contacts.component';
import { ContactCopyComponent } from '../app/contact-copy/contact-copy.component';


export const routes: Routes = [
  {
      path: '',
       redirectTo: 'home',
        pathMatch: 'full',
   },
   {
     path: 'home',
     component: ContactsComponent
   },
   {
     path: 'copy',
     component: ContactCopyComponent
   },
 ];
@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(routes)
    ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
