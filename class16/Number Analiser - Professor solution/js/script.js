var num = window.document.getElementById('fnum');
var list = window.document.getElementById('flist');
var res = window.document.getElementById('res');
var values = [];

function adding() {
    if(isNumber(num.value) && !inList(num.value, values)) {
        values.push(Number(num.value));
        let item = document.createElement('option');
        item.text = `Value ${num.value} added.`;
        list.appendChild(item)
        res.innerHTML = '';
    } else {
        window.alert('Invalid value or already imputed in the list.');
    }
    num.value = '';  /*This is to erase the number inside the Number box after press the Add button*/
    num.focus();  /*This is to put back the mouse clicking inside the Number box after press the add button*/
}

function isNumber(n){
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true;
    } else {
        return false;
    }
}

function inList(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true;
    } else {
        return false;
    }
}

function finish() {
    if (values.length == 0) {
        window.alert('Add values to the table.')
    } else {
        let tot = values.length;
        let max = values[0];
        let min = values[0];
        let sum = 0;
        let average = 0;
        for(let pos in values) {
            sum += values[pos];
            if (values[pos] > max){
                max = values[pos];
            }
            if (values[pos] < min) {
                min = values[pos];
            }
        }
        average = sum / tot;
        res.innerHTML = '';
        res.innerHTML += `<p>We have o total amount of ${tot} numbers inscript(s).</p>`;
        res.innerHTML += `<p>The biggest value imputed is ${max}.</p>`;
        res.innerHTML += `<p>The smallest value imputed is ${min}.</p>`;
        res.innerHTML += `<p>The of all imputed values is ${sum}.</p>`;
        res.innerHTML += `<p>The average of all imputed values is ${average}.</p>`;
    }
}