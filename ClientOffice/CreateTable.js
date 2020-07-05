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

function FillTheTable(number) {
    let table = document.getElementById("table");
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
                NewElement.setAttribute("onclick", `AddOrRemove(${j})`);
            }
            if (i == 'order') {
                NewElement = document.createElement('input');
                NewElement.setAttribute("type", "number");
                NewElement.setAttribute("name", "HowMany");
                NewElement.setAttribute("min", "0");
                NewElement.setAttribute("max", "99");
                NewElement.setAttribute("value", "");
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
    }
}

FillTheTable(8);