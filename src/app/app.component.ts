import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<ap-header></ap-header>
                  <ap-sidebar></ap-sidebar>
                  <ap-module></ap-module>`,
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app works!';
}
