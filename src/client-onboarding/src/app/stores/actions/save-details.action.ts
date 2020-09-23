export class SaveDetails {
    static readonly type = '[Onboarding] save details';
    constructor(public model: SaveDetailsModel) { }

}


export interface SaveDetailsModel {
    sex: string;
    initial: string;
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    nationality: string;
    socialSecurityNumber: string;
}


