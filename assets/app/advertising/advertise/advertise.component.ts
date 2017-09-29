import { Component, OnInit, Input } from "@angular/core";
import { AdvertisingService } from "../advertising.service";
import { Advertising } from "../advertising.model";
import { NgStyle } from '@angular/common';

@Component({
    selector: 'app-advertise',
    templateUrl: './advertise.component.html'
})

// Responsible of a single advertise template
export class AdvertiseComponent implements OnInit {

    // advertise to be showed
    @Input() advertise: Advertising;

    // url points to full path of the app
    imageUrl :string;

    ngOnInit(){
        this.imageUrl = "/img/" + this.advertise.imgUrl;
    }
}