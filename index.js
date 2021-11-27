'use strict'

import { readFileSync, appendFile, readFile } from 'fs';  //Modulo file system de node permite interactuar con el sistema de archivos
import { join } from 'path';   //Pemite hacer operaciones con el sistema de archivos, con las rutas

const fileName1 = join(__dirname, 'data','Contact_Data.csv') //Unimos el directorio actual con (__dirname)
const fileName2 = join(__dirname, 'data','file.json');

function csv2json(fileName){
    const files = readFileSync(fileName, 'utf8')  //Por defecto si no pones nada devulve un bofer, utf8 trabajamos con el string
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
    innerNewData(records)
}

 
csv2json(fileName1)




////


const newData = [];
const innerNewData = (data)=>{
    const extract = data.forEach(el=>{
        let email = el.Email
        let name = `${el.FirstName} ${el.LastName}`
        let phone = el. MobilePhone
        let datos = [`Nombre: ${name} Email: ${email}  Phone: ${phone}`]
        console.log(newData)
        newData.push(datos)
    })

    if(fileName2.length === 0){
        saveOnFile(fileName2,newData)
    }else{
        console.log("The file has already been saved")
    }
}

function saveOnFile(fileName, outData) {
    readFiles(fileName,outData)
    newData.pop()
    console.log(newData)
}

const appenFiles = (fileName,data)=>{
    appendFile(fileName,data,(err,data) =>{
        if(err){
            console.log(err)
        }else{
            console.log("Save On File")
        }
    })
    
}

function readFiles(fileName, outData) {
    readFile(fileName, 'utf8', (err, data) => {
        if (err) {
            console.log(err);
        } else {
            let json = JSON.stringify(outData);
            data = json;
            appenFiles(fileName2, data);
        }
    });
}























