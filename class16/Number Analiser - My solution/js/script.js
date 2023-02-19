function adding() {
    var resp = window.document.getElementById('response');
    var text_resp = '';
    resp.innerHTML = text_resp;
    var number = window.document.getElementById('number');
    if (number.value == '' || number.value < 1 || number.value > 100) {
        window.alert('Inválid number value! Insert a value between 1 and 100!');
    }
    else {
        var placeholder = window.document.getElementById('placeholder');
        if (placeholder) {
            placeholder.remove();
        }
        var table_element = window.document.createElement('option');
        table_element.value = number.value;
        table_element.text = `Value ${number.value} added`; 
        table.appendChild(table_element);
    }
}

function finish() {
    var table = window.document.getElementById('table');
    var resp = window.document.getElementById('response');
    var text_resp = '';
    var placeholder = window.document.getElementById('placeholder');
        if (placeholder) {
            window.alert('The table is empty! You need to insert at least one number on the table!');
        }
        else {
            sum = Number(0);
            for (let c = Number(0); c<table.options.length; c+=1) {
                if (c == 0) {
                    var max = table.options[0].value;
                    var min = table.options[0].value;
                }
                else {
                    if (Number(table.options[c].value) > max) {
                        max = table.options[c].value;
                    }
                    if (Number(table.options[c].value) < min) {
                        min = table.options[c].value;
                    }
                }
                sum += Number(table.options[c].value)        
            }
            average = sum / table.options.length
            text_resp += `The total numbers registered is ${table.options.length}<br>`;
            text_resp += `The biggest number is ${max}<br>`;
            text_resp += `The smallest number is ${min}<br>`;
            text_resp += `The sum of all numbers is ${sum}<br>`;
            text_resp += `The average of all numbers is ${average}`;
            resp.innerHTML = text_resp;
        }
}