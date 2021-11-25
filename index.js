'use strict'

const fs = require('fs')  //Modulo file system de node permite interactuar con el sistema de archivos
const path = require('path')   //Pemite hacer operaciones con el sistema de archivos, con las rutas

const filName = path.join(__dirname, 'data','Contact_Data.csv') //Unimos el directorio actual con (__dirname)

function csv2json(fileName){
    const files = fs.readFileSync(fileName, 'utf8')  //Por defecto si no pones nada devulve un bofer, utf8 trabajamos con el string
    const records = []   //Almacenera los diferentes registros json en un array
    const lines = files.split('\n')     //Dividimos el archivo en lineas/// (\n) significa nuevas lineas
    const header = lines.shift().split(',')   //Remueve el primer elemento del arreglo y lo retornarás, obtiene la cadena de texto y la separa por comas y tenemos una array
   lines.forEach((lines)=>{
       const record = {}
       const values = lines.split(',')
       header.forEach((headers,i)=>{
           record[headers] = values[i]
       })
       records.push(record);

   })

  return records
}

const contacts = csv2json(filName)




////


const fileName = path.join(__dirname, 'data','file.json');



var obj = {
    table: []
 };

 obj.table.push({id: 1, square:2});

let json = JSON.stringify(obj)

 fs.readFile(fileName, 'utf8', (err, data) => {
         if (err) {
             console.log(err)
         } else {
             obj = JSON.parse(json) //now it an object
             obj.table.push({ id: 2, square: 3 }) //add some data
             json = JSON.stringify(obj) //convert it back to json
             data = json
             fs.appendFile(fileName, data, (err, data) => {
                 if (err) {
                     console.log(err)
                 } else {
                     console.log("Save on file")
                 }
             })

         }
     });







