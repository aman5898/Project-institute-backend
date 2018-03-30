$(function () {

    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;

    var yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    today = yyyy + '-' + mm + '-' + dd;
    $('#date').val(today);




    function checkpresent(obj, dat) {
        console.log(obj);
        // console.log(dat) ;
        //    / console.log(obj);

        for (var i = 1; i < obj.length; i++) {

            if (obj[i].date == dat) {
                return obj[i].present;
            }

        }
    }
    $.get('api/attendance', (data) => {
        for (var i = 0; i < data.length; i++) {

            $('#batchnames').append(`<option>${data[i]}</option>`);
        }
    })

    $('#submit').click(function () {
        $('#rowstud').empty();
        var d = $('#date').val();
        let year = d.slice(0, 4);
        let month = d.slice(5, 7);
        let day = d.slice(8, 10);
        d = day + "/" + month + "/" + year;
        // console.log(d);
        var batchselected = $('#batchnames :selected').text()
        // console.log(batchselected);

        $.get('/api/attendance/studentlist', (data) => {
            // console.log(data);
            for (var i = 0; i < data.length; i++) {
                if (batchselected == data[i].batchname) {
                    // console.log(data[i]);
                    var objcurr = data[i];
                    //  console.log(objcurr);
                    var currobjlen = Object.keys(objcurr).length;
                    // console.log(currobjlen);
                    for (var j = 1; j <= currobjlen - 1; j++) {
                        var name = `student${j}`;
                        var studname = objcurr[name].studentname;
                        console.log(studname);
                        // console.log(objcurr[name].attendance);
                        var o=objcurr[name].attendance
                        var isPresent = checkpresent(o, d);
                        console.log(o[0].dayspresent);
                        var dayspresent=o[0].dayspresent;
                        if(isPresent == "true") {
                            console.log("done")
                            $('#rowstud').append(`<div class="col-4 mt-2">
                                ${studname} (${dayspresent}days) </div>`)
                         }
                    }

                }
            }
        })

    })
})