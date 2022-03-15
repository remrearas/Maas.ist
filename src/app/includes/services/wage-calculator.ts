import {Parameter} from "../stores/parameters/parameters.model";

const formatla = (data: any) => {
  let newObject = {};
  for (const [key, value] of Object.entries(data)) {
    if (typeof value === 'number') {
      newObject[key] = Number(value.toFixed(2));
    } else {
      newObject[key] = value;
    }
  }
  return newObject;
};

export class WageCalculator {
  parametreler: Parameter;

  constructor(parametreler: Parameter) {
    this.parametreler = parametreler;
  }

  nettenBruteHesapla(istenenNet, donem) {
    let left = istenenNet;
    let right = 3 * istenenNet;
    let midddle = (left + right) / 2;
    let limit = 100;
    let hesaplananNet = null;
    for (let i=0; i<limit && Math.abs(hesaplananNet - istenenNet) > 0.0001; i++) {
      if (right < left) {
        return -1;
      }
      hesaplananNet = this.bruttenNeteHesapla(midddle, donem)['net'];
      if (hesaplananNet > istenenNet) {
        right = midddle;
      } else {
        left = midddle;
      }
      midddle = (right + left) / 2;
    }
    return this.bruttenNeteHesapla(midddle, donem);
  }

  bruttenNeteHesapla(brut, donem) {
    const damgaVergisi = (this.damgaVergisi(brut));
    const sgkIsci = this.sgkIsci(brut);
    const sgkIssizlikIsci = this.sgkIssizlikIsci(brut);
    const gelirVergisiMatrahi = this.gelirVergisiMatrahi(brut, sgkIsci, sgkIssizlikIsci);
    const damgaVergisiMatrahi = this.damgaVergisiMatrahi(gelirVergisiMatrahi, donem);
    const kumulatifGelirVergisiMatrahi = this.kumulatifGelirVergisiMatrahi(gelirVergisiMatrahi, damgaVergisiMatrahi);
    const toplamGelirVergisi = this.toplamGelirVergisi(kumulatifGelirVergisiMatrahi);
    const gelirVergisi = this.gelirVergisi(toplamGelirVergisi, gelirVergisiMatrahi, donem);
    const gelirVergisiIstisnasi = this.gelirVergisiIstisnasi(donem);
    const damgaVergisiIstisnasi = this.damgaVergisiIstisnasi();
    const sgkIsveren = this.sgkIsveren(brut);
    const sgkIssizlikIsveren = this.sgkIssizlikIsveren(brut);
    const tesvik = this.tesvik(brut);
    const maliyet = brut + sgkIsveren + sgkIssizlikIsveren - tesvik;
    const net = brut - sgkIsci - sgkIssizlikIsci - gelirVergisi - damgaVergisi + gelirVergisiIstisnasi + damgaVergisiIstisnasi;
    return formatla(
      {
        donem,
        brut,
        damgaVergisi,
        sgkIsci,
        sgkIssizlikIsci,
        gelirVergisiMatrahi,
        damgaVergisiMatrahi,
        kumulatifGelirVergisiMatrahi,
        toplamGelirVergisi,
        gelirVergisi,
        gelirVergisiIstisnasi,
        damgaVergisiIstisnasi,
        sgkIsveren,
        tesvik,
        maliyet,
        net
      }
    );

  }

  damgaVergisi(brut) {
    return brut * this.parametreler.damgaVergisiOrani;
  }

  sgkIsci(brut) {
    if (brut < this.parametreler.sgkTavan) {
      return brut * this.parametreler.sgkIsci;
    } else {
      return this.parametreler.sgkTavan * this.parametreler.sgkIsci;
    }
  }

  sgkIssizlikIsci(brut) {
    if (brut < this.parametreler.sgkTavan) {
      return brut * this.parametreler.sgkIssizlikIsci;
    } else {
      return this.parametreler.sgkTavan * this.parametreler.sgkIssizlikIsci;
    }
  }

  gelirVergisiMatrahi(brut, sgkIsci, sgkIssizlikIsci) {
    return brut - sgkIsci - sgkIssizlikIsci;
  }

  damgaVergisiMatrahi(gelirVergisiMatrahi, donem) {
    return gelirVergisiMatrahi * (donem - 1);
  }

  kumulatifGelirVergisiMatrahi(gelirVergisiMatrahi, damgaVergisiMatrahi) {
    return gelirVergisiMatrahi + damgaVergisiMatrahi;
  }

  toplamGelirVergisi(kumulatifGelirVergisiMatrahi) {
    for (const [indeks, vergiDilimi] of this.parametreler.vergiDilimleri.entries()) {
      if (kumulatifGelirVergisiMatrahi < vergiDilimi.tavan) {
        if (indeks === 0) {
          return vergiDilimi.toplam + (kumulatifGelirVergisiMatrahi - 0) * vergiDilimi.oran;
        } else {
          return vergiDilimi.toplam + (kumulatifGelirVergisiMatrahi - this.parametreler.vergiDilimleri[indeks -1].tavan) * vergiDilimi.oran;
        }
      }
    }
    return null;
  }

  gelirVergisi(toplamGelirVergisi, gelirVergisiMatrahi, donem) {
    if (donem > 1) {
      const suan = toplamGelirVergisi;
      const onceki_damgaVergisiMatrahi = this.damgaVergisiMatrahi(gelirVergisiMatrahi, donem - 1);
      const onceki = this.toplamGelirVergisi(
        this.kumulatifGelirVergisiMatrahi(onceki_damgaVergisiMatrahi, gelirVergisiMatrahi)
      );
      return suan - onceki;
    } else {
      return toplamGelirVergisi;
    }
  }

  gelirVergisiIstisnasi(donem) {
    return this.parametreler.gelirVergisiIstisnasi[donem - 1];
  }

  damgaVergisiIstisnasi() {
    return this.parametreler.asgariBrutMaas * this.parametreler.damgaVergisiOrani;
  }

  sgkIsveren(brut) {
    if (brut < this.parametreler.sgkTavan) {
      return brut * this.parametreler.sgkIsveren
    } else {
      return this.parametreler.sgkTavan * this.parametreler.sgkIsveren;
    }
  }

  sgkIssizlikIsveren(brut) {
    if (brut < this.parametreler.sgkTavan) {
      return brut * this.parametreler.sgkIssizlikIsveren
    } else {
      return this.parametreler.sgkTavan * this.parametreler.sgkIssizlikIsveren;
    }
  }

  tesvik(brut) {
    if (brut < this.parametreler.sgkTavan) {
      return brut * this.parametreler.tesvik
    } else {
      return this.parametreler.sgkTavan * this.parametreler.tesvik;
    }
  }
}
