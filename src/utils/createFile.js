const fs = require('fs');
const path = require('path');

async function createFile(_db) {
    try {
        await fs.writeFile(path.resolve(__dirname, './../../../history.json'),  JSON.stringify(_db), function(error){
            if(error) throw error; // если возникла ошибка

            console.log("Запись файла завершена. Содержимое файла:");
        });
    } catch (e) {
        console.log('ERRR', e);
    }
}

module.exports = {
    createFile,
}
