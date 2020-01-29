import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Host } from '../models';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  static host_id: number = 1;
  static readonly HOSTS_KEY: string = "libre-shell-hosts";
  
  constructor() { }

  getHosts(): Observable<Host[]> {
    if (!window.localStorage) {
      alert("浏览器不支持localStorage!");
      return of([]);
    }
    let hostsInStorage: string = window.localStorage.getItem(SettingsService.HOSTS_KEY);
    let hosts: Host[] = JSON.parse(hostsInStorage);
    // let hosts: Host[] = [
    //   {
    //     id: 1,
    //     name: "aliyun",
    //     ipaddr: "111111",
    //     port: 22,
    //     description: "aliyun"
    //   }
    // ];
    return of(hosts);
  }

  addHost(host: Host): Observable<Host> {
    if (!window.localStorage) {
      alert("浏览器不支持localStorage!");
      return of(host);
    }

    let newHost: Host = host;
    newHost.id = SettingsService.host_id;

    SettingsService.host_id++;

    let hostsInStorage: string = window.localStorage.getItem(SettingsService.HOSTS_KEY);
    if (!hostsInStorage) {
      hostsInStorage = "[]";
    }
    let hosts: Host[] = JSON.parse(hostsInStorage);
    if (!hosts) {
      hosts = [];
    }

    hosts.push(newHost);

    window.localStorage.setItem(SettingsService.HOSTS_KEY, JSON.stringify(hosts));

    console.log("hosts:", hosts);
    
    return of(newHost);
  }
}
