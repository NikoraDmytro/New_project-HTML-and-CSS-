function AddOrRemove(number) {
    numbers = document.getElementsByName('HowMany');
    if (numbers[number].value != "") {
        numbers[number].value = "";
        document.getElementsByTagName("tr")[number + 1].style.background = "#FFFFFF";
    } else {
        numbers[number].value = "1";
        document.getElementsByTagName("tr")[number + 1].style.background = "#F1F9FF";
    }
    SumUp(number);
}


function RaiseOrLower(number) {
    numbers = document.getElementsByName('HowMany');
    checkboxes = document.getElementsByName('AddProduct');

    if (numbers[number].value <= "0") {
        numbers[number].value = "";
        checkboxes[number].checked = false;
        document.getElementsByTagName("tr")[number + 1].style.background = "#FFFFFF";
    } else {
        document.getElementsByTagName("tr")[number + 1].style.background = "#F1F9FF";
        checkboxes[number].checked = true;
        if (numbers[number].value > 99) {
            numbers[number].value = "99";
        }
    }
    SumUp(number);
}


function SumUp(number) {
    let Sum = document.getElementsByClassName("Sum");
    let Add = document.getElementsByName("HowMany");
    let Price = document.getElementsByClassName("PriceWithVAT");
    let Rezalt = Add[number].value * Price[number].textContent;
    console.log(Sum[number], " ", Rezalt);
    Sum[number].innerHTML = Rezalt.toFixed(2) + "грн";
    SumAll(Add, Price)
}

function SumAll(Add, Price) {
    let SumAll = 0;
    let Colov = 0;
    for (let number = 0; number < 8; number++) {
        if (Add[number].value != "") {
            console.log(Add[number].value);
            SumAll += Add[number].value * Price[number].textContent;
            Colov += Add[number].value * 1;
            console.log(SumAll, Colov);
        }
    }
    let div = document.getElementsByClassName("StatisticValues");

    div[0].children[0].innerHTML = Colov.toFixed(0);
    div[0].children[1].innerHTML = SumAll.toFixed(2) + "грн";

    let MakeOrderPanel = document.getElementsByClassName('MakeOrder')[0];
    if (Colov > 0) {
        MakeOrderPanel.style.visibility = "visible";
    } else {
        MakeOrderPanel.style.visibility = "hidden";
    }
}

function OpenOrCloseSideMenu() {
    let SideMenu = document.getElementsByClassName("SideMenu")[0];
    if (SideMenu.style.visibility != "hidden") {
        SideMenu.style.visibility = "hidden"
    } else {
        SideMenu.style.visibility = "visible"
    }
}


function ShowInfo(number) {
    Info = document.getElementsByClassName("UserInfo");
    if (Info[number].style.visibility == "hidden") {
        document.getElementsByClassName("SpecialButton")[number].style.background = "blue";
        Info[number].style.visibility = "visible";
    } else {
        document.getElementsByClassName("SpecialButton")[number].style.background = "rgba(144, 196, 239, 0.65)";
        Info[number].style.visibility = "hidden";
    }
}