var son = + prompt('Son kiriting' )

var daraja = + prompt('Darajasini Kiriting' )

var javob

if (daraja == 0) {
    alert(javob + 'ni darajasi 0 ga teng bolishi mumkin emas')
} else if (daraja < 0) {
    alert('Bunday son kiritib bolmaydi')
} else {
    for (javob = son ; daraja > 1 ; daraja--) {
        javob = javob * son
        
    }
    alert(javob)
}