function getOldValue(){
    return document.getElementById('oldValue').innerText;
}

function showOldValue(number){
    document.getElementById('oldValue').innerText = number;
}

function getResult(){
    return document.getElementById('outValue').innerText;
}

function showResult(number){
    document.getElementById('outValue').innerText = number;
    if(number==""){
        document.getElementById('outValue').innerText = number;
    }else{
        document.getElementById('outValue').innerText = format(number);
    }
}

function format(number){
    let n = Number(number);
    let value = n.toLocaleString('en');
    return value;
}
function revFormat(number){
    return Number(number.replace(/,/g,''))
}
// chức năng hiện số lên màn hình khi 'click'
let number = document.getElementsByClassName('number');
for(let  i=0; i<number.length; i++){
    number[i].addEventListener('click', function (){
        let result = revFormat(getResult())
        if(result != NaN){
            result = result + this.id;
            showResult(result);
        }
    })
}
// Chức năng nut "C" - xóa tất cả "CE" - xóa ký tự cuối cùng
let system = document.getElementsByClassName('system');
for( let i=0; i < system.length; i++){
    system[i].addEventListener('click', function (){
        if(this.id == "delete-all"){
            showResult('');
            showOldValue('');
        }else if(this.id == 'delete-one'){
            let result = revFormat(getResult()).toString();
            if(result){
                result = result.substr(0, result.length -1)
                showResult(result)
            }
        } else {
            let result = getResult();
            let oldValue = getOldValue();
            if(result !=''){
                result = revFormat(result);
                oldValue = oldValue + result;
                if(this.id == '='){
                    let endResult = eval(oldValue);
                    showResult(endResult)
                    showOldValue('')
                }else{
                    oldValue = oldValue + this.id;
                    showOldValue(oldValue)
                    showResult('')
                }
            }
        }

        })
}


