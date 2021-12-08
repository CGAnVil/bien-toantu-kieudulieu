function convert(){
    let input = document.getElementById('inputCurrency').value;
    let i = parseInt(input);
    let fc = document.getElementById('fromCurrency').value;
    let tc = document.getElementById('toCurrency').value;
    if(fc == 'vnd'){
        if(tc == 'usd'){
            x = (i/24000);
            document.write(i+' VND tuong duong ' +  x.toFixed(2) +' usd');
        }else {
            x = document.write('cung mot loai tien te');
        }
    }else {
        if(tc == 'vnd'){
            x = i*24000;
            document.write(i+' USD tuong duong ' +  x +' VND');
        }else {
            x = document.write('cung mot loai tien te');
        }
    }

}