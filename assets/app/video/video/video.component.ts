import { Component, OnInit, AfterViewInit } from "@angular/core";
import { VideoService } from "../video.service";
import { Video } from "../video.model";

@Component({
    selector: 'app-video',
    templateUrl: './video.component.html'
})

// Responsible of the module layout
// Main structure
export class VideoComponent implements OnInit {
    
    // array of videos to be showed
    videos: Video[];
    
    constructor(private videoService: VideoService){}

    ngOnInit(){

        // Subscribe to get service
        this.videoService.get().subscribe(
            ((videos: Video[]) =>{
                this.videos = videos;
                if(this.videos.length>0) {
                    this.videoService.clickVideo(this.videos[0].url);
                }
            })
        )
        
        // Subscribe to add new video
        this.videoService.videoIsAdded.subscribe(
            (video: Video) =>{
                this.videoService.clickVideo(video.url);
            }
        );
    }

    // Fires the EventEmitter on click event
    onUrlClick(url: string){
        this.videoService.clickVideo(url);
    }

    // Fires the EventEmitter on remove click event
    onRemoveClick(video: Video){
        this.videoService.remove(video).subscribe(
                ()=>{
                    if(this.videos.length>0) {
                        this.videoService.clickVideo(this.videos[0].url);
                    }
                }
            );
    }
}