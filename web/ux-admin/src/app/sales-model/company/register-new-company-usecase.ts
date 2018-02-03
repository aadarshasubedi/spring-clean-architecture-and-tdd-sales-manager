export interface RegisterNewCompanyRequest {
  // @FormControlDef('name', 'Company Name')
  name: string;
  address: string;
  contactPerson: string;
  country: string;
  stateCode: string;
  telephone: string;
  email: string;
  beginningOfYear: number;
}

export interface RegisterNewCompanyResponseRepresentation {
  violations: any[];
}

export class RegisterNewCompanyUseCase {
  static API_PATH = '/companies/register';
}

export function FormControlDef(name: string, label: string) {
  // do something
}
