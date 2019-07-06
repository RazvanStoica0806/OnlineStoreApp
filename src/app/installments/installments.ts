export interface IInstallments {
  merchantName: string;
  totalAmount: {
    value: number;
    precision: number;
    currency: string;
  }
  installmentAmount: {
    value: number;
    precision: number;
    currency: string;
  }
  "totalInstallmentsNumber" : number;
  "instalmentsCurrentNo" : number;
  "purchaseDate" : string;
}

