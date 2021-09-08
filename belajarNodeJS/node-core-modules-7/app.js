// core modules
const fs = require('fs');
// import fs from 'fs';

// menuliskan string ke file (synchronus)
// try {
//     fs.writeFileSync('data/test.txt', 'hallo world secara synchronus!');
// } catch (error) {
//     console.log(error);
// }


//menuliskan string ke file (asynchronus)
// fs.writeFile('data/test.txt', 'hello world secara asynchronus', (e) => {console.log(e);});

//membaca isi file (synchronous)
// const data = fs.readFileSync('data/test.txt', 'utf-8');
// console.log(data);

//membaca isi file (asynchronous)


//!membuat pertanyaan di command

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

//membuat folder data jika belum ada
const dirPath = './data';
if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
}

//buat file contacts.json jika belum ada
const dataPath = './data/contacts.json';
if (!fs.existsSync(dataPath)) {
    fs.writeFileSync(dataPath, '[]', 'utf-8');
}

const tulisPertanyaan = (pertanyaan) => {
    return new Promise((resolve, reject) => {
        rl.question(pertanyaan, (nama) => {
            resolve(nama);
        });
    });
};


const main = async () => {
    const nama = await tulisPertanyaan('Masukan nama anda : ');
    const email = await tulisPertanyaan('Masukan email anda : ');
    const noHp = await tulisPertanyaan('Masukan nomor HP anda : ');

    const contact = { nama, email, noHp };
    const file = fs.readFileSync(`data/contacts.json`, 'utf-8');
    const contacts = JSON.parse(file);

    contacts.push(contact);
    
    fs.writeFileSync(`data/contacts.json`, JSON.stringify(contacts));
    console.log(`terimakasih ${nama} udah mau kenalan`)
    
    
    rl.close();
};

main();

