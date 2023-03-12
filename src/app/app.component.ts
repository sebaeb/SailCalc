import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router, RoutesRecognized } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SailingCalculator';

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

  subTitle = '';
  
  constructor(private breakpointObserver: BreakpointObserver, private router: Router) {
    // listen to page variable from router events
    router.events.subscribe(event => {
      if (event instanceof RoutesRecognized) {
        let route = event.state.root.firstChild;
        this.subTitle = route?.data?.['title'] || '';
      }
    });

  }
  
}
