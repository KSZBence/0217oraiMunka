window.addEventListener("load", init);

function init(){
    console.log("Itt vagyok!");
    document.querySelector("button").addEventListener("click",udv);
    elagazas()
}

function udv(){
    alert("Hello.");
}

function elagazas(){
    var szam = 4;
    if (szam % 3 === 0 && szam % 2 === 0 ) {
        console.log("3-al és kettővel osztható");
    } else if (szam % 3 === 0) {
        console.log("3-al osztható");
    } else if (szam % 2 === 0) {
        console.log("kettővel osztható");
    }


    var nap;
    nap = Math.floor(Math.random()*7)+1;
    switch (nap) {
        case 1:
            console.log("Hétfő");
            break;
        case 2:
            console.log("Kedd");
            break;
        case 3:
            console.log("Szerda");
            break;
        case 4:
            console.log("Csütörtök");
            break;
        case 5:
            console.log("Péntek");
            break;
        case 6:
            console.log("Szombat");
            break;
        case 7:
            console.log("Vasárnap");
            break;
        default:
            console.log("Nincs ilyen nap.");
            break;
    }

}

function ciklusok() {
    let index = 0;
    while (index < 10) {
        var szam = Math.floor(Math.random()*(100-60+1)+60);
        console.log(szam);
        index++;
    }
    var szam;
    do {
        szam = Math.floor(Math.random()*(10+20+1)-20)
        console.log(szam);
    } while (szam < 0);
}