import { Audit } from './audit.interface';

export interface Company {

  id?: string;
  name: string;
  tag: string;
  description?: string;
  phoneNumber?: string;
  country: string;
  currency: string;
  email?: string;
  website?: string;
  logoUrl?: string;
  enabled: boolean;
  deleted: boolean;
  audit: Audit;

}


export interface Branch {

  id?: string;
  name: string;
  phoneNumber?: string;
  address: string;
  city: string;
  country: string;
  logoUrl?: string;
  companyId?: string;
  companyName?: string;
  enabled: boolean;
  deleted: boolean;
  audit: Audit;

}
