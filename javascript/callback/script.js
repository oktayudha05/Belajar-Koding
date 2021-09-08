//callback
//syncronus callback

function halo(nama){
    alert(`Halo, ${nama}`);
}

function tampilkanPesan(callback){
    const nama = prompt('masukan nama : ');
    callback(nama);
}

tampilkanPesan(halo);