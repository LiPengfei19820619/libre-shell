import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Host } from '../../core/models';
import {
  RootStoreState,
  SettingsStoreActions,
  SettingsStoreSelectors
} from '../../core/store';

@Component({
  selector: 'app-hosts',
  templateUrl: './hosts.component.html',
  styleUrls: ['./hosts.component.css']
})
export class HostsComponent implements OnInit {
  hosts$: Observable<Host[]>;
  error$: Observable<string>;
  isLoading$: Observable<boolean>;

  constructor(private store$: Store<RootStoreState.RootState>) { }

  ngOnInit() {
    this.hosts$ = this.store$.select(
      SettingsStoreSelectors.selectSettingsHosts
    );

    this.error$ = this.store$.select(
      SettingsStoreSelectors.selectSettingsError
    );

    this.isLoading$ = this.store$.select(
      SettingsStoreSelectors.selectSettingsIsLoading
    );

    this.store$.dispatch(
      new SettingsStoreActions.LoadRequestAction()
    );
  }

  onRefresh() {
    this.store$.dispatch(
      new SettingsStoreActions.LoadRequestAction()
    );
  }

  onAdd(): void {
    let host: Host = {
      id: 0,
      name: "lpf-oms",
      ipaddr: "192.168.0.2",
      port: 22,
      description: "李鹏飞的网管服务器"
    };

    this.store$.dispatch(
      new SettingsStoreActions.AddHostRequestAction({ item: host })
    );
  }

}
