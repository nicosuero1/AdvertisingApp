import { Injectable, EventEmitter } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import { Advertising } from "./advertising.model";
import { Observable } from "rxjs";
import 'rxjs/Rx';
import { ErrorService } from "../error/error.service";

// Interface of advertising module with backend
@Injectable()
export class AdvertisingService{
    
    // Advertisings to be showed in template
    private advertisings: Advertising[] = [];

    // Initial amount of advertising to be showd in template
    private limit = 5;

    // Event fired when no more data found in db
    stopScrollingEvent= new EventEmitter<any>();

    constructor(private http: Http, private errorService:ErrorService){}

    // Get advertises in backend. Restricted to limit variable
    get(){
        return this.http.get('http://localhost:3000/advertising/' + this.limit)
            .map((response) =>{
                const advertisings = response.json().obj;
                let transformedAdvertisings: Advertising[] = [];
                for (let advertising of advertisings){
                    transformedAdvertisings.push(new Advertising(
                        advertising.title,
                        advertising.content,
                        advertising.imgUrl,
                        advertising._id
                    ));
                }
                this.advertisings = transformedAdvertisings;
                return transformedAdvertisings;
            })
            .catch((error: Response) => {
                console.log(error);
                this.errorService.handleError(error.json());
                return Observable.throw(error.json())
            });
    }

    // Recieves an advertiseId and returns the next advertise in db
    getLast(lastId: string){
       return this.http.get('http://localhost:3000/advertising/last/' + lastId)
              .map((response) =>{
                const advertise = response.json().obj;
                if(advertise == undefined){
                    console.log('undefined');
                    this.stopScrollingEvent.emit(true);
                } 
                else{
                    this.advertisings.push(new Advertising(
                        advertise.title,
                        advertise.content,
                        advertise.imgUrl,
                        advertise._id
                    ));
                }
                return this.advertisings;
            })
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json())
            });
            
    }

    // Add an advertise in db and returns the saved advertise
    add(advertising: Advertising){
        const body = JSON.stringify(advertising);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:3000/advertising', body, {headers: headers})
            .map((response: Response) => {
                const result = response.json();
                const advertising =  new Advertising(
                    result.obj.title,
                    result.obj.content,
                    result.obj.imgUrl,
                    result.obj._id
                );
                if(this.advertisings.length<this.limit) this.advertisings.push(advertising);
                return advertising;
            })
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json())
            });
    }

}