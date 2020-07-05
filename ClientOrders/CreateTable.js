ColumnWidth = {
    Add: '5.5%',
    Barcode: '9.75%',
    VendorCode: '6.95%',
    tooltip: '13.18%',
    Help: '18.51%',
    BoxSize: '11%',
    RecommendedPrice: '11.2%',
    Left: '7.67%',
    PriceWithVAT: '9.66%',
    order: '9.93',
    Sum: "14.9%",
}

ProductInfo = {
    Add: 'checkbox',
    Barcode: '4820198240011',
    VendorCode: '300100',
    tooltip: 'Гра дитяча настільна "Базікало"',
    Help: 'Аналог гри "Вірю - не вірю". В середині 44 гральні картки.Рекомендований вік дитини 5+.',
    BoxSize: '9*12*3',
    RecommendedPrice: '29.34',
    Left: '<100шт',
    PriceWithVAT: '39.99',
    order: 'number',
    Sum: "",
}

Values = {
    "0": "12",
    "1": "10",
    "2": "13",
}

function FillTheTable(number, numberOfTable) {
    let table = document.getElementsByClassName("table")[numberOfTable];
    for (j = 0; j <= number; j++) {
        let New_tr = document.createElement("tr");
        for (i in ProductInfo) {
            let para = document.createElement("p");
            let text = document.createTextNode(ProductInfo[i]);
            para.appendChild(text);
            let NewElement = para;

            if (i == 'Add') {
                NewElement = document.createElement('input');
                NewElement.setAttribute("type", "checkbox");
                NewElement.setAttribute("name", "AddProduct");
                NewElement.setAttribute("readonly", "");
                NewElement.setAttribute("onclick", `AddOrRemove(${j})`);
            }
            if (i == 'order') {
                NewElement = document.createElement('input');
                NewElement.setAttribute("type", "number");
                NewElement.setAttribute("name", "HowMany");
                NewElement.setAttribute("min", "0");
                NewElement.setAttribute("max", "99");
                NewElement.setAttribute("value", `${Values[j]}`);
                NewElement.setAttribute("readonly", "");
                NewElement.setAttribute("oninput", `RaiseOrLower(${j})`);
            }

            if (i == 'tooltip') {
                let tooltip = document.createElement('div');

                let name = document.createTextNode(ProductInfo[i]);
                tooltip.appendChild(name);

                let HelpIcon = document.createElement('img');
                HelpIcon.setAttribute("src", "img/Info.png");
                HelpIcon.setAttribute("alt", "More info");
                HelpIcon.setAttribute("class", "HelpIcon");
                tooltip.appendChild(HelpIcon)
                NewElement = tooltip;

                TooltipContent = document.createElement('div');
                TooltipContent.setAttribute("class", "tooltipContent");

                let GameImg = document.createElement('img');
                GameImg.setAttribute("src", "img/game.png");
                GameImg.setAttribute("alt", "Image of game");
                GameImg.setAttribute("class", "GameImg");
                GameImg.style.float = "left"
                TooltipContent.appendChild(GameImg)

                let para = document.createElement("p")
                let text = document.createTextNode(ProductInfo['Help']);
                para.appendChild(text);
                TooltipContent.appendChild(para);

                tooltip.appendChild(TooltipContent);

                NewElement = tooltip;
            }
            if (i != 'Help') {
                NewElement.setAttribute("class", i);
                let New_td = document.createElement("td");
                New_td.style.width = ColumnWidth[i];
                New_td.appendChild(NewElement);
                New_tr.appendChild(New_td);
            }
        }
        table.appendChild(New_tr);
        SumUp(j,numberOfTable);
    }
}

function AddOrRemove(number) {
    numbers = document.getElementsByName('HowMany');
    if (numbers[number].value != "") {
        document.getElementsByTagName("tr")[number + 1].style.background = "#FFFFFF";
    } else {
        document.getElementsByTagName("tr")[number + 1].style.background = "#F1F9FF";
    }
}

function SumUp(number,numberOfTable) {
    let realNumber= number + numberOfTable*3; 
    let Sum = document.getElementsByClassName("Sum");
    let Add = document.getElementsByName("HowMany");
    let Price = document.getElementsByClassName("PriceWithVAT");
    let Rezalt = Add[realNumber].value * Price[realNumber].textContent;
    Sum[realNumber].innerHTML = Rezalt.toFixed(2) + "грн";
    if (realNumber==3 || realNumber==6){
       SumAll(Add,Sum,numberOfTable);
    }
}

function SumAll(Add, Sum,numberOfTable) {
    let SumAll = 0;
    let Colov = 0;
    for (let number = 0; number < 3; number++) {
        let realNumber= number + numberOfTable*3;
        console.log(Sum[realNumber]);
        if (Sum[realNumber].textContent > 0) {
            SumAll += Sum[realNumber].textContent;
            Colov += Add[realNumber].value * 1;
        }
    }

    let div= document.getElementsByClassName("StatisticValues")[numberOfTable];

    if (div!=undefined){
        div.children[0].innerHTML = Colov.toFixed(0);
        div.children[1].innerHTML = SumAll.toFixed(2) + "грн";
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


FillTheTable(2, 0);
FillTheTable(2, 1);

