import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './components/sidebar.component';
import { ReactiveFormsModule } from '@angular/forms';

const sharedDeclarations = [SidebarComponent];

@NgModule({
  declarations: [...sharedDeclarations],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [...sharedDeclarations]
})
export class UiModule { }
