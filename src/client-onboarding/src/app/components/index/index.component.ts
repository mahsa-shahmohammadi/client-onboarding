import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  public current = 0;
  public steps = [
    { label: 'Basic Details', icon: 'user', route: '' },
    { label: 'Address', icon: 'dictionary-add', route: 'address' },
    { label: 'Review', icon: 'preview', route: 'review' }
  ];

  constructor(public router: Router, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.updteCurrent();
  }

  updteCurrent(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        for (let index = 0; index < this.steps.length; index++) {
          const element = this.steps[index];
          if (event.url.endsWith(element.route)) {
            this.current = index;
          }
        }
      }
    });
  }

  stepClicked(event): void {
    const selectedRoute = this.getSelectedRoute();
    this.router.navigate([selectedRoute], { relativeTo: this.route });
  }

  getSelectedRoute(): string {
    return this.steps[this.current].route;
  }
}
