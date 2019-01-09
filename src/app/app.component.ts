import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<ap-header></ap-header>
               <div class="flex-container">
                  <div class="flex-item"><ap-sidebar></ap-sidebar></div>
                  <div class="flex-item"><ap-module></ap-module></div>
               </div>
                  `,
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app works!';
}
