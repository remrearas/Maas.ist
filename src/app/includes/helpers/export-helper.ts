import * as FileSaver from 'file-saver';

export class ExportHelper {

  constructor() {}

  saveAsJsonFile(buffer: any, fileName: string): void {
    let JSON_TYPE = 'application/json';
    let JSON_EXTENSION = '.json';
    const data: Blob = new Blob([buffer], {
      type: JSON_TYPE
    });
    FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + JSON_EXTENSION);
  }

  exportJSON(data: any, file_name: string): void {
    this.saveAsJsonFile(JSON.stringify(data, null, 4), file_name);
  }

}
