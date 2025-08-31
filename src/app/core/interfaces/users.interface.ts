import { Audit } from "./audit.interface";

export interface User {

  id?: string;
  name: string;
  lastname?: string;
  phoneNumber: string;
  email: string;
  photoUrl: string;
  provider: string;
  providerId?: string;
  enabled: boolean;
  deleted: boolean;
  audit: Audit;

}
