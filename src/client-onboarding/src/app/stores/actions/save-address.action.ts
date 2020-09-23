export class SaveAddress {
    static readonly type = '[Onboarding] save Address';
    constructor(public model: SaveAddressModel) { }
}

export interface SaveAddressModel {
    addressLine1: string;
    addressLine2: string;
    postalCode: string;
    city: string;
    country: string;
    mobile: string;
    email: string;
}


