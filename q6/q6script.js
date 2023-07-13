function access() {
    let a = document.getElementsByTagName("h1")[0];
    a.style.color = "red";
    a.setAttribute("id", "heading");
    document.getElementsByTagName("h2")[1].innerHTML = "ID attribute as 'heading' is set!";
}