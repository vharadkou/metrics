import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MessageComponent } from './message';

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        AppComponent,
        MessageComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
