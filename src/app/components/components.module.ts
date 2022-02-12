import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { PrimoTaskComponent } from './primo-task/primo-task.component';
import { SecondoTaskComponent } from './secondo-task/secondo-task.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [PrimoTaskComponent, SecondoTaskComponent],
  bootstrap: [],
})
export class ComponentsModule {}
