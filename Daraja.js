let son = + prompt('Son kiriting')

let daraja = + prompt('Darajasini Kiriting')

let son2

if (daraja == 0) {
    alert(son2 + 'ni darajasi 0 ga teng bolishi mumkin emas')
} else if (son <= 0) {
    alert('Bunday son kiritib bolmaydi')
} else {
    for (son2 = son; daraja > 1; daraja--) {
        son2 = son2 * son

    }
    alert(son2)
}