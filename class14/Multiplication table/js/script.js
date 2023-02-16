function multiply() {
    let multiplier = window.document.getElementById('multiplier');
    let table = window.document.getElementById('table');
    if (multiplier.value.length == 0) {
        window.alert('You have to define a value to the number!');
    }
    else {
        table.innerHTML = '';
        multiplier = Number(multiplier.value);
        for (var c=0; c<=10; c+=1) {
            let value = window.document.createElement('option');
            value.value = `tab${c}`;
            value.text = `${multiplier} x ${c} = ${multiplier*c}`;
            table.appendChild(value);
        }
    }
}