import { Audit } from "./audit.interface";

export interface StockItems {

  id?: string;
  typeItem: string;
  itemId: string;
  quantity: number;
  reserved?: number;
  oversold?: number;
  deleted: boolean;
  audit: Audit;

}
