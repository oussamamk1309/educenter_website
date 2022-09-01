$(document).ready(function(){
    var intro = $("#intro-desc").html()
    var interval = 75
    $("#intro-desc").html("")
    showText("#intro-desc", intro, 0, interval);
    setInterval(()=>{
        $("#intro-desc").html("")
        showText("#intro-desc", intro, 0, interval);
    }, (intro.length*interval)+2000)
});

function showText (target, message, index, interval) {
    if (index < message.length) {
        $(target).append(message[index++]);
        setTimeout(function () {
            showText(target, message, index, interval);
        }, interval);
    }
}