import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ModuleService } from './module.service';
import { ApHeaderComponent } from './ap-header/ap-header.component';
import { ApSidebarComponent } from './ap-sidebar/ap-sidebar.component';
import { ApModuleComponent } from './ap-module/ap-module.component';

@NgModule({
    declarations: [
        AppComponent,
        ApHeaderComponent,
        ApSidebarComponent,
        ApModuleComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [
        ModuleService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
