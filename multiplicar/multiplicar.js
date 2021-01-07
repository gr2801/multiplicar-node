const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {

    console.log(`=======tabla del ${ base} ======`.green);

    let data = ``;
    for (let i = 1; i <= limite; i++) {

        data += `${base} * ${ i} = ${ base * i}\n`;

    }
    console.log(data.red);
}

let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`la base ${ base} no es numerico`);
            return;
        }

        let data = ``;

        for (let i = 1; i <= limite; i++) {

            data += `${base} * ${ i} = ${ base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {

            if (err)
                reject(err)
            else
                resolve(`tabla-${base}.txt`);
        });

    });

}

module.exports = {
    crearArchivo,
    listarTabla
}