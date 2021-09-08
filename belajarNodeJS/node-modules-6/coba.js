// console.log(`helo world`);

function cetakNama(nama) {
    return `halo nama saya ${nama}`;
}

const angka = 14;

const mahasiswa = {
    nama: 'dodi',
    umur:12,
    cetakMhs(){
        return `halo nama saya ${this.nama} dan saya ${this.umur} tahun.`;
    },
};

class Orang {
    constructor(){
        console.log('objek orang telah dibuat!!');
    }
}

module.exports = {cetakNama,angka,mahasiswa,Orang};

// module.exports.cetakNama = cetakNama;
// module.exports.angka = angka;
// module.exports.mahasiswa = mahasiswa;
// module.exports.Orang = Orang;