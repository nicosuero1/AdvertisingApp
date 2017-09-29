import { Component } from "@angular/core";
import { AdvertisingService } from "../advertising.service";
import { Advertising } from "../advertising.model";

@Component({
    selector: 'app-advertise-input',
    templateUrl: './advertise-input.component.html'
})

// Responsible of input template. 
// Auxiliar component used to load advertisings
export class AdvertiseInputComponent {
    
    constructor(private advertisingService: AdvertisingService){}

    // Load 15 advertises in db
    onClick(){
        var advertises: Advertising[] =[];
        advertises = this.createAdvertises();
        
        advertises.forEach(
            (advertise: Advertising) => {
                this.advertisingService.add(advertise).subscribe();
            }
        )
        
    }
    
    // Save lorem ipsum advertises in db
    createAdvertises(){
        var advertises:Advertising[] =[];
        advertises.push(
            new Advertising('Lorem ipsum dolor sit amet',
            'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec in mollis urna, non aliquet eros. Aenean turpis neque, auctor ac finibus non, dignissim non ipsum. Vivamus suscipit pulvinar enim, eget pretium felis bibendum eget. Sed ac mi vestibulum, congue mauris convallis, interdum ipsum. Integer luctus tellus eget pharetra condimentum. Donec sit amet tristique velit. Integer arcu velit, vestibulum ac enim in, ultricies lobortis diam. Nulla tempus, metus id hendrerit rutrum, erat nibh blandit orci, aliquet dapibus odio justo iaculis erat. Maecenas quis dolor scelerisque, iaculis est eu, imperdiet erat. Nam lectus urna, ullamcorper quis faucibus a, aliquam vel augue. Curabitur nec urna ac diam vehicula pharetra quis non augue' + 
            'Sed consectetur massa lacus, id fringilla turpis laoreet ac. Maecenas tempor sit amet turpis sit amet consequat. Praesent auctor dolor at magna ullamcorper porttitor. Quisque accumsan ligula id neque pharetra mattis. Nullam dictum eget urna vitae posuere. Nunc non facilisis tellus. Phasellus nulla lectus, lobortis semper vestibulum egestas, auctor a dui. Pellentesque ut justo purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus pellentesque finibus felis. Integer congue rhoncus dapibus. Donec consequat eleifend odio vel gravida. In facilisis, erat quis fringilla venenatis, est nulla condimentum dolor, id ornare lectus odio ac odio.',
            'advertising_1.jpg')
        );

        advertises.push(
            new Advertising('Sed nec congue nisi. Ut.',
            'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec in mollis urna, non aliquet eros. Aenean turpis neque, auctor ac finibus non, dignissim non ipsum. Vivamus suscipit pulvinar enim, eget pretium felis bibendum eget. Sed ac mi vestibulum, congue mauris convallis, interdum ipsum. Integer luctus tellus eget pharetra condimentum. Donec sit amet tristique velit. Integer arcu velit, vestibulum ac enim in, ultricies lobortis diam. Nulla tempus, metus id hendrerit rutrum, erat nibh blandit orci, aliquet dapibus odio justo iaculis erat. Maecenas quis dolor scelerisque, iaculis est eu, imperdiet erat. Nam lectus urna, ullamcorper quis faucibus a, aliquam vel augue. Curabitur nec urna ac diam vehicula pharetra quis non augue' + 
            'Sed consectetur massa lacus, id fringilla turpis laoreet ac. Maecenas tempor sit amet turpis sit amet consequat. Praesent auctor dolor at magna ullamcorper porttitor. Quisque accumsan ligula id neque pharetra mattis. Nullam dictum eget urna vitae posuere. Nunc non facilisis tellus. Phasellus nulla lectus, lobortis semper vestibulum egestas, auctor a dui. Pellentesque ut justo purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus pellentesque finibus felis. Integer congue rhoncus dapibus. Donec consequat eleifend odio vel gravida. In facilisis, erat quis fringilla venenatis, est nulla condimentum dolor, id ornare lectus odio ac odio.',
            'advertising_10.jpg')
        );

        advertises.push(
            new Advertising('Fusce varius mattis lorem, in',
            'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec in mollis urna, non aliquet eros. Aenean turpis neque, auctor ac finibus non, dignissim non ipsum. Vivamus suscipit pulvinar enim, eget pretium felis bibendum eget. Sed ac mi vestibulum, congue mauris convallis, interdum ipsum. Integer luctus tellus eget pharetra condimentum. Donec sit amet tristique velit. Integer arcu velit, vestibulum ac enim in, ultricies lobortis diam. Nulla tempus, metus id hendrerit rutrum, erat nibh blandit orci, aliquet dapibus odio justo iaculis erat. Maecenas quis dolor scelerisque, iaculis est eu, imperdiet erat. Nam lectus urna, ullamcorper quis faucibus a, aliquam vel augue. Curabitur nec urna ac diam vehicula pharetra quis non augue' + 
            'Sed consectetur massa lacus, id fringilla turpis laoreet ac. Maecenas tempor sit amet turpis sit amet consequat. Praesent auctor dolor at magna ullamcorper porttitor. Quisque accumsan ligula id neque pharetra mattis. Nullam dictum eget urna vitae posuere. Nunc non facilisis tellus. Phasellus nulla lectus, lobortis semper vestibulum egestas, auctor a dui. Pellentesque ut justo purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus pellentesque finibus felis. Integer congue rhoncus dapibus. Donec consequat eleifend odio vel gravida. In facilisis, erat quis fringilla venenatis, est nulla condimentum dolor, id ornare lectus odio ac odio.',
            'advertising_8.jpg')
        );

        advertises.push(
            new Advertising('Mauris at justo elit. Proin',
            'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec in mollis urna, non aliquet eros. Aenean turpis neque, auctor ac finibus non, dignissim non ipsum. Vivamus suscipit pulvinar enim, eget pretium felis bibendum eget. Sed ac mi vestibulum, congue mauris convallis, interdum ipsum. Integer luctus tellus eget pharetra condimentum. Donec sit amet tristique velit. Integer arcu velit, vestibulum ac enim in, ultricies lobortis diam. Nulla tempus, metus id hendrerit rutrum, erat nibh blandit orci, aliquet dapibus odio justo iaculis erat. Maecenas quis dolor scelerisque, iaculis est eu, imperdiet erat. Nam lectus urna, ullamcorper quis faucibus a, aliquam vel augue. Curabitur nec urna ac diam vehicula pharetra quis non augue' + 
            'Sed consectetur massa lacus, id fringilla turpis laoreet ac. Maecenas tempor sit amet turpis sit amet consequat. Praesent auctor dolor at magna ullamcorper porttitor. Quisque accumsan ligula id neque pharetra mattis. Nullam dictum eget urna vitae posuere. Nunc non facilisis tellus. Phasellus nulla lectus, lobortis semper vestibulum egestas, auctor a dui. Pellentesque ut justo purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus pellentesque finibus felis. Integer congue rhoncus dapibus. Donec consequat eleifend odio vel gravida. In facilisis, erat quis fringilla venenatis, est nulla condimentum dolor, id ornare lectus odio ac odio.',
            'advertising_3.jpg')
        );

        advertises.push(
            new Advertising('Sed in justo tincidunt, ornare',
            'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec in mollis urna, non aliquet eros. Aenean turpis neque, auctor ac finibus non, dignissim non ipsum. Vivamus suscipit pulvinar enim, eget pretium felis bibendum eget. Sed ac mi vestibulum, congue mauris convallis, interdum ipsum. Integer luctus tellus eget pharetra condimentum. Donec sit amet tristique velit. Integer arcu velit, vestibulum ac enim in, ultricies lobortis diam. Nulla tempus, metus id hendrerit rutrum, erat nibh blandit orci, aliquet dapibus odio justo iaculis erat. Maecenas quis dolor scelerisque, iaculis est eu, imperdiet erat. Nam lectus urna, ullamcorper quis faucibus a, aliquam vel augue. Curabitur nec urna ac diam vehicula pharetra quis non augue' + 
            'Sed consectetur massa lacus, id fringilla turpis laoreet ac. Maecenas tempor sit amet turpis sit amet consequat. Praesent auctor dolor at magna ullamcorper porttitor. Quisque accumsan ligula id neque pharetra mattis. Nullam dictum eget urna vitae posuere. Nunc non facilisis tellus. Phasellus nulla lectus, lobortis semper vestibulum egestas, auctor a dui. Pellentesque ut justo purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus pellentesque finibus felis. Integer congue rhoncus dapibus. Donec consequat eleifend odio vel gravida. In facilisis, erat quis fringilla venenatis, est nulla condimentum dolor, id ornare lectus odio ac odio.',
            'advertising_4.jpg')
        );

        advertises.push(
            new Advertising('Nam sollicitudin malesuada purus, a',
            'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec in mollis urna, non aliquet eros. Aenean turpis neque, auctor ac finibus non, dignissim non ipsum. Vivamus suscipit pulvinar enim, eget pretium felis bibendum eget. Sed ac mi vestibulum, congue mauris convallis, interdum ipsum. Integer luctus tellus eget pharetra condimentum. Donec sit amet tristique velit. Integer arcu velit, vestibulum ac enim in, ultricies lobortis diam. Nulla tempus, metus id hendrerit rutrum, erat nibh blandit orci, aliquet dapibus odio justo iaculis erat. Maecenas quis dolor scelerisque, iaculis est eu, imperdiet erat. Nam lectus urna, ullamcorper quis faucibus a, aliquam vel augue. Curabitur nec urna ac diam vehicula pharetra quis non augue' + 
            'Sed consectetur massa lacus, id fringilla turpis laoreet ac. Maecenas tempor sit amet turpis sit amet consequat. Praesent auctor dolor at magna ullamcorper porttitor. Quisque accumsan ligula id neque pharetra mattis. Nullam dictum eget urna vitae posuere. Nunc non facilisis tellus. Phasellus nulla lectus, lobortis semper vestibulum egestas, auctor a dui. Pellentesque ut justo purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus pellentesque finibus felis. Integer congue rhoncus dapibus. Donec consequat eleifend odio vel gravida. In facilisis, erat quis fringilla venenatis, est nulla condimentum dolor, id ornare lectus odio ac odio.',
            'advertising_9.jpg')
        );

        advertises.push(
            new Advertising('Morbi sed mauris pellentesque, imperdiet',
            'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec in mollis urna, non aliquet eros. Aenean turpis neque, auctor ac finibus non, dignissim non ipsum. Vivamus suscipit pulvinar enim, eget pretium felis bibendum eget. Sed ac mi vestibulum, congue mauris convallis, interdum ipsum. Integer luctus tellus eget pharetra condimentum. Donec sit amet tristique velit. Integer arcu velit, vestibulum ac enim in, ultricies lobortis diam. Nulla tempus, metus id hendrerit rutrum, erat nibh blandit orci, aliquet dapibus odio justo iaculis erat. Maecenas quis dolor scelerisque, iaculis est eu, imperdiet erat. Nam lectus urna, ullamcorper quis faucibus a, aliquam vel augue. Curabitur nec urna ac diam vehicula pharetra quis non augue' + 
            'Sed consectetur massa lacus, id fringilla turpis laoreet ac. Maecenas tempor sit amet turpis sit amet consequat. Praesent auctor dolor at magna ullamcorper porttitor. Quisque accumsan ligula id neque pharetra mattis. Nullam dictum eget urna vitae posuere. Nunc non facilisis tellus. Phasellus nulla lectus, lobortis semper vestibulum egestas, auctor a dui. Pellentesque ut justo purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus pellentesque finibus felis. Integer congue rhoncus dapibus. Donec consequat eleifend odio vel gravida. In facilisis, erat quis fringilla venenatis, est nulla condimentum dolor, id ornare lectus odio ac odio.',
            'advertising_4.jpg')
        );

        advertises.push(
            new Advertising('Curabitur viverra ornare fringilla',
            'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec in mollis urna, non aliquet eros. Aenean turpis neque, auctor ac finibus non, dignissim non ipsum. Vivamus suscipit pulvinar enim, eget pretium felis bibendum eget. Sed ac mi vestibulum, congue mauris convallis, interdum ipsum. Integer luctus tellus eget pharetra condimentum. Donec sit amet tristique velit. Integer arcu velit, vestibulum ac enim in, ultricies lobortis diam. Nulla tempus, metus id hendrerit rutrum, erat nibh blandit orci, aliquet dapibus odio justo iaculis erat. Maecenas quis dolor scelerisque, iaculis est eu, imperdiet erat. Nam lectus urna, ullamcorper quis faucibus a, aliquam vel augue. Curabitur nec urna ac diam vehicula pharetra quis non augue' + 
            'Sed consectetur massa lacus, id fringilla turpis laoreet ac. Maecenas tempor sit amet turpis sit amet consequat. Praesent auctor dolor at magna ullamcorper porttitor. Quisque accumsan ligula id neque pharetra mattis. Nullam dictum eget urna vitae posuere. Nunc non facilisis tellus. Phasellus nulla lectus, lobortis semper vestibulum egestas, auctor a dui. Pellentesque ut justo purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus pellentesque finibus felis. Integer congue rhoncus dapibus. Donec consequat eleifend odio vel gravida. In facilisis, erat quis fringilla venenatis, est nulla condimentum dolor, id ornare lectus odio ac odio.',
            'advertising_2.jpg')
        );

        advertises.push(
            new Advertising('Nulla laoreet ex eget mattis',
            'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec in mollis urna, non aliquet eros. Aenean turpis neque, auctor ac finibus non, dignissim non ipsum. Vivamus suscipit pulvinar enim, eget pretium felis bibendum eget. Sed ac mi vestibulum, congue mauris convallis, interdum ipsum. Integer luctus tellus eget pharetra condimentum. Donec sit amet tristique velit. Integer arcu velit, vestibulum ac enim in, ultricies lobortis diam. Nulla tempus, metus id hendrerit rutrum, erat nibh blandit orci, aliquet dapibus odio justo iaculis erat. Maecenas quis dolor scelerisque, iaculis est eu, imperdiet erat. Nam lectus urna, ullamcorper quis faucibus a, aliquam vel augue. Curabitur nec urna ac diam vehicula pharetra quis non augue' + 
            'Sed consectetur massa lacus, id fringilla turpis laoreet ac. Maecenas tempor sit amet turpis sit amet consequat. Praesent auctor dolor at magna ullamcorper porttitor. Quisque accumsan ligula id neque pharetra mattis. Nullam dictum eget urna vitae posuere. Nunc non facilisis tellus. Phasellus nulla lectus, lobortis semper vestibulum egestas, auctor a dui. Pellentesque ut justo purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus pellentesque finibus felis. Integer congue rhoncus dapibus. Donec consequat eleifend odio vel gravida. In facilisis, erat quis fringilla venenatis, est nulla condimentum dolor, id ornare lectus odio ac odio.',
            'advertising_6.jpg')
        );

        advertises.push(
            new Advertising('Aliquam vel turpis sapien. Duis',
            'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec in mollis urna, non aliquet eros. Aenean turpis neque, auctor ac finibus non, dignissim non ipsum. Vivamus suscipit pulvinar enim, eget pretium felis bibendum eget. Sed ac mi vestibulum, congue mauris convallis, interdum ipsum. Integer luctus tellus eget pharetra condimentum. Donec sit amet tristique velit. Integer arcu velit, vestibulum ac enim in, ultricies lobortis diam. Nulla tempus, metus id hendrerit rutrum, erat nibh blandit orci, aliquet dapibus odio justo iaculis erat. Maecenas quis dolor scelerisque, iaculis est eu, imperdiet erat. Nam lectus urna, ullamcorper quis faucibus a, aliquam vel augue. Curabitur nec urna ac diam vehicula pharetra quis non augue' + 
            'Sed consectetur massa lacus, id fringilla turpis laoreet ac. Maecenas tempor sit amet turpis sit amet consequat. Praesent auctor dolor at magna ullamcorper porttitor. Quisque accumsan ligula id neque pharetra mattis. Nullam dictum eget urna vitae posuere. Nunc non facilisis tellus. Phasellus nulla lectus, lobortis semper vestibulum egestas, auctor a dui. Pellentesque ut justo purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus pellentesque finibus felis. Integer congue rhoncus dapibus. Donec consequat eleifend odio vel gravida. In facilisis, erat quis fringilla venenatis, est nulla condimentum dolor, id ornare lectus odio ac odio.',
            'advertising_7.jpg')
        );

        advertises.push(
            new Advertising('Proin eu dui sit amet',
            'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec in mollis urna, non aliquet eros. Aenean turpis neque, auctor ac finibus non, dignissim non ipsum. Vivamus suscipit pulvinar enim, eget pretium felis bibendum eget. Sed ac mi vestibulum, congue mauris convallis, interdum ipsum. Integer luctus tellus eget pharetra condimentum. Donec sit amet tristique velit. Integer arcu velit, vestibulum ac enim in, ultricies lobortis diam. Nulla tempus, metus id hendrerit rutrum, erat nibh blandit orci, aliquet dapibus odio justo iaculis erat. Maecenas quis dolor scelerisque, iaculis est eu, imperdiet erat. Nam lectus urna, ullamcorper quis faucibus a, aliquam vel augue. Curabitur nec urna ac diam vehicula pharetra quis non augue' + 
            'Sed consectetur massa lacus, id fringilla turpis laoreet ac. Maecenas tempor sit amet turpis sit amet consequat. Praesent auctor dolor at magna ullamcorper porttitor. Quisque accumsan ligula id neque pharetra mattis. Nullam dictum eget urna vitae posuere. Nunc non facilisis tellus. Phasellus nulla lectus, lobortis semper vestibulum egestas, auctor a dui. Pellentesque ut justo purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus pellentesque finibus felis. Integer congue rhoncus dapibus. Donec consequat eleifend odio vel gravida. In facilisis, erat quis fringilla venenatis, est nulla condimentum dolor, id ornare lectus odio ac odio.',
            'advertising_1.jpg')
        );
        advertises.push(
            new Advertising('Etiam non felis vestibulum, aliquet',
            'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec in mollis urna, non aliquet eros. Aenean turpis neque, auctor ac finibus non, dignissim non ipsum. Vivamus suscipit pulvinar enim, eget pretium felis bibendum eget. Sed ac mi vestibulum, congue mauris convallis, interdum ipsum. Integer luctus tellus eget pharetra condimentum. Donec sit amet tristique velit. Integer arcu velit, vestibulum ac enim in, ultricies lobortis diam. Nulla tempus, metus id hendrerit rutrum, erat nibh blandit orci, aliquet dapibus odio justo iaculis erat. Maecenas quis dolor scelerisque, iaculis est eu, imperdiet erat. Nam lectus urna, ullamcorper quis faucibus a, aliquam vel augue. Curabitur nec urna ac diam vehicula pharetra quis non augue' + 
            'Sed consectetur massa lacus, id fringilla turpis laoreet ac. Maecenas tempor sit amet turpis sit amet consequat. Praesent auctor dolor at magna ullamcorper porttitor. Quisque accumsan ligula id neque pharetra mattis. Nullam dictum eget urna vitae posuere. Nunc non facilisis tellus. Phasellus nulla lectus, lobortis semper vestibulum egestas, auctor a dui. Pellentesque ut justo purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus pellentesque finibus felis. Integer congue rhoncus dapibus. Donec consequat eleifend odio vel gravida. In facilisis, erat quis fringilla venenatis, est nulla condimentum dolor, id ornare lectus odio ac odio.',
            'advertising_9.jpg')
        );

        advertises.push(
            new Advertising('Etiam leo urna, pulvinar sit',
            'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec in mollis urna, non aliquet eros. Aenean turpis neque, auctor ac finibus non, dignissim non ipsum. Vivamus suscipit pulvinar enim, eget pretium felis bibendum eget. Sed ac mi vestibulum, congue mauris convallis, interdum ipsum. Integer luctus tellus eget pharetra condimentum. Donec sit amet tristique velit. Integer arcu velit, vestibulum ac enim in, ultricies lobortis diam. Nulla tempus, metus id hendrerit rutrum, erat nibh blandit orci, aliquet dapibus odio justo iaculis erat. Maecenas quis dolor scelerisque, iaculis est eu, imperdiet erat. Nam lectus urna, ullamcorper quis faucibus a, aliquam vel augue. Curabitur nec urna ac diam vehicula pharetra quis non augue' + 
            'Sed consectetur massa lacus, id fringilla turpis laoreet ac. Maecenas tempor sit amet turpis sit amet consequat. Praesent auctor dolor at magna ullamcorper porttitor. Quisque accumsan ligula id neque pharetra mattis. Nullam dictum eget urna vitae posuere. Nunc non facilisis tellus. Phasellus nulla lectus, lobortis semper vestibulum egestas, auctor a dui. Pellentesque ut justo purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus pellentesque finibus felis. Integer congue rhoncus dapibus. Donec consequat eleifend odio vel gravida. In facilisis, erat quis fringilla venenatis, est nulla condimentum dolor, id ornare lectus odio ac odio.',
            'advertising_10.jpg')
        );

        advertises.push(
            new Advertising('Cras pharetra luctus nisi vel',
            'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec in mollis urna, non aliquet eros. Aenean turpis neque, auctor ac finibus non, dignissim non ipsum. Vivamus suscipit pulvinar enim, eget pretium felis bibendum eget. Sed ac mi vestibulum, congue mauris convallis, interdum ipsum. Integer luctus tellus eget pharetra condimentum. Donec sit amet tristique velit. Integer arcu velit, vestibulum ac enim in, ultricies lobortis diam. Nulla tempus, metus id hendrerit rutrum, erat nibh blandit orci, aliquet dapibus odio justo iaculis erat. Maecenas quis dolor scelerisque, iaculis est eu, imperdiet erat. Nam lectus urna, ullamcorper quis faucibus a, aliquam vel augue. Curabitur nec urna ac diam vehicula pharetra quis non augue' + 
            'Sed consectetur massa lacus, id fringilla turpis laoreet ac. Maecenas tempor sit amet turpis sit amet consequat. Praesent auctor dolor at magna ullamcorper porttitor. Quisque accumsan ligula id neque pharetra mattis. Nullam dictum eget urna vitae posuere. Nunc non facilisis tellus. Phasellus nulla lectus, lobortis semper vestibulum egestas, auctor a dui. Pellentesque ut justo purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus pellentesque finibus felis. Integer congue rhoncus dapibus. Donec consequat eleifend odio vel gravida. In facilisis, erat quis fringilla venenatis, est nulla condimentum dolor, id ornare lectus odio ac odio.',
            'advertising_3.jpg')
        );

        advertises.push(
            new Advertising('Etiam eu purus id urna',
            'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec in mollis urna, non aliquet eros. Aenean turpis neque, auctor ac finibus non, dignissim non ipsum. Vivamus suscipit pulvinar enim, eget pretium felis bibendum eget. Sed ac mi vestibulum, congue mauris convallis, interdum ipsum. Integer luctus tellus eget pharetra condimentum. Donec sit amet tristique velit. Integer arcu velit, vestibulum ac enim in, ultricies lobortis diam. Nulla tempus, metus id hendrerit rutrum, erat nibh blandit orci, aliquet dapibus odio justo iaculis erat. Maecenas quis dolor scelerisque, iaculis est eu, imperdiet erat. Nam lectus urna, ullamcorper quis faucibus a, aliquam vel augue. Curabitur nec urna ac diam vehicula pharetra quis non augue' + 
            'Sed consectetur massa lacus, id fringilla turpis laoreet ac. Maecenas tempor sit amet turpis sit amet consequat. Praesent auctor dolor at magna ullamcorper porttitor. Quisque accumsan ligula id neque pharetra mattis. Nullam dictum eget urna vitae posuere. Nunc non facilisis tellus. Phasellus nulla lectus, lobortis semper vestibulum egestas, auctor a dui. Pellentesque ut justo purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus pellentesque finibus felis. Integer congue rhoncus dapibus. Donec consequat eleifend odio vel gravida. In facilisis, erat quis fringilla venenatis, est nulla condimentum dolor, id ornare lectus odio ac odio.',
            'advertising_4.jpg')
        );

        return advertises;
    }
}