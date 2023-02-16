function counting() {
    var begin = window.document.getElementById('start');
    var finish = window.document.getElementById('end');
    var steps = Number(window.document.getElementById('step').value);
    var action = window.document.getElementById('action');
    if ((begin.value == '') || (finish.value =='') || (steps < 0)) {
        action.innerHTML = 'Impossible to count!';
    }
    else {
        if (steps==0 || steps==null) {
            steps = 1;
            window.alert('Invalid Step! Changing step to the value 1');
        }
        begin = Number(begin.value);
        finish = Number(finish.value);
        var result = window.document.getElementById('result'); 
        if (begin <= finish) {
            for (c=begin; c<=finish; c+=steps){
                action.innerHTML = 'Counting: ';
                result.innerHTML += `${c} &#x1F449`;
            }
        }
        else {
            for (c=begin; c>=finish; c-=steps){
                action.innerHTML = 'Counting: ';
                result.innerHTML += `${c} &#x1F449`;
            }
        } 
    }
    result.innerHTML += `&#x1F3C1`;
}
