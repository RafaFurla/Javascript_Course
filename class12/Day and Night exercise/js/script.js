// getting system hour:
var date = new Date();
var hour = date.getHours();
var p = window.document.getElementById('timeinfo');
p.innerHTML = `Now is ${hour} hours`;
// changing website according to system hours. 
var image = window.document.getElementById('image');
if (hour >= 00 && hour < 12) {
    image.innerHTML = '<img src="images/Day.png" alt="Image of a Sunny day">';
    window.document.querySelector('body').style.backgroundColor = 'var(--day)';

}
else if (hour > 12 && hour < 18) {
    image.innerHTML = '<img src="images/Afternoon.png" alt="Image of the afternoon">';
    window.document.querySelector('body').style.backgroundColor = 'var(--afternoon)';
}
else {
    image.innerHTML = '<img src="images/Night.png" alt="Image of the Night">';
    window.document.querySelector('body').style.backgroundColor = 'var(--night)';
    window.document.querySelector('footer').style.color = 'white';
}