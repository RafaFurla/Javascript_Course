function counting() {
    var begin = window.document.getElementById('start');
    var finish = window.document.getElementById('end');
    var steps = window.document.getElementById('step');
    var action = window.document.getElementById('action');
    if ((begin=='') || (finish =='')) {
        action.innerHTML = 'Impossible to count!';
    }
    else {
        steps = Number(steps.value);
        if (steps==null || steps==0) {
            steps = 1;
            window.alert('Invalid Step! Changing step to the value 1');
        }
        begin = Number(begin.value);
        finish = Number(finish.value);
        var result = window.document.getElementById('result'); 
        for (c=begin; c<=finish; c+=steps){
            action.innerHTML = 'Counting: ';
            result.innerHTML += `${c} &#x1F449`;
        }
    }
    result.innerHTML += `&#x1F3C1`;
}
