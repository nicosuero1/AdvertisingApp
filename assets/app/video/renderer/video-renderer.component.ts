import { Component, OnInit, SecurityContext } from "@angular/core";
import { VideoService } from "../video.service";
import { Video } from "../video.model";
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
    selector: 'app-video-renderer',
    templateUrl: './video-renderer.component.html'
})

// Responsible of Render a video in the template
export class VideoRendererComponent implements OnInit{
    
    // trusted url to show in template
    videoSource: SafeResourceUrl;

    // used to show and hide frame
    videoFrameVisible = false;

    constructor(private videoService: VideoService, private sanitizer: DomSanitizer){}

    ngOnInit(){

        // Perform action when video is clicked
        this.videoService.videoIsClicked.subscribe(
            (url: string) => {
                this.videoFrameVisible = url !=='' && url !== undefined;
                this.videoSource = this.sanitizer.bypassSecurityTrustResourceUrl(url);
            }
        )

        // Subscribe to remove video
        this.videoService.videoIsRemoved.subscribe(
            (videosNumber) =>{
                this.videoFrameVisible = videosNumber !==0 && videosNumber !== undefined;
            }
        )
    }
}