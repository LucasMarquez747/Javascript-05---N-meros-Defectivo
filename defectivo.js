let numero = parseInt(prompt("NUMERO"));
function EsDefectivo (n){
    let suma = 0;

    for (let i = 0; i < n; i++){
        if (n % i == 0) {
            suma += i;
        }


    }   
    
    if (suma < n) {
        return true;
    }
}

for(let i = 1; i<= numero;i++ ){
    if (EsDefectivo(i)) {
        document.write(i + " es defectivo <br>")
    }else{
        document.write (i + " no es defectivo <br> ")
    }

}

