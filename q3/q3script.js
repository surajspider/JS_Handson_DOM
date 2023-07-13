function access2() {
    let a = document.querySelector(".box");
    a.innerHTML = "Element accessed using query selector!";
    a.style.backgroundColor = "green";
}
function access() {
    let a = document.getElementsByClassName("box")[0];
    a.innerHTML = "Element accessed using class Name";
    a.style.backgroundColor = "red";
}