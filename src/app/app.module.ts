import { NgModule, APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { Store, StoreModule } from '@ngrx/store';
import { GanttModule } from './modules/gantt-chart/gantt-chart.module';
import { AppComponent } from './app.component';
import 'rxjs/Rx';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TreeModule } from 'angular-tree-component';
import { NgbModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { reducers } from './reducers/index';
import { environment } from 'environments/environment';

//****** Custom Modules ********

//*********** Data Integration ***********//

//********* Components ************ //

//*********** Services ***********//

@NgModule({
    imports: [BrowserModule, FormsModule, TreeModule, ReactiveFormsModule, StoreModule.forRoot(reducers),
        HttpClientModule, BrowserAnimationsModule,
GanttModule, NgbModule.forRoot()
    ],
    declarations: [AppComponent
        
    ],
    providers: [
     TranslateService, NgbModal
    ],

    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    bootstrap: [AppComponent]
})
export class AppModule { }
