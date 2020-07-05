function Change(number) {
    document.getElementById("switch1").style.background = 'rgba(255, 255, 255, 0.5)'
    document.getElementById("switch2").style.background = 'rgba(255, 255, 255, 0.5)'
    document.getElementById("switch3").style.background = 'rgba(255, 255, 255, 0.5)'

    document.getElementById("imgFirst").style.visibility = 'hidden';
    document.getElementById("textFirst").style.visibility = 'hidden';

    document.getElementById("imgSecond").style.visibility = 'hidden';
    document.getElementById("textSecond").style.visibility = 'hidden';

    document.getElementById("imgThird").style.visibility = 'hidden';
    document.getElementById("textThird").style.visibility = 'hidden';


    if (number == 1) {
        document.getElementById("switch1").style.backgroundColor = 'white'

        document.getElementById("imgFirst").style.visibility = 'visible';
        document.getElementById("textFirst").style.visibility = 'visible';
    }
    else if (number == 2) {
        document.getElementById("switch2").style.backgroundColor = 'white'

        document.getElementById("imgSecond").style.visibility = 'visible';
        document.getElementById("textSecond").style.visibility = 'visible';
    }
    else {
        document.getElementById("switch3").style.backgroundColor = 'white'

        document.getElementById("imgThird").style.visibility = 'visible';
        document.getElementById("textThird").style.visibility = 'visible';
    }
}

i = 1;

Change(i);

setInterval(() => {
    i %= 3;
    i += 1;
    Change(i)
}, 5000);