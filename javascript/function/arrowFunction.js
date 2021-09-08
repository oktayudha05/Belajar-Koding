// konsep this pada aero function

//constructor function
// const Mahasiswa = function(){
//     this.nama = 'oktario';
//     this.umur = 15;
//     // console.log(this);
//     this.sayHello = function () {
//         console.log(`saya ${this.nama} saya berumur ${this.umur} tahun`)
//     }
// }

// const yudha = new Mahasiswa();


// arrow function
//! arrow function tidak punya konsep this
// const Mahasiswa = function(){
//     this.nama = 'oktario';
//     this.umur = 15;
//     // console.log(this);
//     this.sayHello = () => {
//         console.log(`saya ${this.nama} saya berumur ${this.umur} tahun`)
//     }

// }

// const yudha = new Mahasiswa();


// const Mahasiswa = function(){
//     this.nama = 'oktario';
//     this.umur = 15;
//     // console.log(this);
//     this.sayHello = function () {
//         console.log(`saya ${this.nama} saya berumur ${this.umur} tahun`)
//     }

//     setInterval(() => {
//         console.log(this.umur++);
//     }, 1000);

// }

// const yudha = new Mahasiswa();





const box = document.querySelector('.box');
box.addEventListener('click', function () {
    let satu = 'size';
    let dua = 'caption';

    if (this.classList.contains(satu) ) {
        [satu, dua] = [dua, satu];
    }

    this.classList.toggle(satu);
    setTimeout(() => {
        this.classList.toggle(dua);
    }, 600);
});