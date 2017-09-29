import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from "./app.component";
import { HeaderComponent } from './header.component';
import { HttpModule } from "@angular/http";
import { routing } from './app.routing'

import { ErrorComponent } from './error/error.component';
import { PageNotFoundComponent } from './error/pagenotfound.component';
import { ErrorService } from './error/error.service';
import { FormsModule } from "@angular/forms";
import { AdvertisingModule } from "./advertising/advertising.module";
import { VideoModule } from "./video/video.module";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        ErrorComponent,
        PageNotFoundComponent,
    ],
    imports: [
        BrowserModule, 
        routing, 
        HttpModule,
        FormsModule,
        AdvertisingModule,
        VideoModule
        ],
    providers: [ErrorService],
    bootstrap: [AppComponent]
})
export class AppModule {

}