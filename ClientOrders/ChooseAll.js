function ChooseAll(NumberOfTable){
    let AllChecboxes=Array.from(
    document
    .getElementsByTagName("table")[NumberOfTable]
    .getElementsByClassName("Add"));


console.log(AllChecboxes);

    let MainCheckbox=
    document
    .getElementsByClassName("AddAll")[NumberOfTable];

console.log(MainCheckbox.checked);

    if (MainCheckbox.checked==false) {
        MainCheckbox.value="0"
        AllChecboxes.forEach((checkbox) =>{
            checkbox.checked=false;
        });
    }else {
        MainCheckbox.value=`${AllChecboxes.length}`;
        AllChecboxes.forEach((checkbox) =>{
            checkbox.checked= true;
        });
    }
    console.log(MainCheckbox.value);
}


function ChooseOne(number,NumberOfTable) {
    let OneCheckbox=
        document
        .getElementsByTagName("table")[NumberOfTable]
        .getElementsByClassName("Add")[number];
    let MainCheckbox=
    document
    .getElementsByClassName("AddAll")[NumberOfTable];

    if (OneCheckbox.checked==false) {
        MainCheckbox.value-=1;
    }else{
        MainCheckbox.value=Number(MainCheckbox.value) +1;
    }
    console.log(MainCheckbox.value);
}
