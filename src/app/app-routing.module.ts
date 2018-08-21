import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/*** Routes Modules ***/
// import { ItemLevelDashboardsRoutingModule } from './routes/item-level-dashboards-routing.module';
// import { AdministrationRoutingModule } from './routes/administration-routing.module';
// import { ManageInitiativesRoutingModule } from './routes/manage-initiatives-routing.module';
// import { ManageMeetingRoutingModule } from './routes/meeting-management-routing.module';
// import { MyDashboardRoutingModule } from './routes/my-dashboard-routing.module';
// import { StrategicDashboardRoutingModule } from './routes/strategic-dashboard-routing.module';
// import { StrategyItemRoutingModule } from './routes/strategy-item-routing.module';
// import { StrategyMapRoutingModule } from './routes/strategy-map-routing.module';
  
/*** App Module Components */
// import { AdministrationComponent } from './administration/administration.component';
// import { StrategyItemWithScoreListComponent } from './strategic-dashboard/strategy/list-plans.component';
// import { PendingInitiativesComponent } from './manage-initiatives/pending-initiatives/pending-initiatives.component';
// import { AuthGuard, TabsAuthentication } from './services/authentication-guard.service';
// import { DataIntegrationLoginComponent } from './data-integration/data-integration-login.component';
// import { LicenseExpiredComponent } from './license-management/license-expired/license-expired.component';

const appRoutes: Routes = [
    {
        path: '', redirectTo: 'overview-dashboard', pathMatch: 'full'
    }

];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes),
        // ItemLevelDashboardsRoutingModule,
        // AdministrationRoutingModule,
        // ManageInitiativesRoutingModule,
        // ManageMeetingRoutingModule,
        // MyDashboardRoutingModule,
        // StrategicDashboardRoutingModule,
        // StrategyItemRoutingModule,
        // StrategyMapRoutingModule
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }