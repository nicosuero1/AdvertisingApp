import { Component, OnInit } from "@angular/core";
import { AdvertisingService } from "../advertising.service";
import { Advertising } from "../advertising.model";

@Component({
    selector: 'app-advertising',
    templateUrl: './advertising.component.html'
})

// Responsible of the module template. 
// Main structure
export class AdvertisingComponent implements OnInit{

    // Advertising array to be showed in template
    advertisings: Advertising[];

    // Used to stop scrolling when no more data found in db
    stopScrollingEvent = false;


    constructor(private advertisingService: AdvertisingService){}

    ngOnInit(){

        // Get advertisings from db and load them in local array
        this.advertisingService.get().subscribe(
            ((advertisings: Advertising[]) =>{
                this.advertisings = advertisings;
            })
        );

        // Stop scrolling event when no data found in db
        this.advertisingService.stopScrollingEvent.subscribe(
            (stopScroll) => {
                this.stopScrollingEvent = stopScroll;
            }
        )
    }

    // Use nxg-infinte-scroll to load an advertising on demand
    onScroll () {
        if(this.stopScrollingEvent) return;
        var lastId = this.advertisings[this.advertisings.length-1].id
        this.advertisingService.getLast(lastId).subscribe()
	}
}