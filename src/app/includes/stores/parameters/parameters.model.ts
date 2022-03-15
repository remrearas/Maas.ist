export interface VergiDilimleri {
  oran: number;
  tavan: number;
  toplam: number;
}

export interface Parameter {
  parametreYili: string;
  asgariBrutMaas: number;
  damgaVergisiOrani: number;
  gelirVergisiIstisnasi: number[];
  sgkIsci: number;
  sgkIssizlikIsci: number;
  sgkIssizlikIsveren: number;
  sgkIsveren: number;
  sgkTavan: number;
  tesvik: number;
  vergiDilimleri: VergiDilimleri[];
}
