import { Component, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute, Routes, Router, Params, NavigationEnd } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState, getState } from './reducers/index';
import { PlatformLocation } from '@angular/common';
import { OrganizationUnitsNames } from './utilities/actions';
import { PMFObjectType } from "./utilities/enumerations";
import { NgbDatepickerConfig, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'ontrack-app',
    encapsulation: ViewEncapsulation.None,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})

export class AppComponent {
    cookieLanguage: string;
    tabs = [];
    bodyClass: string = 'main-nav-closed';
    showNotificationsIcon = false;
    navbarExpanded: boolean;
    licenseWarning: boolean;
    showNavigation: boolean;
    remainingDays: number;
    isloggedin: boolean = false;
    isEn;
    helpPageURL = "";

    constructor( private translate: TranslateService,
 private router: Router, private location: PlatformLocation,
        private viewContainerRef: ViewContainerRef, private store: Store<AppState>,
        private ngbDatepickerConfig: NgbDatepickerConfig) {

        //this.isEn = configService.getLanguage() == "en-US";

    }

    ngOnInit() {

    }


    toggleSubNav = (tab) => tab.class = tab.class ? null : 'opened';

    configureTabs(tabs, extraProps = null) {
        if (!extraProps)
            extraProps = { index: 0 };
        for (let tab of tabs) {
            tab.tabIndex = extraProps.index = extraProps.index + 1;
            if (tab.SubTabs && tab.SubTabs.length > 0)
                this.configureTabs(tab.SubTabs, extraProps);
        }
    }



}
