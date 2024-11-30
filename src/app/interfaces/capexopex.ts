export interface Capexopex {
    success: boolean;
    data: Array<{
      locationID: number;
      name: string;
      date: string;
      capexGRNValue: number;
      opexGRNValue: number;
      opexIssueValue: number;
      capexIsueeValue: number;
      siteStoreIssueValue: number;
      stieConsumption: number;
      opexStockValue: number;
      capexStockvalue: number;
    }>;
  }
