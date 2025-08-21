import { Audit } from "./audit.interface";

export interface Category {

  id?: string;
  name: string;
  description?: string;
  sku?: string;
  imageUrl?: string;
  branchId?: string;
  branchName?: string;
  enabled: boolean;
  deleted: boolean;
  audit: Audit;

}

export interface Subcategory {

  id?: string;
  name: string;
  description?: string;
  sku?: string;
  imageUrl?: string;
  branchId?: string;
  branchName?: string;
  enabled: boolean;
  deleted: boolean;
  audit: Audit;

}

export interface Product {

  id?: string;
  name: string;
  description?: string;
  sku?: string;
  imageUrl?: string;
  subcategoryId?: string;
  subcategoryName?: string;
  enabled: boolean;
  deleted: boolean;
  audit: Audit;

}

export interface Attribute {

  id?: string;
  name: string;
  description?: string;
  sku?: string;
  subcategoryId?: string;
  subcategoryName?: string;
  deleted: boolean;
  audit: Audit;

}

export interface Variant {

  id?: string;
  name: string;
  description?: string;
  sku?: string;
  imageUrl?: string;
  productId?: string;
  productName?: string;
  attributeId?: string;
  attributeName?: string;
  enabled: boolean;
  deleted: boolean;
  audit: Audit;

}
