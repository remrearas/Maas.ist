export interface CalculationResults {
  donem: number;
  brut: number;
  damgaVergisi: number;
  sgkIsci: number;
  sgkIssizlikIsci: number;
  gelirVergisiMatrahi: number;
  damgaVergisiMatrahi: number;
  kumulatifGelirVergisiMatrahi: number;
  toplamGelirVergisi: number;
  gelirVergisi: number;
  gelirVergisiIstisnasi: number;
  damgaVergisiIstisnasi: number;
  sgkIsveren: number;
  tesvik: number;
  maliyet: number;
  net: number;
}

export interface Results {
  _id: string;
  form_data: any;
  calculation_results: CalculationResults[];
}
