import { Audit } from "./audit.interface";

export interface Permission {

  id: string;
  code: string;
  description?: string;
  audit: Audit;

}

export interface Role {

  id: string;
  name: string;
  scope: string;
  scopeId?: string;
  isCustom: boolean;
  enabled: boolean;
  deleted: boolean;
  audit: Audit;

}


export interface RolePermission {

  id: string;
  roleId: string;
  permissionId: string;
  deleted: boolean;
  audit: Audit;

}


export interface UserRole {

  id: string;
  userId: string;
  roleId: string;
  deleted: boolean;
  audit: Audit;

}
