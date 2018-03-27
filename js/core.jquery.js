var numIntervals = 0;
var maxIntervals = 5;
var myInterval = null;

$(document).ready(function() {
    myInterval = window.setInterval(function () {
        numIntervals++;

        if(numIntervals >= maxIntervals) {
            window.clearInterval(myInterval);
        }

        $("#main").html(numIntervals);

    }, 2000)
});

