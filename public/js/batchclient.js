$(function () {
    console.log("script added");

    // $.get('/api/profiles', function (data) {
    //     console.log(data);
    // })

    var batch="aman";
    $.get('/api/profile', function (data) {
        data[[batch]] = '10';      
      })
})