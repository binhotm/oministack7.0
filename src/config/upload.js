const multer = require('multer');
const path = require('path');

renameFile = function(filename){
    const name = filename.split('.');
    return name[0] + '_' + Date.now() + '.'+ name['1'];
}

module.exports = {
    storage : new multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'uploads'),
        filename: function (req, file, callback){
            console.log(file);
            callback(null, renameFile(file.originalname)); 
        }
    })
};