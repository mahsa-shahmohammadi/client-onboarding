import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { SaveAddress } from '../actions/save-address.action';
import { SaveDetails } from '../actions/save-details.action';

export class OnboardingStateModel {
    sex: string;
    initial: string;
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    nationality: string;
    socialSecurityNumber: string;
    addressLine1: string;
    addressLine2: string;
    postalCode: string;
    city: string;
    country: string;
    mobile: string;
    email: string;
}

@State<OnboardingStateModel>({
    name: 'onboarding',
    defaults: {
        sex: '',
        initial: '',
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        nationality: '',
        socialSecurityNumber: '',
        addressLine1: '',
        addressLine2: '',
        postalCode: '',
        city: '',
        country: '',
        mobile: '',
        email: '',
    }
})
@Injectable()
export class OnboardingState {
    @Action(SaveDetails)
    saveDetails(ctx: StateContext<OnboardingStateModel>, action: SaveDetails) {
        const state = ctx.getState();
        ctx.setState({
            ...state,
            sex: action.model.sex,
            initial: action.model.initial,
            firstName: action.model.firstName,
            lastName: action.model.lastName,
            dateOfBirth: action.model.dateOfBirth,
            socialSecurityNumber: action.model.socialSecurityNumber,
            nationality: action.model.nationality,

            addressLine1: state.addressLine1,
            addressLine2: state.addressLine2,
            postalCode: state.postalCode,
            city: state.city,
            country: state.country,
            mobile: state.mobile,
            email: state.email


        });
    }

    @Action(SaveAddress)
    saveAddress(ctx: StateContext<OnboardingStateModel>, action: SaveAddress) {
        const state = ctx.getState();
        ctx.setState({
            ...state,
            sex: state.sex,
            initial: state.initial,
            firstName: state.firstName,
            lastName: state.lastName,
            dateOfBirth: state.dateOfBirth,
            socialSecurityNumber: state.socialSecurityNumber,
            nationality: state.nationality,

            addressLine1: action.model.addressLine1,
            addressLine2: action.model.addressLine2,
            postalCode: action.model.postalCode,
            city: action.model.city,
            country: action.model.country,
            mobile: action.model.mobile,
            email: action.model.email


        });
    }
}
