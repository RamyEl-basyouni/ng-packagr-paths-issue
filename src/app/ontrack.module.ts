import { NgModule, CUSTOM_ELEMENTS_SCHEMA, APP_INITIALIZER, ModuleWithProviders } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { RouterModule } from '@angular/router';

import { Store, StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { TreeModule } from 'angular-tree-component';
import { NgbModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { reducers } from '../app/reducers/index';



@NgModule({
    imports: [
        RouterModule,
        FormsModule,
        // TreeModule,
        ReactiveFormsModule,
        StoreModule.forRoot(reducers),
        BrowserAnimationsModule
    ],
    declarations: [
        AppComponent,

    ],
    providers: [TranslateService, NgbModal
    ],
    exports: [
        AppComponent
    ],

})
export class OntrackModule {
    static forRoot(): ModuleWithProviders { return { ngModule: OntrackModule }; }
}

export {
    AppComponent
}