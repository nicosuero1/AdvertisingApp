import { Routes, RouterModule } from "@angular/router";

import { PageNotFoundComponent } from "./error/pagenotfound.component";

import { AdvertisingComponent } from "./advertising/advertising/advertising.component";
import { VideoComponent } from "./video/video/video.component";


const APP_ROUTES:Routes= [
    { path: 'advertises', component: AdvertisingComponent },
    { path: 'videos', component: VideoComponent },
    { path: '', redirectTo: '/advertises', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
