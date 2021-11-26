'use strict'

const fs = require('fs')  //Modulo file system de node permite interactuar con el sistema de archivos
const path = require('path')   //Pemite hacer operaciones con el sistema de archivos, con las rutas

const fileName1 = path.join(__dirname, 'data','Contact_Data.csv') //Unimos el directorio actual con (__dirname)
const fileName2 = path.join(__dirname, 'data','file.json');

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
   const newData = [];
     const extract = records.forEach(el=>{
         let email = el.Email
         let name = `${el.FirstName} ${el.LastName}`
         let phone = el. MobilePhone
         let datos = [`Nombre: ${name} Email: ${email}  Phone: ${phone}`]
         console.log(name)
         newData.push(datos)
     })
     console.log(newData)
     if(fileName2.length === 0){
         saveOnFile(fileName2,newData)
     }else{
         console.log("The file has already been saved")
     }
}
 csv2json(fileName1)




////

function saveOnFile(fileName, outData) {
    fs.readFile(fileName, 'utf8', (err, data) => {
        if (err) {
            console.log(err);
        } else{
            let json = JSON.stringify(outData); //convert it back to json
            data = json;
        fs.appendFile(fileName2, data, (err, data) => {
                    if (err) {
                        console.log(err);
    
                    } else {
                        console.log("Save on file");
                    }
                })
        }
    });

}
















