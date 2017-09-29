import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { AdvertisingComponent } from './advertising/advertising.component';
import { AdvertisingService } from './advertising.service';
import { AdvertiseComponent } from "./advertise/advertise.component";
import { AdvertiseInputComponent } from "./input/advertise-input.component";

@NgModule({
    declarations:[
        AdvertisingComponent,
        AdvertiseComponent,
        AdvertiseInputComponent
    ],
    providers:[AdvertisingService],
    imports:[
        CommonModule,
        FormsModule,
        InfiniteScrollModule,
    ]
})
export class AdvertisingModule{
    
}