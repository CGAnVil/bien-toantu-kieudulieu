function add(){
    let gt1 = document.getElementById('gt1').value;
    let gt2 = document.getElementById("gt2").value;
    let x = parseInt(gt1);
    let y = parseInt(gt2);
    let z = x + y;
    document.write('Ket qua la ' + z);
}
function sub(){
    let gt1 = document.getElementById('gt1').value;
    let gt2 = document.getElementById("gt2").value;
    let x = parseInt(gt1);
    let y = parseInt(gt2);
    let z = x - y;
    document.write('Ket qua la ' + z);
}
function multi(){
    let gt1 = document.getElementById('gt1').value;
    let gt2 = document.getElementById("gt2").value;
    let x = parseInt(gt1);
    let y = parseInt(gt2);
    let z = x * y;
    document.write('Ket qua la ' + z);
}
function div(){
    let gt1 = document.getElementById('gt1').value;
    let gt2 = document.getElementById("gt2").value;
    let x = parseInt(gt1);
    let y = parseInt(gt2);
    let z = x / y;
    document.write('Ket qua la ' + z);
}