/* Team A  start */

function chnge1(){
let change1 = document.getElementById("change1");
change1.innerHTML = prompt();
}

function horseh() {
    let numberr = document.getElementById("numberr");
    let num  = Number(numberr.innerHTML);
    numberr.innerHTML = num + 1;
    
    
}

function dropd() {
    let numberrs = document.getElementById("numberr");
    let nums = Number(numberrs.innerHTML);
    
    if (nums > 0){
        numberrs.innerHTML = nums - 1;
    }else {
        alert("0'dan aşağıya düşemezsiniz");
    }
}

/* Team A  End */

/* Team B Start */

function chnge2() {
    let change2 = document.getElementById("change2");
    let change22 = document.getElementById("change22");
    
    change2.innerHTML= prompt();


}

function horse2h() {
    let numberr2 = document.getElementById("numberr2");
    let num2 = Number(numberr2.innerHTML);
    numberr2.innerHTML = num2 + 1;
}

function dropd2() {
    let numberr2 = document.getElementById("numberr2")
    let nums2 = Number(numberr2.innerHTML);

    if ( nums2 > 0 ) {
        numberr2.innerHTML = nums2 - 1;
    } else {
        alert ("0 ' dan aşağıya düşemezsiniz")
    }
}












/* Team B End */