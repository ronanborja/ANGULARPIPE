import { PipePipe } from './pipefolder/pipe.pipe'
import { NgModule, Pipe } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipeComponent } from './pipefolder/modules/components/pipe/pipe.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateformComponent } from './templateform/modules/components/templateform/templateform.component';

@NgModule({
  declarations: [
    AppComponent,
    PipePipe,
    PipeComponent,
    TemplateformComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
