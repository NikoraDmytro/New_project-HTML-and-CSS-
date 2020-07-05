Classification = {
    Name: "Название",
    Colov: "Количество",
    Sum: "Сумма заказа",
}

Width = {
    Name: "29%",
    Colov: "14.83%",
    Sum: "17.03%",
}

function Confirm() {
    let div = document.createElement("div");
    div.setAttribute("class", "ConfirmPanel");


    let ConfirmBox = document.createElement("div");
    ConfirmBox.setAttribute("class", "ConfirmBox");

    let Close = document.createElement("img");
    Close["src"] = "img/Close.png";
    Close.setAttribute("class", "Close");
    Close.setAttribute("onclick", "ClosePanel()");
    ConfirmBox.appendChild(Close);

    let Legend = document.createElement("h5")
    let text = document.createTextNode(" Вы уверены, что хотите отправить ваш заказ?")
    Legend.appendChild(text);
    Legend.setAttribute("class", "Legend");
    ConfirmBox.appendChild(Legend);

    let Table = CreateShortyTable();
    ConfirmBox.appendChild(Table);

    let Cancel = document.createElement("button");
    let Button_text = document.createElement("h5");
    Cancel.setAttribute("class", "ConfirmButton");
    text = document.createTextNode("Отменить");
    Cancel.setAttribute("onclick", "ClosePanel()")
    Button_text.appendChild(text);
    Cancel.appendChild(Button_text);


    let Order = document.createElement("button");
    Button_text = document.createElement("h5");
    text = document.createTextNode("Заказать");
    Order.setAttribute("class", "ConfirmButton");
    Order.setAttribute("onclick", "ClosePanel()")
    Button_text.appendChild(text);
    Order.appendChild(Button_text);

    ConfirmBox.appendChild(Cancel);
    ConfirmBox.appendChild(Order);

    div.appendChild(ConfirmBox);

    let Body = document.getElementsByTagName("body")[0];
    let FirstElement = document.getElementsByClassName("SideMenu")[0];

    Body.insertBefore(div, FirstElement);
}


function ClosePanel() {
    let Panel = document.getElementsByClassName("ConfirmPanel")[0];

    Panel.remove();
}

function CreateShortyTable() {
    let Sum = document.getElementsByClassName("Sum");
    let Add = document.getElementsByName("HowMany");

    let Table = document.createElement("table");
    let New_tr = document.createElement("tr");
    for (i in Classification) {
        let New_th = document.createElement("th");
        New_th.appendChild(document.createTextNode(Classification[i]));
        New_th.style.width = Width[i];
        New_tr.appendChild(New_th)
    }
    Table.appendChild(New_tr);
    for (let i = 0; i < 3; i++) {
        if (Add[i].value > 0) {
            New_tr = document.createElement("tr");
            let Td_1 = document.createElement("td");
            let Td_2 = document.createElement("td");
            let Td_3 = document.createElement("td");

            Td_1.appendChild(document.createTextNode('Гра дитяча настільна "Базікало"'));
            Td_2.appendChild(document.createTextNode(Add[i].value));
            Td_3.appendChild(document.createTextNode(Sum[i].textContent));

            New_tr.appendChild(Td_1);
            New_tr.appendChild(Td_2);
            New_tr.appendChild(Td_3);
            Table.appendChild(New_tr);
        }
    }
    let div = document.getElementsByClassName("StatisticValues");

    let Colov = div[0].children[0]
    let SumAll = div[0].children[1]

    New_tr = document.createElement("tr");
    New_tr.setAttribute("class", "Conclusion")

    let Td_1 = document.createElement("td");
    let Td_2 = document.createElement("td");
    let Td_3 = document.createElement("td");

    Td_1.appendChild(document.createTextNode("Всего"));
    Td_2.appendChild(document.createTextNode(Colov.textContent));
    Td_3.appendChild(document.createTextNode(SumAll.textContent));

    New_tr.appendChild(Td_1);
    New_tr.appendChild(Td_2);
    New_tr.appendChild(Td_3);

    Table.appendChild(New_tr);
    return Table;
}