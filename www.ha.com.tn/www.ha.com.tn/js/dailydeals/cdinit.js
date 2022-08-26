$j(document).ready(function() {
    var d = new Date();
    var t = d.getTime();
    var n = d.getTimezoneOffset();
    var curS = Math.round(t / 1000) - n * 60;
    var datatime = $j('.countdown').attr('data-time');
    console.log('curS : ' + curS);
    $j('.countdown').attr('current-time', curS);
    if ((datatime > 0) && (datatime > curS)) {
        $j('.countdown').kkcountdown({
            dayText: 'd ',
            daysText: 'd ',
            hoursText: 'h ',
            minutesText: 'm ',
            secondsText: 's ',
            displayZeroDays: false,
            callback: function() {
                $j.get("/lmagepurge.php?argv=--all&" + curS, function(data) {
                    window.location.reload();
                });

            },
            addClass: ''
        });
    } else {
        if (datatime > 0) {
            $j.get("/lmagepurge.php?argv=--all&" + curS);
        }
        //window.location.reload();
    }
});