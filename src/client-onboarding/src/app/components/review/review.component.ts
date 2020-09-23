import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { OnboardingState, OnboardingStateModel } from 'src/app/stores/states/onboarding.state';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  @Select(OnboardingState) state$: Observable<OnboardingStateModel>;

  constructor() {
  }

  ngOnInit(): void {
  }
  onCancelButtonClick(): any { }

  onConfirmButtonClick(): any { }
}
