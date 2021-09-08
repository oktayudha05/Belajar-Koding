let nama = prompt(`siapa nama kamu?`);
        if (nama == false) {
            alert (`sombong lu`);
            nama = 'manusia sombong';
        }

        let dia = document.querySelector(".halimau");
        dia.innerHTML=`Selamat datang ${nama}`;
        dia.style.color = 'rgb(2, 120, 255)';

        var awe = function () {
            // let bukti = confirm(`apakah nama mu benar ${nama}?`);
            // if (bukti) {
            //     alert(`${nama} jelek`)
            // } else {
            //     alert(`udh boong jelek pula kauu`)
            // }
            Swal.fire({
                title: `apa bener nama mu ${nama}?`,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                cancelButtonText: 'Bukan!',
                confirmButtonText: 'yap!',
                allowOutsideClick: false,
                }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                    title: 'jelek!',
                    text: `${nama} jeleekk `,
                    icon:'success',
                    confirmButtonText: 'emang!',
                    allowOutsideClick: false,
                    confirmButtonColor: 'green'
                    }).then((result) => {
                        Swal.fire({
                            text: 'Gua gabuut.. pliss chat gw',
                            icon: 'info',
                            allowOutsideClick: false,
                            confirmButtonText: 'click ini'
                        }).then((result) => {
                            function redirect (){
                                location.href = 'https://api.whatsapp.com/send?phone=6285772951900&text=p%20rioo%20'
                            }redirect()
                        })
                    })
                
                    
                } else if (result.dismiss) {
                    Swal.fire({
                    title: 'Boong',
                    text: `puasa, kalo boong dosaa`,
                    icon: 'error',
                    confirmButtonText: 'istigfar!',
                    allowOutsideClick: false,
                    confirmButtonColor: 'red'
                    })
                }
                })
        }

        let btn = document.querySelector('.button');
        btn.addEventListener('click', awe);


        