function time() {
    var a = new Date().toLocaleTimeString();
    document.getElementById("time").innerHTML = a;
}
setInterval(time, 1000);