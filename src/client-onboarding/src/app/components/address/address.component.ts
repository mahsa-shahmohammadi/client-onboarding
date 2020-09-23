import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { SaveAddress } from 'src/app/stores/actions/save-address.action';
import { OnboardingState, OnboardingStateModel } from 'src/app/stores/states/onboarding.state';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  public form: FormGroup;
  countrySource = ['Iran', 'England', 'Poland'];
  country: Array<string>;
  @Select(OnboardingState) onboardingState$: Observable<OnboardingStateModel>;

  constructor(
    public fb: FormBuilder,
    public router: Router,
    public route: ActivatedRoute,
    public store: Store) {
    this.loadCountry();
  }

  ngOnInit(): void {
    this.onboardingState$.subscribe(state => {
      this.initialForm(state);
    });
  }

  initialForm(onboarding: OnboardingStateModel): void {
    this.form = this.fb.group({
      addressLine1: new FormControl(onboarding.addressLine1, Validators.required),
      addressLine2: new FormControl(onboarding.addressLine2),
      postalCode: new FormControl(onboarding.postalCode, Validators.required),
      city: new FormControl(onboarding.city, Validators.required),
      country: new FormControl(onboarding.country, Validators.required),
      phoneNumber: new FormControl(onboarding.mobile),
      email: new FormControl(onboarding.email, Validators.email),
    });
  }

  loadCountry(): any {
    this.country = this.countrySource.slice();
  }

  countryChange(event): any {
  }

  onCancelButtonClick() {

  }

  onNextButtonClick() {
    this.store.dispatch(new SaveAddress({
      addressLine1: this.form.value.addressLine1,
      addressLine2: this.form.value.addressLine2,
      postalCode: this.form.value.postalCode,
      city: this.form.value.city,
      country: this.form.value.country,
      mobile: this.form.value.phoneNumber,
      email: this.form.value.email,

    }));
    this.router.navigate(['/index/review'], { relativeTo: this.route });
  }
}

