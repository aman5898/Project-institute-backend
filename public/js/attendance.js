$(function () {
    $.get('api/attendance', (data) => {
        for (var i = 0; i < data.length; i++) {

            $('#batchnames').append(`<option>${data[i]}</option>`);
        }
    })

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
    today = dd + '/' + mm + '/' + yyyy;

    $("#date").append(` ${today}`);

    $('#selectall').click(function () {
        $(".listbox").prop('checked', true);

    })

    $('#unselectall').click(function () {
        $(".listbox").prop('checked', false);

    })

    $("#rowstud").on("click", "button#markattend", function () {
        var listboxes = $(".listbox");
        var name = []
        // console.log(listboxes);
        for (var i = 0; i < listboxes.length; i++) {
            if (listboxes[i].checked == true)
                name.push(listboxes[i].name)
        }
        // let attendance=[];
        let attend={
            date:today,
            present:true
        }
        // console.log(name);
        $.get('api/attendance/studentlist', (data) => {
            console.log("````````````````");
            
             console.log(data);

             console.log("````````````````");
            var value = $('#batchnames :selected').text()
            for (var i = 0; i < data.length; i++) {
                // console.log(data[i].batchname);

                if (data[i].batchname == value) {
                    console.log("matched");
                    break;

                }
            }
            var currobjidx = i;
            var currobj = data[i];
            // console.log(currobj);
            var currobjlen = Object.keys(currobj).length;
            //console.log(currobjlen);
            var k = 0;
            for (var j = 0; j < currobjlen - 1; j++) {
                var currstudent=currobj[`student${j+1}`];
                var studentname = currstudent.studentname;
                if (name.length > k) {
                    if (studentname == name[k]) {
                        // currstudent['chutiya']="haan ho"
                        currstudent.attendance.push(attend);
                        var presentdays=currstudent.attendance[0].dayspresent
                        var intpresent=parseInt(presentdays);
                        currstudent.attendance[0].dayspresent=intpresent+1+"";
                        console.log(intpresent);
                        
                        k++;
                    }else{
                        currstudent.attendance.push({
                            date:today,
                            present:false
                        });
                    }
                }else{
                    currstudent.attendance.push({
                        date:today,
                        present:false
                    });
                }
                console.log(currstudent);
                //    if(currobj[student])               
            }
            console.log(data);
            $.post('api//attendance/attendancemark',{data},(d)=>{
                console.log(d);
                
            })
            

        })

        

        $(".tosel").append(`<div  class="markt mt-3">Attendance has been marked</div>`);
        alert('Attendance has been marked for '+today);


    })



    $('#batchsel').click(function () {
        $("#rowstud").empty();
        var value = $('#batchnames :selected').text()
        // console.log(value);
        $.get('api/attendance/studentlist', (data) => {
            for (var i = 0; i < data.length; i++) {
                console.log(data[i].batchname);

                if (data[i].batchname == value) {
                    console.log("matched");
                    break;

                }
            }
            var currobjidx = i;
            var currobj = data[i];
            console.log(currobj);


            var currobjlen = Object.keys(currobj).length;
            console.log(currobjlen);

            for (var i = 1; i < currobjlen; i++) {
                var x = currobj[`student${i}`].studentname;
                $("#rowstud").append(`<div class="col-4">
                <input class="listbox" type="checkbox" name="${x}" value="name">&nbsp;${x}
            </div>`)
                console.log();

            }
            $("#rowstud").append(`<button id="markattend" class="btn btn-success col-12 float-right mt-2">Mark Attendance</button>`)

        })


    })


})