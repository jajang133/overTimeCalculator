function formatRupiah(rp) {
    rp.value    =   rp.value.replace(/\D/g, '')
                    .replace(/\B(?=(\d{3})+(?!\d))/g, '.')   
 }

function convert() {
    let jumlahGajiStr     = document.getElementById('gaji').value.replace(/\./g, '')
    let jumlahGaji        = parseInt(jumlahGajiStr || 0)
    let hariLembur        = (document.getElementById('hariLembur').value) 
    let jamLembur         = parseFloat(document.getElementById('jamLembur').value || 0)
   
    if (jumlahGaji <= 0 || jamLembur <= 0) {
        document.getElementById('result').innerText = 'Masukan Data!'
        return
    }

    let upahPerJam = jumlahGaji / 173
    let total = 0

    if (hariLembur == 'hariKerja'){
        if(jamLembur <= 1) total = 1.5 * upahPerJam * jamLembur
        else total = (1.5 * upahPerJam ) + ((jamLembur - 1) * 2 * upahPerJam)
    }

    else if (hariLembur == 'hariLibur') {
        if (jamLembur <= 8) total = 2 * upahPerJam * jamLembur
        else if (jamLembur == 9) total = (2 * 8 * upahPerJam) + (3 * upahPerJam)
        else if (jamLembur > 9) total = (2 * 8 * upahPerJam) + (3 * upahPerJam) + ((jamLembur - 9) * 4 * upahPerJam)
    }

    document.getElementById('result').innerText =
    'Upah Lembur Anda RP.' + Math.floor(total).toLocaleString('id-ID')
}

function musik() {
    document.getElementById('lagu').play()
}