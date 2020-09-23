import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { SaveDetails } from 'src/app/stores/actions/save-details.action';
import { OnboardingState, OnboardingStateModel } from 'src/app/stores/states/onboarding.state';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  public form: FormGroup;
  public sexSource: Array<string> = ['Female', 'male'];
  public sex: Array<string>;
  public value: Date = new Date();
  nationalitySource = ['Iran', 'Netherlands', 'Cnada', 'Malaysia'];
  nationality: Array<string>;
  @Select(OnboardingState) onboardingState$: Observable<OnboardingStateModel>;

  constructor(
    public fb: FormBuilder,
    public router: Router,
    public route: ActivatedRoute,
    public store: Store) {
    this.loadSex();
    this.loadNationality();
  }

  private loadSex(): any {
    this.sex = this.sexSource.slice();
  }

  loadNationality(): any {
    this.nationality = this.nationalitySource.slice();
  }

  ngOnInit(): void {
    this.onboardingState$.subscribe(state => {
      this.initialForm(state);
    });
  }

  initialForm(onboarding: OnboardingStateModel): void {
    this.form = this.fb.group({
      sex: new FormControl(onboarding.sex),
      initial: new FormControl(onboarding.initial),
      firstName: new FormControl(onboarding.firstName, Validators.required),
      lastName: new FormControl(onboarding.lastName, Validators.required),
      socialSecurityNumber: new FormControl(onboarding.socialSecurityNumber),
      dateOfBirth: new FormControl(onboarding.dateOfBirth),
      nationality: new FormControl(onboarding.nationality),
    });
  }

  sexChange(event): any {
  }

  nationalityChange(event): any {

  }

  onCancelButtonClick() {

  }

  onNextButtonClick(): void {
    this.store.dispatch(new SaveDetails({
      sex: this.form.value.sex,
      initial: this.form.value.initial,
      firstName: this.form.value.firstName,
      lastName: this.form.value.lastName,
      socialSecurityNumber: this.form.value.socialSecurityNumber,
      dateOfBirth: this.form.value.dateOfBirth,
      nationality: this.form.value.nationality
    }));
    this.router.navigate(['address'], { relativeTo: this.route });
  }

}
