let popup1 = document.getElementById("popup1");
let popup2 = document.getElementById("popup2");
let popup3 = document.getElementById("popup3");
let popup4 = document.getElementById("popup4");

function openPopup(num){

    switch (num) {
        case 1:
            popup1.classList.add("open-popup");
            break;
        case 2:
            popup2.classList.add("open-popup");
            break;
        case 3:
            popup3.classList.add("open-popup");
            break;
        case 4:
            popup4.classList.add("open-popup");
            break;
    }
}

function amountImput(num){

    let total = 0;

    cantProd1 = document.getElementById("cantProd1").value;
    cantProd2 = document.getElementById("cantProd2").value;
    cantProd3 = document.getElementById("cantProd3").value;
    cantProd4 = document.getElementById("cantProd4").value;

    switch (num) {
        case 1:
            total = cantProd1 * 11500;
            window.alert("Cantidad total a abonar: $" + total);
            popup1.classList.remove("open-popup");
            break;
        case 2:
            total = cantProd2 * 6300;
            window.alert("Cantidad total a abonar: $" + total);
            popup2.classList.remove("open-popup");
            break;
        case 3:
            total = cantProd3 * 5800;
            window.alert("Cantidad total a abonar: $" + total);
            popup3.classList.remove("open-popup");
            break;
        case 4:
            total = cantProd4 * 4100;
            window.alert("Cantidad total a abonar: $" + total);
            popup4.classList.remove("open-popup");
            break;
    }

    document.getElementById("cantProd1").value = '';
    document.getElementById("cantProd2").value = '';
    document.getElementById("cantProd3").value = '';
    document.getElementById("cantProd4").value = '';

}

function closePopup(num){
    switch (num) {
        case 1:
            popup1.classList.remove("open-popup");
            break;
        case 2:
            popup2.classList.remove("open-popup");
            break;
        case 3:
            popup3.classList.remove("open-popup");
            break;
        case 4:
            popup4.classList.remove("open-popup");
            break;
    }
}