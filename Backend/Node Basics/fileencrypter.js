// import fs from 'fs';
 
import { FileEncrypt } from 'node-file-encrypt';
 
let filePath = 'notes.txt'; // source file path
let encryptPath = '';
 
 // encrypt file
    // to FileEncrypt can be passed 4 Arguments
    // filePath     - the path of the file that should be encrypted
    // outPath      - this is optional  - the Path for the encrypted file
    // fileEnding   - this is optional  - a custom fileEnding like '.myFile', default is '.crypt'
    // cryptFileName - this is optional - boolean if the filename should be hashed, default is true
    let f = new FileEncrypt(filePath);
    f.openSourceFile();
    f.encrypt('my key');
    encryptPath = f.encryptFilePath;
    console.log("encrypt sync done");