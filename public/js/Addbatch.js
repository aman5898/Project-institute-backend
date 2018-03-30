$(function () {
    var count = 2;
    $("#addmorebtn").click(function () {
        $("#studentrows").append(`<input type="text" name="student${count}" id="student${count}" class="form-control mt-3 studentnameinp" placeholder="Student Name">`);
        count++;
    })

    $('#donebtn').click(function(event){
     
        var batch={}
        console.log(count);
        
        for(var i=1;i<count;i++)
        {
            var inpvalue=$(`#student${i}`).val();
            let studnet={
                
            };
            var attend=[{'dayspresent':0}]
            studnet['studentname']=inpvalue;
            studnet['attendance']=attend;
            batch[`student${i}`]=studnet;
        }
       
        var batchname=$(`#batchname`).val();
        batch[`batchname`]=batchname;
        console.log(batch);

        $.post('/api/addbatch',
        {
            batch
        },
        (data)=>{
            // console.log(data);
        }

        
    )
   
    })


})