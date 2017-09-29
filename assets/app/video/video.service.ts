import { Injectable, EventEmitter } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import { Video } from "./video.model";
import { Observable } from "rxjs";
import 'rxjs/Rx';
import { ErrorService } from "../error/error.service";


// Manages all the services related to video module
@Injectable()
export class VideoService{
    
    // Videos retrieved from db
    private videos: Video[] = [];

    // Events
    videoIsClicked = new EventEmitter<string>();
    videoIsAdded = new EventEmitter<Video>();
    videoIsRemoved = new EventEmitter<any>();

    constructor(private http: Http, private errorService:ErrorService){}

    // Sends video to backend in order to be saved. Returns observer
    add(video: Video){
        const body = JSON.stringify(video);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:3000/video', body, {headers: headers})
            .map((response: Response) => {
                const result = response.json();
                const video =  new Video(
                    result.obj.url,
                    result.obj.description,
                    result.obj._id
                );
                this.videos.push(video);

                // Fires event emmiter
                this.videoIsAdded.emit(video);
                return video;
            })
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json())
            });
    }

    // Retrieves video from backend. Returns observer
    get(){
        return this.http.get('http://localhost:3000/video')
            .map((response) =>{
                const videos = response.json().obj;
                let transformedVideos: Video[] = [];
                for (let video of videos){
                    transformedVideos.push(new Video(
                        video.url,
                        video.description,
                        video._id
                    ));
                }
                this.videos = transformedVideos;
                return transformedVideos;
            })
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json())
            });
    }

    // Remove video 
    remove(video: Video){
        this.videos.splice(this.videos.indexOf(video), 1);
        return this.http.delete('http://localhost:3000/video/' + video.id)
            .map((response: Response) =>{
                response.json();
                this.videoIsRemoved.emit(this.videos.length);
            })
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json())
            });
    }

    // Fires videoIsClicked EventEmitter
    clickVideo(url: string){
        this.videoIsClicked.emit(url);
    }

}