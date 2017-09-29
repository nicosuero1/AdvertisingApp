import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'

import { VideoComponent } from './video/video.component';
import { VideoService } from './video.service';
import { VideoRendererComponent } from "./renderer/video-renderer.component";
import { VideoInputComponent } from "./input/video-input.component";

@NgModule({
    declarations:[
        VideoComponent,
        VideoRendererComponent,
        VideoInputComponent
    ],
    providers:[VideoService],
    imports:[
        CommonModule,
        FormsModule
    ]
})
export class VideoModule{
    
}