import csv from 'csv-parser';
import fs from 'fs';

export const csvToObject = (dataFilePath: string) => {
    const dataArr: any[] = [];
    fs.createReadStream(dataFilePath)
        .pipe(csv())
        .on('data', (data) => dataArr.push(data))
        .on('end', () => {
        // console.log(dataArr)
        });
    return dataArr;
}

export const delay = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms) );
}