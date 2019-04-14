import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-flow-page',
  templateUrl: './flow-page.component.html',
  styleUrls: ['./flow-page.component.scss'],
  animations: [
    trigger('openClose', [
      transition(':enter', [
        style({ width: 0 }),
        animate('500ms ease-in', style({ width: '*' }))
      ]),
      transition(':leave', [
        style({ width: '*' }),
        animate('500ms ease-out', style({ width: 0 }))
      ])
    ]),
  ]
})
export class FlowPageComponent implements OnInit {

  public flowInAction = false;
  public windowState = true;

  constructor() { }

  ngOnInit() {
  }

  updateWindowState(event: boolean) {
    this.windowState = event;
  }

  updateFlow(state: boolean) {
    this.flowInAction = state;
  }
}
