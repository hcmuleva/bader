import XLSX from 'xlsx';

class ExcelToJSON {
	constructor(file) {
		this.file = file;
	}
	parseExcel() {
		return new Promise((resolve, reject) => {
			let reader = new FileReader();
			reader.onload = () => {
				var workbook = XLSX.read(reader.result, {
					type: 'binary'
				});
				workbook.SheetNames.forEach(function(sheetName) {
					var XL_row_object = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
					const json = XL_row_object;
					resolve(json);
				});
			};
			reader.onerror = reject;
			reader.readAsBinaryString(this.file);
		});
	}
}

export { ExcelToJSON };
