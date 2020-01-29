import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatToolbarModule, MatInputModule, MatTabsModule, MatIconModule, MatProgressBarModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { AngularSplitModule } from 'angular-split';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TerminalsContainerComponent } from './components/terminals-container/terminals-container.component';
import { RootStoreModule } from './core/store/store.module';
import { HostListComponent } from './components/host-list/host-list.component';
import { HostsComponent } from './containers/hosts/hosts.component';

@NgModule({
  declarations: [
    AppComponent,
    TerminalsContainerComponent,
    HostListComponent,
    HostsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatTabsModule,
    MatIconModule,
    MatProgressBarModule,
    FlexLayoutModule,
    AppRoutingModule,
    NzLayoutModule,
    NzIconModule,
    AngularSplitModule.forRoot(),
    RootStoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
