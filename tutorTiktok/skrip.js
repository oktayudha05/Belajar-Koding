

const btnFollow = document.querySelector('.btn-follow');
const btnLanjut = document.querySelector('.btn-lanjut');
const btnLoading = document.querySelector('.btn-loading');
const alertNama = document.querySelector('.alert-nama');
const nama = document.querySelector('.nama');
const username = document.querySelector('.username');
const nomor = document.querySelector('.nomor');
const alertGagal = document.querySelector('.alert-gagal');


const scriptURL = 'https://script.google.com/macros/s/AKfycbxb6ZbNzaiapSKX5kvDneXMpsaAvMHAZ4wHoFsVpvebKo5qsI2h1mnOUwONAFn7ljNAJw/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    btnLoading.classList.remove('d-none');
    btnLanjut.classList.add('d-none');
    alertNama.classList.add('d-none');
    alertGagal.classList.add('d-none');
    if (nama.value!=="" && username.value!=="" && nomor.value!=="") {
        alertNama.classList.add('d-none');
        function pindahHalaman(){
            window.location.href='download.html';
        };
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {
                console.log('Success!', response)
                btnLoading.classList.add('d-none')
                btnLanjut.classList.remove('d-none')
                pindahHalaman()
            })
            .catch(error => {
                console.error('Error!', error.message)
                alertGagal.classList.remove('d-none')
                btnLoading.classList.add('d-none')
                btnLanjut.classList.remove('d-none')
            })
    }else{
        console.log('gagal');
        alertNama.classList.remove('d-none');
        alertGagal.classList.add('d-none');
        btnLoading.classList.add('d-none');
        btnLanjut.classList.remove('d-none');
    }
    
    
    
  })



btnFollow.addEventListener("click", function(e){
    e.preventDefault();
    rd()
    btnFollow.classList.toggle('d-none');
    btnLanjut.classList.toggle('d-none');
});

var rd = function(){
    Swal.fire({
        title: `Pilih mana?`,
        text: `kamu mau follow tiktok apa instagram?`,
        confirmButtonColor: 'rgb(97, 166, 196)',
        showCancelButton: true,
        cancelButtonColor: 'rgb(117, 198, 126)',
        cancelButtonText: 'Instagram!',
        confirmButtonText: 'Tiktok!',
        allowOutsideClick: false,
    }).then((result) => {
        if(result.isConfirmed){
            function tiktok(){
                 window.open("https://www.tiktok.com/@jrnight14", '_blank')
            }tiktok()
            
        }else if (result.dismiss){
            function instagram(){
                 window.open("https://www.instagram.com/oktayudha05/", '_blank')
            }instagram()
        }
    })
}

