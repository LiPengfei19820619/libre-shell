import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Host } from '../../core/models';

@Component({
  selector: 'app-host-list',
  templateUrl: './host-list.component.html',
  styleUrls: ['./host-list.component.css']
})
export class HostListComponent implements OnInit {

  @Input() hosts: Host[];
  @Input() loading: boolean;
  @Input() error: any;

  @Output() refresh = new EventEmitter();
  @Output() add = new EventEmitter();

  expanded: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  onToggleExpanded(): void {
    this.expanded = !this.expanded;
  }

}
