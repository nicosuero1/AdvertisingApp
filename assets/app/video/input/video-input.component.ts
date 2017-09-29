import { Component, OnInit, SecurityContext } from "@angular/core";
import { VideoService } from "../video.service";
import { Video } from "../video.model";
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { NgForm } from "@angular/forms";

@Component({
    selector: 'app-video-input',
    templateUrl: './video-input.component.html'
})

// Responsible of template used to add a single url in db
export class VideoInputComponent{

    constructor(private videoService: VideoService, private sanitizer: DomSanitizer){}

    // Validates youtube url
    youtubeValidate(url) {
        var p = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
        return (url.match(p)) ? RegExp.$1 : false;
    }

    // Get id of youtube video url
    getVideoId(url) {
        var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        var match = url.match(regExp);

        if (match && match[2].length == 11) {
            return match[2];
        } else {
            return 'error';
        }
         
    }

    // Get form values and save on db
    onSubmit(form: NgForm){
        if(this.youtubeValidate(form.value.url)){
            var videoId = this.getVideoId(form.value.url);
            if(videoUrl !=='error') {
                var videoUrl = 'https://www.youtube.com/embed/' + videoId;
                var video = new Video(videoUrl,'');
                this.videoService.add(video)
                .subscribe(
                        data => {
                            form.resetForm();
                            
                        },
                        error => console.error(error)
                    )
            }
        }   
        else{
            console.log('validate error')
        }    
    }    
}