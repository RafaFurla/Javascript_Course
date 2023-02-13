function webchange() {
    // getting system date:
    var date = new Date();
    var system_date = date.getFullYear();
    var input_date = window.document.getElementById('birthday');
    // changing website according to the data inputed. 
    if (input_date.value.length == 0 || input_date.value > system_date) {
        window.alert('[Error] Verify the data and try again!');
    }
    else {
        var age = system_date - Number(input_date.value);
        var image = window.document.getElementById('image');
        var input_sex = window.document.getElementsByName('sex');
        var result = window.document.getElementById('result');
        var gender = '';
        var img = document.getElementById('photo');  // If it is the first time the user is creating IMG, the script will pass this line without any effect.
        // The !img check is a boolean expression that evaluates to true if the img variable is null or undefined, and to false otherwise.
        if (!img) {
            img = document.createElement('img');
            img.setAttribute('id', 'photo');
            image.appendChild(img);  // this command shows the image to user and put this image inside the variable image.
        }
        if (input_sex[0].checked) {
            gender = 'Male';
            if (age < 60) {
                img.setAttribute("src", "images/young-man.png");
            } else {
                img.setAttribute("src", "images/old-man.png");
            }
        } else if (input_sex[1].checked) {
            gender ='Female';
            if (age < 60) {
                img.setAttribute("src", "images/young-woman.png");
            } else {
                img.setAttribute("src", "images/old-woman.png");
            }
        }
        result.innerHTML = `${gender}, ${age} years detected!`;
    }
}