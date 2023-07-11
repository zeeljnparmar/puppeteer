//const ExcelJS=require("exceljs");
//const workbook=new Excel.Workbook();
const URL='D:/VisualStudio/automation/logs.xlsx';
const { json } = require('body-parser');
const ExcelJS = require('exceljs');

async function insertExcel(data) {
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile(URL);
  const worksheet = workbook.getWorksheet('Sheet 2');
  //const worksheet = workbook.addWorksheet('Sheet 2');
  const rowCount = worksheet.rowCount;
  console.log(`Number of rows: ${rowCount}`);
  data.forEach((rowData) => {
    const newRow = worksheet.addRow(rowData);
    newRow.commit();
  });

  // Save the modified workbook
  await workbook.xlsx.writeFile(URL);
  console.log('New rows added successfully');
}

// // Define the column headers
// const headers = [
//   'Timestamp',
//   'Module',
//   'Sub_module',
//   'Input_Data',
//   'Desired_output',
//   'Received_output',
//   'Desired_Toast_notification',
//   'Received_Toast_Notification',
//   'Console_Error',
//   'Network_log',
//   'Message'
// ];
const Timestamp = new Date().toLocaleString();
//console.log(Timestamp);
// Define the data to be inserted
const data = [
  [Timestamp, 'Module 2', 'Sub_module 2', 'Input 2', 'Output 2', 'Received 2', 'Toast 2', 'Received Toast 2', 'Error 1', 'Network Log 1', 'Message 1'],
];

// // Call the function to insert data into Excel
// async function logData(data) {
//   const workbook = new ExcelJS.Workbook();

//   try {
//     await workbook.xlsx.readFile(URL); // Read the existing workbook or create a new one if it doesn't exist

//     let worksheet = workbook.getWorksheet('Sheet 2'); // Replace 'Sheet1' with your sheet name

//     if (!worksheet) {
//       worksheet = workbook.addWorksheet('Sheet 2'); // Add a new worksheet if 'Sheet1' doesn't exist
//     }

//     // Calculate the row number for the new row
//     const newRowNumber = worksheet.lastRow ? worksheet.lastRow.number + 1 : 1;

//     // Add the data to the new row
//     const newRow = worksheet.addRow(data);

//     // Save the modified workbook
//     await workbook.xlsx.writeFile(URL);
//     console.log('Data logged successfully');
//   } catch (error) {
//     console.error('Error occurred while logging data:', error);
//   }
// }

// // Usage example

// logData(data);

module.exports={
    insertExcel
}
