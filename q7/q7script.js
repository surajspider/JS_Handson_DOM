let toggle = true;
function access() {

    let main = document.querySelector(".main");
    if (toggle) {
        main.style.flexDirection = "column";
        toggle = false;
    }
    else {
        main.style.flexDirection = "row";
        toggle = true;
    }
}