import { Component, ViewEncapsulation, ElementRef, ChangeDetectionStrategy } from '@angular/core';

const changeDetectionKey = 'mdDemoChangeDetection';

@Component({
  selector: 'home',
  template: `
    <p>Welcome to the Demo of Data Structure which written totally in TypeScript!</p>
    <p>Open the sidenav to choose a demo to continue.</p>
  `
})
export class Home { }

@Component({
  moduleId: module.id,
  selector: 'demo-app-on-push',
  template: '<ng-content></ng-content>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class DemoAppOnPush { }

@Component({
  selector: 'acds-root',
  templateUrl: './demoapp.component.html',
  styleUrls: ['./demoapp.component.scss'],
  host: {
    '[class.unicorn-dark-theme]': 'dark',
  },
  encapsulation: ViewEncapsulation.None,
})
export class DemoAppComponent {
  dark = false;
  changeDetectionStrategy: string;
  navItems = [
    { name: 'KMP Demo', route: 'kmp-demo' },
    { name: 'Sorting Algorithm Demo', route: 'sortalg-demo' },
    { name: 'List Demo', route: 'list-demo' },
    { name: 'Tree Demo', route: 'tree-demo' },
    { name: 'Graph Demo', route: 'graph-demo' },
  ];
  navUIItems = [
    { name: 'Baseline', route: 'baseline' },
    { name: 'Expansion Panel', route: 'expansion' },
    { name: 'Table', route: 'table' },
    { name: 'Dialog', route: 'dialog' },
    { name: 'Style', route: 'style' },
    { name: 'Typography', route: 'typography' },
    { name: 'Autocomplete', route: 'autocomplete' },
    { name: 'Datepicker', route: 'datepicker' },
    { name: 'Live Announcer', route: 'live-announcer' },
    { name: 'Overlay', route: 'overlay' },
    { name: 'Portal', route: 'portal' },
    { name: 'Tooltip', route: 'tooltip' },
  ];

  constructor(private _element: ElementRef) {
    // Some browsers will throw when trying to access localStorage in incognito.
    try {
      this.changeDetectionStrategy = window.localStorage.getItem(changeDetectionKey) || 'Default';
    } catch (error) {
      console.error(error);
    }
  }

  toggleFullscreen() {
    const elem = this._element.nativeElement.querySelector('.demo-content');
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullScreen) {
      elem.webkitRequestFullScreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.msRequestFullScreen) {
      elem.msRequestFullScreen();
    }
  }

  toggleChangeDetection() {
    try {
      this.changeDetectionStrategy = this.changeDetectionStrategy === 'Default' ? 'OnPush' : 'Default';
      window.localStorage.setItem(changeDetectionKey, this.changeDetectionStrategy);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  }
}
