import * as fs from 'fs';
import { parse } from 'csv-parse/sync';
import * as XLSX from 'xlsx';


export class DataProvider{
    static readJson(filePath: string){
        const raw =fs.readFileSync(filePath, 'utf8');
        return JSON.parse(raw);
    }

    static readcsv(filePath: string){
        const raw =fs.readFileSync(filePath);
        return parse(raw,{
            columns: true,
            skip_empty_lines: true
        });
    }

    static readExcel(filePath: string){
        const workbook =XLSX.readFile(filePath);
        const sheetname = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetname];
        return XLSX.utils.sheet_to_json(worksheet, {header:1});
    }

}