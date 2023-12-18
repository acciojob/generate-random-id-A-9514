function generate(){
    var length = document.getElementById("los").value;
    var result = random(length);
    document.getElementById("result").value = result;
}
function random(length){
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~";
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}
function calc(){
    var calc1 = document.getElementById("in-1").value;
    var calc2 = document.getElementById("in-2").value;
    var result = calc1 * calc2;
    document.getElementById("los").value = result;
    generate();
}