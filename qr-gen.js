const QR = require('qrcode')
const EXCEL = require('xlsx') 

// the parameters for the QR .toFile prop
const opts = {
    width: 158,
    margin: 0,
    color: {
      dark:"#ee4639",
      light:"#ffffff"
    }
  }


function generateQR(fileName, link) {
    QR.toFile('images/'+ fileName +'.png', link, opts) 
}

// import the data and use the sheet called "ofi1"
const ws = EXCEL.readFile('OFIMATICA1.xlsx').Sheets["ofi1"]

// Convert the Excel data into an iterable JSON element
const MY_DATA = EXCEL.utils.sheet_to_json(ws)

// console.log(MY_DATA)

MY_DATA.forEach(function(a_row) {
    generateQR(a_row.Cedula, a_row.NombreParticipante)
})