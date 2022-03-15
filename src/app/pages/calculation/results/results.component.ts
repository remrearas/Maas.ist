import {Component, OnInit} from '@angular/core';
import {ResultsService} from "../../../includes/stores/results/results.service";
import {CalculationResults, Results} from "../../../includes/stores/results/results.model";
import {get_period_name} from "../../../includes/helpers/period";
import {ExportHelper} from "../../../includes/helpers/export-helper";
import {Router} from "@angular/router";

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  data: Results;

  selectedData: CalculationResults;

  tableData: any[];
  columns: any[];
  exportColumns: any[];

  detailReportDialogVisible = false;
  detailedReportData: any;

  constructor(private resultsService: ResultsService,
              private router: Router) { }

  detailedReportsShow(rowData: any): void {
    this.detailReportDialogVisible = true;
    this.detailedReportData = {
      donem: rowData.donem,
      maas: [
        {
          key: "Net Ücret",
          value: rowData.net
        },
        {
          key: "Brüt Ücret",
          value: rowData.brut
        }
      ],
      kesintiler: [
        {
          key: 'SGK Primi',
          value: rowData.sgkIsci
        },
        {
          key: 'İşsizlik Sigortası',
          value: rowData.sgkIssizlikIsci
        },
        {
          key: 'Gelir Vergisi',
          value: rowData.gelirVergisi
        },
        {
          key: 'Damga Vergisi',
          value: rowData.damgaVergisi
        },
        {
          key: 'Toplam Kesintiler',
          value: rowData.sgkIsci + rowData.sgkIssizlikIsci + rowData.gelirVergisi + rowData.damgaVergisi
        }
      ],
      vergiler: [
        {
          key: "Gelir Vergisi Matrahı",
          value: rowData.gelirVergisiMatrahi
        },
        {
          key: "Kümülatif Gelir Vergisi Matrahı",
          value: rowData.kumulatifGelirVergisiMatrahi
        }
      ],
      maliyet: [
        {
          key: "İşveren Primi",
          value: rowData.sgkIsveren
        },
        {
          key: "Maliyet",
          value: rowData.maliyet
        }
      ]
    };
  }

  detailedReportsHide(): void {
    this.detailedReportData = undefined;
    this.detailReportDialogVisible = false;
  }

  exportJson(): void {
    const exportHelper = new ExportHelper();
    exportHelper.exportJSON(this.data.calculation_results, this.data._id);
  }

  newCalculation(): void {
    this.router.navigate(['calculation/form'])
      .then(
        () => {}
      );
  }

  ngOnInit(): void {
    this.columns = [
      { field: 'donem', header: 'Dönem'},
      { field: 'brut', header: 'Brüt'},
      { field: 'damgaVergisi', header: 'Damga Vergisi'},
      { field: 'sgkIsci', header: 'SGK İşçi'},
      { field: 'sgkIssizlikIsci', header: 'SGK İşsizlik İşçi'},
      { field: 'gelirVergisiMatrahi', header: 'Gelir Vergisi Matrahı'},
      { field: 'damgaVergisiMatrahi', header: 'Damga Vergisi Matrahı'},
      { field: 'kumulatifGelirVergisiMatrahi', header: 'Kümülatif Gelir Vergisi Matrahı'},
      { field: 'toplamGelirVergisi', header: 'Toplam Gelir Vergisi'},
      { field: 'gelirVergisi', header: 'Gelir Vergisi'},
      { field: 'gelirVergisiIstisnasi', header: 'Gelir Vergisi İstisnası'},
      { field: 'damgaVergisiIstisnasi', header: 'Damga Vergisi İstisnası'},
      { field: 'sgkIsveren', header: 'SGK İşveren'},
      { field: 'tesvik', header: 'Teşvik'},
      { field: 'maliyet', header: 'Maliyet'},
      { field: 'net', header: 'Net'}
    ]
    this.data = this.resultsService.getActiveResults();
    this.tableData = this.data.calculation_results.map(data => ({...data, donem: get_period_name(data.donem - 1)}));
    this.exportColumns = this.columns.map(col => ({title: col.field, dataKey: col.field}));
  }

  ngOnDestroy(): void {
    this.resultsService.removeActive();
  }

}
