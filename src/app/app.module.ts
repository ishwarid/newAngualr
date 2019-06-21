import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatTabsModule, MatFormFieldModule, MatSelectModule } from '@angular/material';
import { LoaderComponent } from './shared/loader/loader.component';
import { HeaderComponent } from './shared/header/header.component';
import { CardlayoutComponent } from './shared/cardlayout/cardlayout.component';
import { FunnellayoutComponent } from './shared/funnellayout/funnellayout.component';
import { NavlayoutComponent } from './shared/navlayout/navlayout.component';
import { TablelayoutComponent } from './shared/tablelayout/tablelayout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TopbarComponent } from './shared/topbar/topbar.component';
import { TopbarrightComponent } from './shared/topbarright/topbarright.component';

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    HeaderComponent,
    CardlayoutComponent,
    FunnellayoutComponent,
    NavlayoutComponent,
    TablelayoutComponent,
    DashboardComponent,
    TopbarComponent,
    TopbarrightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
